# Beat 100% in Runtime || 100% in Memory || Using DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/5320075/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/5320075/)

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
  int distMoney(int money, int children) {
    if (money < children) {
      return -1;
    }

    if (money <= 8) {
      return 0;
    }

    List<int> arr = List.filled(children, 1);
    money -= children;

    int count = 0;
    for (int i = 0; i < arr.length; i++) {
      if (money - 7 >= 0) {
        count++;
        money -= 7;
      } else if (money > 0) {
        if (money == 3 && i == arr.length - 1) {
          return count - 1;
        } else {
          arr[i] += money;
          money = 0;
        }
      }
    }

    if (money > 0) {
      count--;
    }

    return count;
  }
}
```