CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    category text
);

CREATE TABLE IF NOT EXISTS pages (
    id SERIAL PRIMARY KEY,
    category_id INTEGER,
    title TEXT,
    created TIMESTAMPTZ DEFAULT now(),
    bookmark BOOLEAN
);

CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    title_id INTEGER,
    note TEXT,
    updated TIMESTAMPTZ DEFAULT now(),
    highlight BOOLEAN DEFAULT false
);