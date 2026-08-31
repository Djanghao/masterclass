# Very easy JS solution with Sliding Window

**Author:** williams710504
**Votes:** 13
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/1342813/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/1342813/)

---

```
var lengthOfLongestSubstringTwoDistinct = function(s) {
    
    let max = 0
    let left = 0, right = 0
    let map = new Map()
    while(right < s.length) {
        map.set(s[right], right)
        if(map.size === 3) {
            let minIndex = Math.min(...map.values())
            map.delete(s[minIndex])
            left = minIndex + 1
        }
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
    
};
```