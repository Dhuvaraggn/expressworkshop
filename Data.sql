USE moviereview;

-- Insert Movies Data
INSERT INTO movies (title, description, releaseYear, genre, director, imageUrl) 
VALUES
('Vikram', 'An action thriller where a secret mission uncovers hidden truths.', 2022, 'Action', 'Lokesh Kanagaraj', 'https://example.com/vikram.jpg'),
('Master', 'A professor battles against a gangster who rules over a juvenile school.', 2021, 'Action, Thriller', 'Lokesh Kanagaraj', 'https://example.com/master.jpg'),
('Kaithi', 'A jailed convict must save a group of policemen from a drug cartel.', 2019, 'Action, Thriller', 'Lokesh Kanagaraj', 'https://example.com/kaithi.jpg'),
('Karnan', 'A young man fights against a corrupt system to defend his village.', 2021, 'Drama, Action', 'Mari Selvaraj', 'https://example.com/karnan.jpg'),
('Soorarai Pottru', 'A man’s dream to launch a low-cost airline takes on a path filled with challenges.', 2020, 'Drama', 'Sudha Kongara', 'https://example.com/soorarai_pottru.jpg');

-- Insert Users Data
INSERT INTO users (username, email, password, role) 
VALUES
('tamilfan1', 'tamilfan1@example.com', 'password123', 'user'),
('cinemalover2', 'cinemalover2@example.com', 'password123', 'user'),
('moviecritic3', 'moviecritic3@example.com', 'password123', 'admin'),
('actionlover4', 'actionlover4@example.com', 'password123', 'user'),
('dramaqueen5', 'dramaqueen5@example.com', 'password123', 'user');

-- Insert Reviews Data
INSERT INTO reviews (description, rating, userId, movieId) 
VALUES
('Amazing action and a gripping storyline! Must watch.', 5, 1, 1),  -- Review for Vikram
('The movie was great, but it could have been tighter in the second half.', 4, 2, 2),  -- Review for Master
('A well-made movie with some intense scenes. The acting was top-notch.', 4, 3, 3),  -- Review for Kaithi
('Karnan’s emotional journey is something that stays with you for a long time.', 5, 4, 4),  -- Review for Karnan
('A very inspiring story of perseverance and determination. Loved it!', 5, 5, 5);  -- Review for Soorarai Pottru
