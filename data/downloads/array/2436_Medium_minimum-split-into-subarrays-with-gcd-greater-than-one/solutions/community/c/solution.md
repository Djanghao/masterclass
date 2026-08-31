# Greedy O(n) C++

**Author:** lilyx998
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/2692670/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/2692670/)

---

The key observation is that if a subarray greedily include the next number on its right, this action does not hurt the global optimal answer.

```c++
class Solution {
 public:
  int minimumSplits(vector<int>& nums) {
    int res = 0, cur = 1; // cur represents the gcd of the current subarray
    for (int v : nums) {
      cur = gcd(cur, v);
      if (cur == 1) { // only if the current subarray cannot include the number, we start a new subarray
        res++; // count one more subarray
        cur = v;
      }
    }
    return res;
  }
};
```