# 🌊 Através do Mar

![Banner do Projeto](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge)

## 📖 Descrição do Projeto

**Através do Mar** é uma página web interativa e educacional que apresenta um sistema de RPG de mesa voltado para a conscientização ambiental e preservação das belugas no Ártico. O projeto combina elementos de fantasia aquática com curiosidades sobre os oceanos, proporcionando uma experiência imersiva através de narrativas colaborativas.

O site oferece uma experiência visual envolvente com animações suaves, navegação intuitiva e recursos de acessibilidade, incluindo narração em áudio (TTS - Text-to-Speech) para todo o conteúdo textual.

### 🎯 Objetivos

- Sensibilizar sobre a preservação do ecossistema ártico
- Apresentar de forma dinâmica e interativa a vida das belugas
- Disponibilizar um RPG educacional de mesa
- Promover a conscientização ambiental através do entretenimento

---

## 🚀 Instruções de Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, mas recomendado para visualização completa)

### Passo a Passo

1. **Clone ou baixe o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   ```

2. **Estrutura de arquivos necessária**
   ```
   atravesdomar/
   ├── Atravesdomar.html
   ├── style.css
   ├── script.js
   ├── Através do Mar - Fastplay.pdf
   ├── imagens/
   │   ├── belugao.jpg
   │   ├── beluguinha.png
   │   ├── Omundo.png
   │   ├── mundo.png
   │   ├── sistema.png
   │   ├── buraco.jpg
   │   ├── iceberg.png
   │   ├── gelos.png
   │   └── ear-listen-solid-full.svg
   └── audio/
       ├── AtravesDoMar.mp3
       ├── Sobre.mp3
       ├── Personagens.mp3
       ├── MundoExtra.mp3
       ├── Sistema.mp3
       ├── Mundo.mp3
       ├── Campanhas.mp3
       ├── Navegação.mp3
       └── Magia.mp3
   ```

3. **Opção 1: Abrir diretamente**
   - Navegue até a pasta do projeto
   - Abra o arquivo `Atravesdomar.html` em seu navegador

4. **Opção 2: Usar servidor local (recomendado)**
   
   **Com Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Acesse: `http://localhost:8000/Atravesdomar.html`

   **Com Node.js (http-server):**
   ```bash
   npx http-server
   ```

   **Com VS Code:**
   - Instale a extensão "Live Server"
   - Clique com botão direito em `Atravesdomar.html`
   - Selecione "Open with Live Server"

---

## 💻 Tecnologias Utilizadas

### Front-end
- **HTML5** - Estrutura semântica do site
- **CSS3** - Estilização e animações
  - Gradientes lineares
  - Transições e transformações
  - Responsive design com clamp()
  - Flexbox e Grid
- **JavaScript (ES6+)** - Interatividade
  - Manipulação do DOM
  - Event listeners
  - Controle de áudio

### Frameworks e Bibliotecas
- **Bootstrap 5.3.8** - Sistema de grid responsivo
- **Popper.js 2.11.8** - Posicionamento de elementos

### CDNs Utilizadas
```html
<!-- Bootstrap CSS -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css

<!-- Bootstrap JS Bundle -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js

<!-- Popper.js -->
https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js
```

### Recursos Adicionais
- **SVG** - Ícones vetoriais personalizados
- **Áudio MP3** - Narração do conteúdo (acessibilidade)
- **Google Fonts** - Sistema de fontes (system-ui)

---

## ⚙️ Funcionalidades Principais

### 🎨 Interface Interativa
- Menu hambúrguer animado com efeito de onda
- Navegação suave entre seções (smooth scroll)
- Hover effects em cards e botões
- Sistema de abas para características do jogo

### 🔊 Acessibilidade
- Botões de narração em áudio para todo conteúdo
- Controle individual de reprodução
- Pausa automática ao trocar entre áudios

### 📱 Design Responsivo
- Layout adaptável para diferentes tamanhos de tela
- Tipografia responsiva usando clamp()
- Imagens otimizadas

