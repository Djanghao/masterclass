# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1189619/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/1189619/)

---

Swift solution
```
class Solution {
    func getMinDistance(_ nums: [Int], _ target: Int, _ start: Int) -> Int {
        let c = nums.count
        for i in 0...max(start, c - 1 - start) {
            let left = start - i, right = start + i
            if left >= 0 && nums[left] == target || right < c && nums[right] == target {
                return i
            }
        }
        return -1
    }
}
```