# simple dart solution  (easy to understand)

**Author:** sayedadinan
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/4935445/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/4935445/)

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
  int findNumbers(List<int> nums) {
    int count=0;
      for (int number in nums) {
    int numdigits = number.toString().length;
    if(numdigits.isEven){
        count++;
    }
  }
  return count;
  }
}
```