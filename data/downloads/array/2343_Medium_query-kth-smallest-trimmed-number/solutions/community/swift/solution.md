# Swift 100% faster Quickselect

**Author:** blest
**Votes:** 0
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/3907870/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/3907870/)

---

```
class Solution {
    func smallestTrimmedNumbers(_ nums: [String], _ queries: [[Int]]) -> [Int] {
        queries.map { query in
            let (k, trim) = (query[0], query[1])
            let trimmed = nums.enumerated().map { (String($1.suffix(trim)), $0) }
            let kthSmallest = findKthSmallest(nums: trimmed, k: k)
            return kthSmallest.1
        }
    }

    // quickselect
    func findKthSmallest(nums: [(String, Int)], k: Int) -> (String, Int) {
        let pivot = nums.randomElement()!
        let (lesser, equal, greater) = nums
            .reduce(into: ([(String, Int)](), [(String, Int)](), [(String, Int)]())) { res, num in
            if num < pivot {
                res.0.append(num) // elements less than the pivot
            } else if num > pivot {
                res.2.append(num) // elements greater than the pivot
            } else {
                res.1.append(num) // elements equal to the pivot
            }
        }
        if k <= lesser.count {
            return findKthSmallest(nums: lesser, k: k)
        } else if k > lesser.count + equal.count {
            return findKthSmallest(nums: greater, k: k - (lesser.count + equal.count))
        }
        return pivot
    }
}
```