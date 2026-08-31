# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 4
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/5730584/](https://leetcode.com/problems/consecutive-characters/solutions/5730584/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/consecutive-characters/submissions/1377518875
- ***C++ Code -->*** https://leetcode.com/problems/consecutive-characters/submissions/1377391724
- ***Python3 Code -->*** https://leetcode.com/problems/consecutive-characters/submissions/1377471507
- ***Java Code -->*** https://leetcode.com/problems/consecutive-characters/submissions/1377466619
- ***C Code -->*** https://leetcode.com/problems/consecutive-characters/submissions/1377490145
- ***Python Code -->*** https://leetcode.com/problems/consecutive-characters/submissions/1377469342
- ***C# Code -->*** https://leetcode.com/problems/consecutive-characters/submissions/1377501664
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
      O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
      O(1)
# Code
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    var maclen = 0, currlen = 0
    let curr_ch = '\\0'
    for (let ch of s) {
        if (ch == curr_ch)
            currlen++
        else {
            curr_ch = ch
            currlen = 1
        }
        maclen = Math.max(maclen, currlen)
    }
    return maclen
};
```
![th.jpeg](./images/1.jpeg)
