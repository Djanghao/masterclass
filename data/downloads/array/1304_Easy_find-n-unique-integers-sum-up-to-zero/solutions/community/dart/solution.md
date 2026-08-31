# Dart...

**Author:** 0varun
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/4904995/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/4904995/)

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
  List<int> sumZero(int n) {
    List<int>nums=[];
    int sum = 0;

    for(int i = 1; i < n; i++){
        nums.add(i);
        sum += i;
    }

    nums.add(-sum);
    return nums;
  }
}
```