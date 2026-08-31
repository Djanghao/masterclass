# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5837942/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5837942/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func stableMountains(_ height: [Int], _ threshold: Int) -> [Int] {
        (1..<height.count).filter{i in height[i-1] > threshold}
    }
}
```