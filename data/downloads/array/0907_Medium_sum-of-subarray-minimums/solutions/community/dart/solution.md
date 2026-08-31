# Beats 100.00% of users with Dart

**Author:** naweeth03
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4596626/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4596626/)

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
  int sumSubarrayMins(List<int> arr) {
    const int kMod = 1000000007;
    int n = arr.length;
    int ans = 0;
    List<int> prevMin = List.filled(n, -1);
    List<int> nextMin = List.filled(n, n);
    List<int> stack = [];

    for (int i = 0; i < n; i++) {
      while (stack.isNotEmpty && arr[stack.last] > arr[i]) {
        int index = stack.removeLast();
        nextMin[index] = i;
      }
      if (stack.isNotEmpty) {
        prevMin[i] = stack.last;
      }
      stack.add(i);
    }
    for (int i = 0; i < n; i++) {
      ans += arr[i] * (i - prevMin[i]) * (nextMin[i] - i);
      ans %= kMod;
    }

    return ans;
  }
}

```