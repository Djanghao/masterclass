# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/5343861/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/5343861/)

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
  int maximumCandies(List<int> candies, int k) {
    int ans = 0;
    int l = 1;
    int h = candies.fold(0, (sum, candy) => sum + candy) ~/ k;

    while (l <= h) {
      int mid = (l + h) ~/ 2;
      if (valid(mid, candies, k)) {
        ans = mid;
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }

    return ans;
  }

  bool valid(int mid, List<int> candies, int k) {
    int piles = 0;
    for (int candy in candies) {
      piles += candy ~/ mid;
      if (piles >= k) {
        return true;
      }
    }
    return false;
  }
}
```