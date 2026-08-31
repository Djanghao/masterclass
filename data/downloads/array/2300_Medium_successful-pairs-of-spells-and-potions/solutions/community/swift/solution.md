# Swift | Binary Search

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3367941/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3367941/)

---

**Binary Search (accepted answer)**
```
class Solution {
    func successfulPairs(_ spells: [Int], _ potions: [Int], _ success: Int) -> [Int] {
        let potions = potions.sorted()
        
        return spells.map { spell in
            var (left, right) = (0, potions.count)
            while left < right {
                let mid = (left+right)/2
                (left, right) = spell * potions[mid] >= success ? (left, mid) : (mid+1, right)
            }
            return potions.count - left
        }
    }
}
```