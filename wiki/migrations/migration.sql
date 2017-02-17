CREATE TABLE wiki
(id BIGSERIAL PRIMARY KEY
title varchar(255) NOT NULL,
content varchar(255) NOT NULL,
date authored DATE(10) NOT NULL,
date updated  DATE(10) NOT NULL,
category varchar(255) NOT NULL));


