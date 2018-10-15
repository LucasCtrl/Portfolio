---
layout: blog
title: 'NetlifyCMS : installation'
date: '2018-10-14'
categories: blog
tags:
  - laviedublog
  - netlify
published: false
---
Utilisant Netlify comme hébergeur, j'ai profité du fait qu'il propose un CMS appelé Netlify CMS. Voulant l'essayer, je l'ai mis en place sur ce site pour voir comment il fonctionne et gérer au mieux mon site. Dans la suite de ce post, je vais vous montrer comment le mettre en place et comment le configurer.

Netlify CMS est un gestionnaire de contenu développé avec ReactJS utilisant les fonctionnalité de Git pour utiliser les API de GitHub, GitLab et Bitbucket. Il propose plusieurs avantages et fonctionnalités :

* Une interface web : Un éditeur de texte, un rendu en temps, réel, un système de gestion de de média par drag-and-drop
* Un système souple: Fonctionne avec la plupart des générateur de site web statique
* Une installation facile: Ajout de deux fichiers dans le dossier de votre projet pour indiquer les chemins d'accès, le système de création des fichiers, ...
* Un système d'authentification rapide avec GitHub, GitLab, Google, ...
* Et bien plus encore

### Prérequis

Dans le cas présent, je vais présenter la mise en place avec GitHub pour la gestion des fichiers mais vous pouvez très bien mettre en place Netlify CMS en utilisant la plateforme de votre choix supporté par le CMS. Pour ce qui est de l'hébergement, je vais utiliser Netlify mais, vous pouvez aussi prendre celle de votre choix comme Heroku, Digital Ocean, AWS, ...

### Mise en place

> Je partirais du principe que vous avez déjà lu mon précédent billet expliquant comment déployer votre site sur Netlify avec Github et l'intégration continue.

#### Activation de l'onglet Identity

#### Création du panel d'administration

Fichier `index.html` et `config.yml`
Ne pas oublier de mettre https://github.com/netlify/netlify-identity-widget en place (juste le script)

#### Gestion de la configuration

#### Création des utilisateurs

Vidéo en anglais de **Chris Stayte** expliquant comment mettre en place NetlifyCMS

<iframe width="560" height="315" src="https://www.youtube.com/embed/_CNZJLYvINc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
