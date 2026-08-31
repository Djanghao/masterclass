# my soln

**Author:** anupamraZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/subtree-removal-game-with-fibonacci-tree/solutions/3669287/](https://leetcode.com/problems/subtree-removal-game-with-fibonacci-tree/solutions/3669287/)

---



# Code
```
class Solution {
 public:
  bool findGameWinner(const int n) {
    return (n - 1) % 6 != 0;
  }
};
```