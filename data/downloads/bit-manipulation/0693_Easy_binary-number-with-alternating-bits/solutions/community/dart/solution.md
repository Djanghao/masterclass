# 100% speed, 100% memory

**Author:** abrorjonbahodirov
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4696528/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4696528/)

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
  bool hasAlternatingBits(int n) {
    String a = n.toRadixString(2);
    bool b = true;
    for(int i = 0; i < a.length-1; i++){
        if(a[i] == a[i+1]){
            b = b && false;
        }
    }
    return b;
  }
}
```