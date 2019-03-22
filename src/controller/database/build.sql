BEGIN;
DROP TABLE IF EXISTS users, consultant,posts CASCADE;


CREATE TABLE users(
    id SERIAL  PRIMARY KEY  ,
    user_name VARCHAR(60) NOT NULL,
    password TEXT NOT NULL

);
CREATE TABLE consultant(
    id SERIAL  PRIMARY KEY  ,
    full_name VARCHAR(60) NOT NULL,
    user_name VARCHAR(60) NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    content TEXT,
    user_id INTEGER REFERENCES users(id),
    consultant_id INTEGER REFERENCES consultant(id),
    answer TEXT
);
INSERT INTO users(user_name,password) VALUES ('nour','123'),('deema','1234'),('aseel','12345');
INSERT INTO consultant(full_name,user_name,password) VALUES ('Dena Moeen','dena','111'),('Alaa Badra','alaa','22222'),('Ayman Al-Quqa','ayman','333'),('Nareman Hellis','nareman','444');
COMMIT;