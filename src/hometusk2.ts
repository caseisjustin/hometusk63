// hometusk 2
function abbreviatePhrase(phrase: string): string {
    const words = phrase.split(/\s+|-/);

    const cleanWords = words.map(word => word.replace(/[^\w]/g, ''));

    const abbreviations = cleanWords.map(word => word.charAt(0).toUpperCase()).join('');

    return abbreviations;
}

console.log(abbreviatePhrase("As Soon As Possible"));
console.log(abbreviatePhrase("Liquid-crystal display"));
console.log(abbreviatePhrase("Thank George It's Friday!"));
