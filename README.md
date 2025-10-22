# Hello Vue + Docker (papadopoli/vue-vite-dev)

## Como rodar
```bash
docker compose up
```

Abra: http://localhost:5173

### Teste de HMR
Edite `src/App.vue` e salve — a página deve atualizar automaticamente.

## Observações
- Não precisa de Node/npm no host; só Docker.
- O volume `/workspace/node_modules` guarda as dependências dentro do container.
- Se quiser resetar as dependências: `docker compose down -v` e depois `docker compose up`.
