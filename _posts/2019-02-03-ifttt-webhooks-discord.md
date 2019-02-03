---
layout: blog
title:  IFTTT et les webhooks Discord
date:   2019-02-02 14:42:00 +0200
image: assets/images/blog/discord.png
categories:
  - Tutoriel
  - Discord
tags:
  - Webhooks
  - IFTTT
  - Discord
published: true
---

Vous êtes administrateur d'un serveur et vous vous posez souvent la question :<br>
"A quoi sert cet onglet 'Webhooks' dans les paramètres de mon serveur et des différents channels textuels ?"<br>
Et bien, vous êtes au bon endroit, je vais vous expliquer à quoi il sert et comment vous en servir.

> La fonction Webhooks intégrée à Discord est une façon simple de recevoir des messages automatisés et des mises à jour directement dans un salon textuel de votre serveur. Voyez cela comme un de ces tubes pneumatiques qui sont parfois utilisés pour envoyer de l'argent à l'intérieur d'une banque et que vous pouvez regarder disparaître, mais au lieu de ne jamais revoir votre argent, vous verrez effectivement des messages partagés dans Discord à partir d'une autre plateforme.<br>
> -- Discord

Lors de la création d'un webhook, vous avez une petite fenêtre qui s'ouvre et qui vous permet de personnaliser votre webhook.

{% include image.html url="assets/images/blog/ifttt-webhooks-discord/creation-webhook.png" alt="Création d'un webhook" width="350px" %}

1. **Nom** : Vous pouvez choisir le nom qui sera affiché lorsque le webhook sera activé (certains services, comme GitHub, remplaceront le nom que vous aurez choisi par le leur).
2. **Channel** : Vous permet de choisir dans quel channel sera envoyé le message.
3. **Image de profil** : Une image de profil est toujours plus plaisant que l'image de base de discord (certains services, comme GitHub, remplaceront l'image par leur logo).
4. **Lien** : Ce lien va être très important pour la suite car c'est grâce à lui que nous allons pouvoir envoyer les messages.

Une fois notre webhook créé, nous allons pouvoir l'essayer. Vous pouvez utiliser [ce petit outil](https://discord.club/tools/embed-generator) ou bien utiliser IFTTT, une plateforme gratuite utilisée pour réaliser des tâches automatiques comme envoyer un message via un webhook quand quelqu'un envoie un tweet ou ajoute une musique dans sa playlist spotify.

Ici, je vais créer une petite application via IFTTT me permettant d'envoyer un message lorsque je poste un tweet.
Lors de la création d'une application sur IFTTT, la phrase `if this then that` apparait. Cela permet de mettre en place une condition et de faire quelque chose lorsque cette même condition est respectée.

##### this
Dans cette partie-là, nous allons sélectionner `Twitter` dans la liste des services puis `New tweet by you`. Cela permet à IFTTT de mettre en place la condition suivante :<br>
Si l'utilisateur poste un tweet, alors ...

##### that
Maintenant vient la partie la "plus compliquée". Il va falloir créer l'action à exécuter. C'est à ce moment-là que la moindre virgule, ou la moindre parenthèse en trop peut tout casser.

Il va donc falloir selectionner `Webhook` dans la liste des services puis `Make a web request`. Vous allez alors être devant ce panneau de configuration.

{% include image.html url="assets/images/blog/ifttt-webhooks-discord/configuration.png" alt="Création de la requête" width="350px" %}

1. **URL** : Collez l'URL de votre webhook dans cette barre de saisie.
2. **Méthode** : Selectionnez la méthode `POST`. Nous voulons envoyer quelque chose via ce webhook.
3. **Type de contenu** : Sélectionnez `application/json` car le contenu envoyé sera sous la forme d'une requète JSON.
4. **Contenu** : Dans cette section, nous allons mettre ce que nous voulons envoyer comme contenu via notre webhook. Je vous invite fortement à [lire cette documentation]((https://birdie0.github.io/discord-webhooks-guide/)) pour en apprendre plus à propos de la construction de webhook.

{%raw%}
Pour le contenu, nous allons afficher : notre nom d'utilisateur `{{UserName}}`, le lien vers notre tweet `{{LinkToTweet}}` ainsi que le contenu de notre tweet `{{Text}}`.

```json
{
  "embeds": [
    {
      "description": "{{Text}}",
      "author": {
        "name": "@{{UserName}}",
        "url": "{{LinkToTweet}}"
      },
      "color": 11053224
    }
  ]
}
```
{%endraw%}

Ensuite, il suffit simplement de sauvegarder et d'observer le résultat lorsque vous postez un tweet !

{% include image.html url="assets/images/blog/ifttt-webhooks-discord/webhook.png" alt="Affichage du webhook dans le channel souhaité" width="550px" %}


Tutoriel de création d'un webhook pour GitHub sur le [site de discord](https://support.discordapp.com/hc/fr/articles/228383668-Utiliser-les-Webhooks)
