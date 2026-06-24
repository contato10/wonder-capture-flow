## Contexto
A landing page atual possui **uma única imagem**: a foto da expert (`expert.png`). Ela já está configurada como asset CDN, com o ponteiro `.asset.json` localizado em `src/assets/expert.png.asset.json`, e o código a importa via `@/assets/expert.png.asset.json`. Os ícones (Check, Warn) são SVGs inline e não exigem assets externos.

## Plano

1. **Validar build atual**
   - Executar `bun run build` para confirmar que não há erros de resolução de módulo ou de asset.
   - Se o build passar, o setup já está correto — nenhuma alteração necessária.

2. **Corrigir apenas se houver erro**
   - Se o build falhar por causa do asset, ajustar a importação ou o ponteiro `.asset.json` para garantir que o Vite/TanStack Start resolva corretamente o caminho `/__l5e/assets-v1/...`.

3. **Confirmar estrutura**
   - Garantir que todos os arquivos `.asset.json` (ponteiros CDN) permaneçam em `src/assets/` para que o build reconheça as referências.

## Nota
O usuário optou por **manter no CDN**. O formato atual já é o padrão correto do Lovable: o arquivo binário fica no CDN e o projeto contém apenas o ponteiro `.asset.json` em `src/assets/`. Nenhuma migração de localização é necessária se o build estiver verde.