# 100% speed, 100% memory beaten

**Author:** abrorjonbahodirov
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-pow/solutions/5323518/](https://leetcode.com/problems/super-pow/solutions/5323518/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int superPow(int a, List<int> b) {
  BigInt result = BigInt.parse(b.join());
  BigInt res = BigInt.from(a).modPow(result, BigInt.from(1337));
    return res.toInt();
  }
}
```