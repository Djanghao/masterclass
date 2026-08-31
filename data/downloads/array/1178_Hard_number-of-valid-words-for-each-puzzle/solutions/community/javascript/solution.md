# [Javascript] Bit-manipulation + Map Solution

**Author:** Haowonderful
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1562101/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/1562101/)

---

Looks like no one posted the bit-manipulation solution for js, here is what I wrote by JS:
```
var findNumOfValidWords = function(words, puzzles) {
    const wordMap = new Map();
    const aCharCode = 'a'.charCodeAt(0);
    words.forEach(word => {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            mask |= (1 << (word.charCodeAt(i) - aCharCode));
        }
        if (wordMap.has(mask)) {
            wordMap.set(mask, wordMap.get(mask) + 1);
        } else {
            wordMap.set(mask, 1);
        }
    });

    const result = [];
    for (let i = 0; i < puzzles.length; i++) {
        result.push(0);
        let curMask = 0;
        for (let j = 0; j < puzzles[i].length; j++) {
            curMask |= (1 << (puzzles[i].charCodeAt(j) - aCharCode));
        }
        const firstLetter = 1 << (puzzles[i].charCodeAt(0) - aCharCode);
        
        let start = curMask;
        while (start > 0) {
            if ((start & firstLetter) === firstLetter && wordMap.has(start)) {
                result[i] += wordMap.get(start);
            }
            
            start = (start - 1) & curMask
        }
    }
    
    return result;
};
```