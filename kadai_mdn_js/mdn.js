// 2023年8月22日のDateオブジェクトを作成
const date = new Date(2023, 7, 22);

// 日付をフォーマットして表示
const toDay = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';

console.log(toDay); // 2023年8月22日

