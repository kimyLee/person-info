import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme, Button, message, Drawer, Input } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import styles from './Info.less';
import client from './oss';
import axios from 'axios';

const Welcome: React.FC = () => {
  const [money, setMoney] = useState(0);
  const [isRecord, setIsRecord] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [finishTaskList, setFinishTaskList] = useState([]);
  const [recordList, setRecordList] = useState([]);

  const [inputTask, setInputTask] = useState('');
  const [inputReward, setInputReward] = useState(0);
  const [inputRecord, setInputRecord] = useState('');
  const [inputRecordCost, setInputRewardCost] = useState(0);

  const handleGetTaskList = useCallback(() => {
    console.log('handleGetTaskList');
    // 获取任务列表
    let url = 'https://kimmy-info.oss-cn-shenzhen.aliyuncs.com/info.json';

    return axios
      .get(url + '?t=' + Date.now())
      .then(function (response: any) {
        console.log(response, 'response');
        const res = response.data;

        if (Array.isArray(res.finishTaskList)) {
          setFinishTaskList(res.finishTaskList);
        }
        if (Array.isArray(res.taskList)) {
          setTaskList(res.taskList);
          console.log(taskList);
        }
        if (res.money) {
          setMoney(res.money - 0);
        }
        return response; // todo: 其他信息
      })
      .catch(function (error) {
        message.error('获取');
        console.log(error);
      });
  }, []);

  useEffect(() => {
    handleGetTaskList();
  }, []);

  const handleAddTask = () => {
    if (!inputReward || !inputTask) {
      return;
    }
    console.log('handleAddTask');
    // 添加任务
    const obj = {
      title: inputTask,
      reward: inputReward,
      createTime: Date.now(),
    };
    const arr: any = [...taskList]; // todo
    arr.push(obj);
    setTaskList(arr);
    const json = JSON.stringify({
      recordList,
      taskList: arr,
      finishTaskList,
      money,
    });

    const blob = new Blob([json]);
    // 上传的文件
    // 版本号和url的上传
    client
      .put('info.json', blob, { 'Content-Type': 'application/x-www-form-urlencoded' })
      .then((res: any) => {
        console.log(res);
        message.success('发布成功');
      })
      .catch(() => {
        message.error('发布失败');
      });
  };

  const handleRemoveTask = (createTime: any) => {
    console.log('handleRemoveTask');
    // 未完成时删除任务
    if (window.confirm('确认删除?')) {
      for (let i = 0; i < taskList.length; i++) {
        if (createTime === taskList[i].createTime) {
          const arr: any = [...taskList]; // todo
          arr.splice(i, 1);
          setTaskList(arr);
          break;
        }
      }

      const json = JSON.stringify({
        recordList,
        taskList,
        finishTaskList,
        money,
      });
      const blob = new Blob([json]);
      client
        .put('info.json', blob, { 'Content-Type': 'application/x-www-form-urlencoded' })
        .then((res: any) => {
          console.log(res);
          message.success('删除成功');
        })
        .catch(() => {
          message.error('发布失败');
        });
    }
  };
  const handleRebackTask = (task: any) => {
    // 撤销任务回未完成

    const arr: any = [...taskList]; // todo
    for (let i = 0; i < finishTaskList.length; i++) {
      if (
        task.createTime === finishTaskList[i].createTime &&
        task.title === finishTaskList[i].title
      ) {
        arr.splice(i, 1);
        setFinishTaskList(arr);
        break;
      }
    }
    const arr1: any = [...taskList]; // todo
    arr1.push(task);
    setTaskList(arr1);
    const json = JSON.stringify({
      recordList,
      taskList: arr1,
      finishTaskList: arr,
      money: money - task.reward,
    });
    const blob = new Blob([json]);
    client
      .put('info.json', blob, { 'Content-Type': 'application/x-www-form-urlencoded' })
      .then((res: any) => {
        console.log(res);
        message.success('撤销成功！');
        setMoney(money - task.reward);
      })
      .catch(() => {
        message.error('发布失败');
      });
  };

  const handleFinishTask = (task: any) => {
    // 完成任务
    const arr: any = [...taskList]; // todo
    for (let i = 0; i < taskList.length; i++) {
      if (task.createTime === taskList[i].createTime && task.title === taskList[i].title) {
        arr.splice(i, 1);
        break;
      }
    }
    setTaskList(arr);
    console.log(finishTaskList, 'finishTaskList');
    const arr1: any = [...finishTaskList]; // todo
    arr1.push(task);
    setFinishTaskList(arr1);
    const json = JSON.stringify({
      recordList,
      taskList: arr,
      finishTaskList: arr1,
      money: money - 0 + (task.reward - 0),
    });

    const blob = new Blob([json]);
    client
      .put('info.json', blob, { 'Content-Type': 'application/x-www-form-urlencoded' })
      .then((res: any) => {
        console.log(res);
        setMoney(money - 0 + (task.reward - 0));
        message.success('完成任务！');
      })
      .catch(() => {
        message.error('修改失败');
      });
  };

  const handleRebackRecord = (task: any) => {
    // 撤销任务回未完成

    const arr: any = [...recordList]; // todo
    for (let i = 0; i < recordList.length; i++) {
      if (task.createTime === recordList[i].createTime && task.title === recordList[i].title) {
        arr.splice(i, 1);
        setRecordList(arr);
        break;
      }
    }
    const json = JSON.stringify({
      recordList: arr,
      taskList,
      finishTaskList: arr,
      money: money - 0 + (task.cost - 0),
    });
    const blob = new Blob([json]);
    client
      .put('info.json', blob, { 'Content-Type': 'application/x-www-form-urlencoded' })
      .then((res: any) => {
        console.log(res);
        message.success('撤销成功！');
        setMoney(money - 0 + (task.cost - 0));
      })
      .catch(() => {
        message.error('撤销失败');
      });
  };

  // 添加记录
  const handleAddRecord = () => {
    if (!inputRecord || !inputRecordCost) {
      return;
    }
    console.log('handleAddRecord');
    // 添加记录
    const obj = {
      title: inputRecord,
      cost: inputRecordCost,
      createTime: Date.now(),
    };
    const arr: any = [...recordList]; // todo
    arr.push(obj);
    setRecordList(arr);
    const json = JSON.stringify({
      recordList: arr,
      taskList,
      finishTaskList,
      money: money - inputRecordCost,
    });

    const blob = new Blob([json]);
    // 上传的文件
    // 版本号和url的上传
    client
      .put('info.json', blob, { 'Content-Type': 'application/x-www-form-urlencoded' })
      .then((res: any) => {
        console.log(res);
        message.success('记录成功');
        setMoney(money - inputRecordCost);
      })
      .catch(() => {
        message.error('记录成功');
      });
  };

  const handleTogglePage = () => {
    setIsRecord(!isRecord);
  };

  // 添加弹窗相关
  const [open, setOpen] = useState(false);
  const [openRecord, setOpenRecord] = useState(false);
  const openAddTask = useCallback(() => {
    setOpen(true);
  }, []);
  const openAddRecord = useCallback(() => {
    setOpenRecord(true);
  }, []);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  const onChangeReward = useCallback((e: any) => {
    setInputReward(e.target.value);
  }, []);
  const onChangeTask = useCallback((e: any) => {
    setInputTask(e.target.value);
  }, []);

  const onChangeRecord = useCallback((e: any) => {
    setInputRecord(e.target.value);
  }, []);
  const onChangeRecordCost = useCallback((e: any) => {
    setInputRewardCost(e.target.value);
  }, []);
  const onCloseRecord = useCallback(() => {
    setOpenRecord(false);
  }, []);
  return (
    <PageContainer className={styles.taskPage}>
      <div className={styles.remainMoney}>{money}</div>
      {isRecord ? (
        // 记录页
        <div>
          <Button onClick={handleTogglePage}>记录</Button>
          <div className={styles.taskList}>
            {recordList.map((record, index) => (
              <li key={index}>
                {record.title}-{record.cost}
                <Button onClick={() => handleRebackTask(record)}>添加</Button>
              </li>
            ))}
          </div>
          <Button onClick={openAddRecord}>添加</Button>
          {/* 添加任务弹窗 */}
          <Drawer
            title="AddRecord"
            placement="bottom"
            closable={false}
            onClose={onCloseRecord}
            open={openRecord}
          >
            <Input placeholder="记录" onChange={onChangeRecord} />
            <Input placeholder="Cost" onChange={onChangeRecordCost} />
            <Button onClick={handleAddRecord}>确认记录</Button>
          </Drawer>
        </div>
      ) : (
        // 任务页
        <div>
          <Button onClick={handleTogglePage}>任务</Button>
          <div className={styles.taskList}>
            {taskList.map((task, index) => (
              <li key={index}>
                {task.title}-奖励{task.reward}
                <Button
                  type="primary"
                  shape="circle"
                  onClick={() => handleRemoveTask(task.createTime)}
                >
                  Del
                </Button>
                <Button type="primary" shape="circle" onClick={() => handleFinishTask(task)}>
                  Do
                </Button>
              </li>
            ))}
          </div>
          <div className={styles.finishTaskList}>
            {finishTaskList.map((task, index) => (
              <li key={index}>
                {task.title}-奖励{task.reward}
                <Button type="primary" shape="circle" onClick={() => handleRebackTask(task)}>
                  Re
                </Button>
              </li>
            ))}
          </div>
          <Button onClick={openAddTask}>添加</Button>
          <Drawer title="AddTask" placement="bottom" closable={false} onClose={onClose} open={open}>
            <Input placeholder="任务" onChange={onChangeTask} />
            <Input placeholder="Reward" onChange={onChangeReward} />
            <Button onClick={handleAddTask}>确认发布</Button>
          </Drawer>
        </div>
      )}
    </PageContainer>
  );
};

export default Welcome;
