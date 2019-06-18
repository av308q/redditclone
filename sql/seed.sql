insert into users
    (first_name, last_name, user_name, password)
values
    ('Derp', 'McDerp', 'DerpMcDerp','1234')
;

insert into subreddits
    (name)
values
    ('Derp')
;

insert into posts
    (comments, content, subreddit_id, user_id,)
values
    ('derpderpderp', 'mcderpmcderpmcderp', 1, 1)
;

insert into comments
    (comments, subreddit_id, user_id, posts_id)
values
    ('derpderpderp', 'mcderpmcderpmcderp', 1, 1, 1)
;