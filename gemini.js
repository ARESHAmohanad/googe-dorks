// AVISO: expor sua API key no frontend não é seguro em produção.
const GEMINI_API_KEY = "SUA_CHAVE_AQUI"; // Troque pela sua API key

async function generateWithAI(query) {
  const output = document.getElementById('outputDork');
  const searchLink = document.getElementById('searchLink');

  output.textContent = 'Gerando com IA...';

  const prompt = `Otimize a seguinte busca usando Google Dorks:

Consulta: ${query}

Responda APENAS com a dork, sem explicações.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 200
          }
        })
      }
    );

    const data = await response.json();
    let dork = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Erro na resposta da IA';
    dork = dork.replace(/^.*?:/, '').trim();

    output.textContent = dork;
    searchLink.href = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;
  } catch (error) {
    output.textContent = 'Erro ao conectar com o Gemini';
    console.error(error);
  }
}