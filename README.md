# Verônica Encanto — Next.js

Site profissional da Verônica Encanto, construído com **Next.js 14**, **TypeScript** e **Tailwind CSS**.

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📦 Build para produção

```bash
npm run build
npm start
```

## 🗂️ Estrutura

```
veronica-encanto/
├── app/
│   ├── layout.tsx       # Layout raiz com metadados
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais + variáveis
├── components/
│   ├── Navbar.tsx       # Menu de navegação fixo
│   ├── Hero.tsx         # Tela inicial com cards
│   ├── Perfumes.tsx     # Seção de perfumes (4 marcas)
│   ├── Joias.tsx        # Seção joias & relógios
│   ├── Sublimacao.tsx   # Sublimação personalizada
│   ├── Manicure.tsx     # Serviços de manicure
│   ├── Tupperware.tsx   # Produtos Tupperware
│   ├── Contato.tsx      # Seção de contato + WhatsApp
│   └── Footer.tsx       # Rodapé
├── public/
│   └── images/          # Todas as imagens do site
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## ✏️ Personalizar

- **WhatsApp**: Edite o número em `components/Contato.tsx`
- **Instagram**: Adicione o link em `components/Contato.tsx`
- **Imagens**: Substitua os arquivos em `public/images/`
- **Cores**: Ajuste as variáveis CSS em `app/globals.css`
