---
layout: blog
title: 'Tutoriel Jekyll : Introduction 1/_'
date: '2018-10-18'
categories: blog
tags:
  - jekyll
  - tutoriel
published: false
---
e souhaite vous proposer un tutoriel complet sur Jekyll.<br>
Jekyll est un générateur de site web statique développé avec Ruby. Je l'utilise depuis un certain moment et qui me facilite grandement les choses quand à la réalisation de certains projets. Par exemple, se site, est entièrement développé avec celui-ci.

### Installation de Jekyll

Selon le système d'exploitation que vous utilisez, il y a différentes manières d'installer Jekyll ainsi que ses dépendances. Dans un premier temps, il faudra installer Ruby ainsi que gem (le gestionnaire de dépendance). Ensuite, nous passerons à l'installation de Jekyll.

#### Windows

L'installation sur windows est relativement rapide et simple. Il suffit de se rendre sur le site [rubyinstaller.org](https://rubyinstaller.org/downloads/) et de télécharger la dernière version de **Ruby+Devkit** (en x86 ou x64 en fonction de votre ordinateur). Après, il suffit de lancer l'éxécutable et de suivre le processus d'installation.

A la fin de l'installation, pensez à décocher la petite case et cliquez sur `Finish`

![Fin de l'installation de Jekyll](/assets/images/uploads/installation_jekyll_1.png)

Pour vérifier que jekyll est bien installé, ouvrez votre menu windows et ouvrez un terminal de commande. Vous pourrez y tapper la commande `ruby -v` et la commande `gem -v`. Si vous avez un numéro de version d'installé, c'est bon, vous êtes paré pour la suite.


![Output après installation de ruby et de gem](/assets/images/uploads/installation_jekyll_3.png)

Par contre si vous avez une sortie de type `n'est pas reconnu en tant que commande interne`, il va falloir ajouter ruby dans les variables d'environnement de windows. Pour cela, ouvrez votre menu windows et ecrivez `Modifier les variables d'environnement système`. Une petite va s'ouvrir. Cliquez ensuite sur `Variables d'environnement...` puis, dans les **variables système**, cliquez sur `Path` puis sur `Modifier...`. Maintenant, il vous suffit juste de créer une nouvelle règle avec le chemin d'accès vers le dossier `bin` ou est installé ruby. Si vous avez laissé le chemin d'accès par défaut lors de l'installation, le chemin d'accès doit ressembler à cela : `C:\Ruby25-x64\bin`. Ensuite, il suffit de valider les modifications puis de tout fermer.

![Modification des variables d'environnement](/assets/images/uploads/installation_jekyll_2.png)

Pour vérifier que la modification à bien été prise en compte, il suffit de refaire l'étape de vérification avec la commande `ruby -v` et la commande `gem -v`.

#### Autres (MacOS, Ubuntu, Debian, Arch Linux, ...)

Pour ce genre de système d'exploitation, je vous conseil d'installer ruby par le biais de votre terminal de commande et en vous référent à la documentation disponible sur le [site de Jekyll](https://jekyllrb.com/docs/installation/)
