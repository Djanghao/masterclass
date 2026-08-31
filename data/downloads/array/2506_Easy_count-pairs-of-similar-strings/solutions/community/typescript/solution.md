# Simple 3 liner solution that beats 78% of runtime

**Author:** elangoram1998
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/4414640/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/4414640/)

---



# Code
```
function similarPairs(words: string[]): number {
    const sortedWords = words.map((word) => [...new Set(word)].sort().join());
    const frequency = new Map<string, number>();

    return sortedWords.reduce((count, word) => {
        const f = frequency.get(word) || 0;
        count += f;
        frequency.set(word, f+1);

        return count;
    }, 0);
};
```