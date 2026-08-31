# Dart

**Author:** Krishnapriya_MP
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5230722/](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5230722/)

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
  int countTriplets(List<int> arr) {
    int n = arr.length;
    int count = 0;
    List<int> prefixXOR = List<int>.filled(n + 1, 0);
    for (int i = 0; i < n; i++) {
      prefixXOR[i + 1] = prefixXOR[i] ^ arr[i];
    }
    for(int i = 0; i < n; i++) {
      for(int k = i + 1; k < n; k++) {
        if(prefixXOR[i] == prefixXOR[k + 1]) {
          count += (k - i);
        }
      }
    }

    return count;
  }
}
```