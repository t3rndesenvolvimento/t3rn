
# T3RN Email Server

Servidor local para testes do sistema de emails da T3RN.

## Instalação

1. Navegue até a pasta do servidor:
```bash
cd server
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` com sua chave do Resend (já configurada).

## Execução

### Modo desenvolvimento (com auto-reload):
```bash
npm run dev
```

### Modo produção:
```bash
npm start
```

O servidor estará disponível em: http://localhost:3001

## Endpoints

- `POST /send-email` - Envio de emails
- `GET /health` - Health check

## Teste

Para testar o envio de emails, você pode usar curl:

```bash
# Teste de contato
curl -X POST http://localhost:3001/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "type": "contact",
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "(11) 99999-9999",
    "message": "Esta é uma mensagem de teste"
  }'

# Teste de newsletter
curl -X POST http://localhost:3001/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "type": "newsletter",
    "email": "joao@example.com"
  }'
```

## Configuração do Frontend

Para usar este servidor local, você precisará modificar o `formService.ts` para apontar para `http://localhost:3001/send-email` em vez do Supabase.
