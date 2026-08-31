# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/4514340/](https://leetcode.com/problems/next-greater-element-iii/solutions/4514340/)

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
  int nextGreaterElement(int n) {
    final List<int> nums = n.toString().split('').map((e) => int.parse(e)).toList();
    var idx = -1;
    for (int i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }

    if (idx == -1) {
        return -1;
    }

    for (int i = nums.length - 1; i > idx; i--) {
        if (nums[i] > nums[idx]) {
            var temp = nums[i];
            nums[i] = nums[idx];
            nums[idx] = temp;
            break;
        }
    }

    nums.setRange(idx + 1, nums.length, nums.sublist(idx + 1).reversed);
    
    var multiplier = pow(10, nums.length - 1).toInt();
    var res = 0;

    for (int i = 0; i < nums.length; i++) {
        res += nums[i] * multiplier;
        multiplier ~/= 10;
    }

    if (res > 2147483647) {
        return -1;
    }

    return res;
  }
}
```