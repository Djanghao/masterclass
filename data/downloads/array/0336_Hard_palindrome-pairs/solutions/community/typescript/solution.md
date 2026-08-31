# ✅ JS || Two Approaches || With explanation || Easy to Understand

**Author:** pmistry_
**Votes:** 3
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/2585645/](https://leetcode.com/problems/palindrome-pairs/solutions/2585645/)

---

I just found this Blog and Github repository with solutions to Leetcode problems.
https://leet-codes.blogspot.com/2022/09/336-palindrome-pairs.html
It is very useful, and I just wanted to share it with you.
Note: You can bookmark it as a resource, and for another approaches
<br>

```
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let word_map = new Map(), ans = []
    for (let i = 0; i < words.length; i++)
        word_map.set(words[i], i)
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "") {
            for (let j = 0; j < words.length; j++)
                if (is_Palindrome(words[j]) && j !== i)
                    ans.push([i, j], [j, i])
            continue
        }
        let reverse_str = words[i].split("").reverse().join("")
        let res = word_map.get(reverse_str)
        if (res !== undefined && res !== i)
            ans.push([i, res])
        for (let j = 1; j < reverse_str.length; j++) {
            if (is_Palindrome(reverse_str, 0, j - 1)) {
                let res = word_map.get(reverse_str.slice(j))
                if (res !== undefined)
                    ans.push([i, res])
            }
            if (is_Palindrome(reverse_str, j)) {
                let res = word_map.get(reverse_str.slice(0,j))
                if (res !== undefined)
                    ans.push([res, i])
            }
        }
    }
    return ans
};

//check if a word is palindrome
const is_Palindrome = (word, i=0, j=word.length-1) => {
    while (i < j)
        if (word[i++] !== word[j--]) return false
    return true
}
```
