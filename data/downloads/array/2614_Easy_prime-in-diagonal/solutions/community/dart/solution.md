# Simple Dart Solution

**Author:** Maqcel
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/3720832/](https://leetcode.com/problems/prime-in-diagonal/solutions/3720832/)

---


# Code
```
class Solution {
  int diagonalPrime(List<List<int>> nums) {
    int n = nums.length;
    int m = nums[0].length;
    int maxim = 0;

    for (int i = 0; i < n; i++) {
      if (checkPrime(nums[i][i])) {
        maxim = maxim < nums[i][i] ? nums[i][i] : maxim;
      }

      if (checkPrime(nums[n - 1 - i][i])) {
        maxim = maxim < nums[n - 1 - i][i] ? nums[n - 1 - i][i] : maxim;
      }
    }

    return maxim;
  }

  bool checkPrime(int k) {
    int count = 0;

    if (k == 1) {
      return false;
    }

    for (int i = 1; i * i <= k; i++) {
      if (k % i == 0) {
        count += 2;
      }
    }

    return count == 2;
  }
}

```