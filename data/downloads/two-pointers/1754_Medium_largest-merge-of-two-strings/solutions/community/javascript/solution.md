# [JavaScript] Elegant Greedy Solution

**Author:** control_the_narrative
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/1169318/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/1169318/)

---

Time: `O(N^2)`
Space: `O(N)`
```javascript
var largestMerge = function(word1, word2) {
    let ans = '';
    let w1 = 0, w2 = 0;
    
    while(w1 < word1.length && w2 < word2.length) {
        if(word1[w1] > word2[w2]) ans += word1[w1++];
        else if(word2[w2] > word1[w1]) ans += word2[w2++];
        else {
            const rest1 = word1.slice(w1);
            const rest2 = word2.slice(w2);
            
            if(rest1 > rest2) ans += word1[w1++];
            else ans += word2[w2++];
        }
    }
    ans += word1.slice(w1);
    ans += word2.slice(w2);
    return ans;
};
```