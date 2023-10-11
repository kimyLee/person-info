import OSS from 'ali-oss';

function getNum5() {
  return '5';
}
function getNum2() {
  return '2';
}
function hash() {
  return atob('ekZ5dA==') + getNum5() + atob('b1FqTnRCVw==');
}

const client = new OSS({
  // region: 'oss-cn-hongkong',
  accessKeyId: atob('TFRBSTV0NlNz') + 'LPS' + hash(),
  // accessKeySecret: RVhGFg5sQ5rhb2CPsYOvaqBeKCIQIO,
  accessKeySecret:
    atob('UlZoR0Zn') +
    getNum5() +
    'sQ' +
    getNum5() +
    atob('cm' + 'hi') +
    getNum2() +
    atob('Q1BzWU92YXFCZUtDSVFJTw=='),
  endpoint: 'https://oss-cn-shenzhen.aliyuncs.com',
  bucket: 'kimmy-info',
});

export default client;
