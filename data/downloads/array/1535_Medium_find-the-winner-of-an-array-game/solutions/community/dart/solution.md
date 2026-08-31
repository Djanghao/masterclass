# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4250066/](https://leetcode.com/problems/find-the-winner-of-an-array-game/solutions/4250066/)

---

# Code
```
class Solution {
  int getWinner(List<int> arr, int k) {
    int winner = arr[0], wins = 0;
    for (int num in arr) {
      if (num > winner) {
        winner = num;
        wins = 1;
      } else if (num < winner) {
        wins++;
      }
      if (wins == k) return winner;
    }
    return winner;
  }
}
```