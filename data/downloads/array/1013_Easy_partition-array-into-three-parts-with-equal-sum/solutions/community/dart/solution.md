# Solution in Dart

**Author:** Ahrorov
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4430551/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4430551/)

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
  bool canThreePartsEqualSum(List<int> arr) {
    int summa = 0;
    for (int v in arr) {
      summa += v;
    }
    if (summa % 3 != 0) {
      return false;
    }

    int sum1 = 0;
    int left = 0;
    for (int i = 0; i < arr.length; i++) {
      sum1 += arr[i];
      if (sum1 == summa / 3) {
        left = i;
        break;
      }
    }

    int sum3 = 0;
    int right = 0;
    for (int j = arr.length - 1; j >= 0; j--) {
      sum3 += arr[j];
      if (sum3 == summa / 3) {
        right = j;
        break;
      }
    }

    return right - 1 > left && sum1 == summa / 3 && sum3 == summa / 3;
  }
}

```