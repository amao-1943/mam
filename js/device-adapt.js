// 检测设备类型
const isIQOOZ6x = /IQOO.*Z6x/i.test(navigator.userAgent);
const isRealmeGTNeo = /RMX3031|RMX2202/i.test(navigator.userAgent);

// 添加设备标识类
if(isIQOOZ6x) document.documentElement.classList.add('iqoo-z6x');
if(isRealmeGTNeo) document.documentElement.classList.add('realme-gtneo');