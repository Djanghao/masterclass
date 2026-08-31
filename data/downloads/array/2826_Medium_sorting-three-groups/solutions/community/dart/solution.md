# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/3934336/](https://leetcode.com/problems/sorting-three-groups/solutions/3934336/)

---

# Code
```
import 'dart:math';

class Solution {
  int minimumOperations(List<int> nums) {
    final int N = nums.length;
    
    int helper(final int A, final int B) {
      int res = 0;
      for (int i = 0; i < N; i++) {
        if (i < A) {
          if (nums[i] != 1) res++;
        } else if (i < B) {
          if (nums[i] != 2) res++;
        } else {
          if (nums[i] != 3) res++;
        }
      }
      return res;
    }
    
    int res = 1 << 30;
    for (int a = 0; a <= N; a++) {
      for (int b = a; b <= N; b++) {
        res = min(res, helper(a, b));
      }
    }
    return res;
  }
}


```