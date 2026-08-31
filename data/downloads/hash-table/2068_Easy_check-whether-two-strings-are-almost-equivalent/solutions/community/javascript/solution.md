# ✔️ [JavaScript] HASH MAP, Explained

**Author:** artod
**Votes:** 10
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1745625/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1745625/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

Create a hashmap where keys are characters and values are frequencies. Iterate over `word1` and add +1 to the frequency in the hashmap. Same for `word2` but this time subtract -1. In the end, check whether any resulting frequency is greater than 3.

Time: **O(n)** - for scan
Space: **O(1)** - for hashmap

```
var checkAlmostEquivalent = function(word1, word2) {
    const hm = new Map()
    const addToHm = (ch, add) => {
        if (hm.has(ch)) 
            hm.set(ch, hm.get(ch) + (add ? +1 : -1))
        else 
            hm.set(ch, (add ? +1 : -1))  
    }
    
    for (let i = 0; i < word1.length; i++) {
        addToHm(word1[i], true) 
        addToHm(word2[i], false) 
    }
    
    for (const val of hm.values())
        if (Math.abs(val) > 3)
			return false
    
    return true
};
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**