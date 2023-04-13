//client import
const wdio = require("webdriverio");


// 옵션 설정
const opts = {
  // hostname: '175.126.172.231',
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    deviceName: "myphone",
    automationName: "UiAutomator2",
    udid: 'ce091609ad9db71d01', //변경
    bundleId:'com.google.android.youtube'
  }
};

async function main() {
  const client = await wdio.remote(opts);

  


  await client.deleteSession();
}

main();
