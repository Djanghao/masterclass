# Simple solution

**Author:** eepson123tw
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5184938/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5184938/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
simple solution for javascript
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
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {
    let res = s.split('');

    // Handle the hour tens place
    if (res[0] === '?') {
        res[0] = (res[1] === '?' || res[1] < '2') ? '1' : '0';
    }

    // Handle the hour units place
    if (res[1] === '?') {
        res[1] = (res[0] === '1') ? '1' : '9';
    }

    // Handle the minute tens place
    if (res[3] === '?') {
        res[3] = '5';
    }

    // Handle the minute units place
    if (res[4] === '?') {
        res[4] = '9';
    }

    return res.join('');
};
```