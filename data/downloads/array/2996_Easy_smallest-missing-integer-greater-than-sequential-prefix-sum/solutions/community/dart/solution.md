# Dart...

**Author:** 0varun
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4566067/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4566067/)

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
  int missingInteger(List<int> nums) {
    int temp = nums[0], val = 0;

    for (int i = 1; i < nums.length; i ++ ){
        val += temp;
        
        if (nums[i] == temp + 1) temp = nums[i];
        else {
            temp = 0;
            break;
        }
    }
    val += temp;
    
    while (true) {
        if (nums.contains(val)) val ++;
        else return val;
    }
   }
}
```