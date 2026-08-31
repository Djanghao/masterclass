# Simple solution in Swift

**Author:** josephfrancis100
**Votes:** 4
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/1297513/](https://leetcode.com/problems/contains-duplicate-ii/solutions/1297513/)

---

```
func containsNearbyDuplicate(_ nums: [Int], _ k: Int) -> Bool {
        var dict = [Int: Int]()
        for (currentIndex, num) in nums.enumerated() {
            if let duplicateIndex = dict[num], currentIndex - duplicateIndex <= k {
                return true
            }
            dict[num] = currentIndex
        }
        return false
    }
```