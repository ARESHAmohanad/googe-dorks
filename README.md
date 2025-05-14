# DorkOptimizer Web

Versão frontend do DorkOptimizer para rodar 100% no navegador.

## Como usar

1. Abra o arquivo `index.html` em qualquer navegador moderno.
2. Digite sua consulta em linguagem natural no campo.
3. Clique em **Gerar Dork** para gerar uma consulta Google Dork básica localmente.
4. Marque **Usar IA (Gemini)** para gerar uma dork otimizada pela API Gemini (é preciso chave API).

## Configuração da API Gemini

- Altere o arquivo `js/gemini.js` e substitua `SUA_CHAVE_AQUI` pela sua chave de API Google Gemini.
- Atenção: expor chave API no frontend é inseguro para produção. Use proxy/backend para segurança.

## Hospedagem

Você pode hospedar essa versão em:
- GitHub Pages
- Netlify
- Vercel

## Licença

MIT License
