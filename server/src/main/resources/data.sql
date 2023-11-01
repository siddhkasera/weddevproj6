DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('Crime'),('Fiction'),('YA'),('Mystery');

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Girl Who Died', 'Shannon Hollinger', 'Teacher Wanted at the Edge of the World', 14.33, 4.5, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Perfect Marriage', 'Jeneva Rose', 'Would you defend your husband if he was accused of killing his mistress?', 9.47, 3.90, TRUE, TRUE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Maid', 'Nita Prose', 'Locked-room mystery and a heartwarming journey of the spirit.', 14.40, 5.00, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Saving Myles', 'Carl Vonderau', 'An unassuming banker takes matter into his own hands to bring his son home.', 17.95, 4.87, TRUE, TRUE, 1001);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Invisible Hour', 'Alice Hoffman', 'A single dream is more powerful than a thousand realities.', 19.58, 2.90, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Keeper of Hidden Books', 'Madeline Martin', 'A heartwarming story about power of books to bring us together.', 11.49, 4.0, TRUE, TRUE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('My Roommate is a Vampire', 'Jenna Levine', 'True love is at stake in this charming, debut romantic comedy.', 15.30, 2.90, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Foxglove', 'Adalyn Grace', 'Dangerous, suspenseful, and seductive.', 14.98, 3.89, TRUE, TRUE, 1002);


INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Reign American Royals', 'Katherine McGee', 'Love might save the throne if secrets dont destroy everything first.', 6.89, 3.90, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Brothers Hawthrone', 'Jennifer Lynn Barnes', 'Four brothers. Two missions. One explosive read.', 10.15, 4.78, TRUE, TRUE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Six of Crows', 'Leigh Bargudo', 'Six dangerous outcasts. One impossible heist.', 8.89, 3.17, TRUE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('One of Us is Next', 'Karen McManus', 'Theres a new mystery to solve at Bayview High, and theres a whole new set of rules.', 7.99, 2.98, FALSE, FALSE, 1003);

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('A Tall Dark Trouble', 'Vanessa Montalban', 'An unputdownable debut for anyone who roots for magic, sisterhood, and love.',19.92, 4.18, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Together We Rot', 'Skyla Arndt', 'A teen girl looking for the truth about her missing mother.', 14.24, 3.81, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('One Night', 'Georgina Cross', 'One night. Thats all the time a family has to decide what to do with the man they believe murdered their daughter.', 15.80, 3.81, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Hurricane Blonde', 'Halley Sutton', 'A former child starlet is plunged back into the dangerous glitter of Hollywood after discovering a young actress body.',16.29, 3.71, TRUE, FALSE, 1004);

