# Typescript Solution

**Author:** Gdman
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/5889473/](https://leetcode.com/problems/sentence-screen-fitting/solutions/5889473/)

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
```typescript []
function wordsTyping(sentence: string[], rows: number, cols: number): number {
    let word_idx = 0
    let times = 0
    let rows_left = rows
    while (rows_left > 0) {
        rows_left--
        let tempcol = cols
        while (tempcol) {
            const word = sentence[word_idx].length;
            if(tempcol >= word) {
                tempcol -= word+1
                word_idx = (word_idx +1 )%sentence.length
                if(word_idx === 0) {
                    times++
                }
            } else {
                break
            }
        }
        if (word_idx === 0) {
            return Math.floor(times*rows/(rows-rows_left))
        }
    }
    return times
};
```