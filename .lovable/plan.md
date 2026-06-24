## Problema

A imagem da expert está como ponteiro Lovable Asset (`src/assets/expert.png.asset.json`) apontando para `/__l5e/assets-v1/...`. Esse caminho **só existe no servidor da Lovable**. Quando você faz deploy via GitHub → Cloudflare Pages, esse endpoint não existe no Cloudflare, então a imagem quebra (ícone de imagem partida que aparece no print).

O build passa porque é só um JSON; o erro só aparece em runtime no Cloudflare.

## Solução

Trazer a imagem para dentro do repositório como arquivo real, importado pelo Vite, para que o bundler a inclua em `dist/assets/` no build — assim funciona em qualquer host (Cloudflare, Vercel, Netlify, etc.).

## Passos

1. Baixar o binário do CDN Lovable (`expert.png`, asset_id `88e57888-...`) e salvar em `src/assets/expert.png`.
2. Apagar o ponteiro `src/assets/expert.png.asset.json`.
3. Em `src/routes/index.tsx`, trocar:
   ```ts
   import expertAsset from "@/assets/expert.png.asset.json";
   // ...
   <img src={expertAsset.url} ... />
   ```
   por:
   ```ts
   import expertImg from "@/assets/expert.png";
   // ...
   <img src={expertImg} ... />
   ```
4. Rodar `bun run build` localmente para confirmar que a imagem aparece em `dist/assets/expert-*.png` com hash e que o build continua verde.
5. Commit + push → Cloudflare faz novo deploy e a imagem carrega normalmente.

## Observação

Para futuros deploys no Cloudflare via GitHub: **não use** ponteiros `.asset.json` (CDN Lovable). Sempre importe imagens diretamente de `src/assets/` para que o Vite empacote no build.
