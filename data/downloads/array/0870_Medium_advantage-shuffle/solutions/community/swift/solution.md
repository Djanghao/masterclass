# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/4165694/](https://leetcode.com/problems/advantage-shuffle/solutions/4165694/)

---

```
class Solution {
    func advantageCount(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        
        var stock = nums1.sorted()
        var res = [Int]()

        for n in nums2 {
            let i = stock.firstIndex { $0 > n } ?? 0
            res.append(stock[i])
            stock.remove(at: i)
        }

        return res
    }
}
```