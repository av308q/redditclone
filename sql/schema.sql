create table users (
  id serial primary key,
  first_name varchar(200),
  last_name varchar(200),
  user_name varchar(200),
  password varchar(500),
  subbreddits varchar(200)
  
);

create table subreddits (
  id serial primary key,
  name varchar(100),
); 

create table chat (
  id serial primary key,
  comments text,
  subreddit_id integer references subreddits(id),
  user_id integer references users(id)
);
