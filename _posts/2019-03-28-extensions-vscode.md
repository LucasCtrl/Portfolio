---
layout: blog
title: "Extensions VSCode"
date: 2019-03-28 20:20:00 +0200
image: assets/images/blog/vscode.png
categories:
  - Blog
tags:
  - VSCode
  - Extensions
published: true
---

Si vous êtes développeur ou que vous vous intéressez de près ou de loin au développement, vous ne pouvez pas être passé à côté de [Visual Studio Code](https://code.visualstudio.com/). Dans cet article, je vais vous présenter quelques extensions qui améliorent votre espace de travail du point de vue technique ou esthétique.

### Améliorations techniques

#### [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
Vetur est une extension utilisée pour le développement d'application ou de site web avec **VueJS**. Elle permet d'activer la colorisation syntaxique pour les fichiers de type `.vue`, d'avoir un système d'auto-complétion propre à VueJS et propose d'activer le formatage et débogage de vos applications en installant des modules **Node.js**.

#### [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
Développée par Microsoft, l'extension offre un support total du langage Python dans VSCode. Comme Vetur, l'extension offre un système d'auto-complétion, de débogage, de formatage de vos fichiers, et plus encore.

#### [StandardJS - Javascript Standard Style](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
Pour faciliter le développement d'une application au sein d'une équipe, des guides ont été créés pour convenir des règles fixes. Il en existe plusieurs comme **Airbnb** où **Standard** pour ne citer qu'eux. Avec cette extension, lorsque vous ne respectez pas une règle du guide, un message d'erreur ainsi qu'une explication vous sera affichée pour que l'erreur soit corrigée. Grâce à la palette de commande, vous pourrez aussi formater le fichier en entier pour que toutes les erreurs corrigeables soient corrigées.

#### [EditorConfig for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
Tout comme **StandardJS - Javascript Standard Style**, l'extension **EditorConfig for VSCode** permet de mettre en place des règles de code différentes en fonction des projets. Grâce à cette extension, lorsque vous avez un fichier `.editorconfig` dans votre projet, il remplacera les paramètres que vous avez dans votre configuration. Par exemple, vous avez configuré VSCode pour indenter votre code avec 4 espaces et dans votre fichier `.editorconfig`, vous n'indentez pas le code par 4 espaces,mais pas 1 tab. L'extension se chargera de modifier votre configuration seulement dans le projet en cours pour suivre cette règle.

### Améliorations visuelles

#### [Beautiful UI](https://marketplace.visualstudio.com/items?itemName=swashata.beautiful-ui)
L'extension propose une collection de 32 thèmes de couleurs différents basés sur diverses sources comme _Monokai Classic_, _Base16_, _One Dark_, et plus encore.

#### [Andromeda](https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda)
{% include image.html url="assets/images/blog/extensions-vscode/andromeda.png" alt="" width="100%" %}

#### [Sublime Material Theme](https://marketplace.visualstudio.com/items?itemName=jprestidge.theme-material-theme)
{% include image.html url="assets/images/blog/extensions-vscode/sublime_material_theme.png" alt="" width="100%" %}

#### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
**Material Icon Theme** propose jusqu'à 400 icons différents pour vos fichiers et dossier tout en respectant les normes convenues par Google avec **[Material Design](https://material.io/)**.

#### [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
Tout comme **Material Icon Theme**, l'extension offre une grande palette d'icons, mais est quant à elle développé par une équipe de Microsoft.

### Extensions diverses

#### [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)
**Polacode** vous permet de faire des "photos" de votre code tout comme **[carbon](https://carbon.now.sh)**, mais directement dans VSCode.
{% include image.html url="assets/images/blog/extensions-vscode/polacode.gif" alt="" width="700px" %}

#### [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
**Colorize** vous permet de visualiser les couleurs directement dans vos fichiers de type css/sass/scss/stylus/...
{% include image.html url="assets/images/blog/extensions-vscode/colorize.gif" alt="" width="500px" %}

#### [Setting Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
Si vous travaillez sur plusieurs ordinateurs et que vous souhaitez avoir le même configuration et les mêmes extensions sur chacun d'eux, **Setting Sync** est fait pour vous ! À chaque ajout d'extensions ou à chaque modification des paramètres de VSCode, l'extension se charge de mettre à jour un ensemble de fichier sur Gist. Lorsque vous changez d'ordinateur, il suffit donc d'installer **Setting Sync** et de connecter l'extension à votre Gist contenant tous vos fichiers de configuration.
