---
layout: post
date: 2019-12-01 18:12
title: "Adding webhooks to our serverless chat-bot"
image: https://user-images.githubusercontent.com/1228996/69931419-c7e6f380-148c-11ea-9c4e-759f9fb308ee.png
description: "Added a new service to our chat bot that allows calling web hooks based on socket.io events.  Then spent the rest of the stream attempting to add a volume mount to our Azure app service from our storage account."
comments: true
tags: [twitch, stream, azure, faunadb, socket-io, javascript, webhook]
replay: https://youtu.be/tRS_95po8z0
---

### Stream Replay Link

[{{page.replay}}]({{page.replay}})

<!--more-->

### Today's Candle To Code By

<a href="https://stinkycandlecompany.com/product/leather-candle/" target="_blank">Leather</a>

### Goals

- [x] Add webhook type to our GraphQL schema and load to FaunaDB
- [x] Add webhook service to call webhooks based off socket.io events

## Today's stream brought to you by

### Subscribers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
    <span>sorskoot<br/>
      <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/sorskoot" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/sorskoot" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>snoopaloopy<br/>
      <a href="https://twitch.tv/snoopaloopy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/realdonaldtrump" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bfd92059-385a-44f5-8c50-c07ddd553e1c-profile_image-300x300.png"/>
    <span>SausageCam<br/>
      <a href="https://twitch.tv/sausagecam" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3f4ecb5f-0940-4086-9223-692cce0baf30-profile_image-300x300.png"/>
    <span>Southern_Cross<br/>
      <a href="https://twitch.tv/southern_cross" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2cf97457-191d-4268-b565-8be2ae0c94a8-profile_image-300x300.png"/>
    <span>CodeStencil<br/>
      <a href="https://twitch.tv/codestencil" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b5834df2-25df-49ce-b0ed-47388aa720e5-profile_image-300x300.png"/>
    <span>iScreemCodes<br/>
      <a href="https://twitch.tv/iscreemcodes" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/51b2380b-55c8-4acd-8e4b-21a0b86bf901-profile_image-300x300.png"/>
    <span>dare_devel_ops<br/>
      <a href="https://twitch.tv/dare_devel_ops" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/daredevelops" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/daredevelops" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/908fd818-1fbe-4b44-8633-dfc6bec175c9-profile_image-300x300.png"/>
    <span>Flyken<br/>
      <a href="https://twitch.tv/flyken" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/flyken4" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/flyken271" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/68fb2863-c65e-46c3-b3e5-cf17397627f7-profile_image-300x300.png"/>
    <span>Dan_it_is<br/>
      <a href="https://twitch.tv/dan_it_is" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/568d9ae4-6ae2-42d8-a171-2c894bb4cbe8-profile_image-300x300.png"/>
    <span>SlevinthHeaven<br/>
      <a href="https://twitch.tv/slevinthheaven" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/c423501e-c05f-4883-97f6-05804d6db468-profile_image-300x300.jpeg"/>
    <span>cldubya<br/>
      <a href="https://twitch.tv/cldubya" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/d5068df5265f12b0-profile_image-300x300.png"/>
    <span>RobinMalfait<br/>
      <a href="https://twitch.tv/robinmalfait" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png"/>
    <span>Valkosuklaaa<br/>
      <a href="https://twitch.tv/valkosuklaaa" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>jameyl1877<br/>
      <a href="https://twitch.tv/jameyl1877" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/efa111d94da63812-profile_image-300x300.png"/>
    <span>Brendoneus<br/>
      <a href="https://twitch.tv/brendoneus" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png"/>
    <span>veritasJS<br/>
      <a href="https://twitch.tv/veritasjs" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/cd60b68d-824e-4e41-b7bb-8d9fb85258a7-profile_image-300x300.png"/>
    <span>fork04_<br/>
      <a href="https://twitch.tv/fork04_" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Cheers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7fee9160-ef80-4217-9317-66f208211159-profile_image-300x300.png"/>
    <span>ninjacoder88<br/>
      <a href="https://twitch.tv/ninjacoder88" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/ninjacoder88" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/callowcreation-profile_image-d35d1ca5e62d7a16-300x300.png"/>
    <span>caLLowCreation<br/>
      <a href="https://twitch.tv/callowcreation" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3885112752ee0082-profile_image-300x300.jpeg"/>
    <span>PakmanJr<br/>
      <a href="https://twitch.tv/pakmanjr" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/efeb108d-6334-42da-89b8-993a6292f95a-profile_image-300x300.png"/>
    <span>ToeFrog<br/>
      <a href="https://twitch.tv/toefrog" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/thetoefrog" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/toefrog" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/51b2380b-55c8-4acd-8e4b-21a0b86bf901-profile_image-300x300.png"/>
    <span>dare_devel_ops<br/>
      <a href="https://twitch.tv/dare_devel_ops" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/daredevelops" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/daredevelops" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

### Moderators

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0b2472c-b103-44d3-b132-c618032217ef-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

