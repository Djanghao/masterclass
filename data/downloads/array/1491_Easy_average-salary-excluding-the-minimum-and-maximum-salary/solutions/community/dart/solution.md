# Easy Approach

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/5993663/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/5993663/)

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
  double average(List<int> salary) {
    salary.sort();
    int averagesalaryl=0;
for (int i=1;i<salary.length-1;i++){
   averagesalaryl=averagesalaryl+salary[i];

}return averagesalaryl/(salary.length-2);
  }
}
```