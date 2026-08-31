# Solution Can You Eat Your Favorite Candy on Your Favorite Day?

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/5580355/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/5580355/)

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
class Solution { List<bool> canEat(List<int> candiesCount, List<List<int>> queries) { List<int> pref = List.filled(candiesCount.length, 0); List<bool> result = List.filled(queries.length, false); pref[0] = candiesCount[0]; for (int i = 1; i < candiesCount.length; i++) { pref[i] = pref[i - 1] + candiesCount[i]; }

for (int i = 0; i < queries.length; i++) {
  int day = queries[i][1];
  int type = queries[i][0];
  int cap = queries[i][2];
  if (type == 0) {
    if (pref[0] > day) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  } else {
    int x = pref[type - 1];
    int t = 0;
    t = x ~/ cap;
    if (t > day) {
      result[i] = false;
    } else if (pref[type] > day) {
      result[i] = true;
    }
  }
}
return result;
} }
```