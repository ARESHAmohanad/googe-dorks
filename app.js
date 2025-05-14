document.addEventListener('DOMContentLoaded', () => {
  const queryInput = document.getElementById('userQuery');
  const output = document.getElementById('outputDork');
  const copyBtn = document.getElementById('copyBtn');
  const generateBtn = document.getElementById('generateBtn');
  const searchLink = document.getElementById('searchLink');
  const useAI = document.getElementById('useAI');

  generateBtn.addEventListener('click', () => {
    const query = queryInput.value.trim();
    if (!query) {
      output.textContent = 'Digite algo primeiro...';
      return;
    }

    if (useAI.checked) {
      generateWithAI(query);
    } else {
      generateBasic(query);
    }
  });

  copyBtn.addEventListener('click', () => {
    const text = output.textContent;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = 'Copiado!';
      setTimeout(() => (copyBtn.textContent = 'Copiar'), 1500);
    });
  });

  function generateBasic(input) {
    const words = input.toLowerCase().split(/\s+/);
    const dork = [];

    if (words.includes('pdf') || words.includes('relat')) {
      dork.push('filetype:pdf');
    } else if (words.includes('planilha') || words.includes('excel')) {
      dork.push('filetype:xls');
    }

    if (words.includes('saude') || words.includes('educacao')) {
      dork.push('site:.gov.br');
    }

    const exact = input.replace(/\s+/g, ' ').trim();
    dork.push(`"${exact}"`);

    const final = dork.join(' ');
    output.textContent = final;
    searchLink.href = `https://www.google.com/search?q=${encodeURIComponent(final)}`;
  }
});