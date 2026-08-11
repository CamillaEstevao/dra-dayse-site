# Site Premium — Dra. Dayse Ettinger

Projeto React + Vite responsivo, com navegação, tratamentos, modal, seção de resultados, Instagram, WhatsApp e formulário de agendamento.

## Instalação limpa no Windows

1. Extraia este ZIP em uma pasta NOVA.
2. Abra o CMD dentro da pasta do projeto.
3. Rode:

```bash
npm install
npm run dev
```

## Importante

Esta versão NÃO usa `lucide-react`. Todos os ícones do site ficam em `src/icons.jsx`, evitando erros como:

- `does not provide an export named 'Facebook'`
- `does not provide an export named 'Instagram'`

Se você estiver substituindo uma versão antiga do projeto, pare o Vite (`Ctrl + C`) e use esta pasta nova. Não misture os arquivos com a versão anterior.

## Arquivos principais

- `src/App.jsx` — estrutura e funcionalidades
- `src/styles.css` — layout premium e responsividade
- `src/config.js` — links e informações de contato
- `src/icons.jsx` — ícones locais do projeto
- `src/assets/` — logo e imagens