### 🎮 Seções do Site
1. **Hero Section** - Apresentação visual impactante
2. **Sobre o Projeto** - Descrição detalhada com cards interativos
3. **O Mundo** - Apresentação do universo AquaLunna
4. **Características** - Sistema de abas com conteúdo dinâmico
5. **Downloads** - Acesso ao material do jogo e links externos
6. **Equipe** - Apresentação dos membros

---

## 👥 Equipe

Este projeto foi desenvolvido por:

- **Bárbara Souza**
- **Felipe Magioli**
- **Gabriella Moraes**
- **Stella Miranda**
- **Yasmin Farah**

### 📞 Contatos

- **Discord**: [Comunidade Através do Mar](https://discord.com/)
- **Apoio às Belugas**: [Beluga Sanctuary](https://belugasanctuary.sealifetrust.org/en)
- **Email**: [contato@atravesdomar.com]

---

## 🔗 Links Importantes

### 📋 Protótipo
- **Figma**: [Link do Protótipo](https://www.figma.com/proto/sp7N99IKyUCAmHTr7BXvOb/Atrav%C3%A9s-do-Mar?node-id=1-902&t=8Rv6CgP81KKpnY0v-1)*
- **Wireframes**: [Link dos Wireframes](

### 🎥 Vídeo de Apresentação
- **Drive**: [Vídeo Demonstrativo](https://drive.google.com/file/d/1UnGOyl0Ssudke9gwIsg4JzW52pzIP4ZQ/view?usp=drive_link)
- **Duração**: 2:10 minutos
- **Conteúdo**: Apresentação do projeto, navegação pelo site e explicação das funcionalidades

---

## 📂 Estrutura do Código

### HTML (Atravesdomar.html)
- Estrutura semântica com seções bem definidas
- Integração com Bootstrap para responsividade
- Meta tags para SEO e viewport

### CSS (style.css)
- Organização por seções do site
- Uso extensivo de variáveis CSS (via gradientes)
- Animações e transições suaves
- Media queries implícitas via clamp()

### JavaScript (script.js)
- **Barra de Características**: Sistema de abas interativo
- **Navbar**: Menu responsivo com abertura/fechamento
- **Áudio**: Controle de reprodução com pausa automática

---

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--azul-escuro: #075C80
--azul-medio: #04406E
--azul-claro: #80BADB
--ciano: #1DB1C4
--branco-gelo: #DAF5FA
--texto-claro: #FFFFFF
```

---

## 📋 Checklist de Verificação

Antes de executar o projeto, certifique-se de que:

- [ ] Todos os arquivos HTML, CSS e JS estão na pasta raiz
- [ ] Pasta `imagens/` contém todas as imagens referenciadas
- [ ] Pasta `audio/` contém todos os arquivos MP3
- [ ] Arquivo PDF do Fastplay está disponível
- [ ] Conexão com internet está ativa (para CDNs)
- [ ] Navegador está atualizado

---

## 🐛 Solução de Problemas

### Imagens não carregam
- Verifique se os nomes dos arquivos correspondem exatamente aos referenciados no HTML
- Certifique-se de que as imagens estão na pasta correta

### Áudios não reproduzem
- Verifique se os arquivos MP3 estão no formato correto
- Alguns navegadores bloqueiam autoplay - interação do usuário é necessária

### Estilos não aplicados
- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se o arquivo `style.css` está no mesmo diretório

### CDNs não carregam
- Verifique sua conexão com a internet
- Considere baixar as bibliotecas localmente

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🌟 Agradecimentos

- [Beluga Sanctuary](https://belugasanctuary.sealifetrust.org/en) pela inspiração
- Bootstrap pela framework responsiva
- Comunidade open-source

---

## 📊 Status do Projeto

✅ **Versão 1.0 - Concluída (2025)**

### Próximas Atualizações
- [ ] Modo escuro/claro
- [ ] Internacionalização (PT/EN)
- [ ] Galeria de imagens expandida
- [ ] Blog com notícias sobre belugas
- [ ] Sistema de cadastro para newsletter

---

**Através do Mar © 2025** | Preservando os oceanos através da educação 🐋

---

*Desenvolvido com 💙 pela equipe Através do Mar*
