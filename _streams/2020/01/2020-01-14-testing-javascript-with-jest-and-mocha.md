---
layout: post
date: 2020-01-14 19:01
title: "How the heck do we test JavaScript? Let's learn Jest & Mocha"
image: https://res.cloudinary.com/dk3rdh3yo/image/upload/w_auto,c_scale/73208156-921c5f00-410b-11ea-9201-1d7649604610_vfxeba.png
description: "Learning how to use Jest & Mocha to test JavaScript."
comments: true
tags: [twitch, stream, javascript, jest, mocha]
replay: https://youtu.be/ZL8Ogng9MyM
---

### Stream Replay Link

[{{page.replay}}]({{page.replay}})

<!--more-->

### Today's Candle To Code By

<a href="https://amzn.to/2GSsMxX" target="_blank">Warm Tobacco Pipe</a>

## Today's stream brought to you by

### Subscribers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>ChanceDev<br/>
      <a href="https://twitch.tv/chancedev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png"/>
    <span>giusdp<br/>
      <a href="https://twitch.tv/giusdp" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/9c9ed3b2-3ecb-4ada-b4bd-cdea50ce7044-profile_image-300x300.png"/>
    <span>SurlyDev<br/>
      <a href="https://twitch.tv/surlydev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/67e828dd15a80a0c-profile_image-300x300.png"/>
    <span>MoistBootyBoy<br/>
      <a href="https://twitch.tv/moistbootyboy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/590e3f6f-8a85-4704-9342-dc375bed546c-profile_image-300x300.jpeg"/>
    <span>AdronHall<br/>
      <a href="https://twitch.tv/adronhall" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Cheers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0544659c-8d18-44dd-ae1b-b659553a4ffa-profile_image-300x300.jpg"/>
    <span>Clarkio<br/>
      <a href="https://twitch.tv/clarkio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/_clarkio" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/clarkio" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0544659c-8d18-44dd-ae1b-b659553a4ffa-profile_image-300x300.jpg"/>
    <span>Clarkio<br/>
      <a href="https://twitch.tv/clarkio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/_clarkio" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/clarkio" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0544659c-8d18-44dd-ae1b-b659553a4ffa-profile_image-300x300.jpg"/>
    <span>Clarkio<br/>
      <a href="https://twitch.tv/clarkio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/_clarkio" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/clarkio" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

### Raids

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2cc01832-4ccb-466a-8c76-e522e52cdf2b-profile_image-300x300.png"/>
    <span>Beachcasts<br/>
      <a href="https://twitch.tv/beachcasts" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Moderators

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7ff026e-98ca-4081-9e96-17e46b43df9d-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/solenberg" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/solenberg" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0544659c-8d18-44dd-ae1b-b659553a4ffa-profile_image-300x300.jpg"/>
    <span>Clarkio<br/>
      <a href="https://twitch.tv/clarkio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/_clarkio" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/clarkio" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
    <span>IAmNotMyself<br/>
      <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/notmyself" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/notmyself" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0b2472c-b103-44d3-b132-c618032217ef-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

