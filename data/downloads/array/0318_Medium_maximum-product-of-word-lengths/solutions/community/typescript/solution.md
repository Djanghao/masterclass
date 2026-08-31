# Normal Approach - Maximum Product Of Words Length - Typescript

**Author:** mohanpathi11
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/4365912/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/4365912/)

---


# Code
```
function maxProduct(words: string[]): number {
    words.sort((a, b) => b.length - a.length);

    function hasCommonLetters(word1: string, word2: string): boolean {
        for (let char of word1) {
            if (word2.includes(char)) {
                return true;
            }
        }
        return false;
    }

    let maxProduct = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!hasCommonLetters(words[i], words[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
                break; // Exit early if no better result is possible
            }
        }
    }

    return maxProduct;
};
```