
  // ボタンと表示するテキストを取得
  const textBtn = document.getElementById('btn');
  const textElement = document.getElementById('text');

  // ボタンがクリックされたときにテキストを変更し、コンソールログを出力
  textBtn.addEventListener('click', () => {
      textElement.textContent = 'ボタンをクリックしました';
      console.log('ボタンをクリックしました');
  });
