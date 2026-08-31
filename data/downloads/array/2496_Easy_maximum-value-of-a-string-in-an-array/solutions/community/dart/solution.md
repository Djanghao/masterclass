# Easy

**Author:** lijith006
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/6116048/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/6116048/)

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
  int maximumValue(List<String> strs) {
 int maximum=0;
 strs.forEach((items){
    int?value=int.tryParse(items);
    maximum=max(value??items.length,maximum);

 });
 return maximum;
}
}
```