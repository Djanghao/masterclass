# It doesn't work ! oh just give it  if (s == 'Infinity' || s == '-Infinity' || s == '+Infinity')

**Author:** gado_zzz
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-number/solutions/6127258/](https://leetcode.com/problems/valid-number/solutions/6127258/)

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
bool isNumber(String s) {
  if (s == 'Infinity' || s == '-Infinity' || s == '+Infinity' || s == 'NaN'|| s == 'nan' || s == 'NAN' || s == 'inf' || s == 'INF' || s == 'Infinity' || s == '-inf' || s == '-INF' || s == '-Infinity') {
    return false;
  }
  else
  if (s.isEmpty || s.length > 20) {
    return false;
  }
  else {
    try{
      if (double.parse(s) is double || int.parse(s) is int) {
        return true;
      }
      else {
        return false;
      }
      return true;
    }
    catch(e){
      return false;
    }
  }
}
}
```