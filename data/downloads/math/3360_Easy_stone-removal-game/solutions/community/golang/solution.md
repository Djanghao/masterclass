# Simulation, Time: O(n), Space: O(1)

**Author:** gunbbdew123123
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6075799/](https://leetcode.com/problems/stone-removal-game/solutions/6075799/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def canAliceWin(self, n: int) -> bool:
        stones = 10
        while n >= stones:
            n -= stones
            stones -= 1        
        return stones % 2 == 1
```

```golang []
func canAliceWin(n int) bool {
    stones := 10
    for n >= stones {
        n -= stones
        stones--
    }     
    return stones % 2 == 1
}
```