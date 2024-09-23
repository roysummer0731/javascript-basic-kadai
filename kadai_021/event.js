  // ボタンと表示するテキストを取得
  const textBtn = document.getElementById('btn');
  const textElement = document.getElementById('text');

  // ボタンがクリックされたとき2秒後ににテキストを変更

      setTimeout(() => {
          textElement.textContent = 'ボタンをクリックしました';
      }, 2000);
      console.log('ボタンをクリックしました');

