# Simulation, Time: O(n), Space: O(1)

**Author:** gunbbdew123123
**Votes:** 1
**Link:** [https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6075909/](https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6075909/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: (1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def shiftDistance(self, s: str, t: str, nextCost: List[int], previousCost: List[int]) -> int:
        cost = 0
        for i in range(len(s)):
            if s[i] == t[i]:
                continue

            cur = ord(s[i]) - ord('a')
            target = ord(t[i]) - ord('a')

            # go forward
            nCost = 0
            diff = (target - cur + 26) % 26
            for i in range(diff):
                nCost += nextCost[(cur + i) % 26]
                
            # go backward
            pCost = 0
            diff = (cur - target + 26) % 26
            for i in range(diff):
                pCost += previousCost[(cur - i) % 26]
                
            cost += min(nCost, pCost)    
        return cost
```

```golang []
func shiftDistance(s string, t string, nextCost []int, previousCost []int) int64 {
    cost := 0
    for i := 0; i< len(s); i++ {
        if s[i] == t[i] {
            continue
        }

        cur := int(s[i] - 'a')
        target := int(t[i] - 'a')

        // go forward
        nCost := 0
        diff := (target - cur + 26) % 26
        for j := 0; j < diff; j++ {
            nCost += nextCost[(cur + j + 26) % 26]
        }

        // go backward
        pCost := 0
        diff = (cur - target + 26) % 26
        for j := 0; j < diff; j++ {
            pCost += previousCost[(cur - j + 26) % 26]
        }

        cost += min(nCost, pCost)
    }
    return int64(cost)
}
```