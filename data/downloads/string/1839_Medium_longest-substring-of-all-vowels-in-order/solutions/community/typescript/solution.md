# concise solution (faster than 100% typescript submissions)

**Author:** cachiengion314
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1971842/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1971842/)

---

Runtime: 99 ms, faster than 100.00% of TypeScript online submissions 
```
function longestBeautifulSubstring_2(word: string): number {
    let maxCount = 0
    let l = 0, r = 1
    let vowelCount = 1

    while (r < word.length) {
        let key_char = word[r]
        if (key_char < word[r - 1]) {
            vowelCount = 1
            l = r
        } else if (key_char > word[r - 1]) {
            vowelCount++
        }
        if (vowelCount === 5) {
            maxCount = Math.max(maxCount, r - l + 1)
        }
        r++
    }
    return maxCount
}
```