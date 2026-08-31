# [JavaScript] Easy Sliding Window With Explanation & Analysis - O(n) time O(1) space

**Author:** joshgebara
**Votes:** 18
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/635700/](https://leetcode.com/problems/consecutive-characters/solutions/635700/)

---

**Explanation:**
1. Increase the size of the window by incrementing the end index.
2. After each increment, check if the size of the window ```(end - start + 1)``` is greater than the current max size (power). 
3. Repeat steps 1 and 2 until the start and end characters of the window are no longer equal, then move to the start index to the same position as the end index to begin checking the next substring with unique characters.

**Solution:**
```javascript
var maxPower = function(s) {
    let power = 1
    
    let start = 0
    for (let end = 1; end < s.length; end++) {
        if (s[start] !== s[end]) {
            start = end
        }
            
        power = Math.max(power, end - start + 1)
    }
    
    return power
};
```

**Complexity:**
* Time: O(n) where n = s.length
* Space: O(1)