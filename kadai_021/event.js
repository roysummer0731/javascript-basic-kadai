  // ボタンと表示するテキストを取得
  const textBtn = document.getElementById('btn');
  const textElement = document.getElementById('text');

  // ボタンがクリックされたときにテキストを変更し、コンソールログを出力
  textBtn.addEventListener('click', () => {
      textElement.textContent = 'ボタンをクリックしました';
      setTimeout(() => {
        console.log(' ２秒後表示クリック（非同期処理）');
      }, 2000);
      console.log('ボタンをクリックしました');
  });

