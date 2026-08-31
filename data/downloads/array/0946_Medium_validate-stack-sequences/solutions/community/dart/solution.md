# 100% beat in Memory || Beat 50% in Runtime || Using DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/5269724/](https://leetcode.com/problems/validate-stack-sequences/solutions/5269724/)

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
  bool validateStackSequences(List<int> pushed, List<int> popped) {
   List<int> stack = [];
    int j = 0;

    for (int num in pushed) {
      stack.add(num);
      while (stack.isNotEmpty && stack.last == popped[j]) {
        stack.removeLast(); 
        j++;
      }
    }
    return stack.isEmpty;
  }
}
```