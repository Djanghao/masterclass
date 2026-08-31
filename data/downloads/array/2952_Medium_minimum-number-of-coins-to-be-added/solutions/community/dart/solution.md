# simple dart solution

**Author:** muhammedijaz_kp
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4775723/](https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4775723/)

---



# Code
```
class Solution {
  int minimumAddedCoins(List<int> coins, int target) {
 coins.sort(); 
  int result = 0;
  int i = 0;
  int sum = 1;

  while (sum <= target) {
    if (i < coins.length && coins[i] <= sum) {
      sum += coins[i];
      i++;
    } else {
      sum += sum;
      result++;
    }
  }

  return result;
  }
}
```