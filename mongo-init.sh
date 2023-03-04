#!/bin/bash

set -e

mongosh <<EOF
use admin;
db.createUser({
  user: '$MONGO_DB_ADMIN_USERNAME',
  pwd: '$MONGO_DB_ADMIN_PASSWORD',
  roles: [{
    role: "userAdminAnyDatabase",
    db: "admin"
  }]
});
use cjsite;
db.createUser({
  user: '$MONGO_DB_USERNAME',
  pwd: '$MONGO_DB_PASSWORD',
  roles: [{
    role: "readWrite",
    db: "cjsite"
  }]
});
db.createCollection('general');
db.general.insertOne({
  	headers: {
		studio: 'О студии',
		prices: 'Услуги и цены',
		contacts: 'Контакты',
	},
  	buttonText: 'Связаться',
  	links: [
		{
			class: 'phone-link',
			href: 'tel:+79155938587'
		},
		{
			class: 'vk-link',
			href: 'https://vk.com/cj_rec'
		},
		{
			class: 'tg-link',
			href: 'https://t.me/grawler'
		},
		{
			class: 'insta-link',
			href: 'https://instagram.com/cj_rec'
		},
		{
			class: 'email-link',
			href: 'mailto:cjrec@yandex.ru'
		}
	],
	prices: [
		{
			price: 350,
			title: 'Репетиция группы',
			src: 'rehearsal.png',
			alt: 'Band rehearsal'
		},
		{
			price: 500,
			title: 'Запись вокала/инструмента',
			src: 'instrumentrec.png',
			alt: 'Instrument or vocals recording services'
		},
		{
			price: 750,
			title: 'Запись группы лайвсетом',
			src: 'livesetrec.png',
			alt: 'Live set recording services'
		},
		{
			price: 2000,
			title: 'Сведение/мастеринг',
			src: 'mixing.png',
			alt: 'Mixing services'
		}
	]
});
EOF