### Followers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png"/>
    <span>arteghan<br/>
      <a href="https://twitch.tv/arteghan" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png"/>
    <span>giusdp<br/>
      <a href="https://twitch.tv/giusdp" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png"/>
    <span>DayAdam<br/>
      <a href="https://twitch.tv/dayadam" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"/>
    <span>jakekda<br/>
      <a href="https://twitch.tv/jakekda" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>rapapagame<br/>
      <a href="https://twitch.tv/rapapagame" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>danyonks<br/>
      <a href="https://twitch.tv/danyonks" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/angryapplegw2-profile_image-f548b26ed7650711-300x300.jpeg"/>
    <span>Angryapplegw2<br/>
      <a href="https://twitch.tv/angryapplegw2" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png"/>
    <span>StjernholmDEV<br/>
      <a href="https://twitch.tv/stjernholmdev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"/>
    <span>vuespain<br/>
      <a href="https://twitch.tv/vuespain" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>webdevwitch<br/>
      <a href="https://twitch.tv/webdevwitch" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Contributors

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png"/>
    <span>giusdp<br/>
      <a href="https://twitch.tv/giusdp" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
    <span>IAmNotMyself<br/>
      <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/notmyself" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/notmyself" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/4fc2a442-c910-40d9-b512-0d11b063188c-profile_image-300x300.png"/>
    <span>itshaydendev<br/>
      <a href="https://twitch.tv/itshaydendev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/5c68c507-5498-44f4-a6c9-365902e28d0b-profile_image-300x300.png"/>
    <span>codephobia<br/>
      <a href="https://twitch.tv/codephobia" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/codephobia" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/codephobia" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7ff026e-98ca-4081-9e96-17e46b43df9d-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/solenberg" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/solenberg" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>ChanceDev<br/>
      <a href="https://twitch.tv/chancedev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>stucamp<br/>
      <a href="https://twitch.tv/stucamp" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0544659c-8d18-44dd-ae1b-b659553a4ffa-profile_image-300x300.jpg"/>
    <span>Clarkio<br/>
      <a href="https://twitch.tv/clarkio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/_clarkio" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/clarkio" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/73016bf4-5cc4-4d09-bed3-6db777c2e7e5-profile_image-300x300.png"/>
    <span>MarcusVoiceProgrammer<br/>
      <a href="https://twitch.tv/marcusvoiceprogrammer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/51b2380b-55c8-4acd-8e4b-21a0b86bf901-profile_image-300x300.png"/>
    <span>dare_devel_ops<br/>
      <a href="https://twitch.tv/dare_devel_ops" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/daredevelops" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/daredevelops" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"/>
    <span>jaronstrypsteen<br/>
      <a href="https://twitch.tv/jaronstrypsteen" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
    <span>sorskoot<br/>
      <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/sorskoot" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/sorskoot" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/fa425591-26cb-49e5-9f6d-699b32038f55-profile_image-300x300.jpg"/>
    <span>ashishsinghbaghel<br/>
      <a href="https://twitch.tv/ashishsinghbaghel" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mechdeveloper" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>bl3nd865<br/>
      <a href="https://twitch.tv/bl3nd865" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/63a1ab96-e388-4937-8ae2-958aea48b799-profile_image-300x300.jpeg"/>
    <span>fishingdev<br/>
      <a href="https://twitch.tv/fishingdev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b66d7b06-c30d-4f50-b137-ceab4ffed540-profile_image-300x300.png"/>
    <span>Exonenttv<br/>
      <a href="https://twitch.tv/exonenttv" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png"/>
    <span>DayAdam<br/>
      <a href="https://twitch.tv/dayadam" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/d5068df5265f12b0-profile_image-300x300.png"/>
    <span>RobinMalfait<br/>
      <a href="https://twitch.tv/robinmalfait" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/926c0d6b-bc04-4dba-88a6-915dc6c6bb54-profile_image-300x300.png"/>
    <span>CopperBeardy<br/>
      <a href="https://twitch.tv/copperbeardy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/copperbeardy" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/copperbeardy" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3d87767dfbf36816-profile_image-300x300.jpeg"/>
    <span>DoctorArgus<br/>
      <a href="https://twitch.tv/doctorargus" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3d75947d9a1f8725-profile_image-300x300.jpeg"/>
    <span>andi1984<br/>
      <a href="https://twitch.tv/andi1984" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/angryapplegw2-profile_image-f548b26ed7650711-300x300.jpeg"/>
    <span>Angryapplegw2<br/>
      <a href="https://twitch.tv/angryapplegw2" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/kershoc-profile_image-be83643ea5351531-300x300.png"/>
    <span>Kershoc<br/>
      <a href="https://twitch.tv/kershoc" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>danyonks<br/>
      <a href="https://twitch.tv/danyonks" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2cc01832-4ccb-466a-8c76-e522e52cdf2b-profile_image-300x300.png"/>
    <span>Beachcasts<br/>
      <a href="https://twitch.tv/beachcasts" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0b2472c-b103-44d3-b132-c618032217ef-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>unrulyhotfixer<br/>
      <a href="https://twitch.tv/unrulyhotfixer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png"/>
    <span>StjernholmDEV<br/>
      <a href="https://twitch.tv/stjernholmdev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/dragonfleas-profile_image-5dd1d93a02bd4548-300x300.png"/>
    <span>Dragonfleas<br/>
      <a href="https://twitch.tv/dragonfleas" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e270ed68-0556-4e4d-a96a-fe1a611fe520-profile_image-300x300.jpeg"/>
    <span>kidqueb<br/>
      <a href="https://twitch.tv/kidqueb" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/49d8f8dc-6c7b-4d4c-b61a-564537df9d15-profile_image-300x300.png"/>
    <span>pardel<br/>
      <a href="https://twitch.tv/pardel" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>vinny_code<br/>
      <a href="https://twitch.tv/vinny_code" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>EternalDevCoder<br/>
      <a href="https://twitch.tv/eternaldevcoder" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0d81e861b461f14-profile_image-300x300.jpeg"/>
    <span>Wally_KC<br/>
      <a href="https://twitch.tv/wally_kc" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f46f0100-fd8a-48ee-9f80-d43f34d58e3f-profile_image-300x300.jpeg"/>
    <span>AidanLynge<br/>
      <a href="https://twitch.tv/aidanlynge" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/9c9ed3b2-3ecb-4ada-b4bd-cdea50ce7044-profile_image-300x300.png"/>
    <span>SurlyDev<br/>
      <a href="https://twitch.tv/surlydev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/590e3f6f-8a85-4704-9342-dc375bed546c-profile_image-300x300.jpeg"/>
    <span>AdronHall<br/>
      <a href="https://twitch.tv/adronhall" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>
