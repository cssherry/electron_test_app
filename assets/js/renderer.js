const loader = require('monaco-loader');

const mainDiv = document.getElementById('main');

// Wait for monaco editor to get included properly
loader().then((monaco) => {
  monaco.editor.create(mainDiv, {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  });
});
