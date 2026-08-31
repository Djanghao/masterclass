# Dart..

**Author:** 0varun
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/4896339/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/4896339/)

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
  List<int> replaceElements(List<int> arr) {
    int n = arr.length;
    
   int max = -1;
        for (int i = n - 1; i >= 0; i--) {
      int temp = arr[i];
      arr[i] = max;
      
      if (temp > max) {
        max = temp;
      }
    }
    
    return arr;
  }
}

```