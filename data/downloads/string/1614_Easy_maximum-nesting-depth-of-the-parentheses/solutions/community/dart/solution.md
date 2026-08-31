# Solution for dart beginners

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/6061423/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/6061423/)

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
```dart []
class Solution {
  int maxDepth(String s) {
    int current = 0;
    int max = 0;

    for (int i = 0;i<s.length;i++){
        if(s[i] == '('){
            current++;
        if(current > max){
            max = current;
        }
    }else if(s[i] == ')'){
        current--;
    }
  }
  return max;
}
}
```