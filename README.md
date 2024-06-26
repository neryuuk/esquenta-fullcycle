# Esquenta (2023-08-14)

## Como montar o melhor ambiente Dev no Windows, Linux e Mac com WSL2

> - https://www.youtube.com/watch?v=rpvjVtUPnOc
> - https://github.com/argentinaluiz/ambiente-dev-produtivo

### WSL 2

- Ambiente linux e seus benefícios

### Windows Terminal

- Compatível com WSL 2
- Suporte a varios shells
- Vários recursos

### Docker Desktop / Engine

- Compatível com WSL 2
- Compatível com Windows

### Instalação e configuração do WSL 2

> https://github.com/codeedu/wsl2-docker-quickstart

```Powershell
wsl --update # atualiza o WSL

wsl --set-default-version 2 # define o wsl 2 como padrão

wsl --install # instala a distro padrão do linux (Ubuntu)
```

### Instalação do oh my zsh

```bash
sudo apt install zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

> - Plugins
>   - https://github.com/zdharma/fast-syntax-highlighting
>   - https://github.com/zsh-users/zsh-autosuggestions
>   - https://github.com/zsh-users/zsh-completions
> - Tema
>   - https://github.com/romkatv/powerlevel10k

## Aprenda Docker do Zero, tutorial passo a passo

> https://www.youtube.com/watch?v=caAFYcUcgBc

```docker
docker run hello-world
```

> - `run` ~ executa imagem do docker
> - `hello-world` ~ container de teste de config e inicialização do docker

---

```docker
docker run --rm hello-world
```

> - `--rm` ~ remove os recursos após a execução para poupar storage

---

```docker
docker ps
```

> - `ps` ~ processos/containers ativos executando no docker

---

```docker
docker ps -a
```

> - `-a` ~ inclui execuções já encerradas

---

```docker
docker run -it ubuntu bash
```

> - `-i` ~ modo interativo
> - `-t` ~ exibe o tty do container
> - `ubuntu` ~ imagem selecionada
> - `bash` ~ comando a ser executado dentro do container

---

```docker
docker run -p 8080:80 nginx
```

> - `-p` ~ expõe portas do container externamente
> - `8080:80` ~ Externa : Interna

---

```docker
docker exec musing_carver ls
```

> - `exec` ~ executa comando dentro do container
> - `musing_carver` ~ nome aleatório gerado na criação do container
> - `ls` ~ comando a ser executado dentro do container

---

```docker
docker exec -it musing_carver bash
```

> - abre um terminal dentro do container em questão

---

```docker
docker run -p 8080:80 -v ./html:/usr/share/nginx/html nginx
```

> - `-v` ~ especifíca um volume (pasta) externo a ser montado dentro do container
> - `./html:/usr/share/nginx/html` ~ Externa : Interna

---

```docker
docker build -t neryuuk/imagem:latest .
```

> - `build` ~ cria uma nova imagem
> - `-t neryuuk/imagem:latest` ~ informações de tagging da imagem
> - `.` ~ local do Dockerfile a ser utilizado

---

```docker
docker push neryuuk/imagem:latest
```

> - `push` ~ publica uma imagem no docker hub
> - `neryuuk` ~ usuario
> - `imagem` ~ repositorio
> - `latest` ~ versao

---

```docker
docker compose up
```

> - `compose` ~ ferramenta para definir e executar receitas multi-container
> - `up` ~ executa e inicializa os containers da 'receita' do docker-compose.yaml

---

```docker
docker compose down
```

> - `down` ~ encerra todos os containers, redes, volumes e imagens criados com o `up`

---

```docker
docker compose ps
```

> - `ps` ~ exibe containers executados com o `up`

---

# Esquenta (2023-08-15)

## Intensivão com novo Nest.js 10

> - https://github.com/devfullcycle/live-imersao-14-nest-10-api

- Nest.js
  - JS e TS
  - Integração facilitada com REST, GraphQL, RabbitMQ, etc
  - Integração facilitada via multiplos ORMs (Sequelize, Prisma, TypeORM)
  - Trazendo idéias arquiteturais do angular para o backend
    - Decorators
    - Modularidade

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

> - https://github.com/nodesource/distributions#debinstall
> - Instalando o node dentro do WSL

---

```bash
npm i -g @nestjs/cli

npm run start:dev
```

> - `npm i -g @nestjs/cli` ~ instalando pacote de maneira global
> - `npm run start:dev` ~ inicializando script start:dev do package.json

---

```bash
nest generate module categories
```

> - `nest` ~ nest-cli
> - `generate module` ~ create a new module inside nest structure
> - `categories` ~ module name is categories

---

```bash
nest g resource categories
```

> - `g` ~ same as generate
> - `resource` ~ create a new resource (REST, GraphQL, etc) inside nest structure (including CRUD entrypoints)

---

```bash
npm i @prisma/install
```

> - trabalhar com o ORM Prisma

---

```bash
npx prisma init
```

> - `npx` ~ executar um comando em um pacote sem precisar instalar a dependencia no projeto
> - `prisma init` ~ comando `init` do pacote `prisma`

---

```bash
npx prisma migrate dev
```

> - `migrate dev` ~ executar comando de migração do prisma, para inicializar o DB com base no `schema.prisma`

---

```bash
nest g module prisma
```

> - `module prisma` ~ gerando modulo `prisma`

---

```bash
nest g service prisma/prisma
```

> - `service` ~ criando um novo serviço
> - `prisma/prisma` ~ serviço prisma dentro do módulo prisma

---

DTO ~ Data Transfer Object

- Objeto sem lógica ou regra de negócios
- Serve apenas para transportar dados

---

```bash
npx prisma studio -p 5000 -b none
```

> - `studio` ~ inicia o prisma studio (dashboard pra visualizar o DB)
> - `-p 5000` ~ porta 5000
> - `-b none` ~ não inicializar navegador

---

# Esquenta (2023-08-15)

## Iniciando com Kubernetes Tutorial passo a passo

> - https://www.youtube.com/watch?v=CeDbTplpKl4

- Orquestração de containers

  - Scaling up e scaling down (via análise de tráfego / CPU / mem)

- Necessidades
  - Variáveis de ambientes
  - Gerenciamento de senhas / secrets
  - Escolher os recursos computacionais
  - Health check
  - Load balancing
  - SSL / TLS
  - Domínio
  - Estratégias de deploy
  - Storage

```ascii
┌ K8S ──────────┐
│┌ POD ────────┐│
││┌ CONTAINER ┐││
│││┌ APP ────┐│││
││││ >_      ││││
│││└─────────┘│││
││└───────────┘││
│└─────────────┘│
└───────────────┘
```

- Geralmente 1 pod roda 1 container
  - Pode rodar mais de um container, em situações específicas
- Pod provisiona redes e arquiteturas de uma máquina para atender o container

### kind - Gerenciando o k8s

---

```bash
# Baixando e instalando a versão mais recente do kind

# For AMD64 / x86_64
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64

# For ARM64
[ $(uname -m) = aarch64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-arm64

chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
```

---

```bash
kind create cluster
```

> - `kind` ~ tool for running local Kubernetes clusters using Docker container
> - `create cluster` ~ criação de novo cluster

---

```bash
kubectl cluster-info --context kind-kind
```

> - `kubectl` ~ K8s command-line tool
> - `cluster-info` ~ Informações sobre o cluster criado
> - `--context kind-kind` ~ Nome do kubeconfig context que será utilizado

---