### Followers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/rrrobbbjjjaccc-profile_image-fa9beb442ec90bfb-300x300.jpeg"/>
    <span>rrrobbbjjjaccc<br/>
      <a href="https://twitch.tv/rrrobbbjjjaccc" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/eb613cc8-8bee-465a-acc3-4b3d95a62918-profile_image-300x300.png"/>
    <span>ADangerousMix<br/>
      <a href="https://twitch.tv/adangerousmix" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png"/>
    <span>DevelopIt<br/>
      <a href="https://twitch.tv/developit" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/35071d1e-3bed-457d-a934-de30c4db9eee-profile_image-300x300.jpg"/>
    <span>malencryption<br/>
      <a href="https://twitch.tv/malencryption" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>rich9t3<br/>
      <a href="https://twitch.tv/rich9t3" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png"/>
    <span>veritasJS<br/>
      <a href="https://twitch.tv/veritasjs" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>pentestical<br/>
      <a href="https://twitch.tv/pentestical" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png"/>
    <span>jmreicha<br/>
      <a href="https://twitch.tv/jmreicha" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/89746f00-38d5-4b95-b26d-5ab40ca1d8d9-profile_image-300x300.png"/>
    <span>impmja<br/>
      <a href="https://twitch.tv/impmja" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bitobrian-profile_image-0d479b1775833d6f-300x300.jpeg"/>
    <span>bitobrian<br/>
      <a href="https://twitch.tv/bitobrian" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Contributors

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png"/>
    <span>ProfElements1<br/>
      <a href="https://twitch.tv/profelements1" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8e4eab31-0a66-4b1a-a0df-ca962e4a9b8e-profile_image-300x300.jpeg"/>
    <span>Lannonbr<br/>
      <a href="https://twitch.tv/lannonbr" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
    <span>sorskoot<br/>
      <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/sorskoot" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/sorskoot" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/anqo_-profile_image-f28c9010ccb9636f-300x300.jpeg"/>
    <span>anqo_<br/>
      <a href="https://twitch.tv/anqo_" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/efeb108d-6334-42da-89b8-993a6292f95a-profile_image-300x300.png"/>
    <span>ToeFrog<br/>
      <a href="https://twitch.tv/toefrog" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/thetoefrog" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/toefrog" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>snoopaloopy<br/>
      <a href="https://twitch.tv/snoopaloopy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/realdonaldtrump" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7fee9160-ef80-4217-9317-66f208211159-profile_image-300x300.png"/>
    <span>ninjacoder88<br/>
      <a href="https://twitch.tv/ninjacoder88" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/ninjacoder88" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0b2472c-b103-44d3-b132-c618032217ef-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e2a9f2fe-89df-4fc9-a585-c1d214b6acc1-profile_image-300x300.png"/>
    <span>FullStackLive<br/>
      <a href="https://twitch.tv/fullstacklive" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bfd92059-385a-44f5-8c50-c07ddd553e1c-profile_image-300x300.png"/>
    <span>SausageCam<br/>
      <a href="https://twitch.tv/sausagecam" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b5834df2-25df-49ce-b0ed-47388aa720e5-profile_image-300x300.png"/>
    <span>iScreemCodes<br/>
      <a href="https://twitch.tv/iscreemcodes" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/5c68c507-5498-44f4-a6c9-365902e28d0b-profile_image-300x300.png"/>
    <span>codephobia<br/>
      <a href="https://twitch.tv/codephobia" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/codephobia" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/codephobia" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2703ee6f-2eb1-4d8a-b8d4-2a3f5c923b6e-profile_image-300x300.jpg"/>
    <span>progrium<br/>
      <a href="https://twitch.tv/progrium" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>vierra01<br/>
      <a href="https://twitch.tv/vierra01" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png"/>
    <span>darvein21<br/>
      <a href="https://twitch.tv/darvein21" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/51b2380b-55c8-4acd-8e4b-21a0b86bf901-profile_image-300x300.png"/>
    <span>dare_devel_ops<br/>
      <a href="https://twitch.tv/dare_devel_ops" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/daredevelops" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/daredevelops" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/d5068df5265f12b0-profile_image-300x300.png"/>
    <span>RobinMalfait<br/>
      <a href="https://twitch.tv/robinmalfait" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png"/>
    <span>veritasJS<br/>
      <a href="https://twitch.tv/veritasjs" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7053c960-b79a-46b6-bf1f-35a0a2f0c3a0-profile_image-300x300.png"/>
    <span>soul_serpent<br/>
      <a href="https://twitch.tv/soul_serpent" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>pentestical<br/>
      <a href="https://twitch.tv/pentestical" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/feelthegreed-profile_image-8a35ced7c738e7e2-300x300.png"/>
    <span>FeelTheGreed<br/>
      <a href="https://twitch.tv/feelthegreed" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/908fd818-1fbe-4b44-8633-dfc6bec175c9-profile_image-300x300.png"/>
    <span>Flyken<br/>
      <a href="https://twitch.tv/flyken" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/flyken4" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/flyken271" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>krangence<br/>
      <a href="https://twitch.tv/krangence" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>