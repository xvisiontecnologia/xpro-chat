## Documentação do Chat do Xpro 1.0 (Xchat) - [Download] (https://github.com/xvisiontecnologia/xpro-chat/releases)
### Instalação
Inclua o arquivo `/js/jquery.xchat.min.js` no fim da página, antes de fechar o elemento `</body>`.

Não é necessário incluir o arquivo `/css/xchat.css` basta coloca-lo na pasta `/css` do site, junto aos outros arquivos. O plugin irá inclui-lo automaticamente.

### Configurando o Plugin
No fim da página, antes de fechar o elemento `</body>` e após a linha que insere o arquivo js do plugin `<script src="js/jquery.xchat.min.js"></script>`,
adicione o script de configuração.

```javascript
<script>
  $.XChat({
    campaign: 'campanha',
    product: 'produto',
    host: 'dominio.xpro.me',
    port: '80',
    ssl: 'false',
    path: '/ws',
    css: '/css',
    departments: [
      {
        name: 'Departamento',
        token: 'MjAxNjA4M',
        selected: true
      }
    ]
  });
</script>
```

### Parâmetros do Plugin
1. **Campaign**: (Opcional) Usado para informar o id/nome de uma campanha de marketing. Geralmente passado via get;
2. **Product**: (Opcional) Usado para informar o id/nome de um produto. Geralmente passado via get;
3. **Host**: (Obrigatório) Domínio da empresa no Xpro que o Xchat irá se conectar;
4. **Port**: (Opcional) Porta na qual a conexão via websocket será estabelecida;
5. **SSL**: (Opcional) Caso a comunicação via websocket seja feita usando ssl;
6. **Path**: (Opcional) Path do enderaço da API ex: `http://dominiodaapi.com:porta/path`;
7. **Departments** (Obrigatório) Array com os departamentos disponíveis no chat. O token final é formado pelo `id do projeto`, `Token Origem` e `Token Tipo`;
8. **CSS** (Opcional) Caminho/pasta do arquivo `xchat.css` ex: `/assets/css`;
