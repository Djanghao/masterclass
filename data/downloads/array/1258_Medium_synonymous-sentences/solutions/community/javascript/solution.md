# dfs solution without union find

**Author:** aimisbetter
**Votes:** 1
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/4765953/](https://leetcode.com/problems/synonymous-sentences/solutions/4765953/)

---

Pretty straight forward backtracking problem once you understand that a = b, b = c implies that a = c and c = a.

You don't really need union find, just generate the list of mappings for each word, then compute the list of words for current token using dfs. I could optimize this a bit more with memoization, but it won't have much effect.

O(syns^text words)

space O(syns + words);

# Code
```
/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
var generateSentences = function(synonyms, text) {
    const sentences = [];
    const tokens = text.trim().split(' ');
    const mappings = {};

    for (const [word1, word2] of synonyms) {
        mappings[word1] = mappings[word1] || [];
        mappings[word2] = mappings[word2] || [];
        mappings[word1].push(word2);
        mappings[word2].push(word1);
    }

    function getWords(syn, words, visited) {
        if (!mappings[syn] || visited.has(syn)) {
            return;
        }
        visited.add(syn);
        words.push(syn);
        for (const word of mappings[syn]) {
            getWords(word, words, visited);
        }
    }

    function generateSentences(index, sentence) {
        if (index >= tokens.length) {
            sentences.push(sentence.join(' '));
            return;
        }

        let token = tokens[index];
        const words = [];
        getWords(token, words, new Set());
        if (words.length === 0) {
            words.push(token);
        }
        for (const word of words) {
            sentence.push(word);
            generateSentences(index + 1, sentence);
            sentence.pop();
        }
    }
    generateSentences(0, []);

    return sentences.sort((a, b) => a < b ? -1 : 1);
};
```