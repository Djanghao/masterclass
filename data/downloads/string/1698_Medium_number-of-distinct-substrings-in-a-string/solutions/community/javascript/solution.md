# JavaScript Solution - Trie

**Author:** Deadication
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/1059877/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/1059877/)

---

```
var countDistinct = function(s) {
    const n = s.length;
    const trie = {};
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        let curr = trie;
        
        for (let j = i; j < n; j++) {
            const char = s.charAt(j);
            
            if (!curr[char]) {
                curr[char] = {};
                count++;
            }
            
            curr = curr[char];
        }
        
        curr.end = true;
    }
    
    return count;
}
```