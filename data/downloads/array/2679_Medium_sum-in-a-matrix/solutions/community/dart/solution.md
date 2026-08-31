# Dart code

**Author:** Marat_Ramazanov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/3764942/](https://leetcode.com/problems/sum-in-a-matrix/solutions/3764942/)

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
  int matrixSum(List<List<int>> nums) {
  for(List<int> sublist in nums) {
    sublist.sort((a,b) => b.compareTo(a));
  }
  List<List<int>> output = [];
  for(int i = 0; i < nums[0].length; i++) {
    List<int> firstNumbers = [];
    for(List<int> sublist in nums) {
      firstNumbers.add(sublist[i]);
    }
    output.add(firstNumbers);
  }
  List<int> maxNumbers = output.map((e) => e.reduce((value, element) => value > element ? value : element)).toList();
  int result = maxNumbers.reduce((value, element) => value + element);
  return result;
  }
}
```