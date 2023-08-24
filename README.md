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
