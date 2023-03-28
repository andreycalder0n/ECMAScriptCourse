const regex = /\b(a)+\b/g;

const text = 'This is a example text en spanglish, para usar el regex';

for (const match of text.matchAll(regex)) {
    console.table(match);
}