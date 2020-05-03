CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    category text
);

CREATE TABLE IF NOT EXISTS pages (
    id SERIAL PRIMARY KEY,
    category_id INTEGER,
    title TEXT,
    created TIMESTAMPTZ default now(),
    bookmark BOOLEAN
);

CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    page_id INTEGER,
    note TEXT,
    highlight boolean,
    updated TIMESTAMPTZ default now()
);

CREATE TABLE IF NOT EXISTS highlights (
    id SERIAL PRIMARY KEY,
    item_id INTEGER
);

CREATE TABLE IF NOT EXISTS bookmarks (
    id SERIAL PRIMARY KEY,
    page_id INTEGER
);