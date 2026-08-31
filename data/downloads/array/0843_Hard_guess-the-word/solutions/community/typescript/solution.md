# TS Solution

**Author:** GennadySX
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/4629243/](https://leetcode.com/problems/guess-the-word/solutions/4629243/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the Master's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *      guess(word: string): number {}
 * }
 */


function findSecretWord(words: string[], master: Master): void {
    let curr = 0;
    function onAfterCompute(words: string[], guessed: string, compute: number): string[]{
        let new_words = [];
        if (compute == -1) compute = 0;
        function convertStringConstrain(a: string, b: string): number{
            let equals = 0;
            for (let i = 0 ; 6 > i ; i++){
                if (a[i] == b[i]){
                    equals++;
                }
            }
            return equals;
        }

        for (let i = 0 ; words.length > i ; i++){
            if (guessed != words[i]){
                if (convertStringConstrain(words[i], guessed) == compute){
                    new_words.push(words[i]);
                }
            }
        }
        return new_words;
    }
    for (let i = 0 ; curr != 6 ; i++){
        curr = master.guess(words[Math.floor(words.length / 2)]);
        words = onAfterCompute(words, words[Math.floor(words.length / 2)], curr);
    }
}



```