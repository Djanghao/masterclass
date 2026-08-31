# [DART] Sliding window 한국 이용자를 위한 다트의 단순 솔루션

**Author:** hyungzin
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152326/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152326/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
\uBB38\uC81C\uC5D0 \uB2F5\uC774 \uC788\uB2E4
max - min == length -1
\uC704\uC758 \uC870\uAC74\uC774\uC131\uB9BD\uB418\uB824\uBA74 1\uC529 \uC21C\uCC28\uC801\uC73C\uB85C \uB298\uC5B4\uB098\uB294 \uC911\uBCF5\uC5C6\uB294 \uC218\uC758 \uC9D1\uD569\uC774 \uD544\uC694\uD558\uB2E4
ex) 1,2,3,4,5 => 5(length) - 1 == 5(max) - 1(min) 
\uC774\uC640 \uAC19\uC774 \uB9D0\uC774\uB2E4.
\uB530\uB77C\uC11C length - 1 \uC758 \uBC94\uC704\uB9CC\uD07C sliding window\uB85C \uBC00\uC5B4\uAC00\uBA70 \uD574\uB2F9 \uBC94\uC704\uC548\uC5D0 \uC5BC\uB9C8\uB9CC\uD07C\uC758 \uC720\uD6A8\uD55C \uC22B\uC790\uAC00 \uD3EC\uD568\uB418\uC5B4\uC788\uB294\uC9C0 \uD655\uC778 \uD6C4
\uC804\uCCB4 length\uC5D0\uC11C \uADF8 \uC720\uD6A8\uD55C \uC22B\uC790\uC758 \uAC1C\uC218\uB97C \uCC28\uAC10\uD574\uC8FC\uBA74 
\uADF8 \uBE48\uD2C8\uC744 \uBA54\uAFB8\uAE30 \uC704\uD574 \uBA87\uAC1C\uC758 \uC22B\uC790\uB97C \uC774\uB3D9\uD574\uC57C \uD558\uB294\uC9C0 \uAD6C\uD560 \uC218 \uC788\uB2E4

1. toSet\uC73C\uB85C distinct \uD6C4 sort\uB85C \uC815\uB82C\uD558\uC5EC \uC21C\uC11C\uB300\uB85C \uC720\uB2C8\uD06C\uD55C \uAC12\uB9CC \uB0A8\uAE34\uB2E4
2. while\uBB38\uC744 \uD1B5\uD574 \uC21C\uD68C\uD558\uBA70 \uC870\uAC74\uC5D0 \uBD80\uD569\uD558\uB294 \uC22B\uC790\uAC00 \uB9CE\uC774 \uD3EC\uD568\uB41C \uBC94\uC704\uB97C \uAD6C\uD55C\uB2E4
3. \uC804\uCCB4 \uD544\uC694\uD55C \uAE38\uC774\uC5D0\uC11C 2\uBC88\uC744 \uD1B5\uD574 \uAD6C\uD55C \uC720\uD6A8\uD55C \uBC94\uC704\uB9CC\uD07C \uCC28\uAC10\uD55C\uB2E4.

# Complexity
- Time complexity:
O(NlogN) (sort \uB55C\uC2DC)

- Space complexity:
O(N)

# Code
```
import 'dart:math';
class Solution {
  int minOperations(List<int> nums) {
      final arr = nums.toSet().toList()..sort();
      final len = nums.length;
      int mx = 0;
      int l = 0;
      int r = 0;
      while (r < arr.length){
        //   \uBC94\uC704 \uB0B4\uC5D0 \uD3EC\uD568\uB418\uBA74
          if (arr[r] - arr[l] < len){
              mx = max(mx, r - l + 1);
              r++;
              continue;
          }
        //   \uBC94\uC704\uB0B4\uC5D0 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC73C\uBA74
          l++;
          if (r < l) r++;
      }
      return len - mx ;
  }
}
```