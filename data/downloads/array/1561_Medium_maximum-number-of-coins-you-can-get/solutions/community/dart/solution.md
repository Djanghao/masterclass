# 🟢🔴🟢 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/5873100/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/5873100/)

---

```
class Solution {
  int maxCoins(List<int> piles) {
    piles.sort();
    int maxCoins = 0;
    int bobPick = 0;
    int myPick = piles.length - 2;
    while(bobPick < myPick){
        maxCoins += piles[myPick];
        myPick -= 2;
        bobPick++;
    }
    return maxCoins;
  }
}
```