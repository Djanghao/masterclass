# Use sum to find the differences

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/movement-of-robots/solutions/3702894/](https://leetcode.com/problems/movement-of-robots/solutions/3702894/)

---

```
const int MOD = 1000000007;
class Solution {
  int sumDistance(List<int> nums, String s, int d) {
    List<int> finals = [];
    for (int i = 0; i < nums.length; i++)
      finals.add((s[i] == 'L') ? nums[i] - d : nums[i] + d);
    finals.sort();

    int res = 0;

    int right_sum = finals.reduce((value, element) => value + element);
    int left_sum = 0;
    
    for (int i = 0; i < finals.length; i++) {
      res = (res +
          right_sum - (finals.length - i) * finals[i] ) % MOD
      ;
      
      right_sum -= finals[i];
      left_sum += finals[i];
    }
    return res;
  }
}
```