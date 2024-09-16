// Dateオブジェクトを作成
const date = new Date();

// 日付をフォーマットして表示
const toDay = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';

// 今日の日付
console.log(toDay); 
