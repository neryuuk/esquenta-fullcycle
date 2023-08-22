# Esquenta (2023-08-14)
## Como montar o melhor ambiente Dev no Windows, Linux e Mac com WSL2

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
wsl --update

wsl --set-default-version 2

wsl --install
```

### Instalação do oh my zsh
```bash
sudo apt install zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

- Plugins
  - https://github.com/zdharma/fast-syntax-highlighting
  - https://github.com/zsh-users/zsh-autosuggestions
  - https://github.com/zsh-users/zsh-completions
