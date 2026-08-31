# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 8
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/5750820/](https://leetcode.com/problems/hamming-distance/solutions/5750820/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/hamming-distance/submissions/1382020740
- ***C++ Code -->*** https://leetcode.com/problems/hamming-distance/submissions/1381300359
- ***Python3 Code -->*** https://leetcode.com/problems/hamming-distance/submissions/1382016318
- ***Java Code -->*** https://leetcode.com/problems/hamming-distance/submissions/1382010971
- ***C Code -->*** https://leetcode.com/problems/hamming-distance/submissions/1382018089
- ***Python Code -->*** https://leetcode.com/problems/hamming-distance/submissions/1382012626
- ***C# Code -->*** https://leetcode.com/problems/hamming-distance/submissions/1382019612
- ***C++ Code -->*** https://leetcode.com/problems/hamming-distance/submissions/1382009922
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
      O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
      O(1)
# Code
```javascript []
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let num = x ^ y
    let cnt = 0
    while (num) {
        cnt++;
        num = num & (num - 1)
    }
    return cnt
};
```
![th.jpeg](./images/1.jpeg)
