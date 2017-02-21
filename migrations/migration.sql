DROP TABLE IF EXISTS wiki;

CREATE TABLE wiki
(id BIGSERIAL PRIMARY KEY,
title varchar(255) NOT NULL,
content text NOT NULL,
date_authored DATE,
date_updated DATE,
category varchar(255) NOT NULL);


