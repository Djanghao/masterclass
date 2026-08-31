# dart solution

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/5006337/](https://leetcode.com/problems/circular-array-loop/solutions/5006337/)

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
  bool circularArrayLoop(List<int> nums) {
    final int n = nums.length;
    if (n < 2) return false;

    int advance(int i) {
     final int val = (i + nums[i]) % n;
     return val >= 0 ? val : n + val;
  }

    for (int i = 0; i < n; ++i) {
      if (nums[i] == 0) continue;
      int slow = i;
      int fast = advance(slow);
      while (nums[i] * nums[fast] > 0 && nums[i] * nums[advance(fast)] > 0) {
        if (slow == fast) {
          if (slow == advance(slow)) break;
          return true; 
        }
        slow = advance(slow);
        fast = advance(advance(fast));
      }
      slow = i;
      while (nums[i] * nums[slow] > 0) {
        final int next = advance(slow);
        nums[slow] = 0;
        slow = next;
      }
    }
    return false; 
  }
}
```