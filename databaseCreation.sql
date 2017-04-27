create database eecs393;
use eecs393;
create table posts (pid int not null auto_increment, title varchar(48), username varchar(16), post varchar(600), primary key (pid));
create table comments (username varchar(16), comment varchar(600), pid int, foreign key (pid) references posts(pid));

truncate posts;

insert into posts (title, username, post) values ('EECS 393', 'avb27', 'Hi there!');
insert into posts (title, username, post) values ('EECS 338', 'oxk47', 'How are you doing on the quizzes in here?');
insert into posts (title, username, post) values ('EECS 376', 'rjp89', 'Who else is lost?');
insert into posts (title, username, post) values ('EECS 132', 'anr41', 'Plz help');

insert into comments (username, comment, pid) values ('avb27', 'Hi guys!', 1);
insert into comments (username, comment, pid) values ('oxk47', 'How is it going?', 1);
insert into comments (username, comment, pid) values ('rjp89', 'Not too badly!', 1);
insert into comments (username, comment, pid) values ('anr41', 'No way!', 1);

insert into comments (username, comment, pid) values ('rjp89', 'Not wonderfully', 2);
insert into comments (username, comment, pid) values ('anr41', 'Not happy', 2);

insert into comments (username, comment, pid) values ('avb27', 'I am!', 3);
insert into comments (username, comment, pid) values ('oxk47', 'How is it going?', 3);
insert into comments (username, comment, pid) values ('rjp89', 'Not well', 3);

insert into comments (username, comment, pid) values ('anr41', 'No way!', 4);

SET SQL_SAFE_UPDATES=0;