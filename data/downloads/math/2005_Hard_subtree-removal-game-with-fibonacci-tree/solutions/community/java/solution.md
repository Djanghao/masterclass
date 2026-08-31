# Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/subtree-removal-game-with-fibonacci-tree/solutions/3055498/](https://leetcode.com/problems/subtree-removal-game-with-fibonacci-tree/solutions/3055498/)

---

```C++ []
class Solution {
public:
    bool findGameWinner(int n) {
        return (n-1)%6 != 0;
    }
};
```

```Python3 []
class Solution:
    def findGameWinner(self, n: int) -> bool:
        return n % 6 != 1
```

```Java []
class Solution {
  public boolean findGameWinner(int n) {
    return n % 6 != 1;
  }
}
```
