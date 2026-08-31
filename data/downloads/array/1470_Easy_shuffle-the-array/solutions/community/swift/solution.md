# Swift: Shuffle the Array

**Author:** AsahiOcean
**Votes:** 18
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/1153854/](https://leetcode.com/problems/shuffle-the-array/solutions/1153854/)

---

**Well, it's a classic.**
**If you have a solution easier than this, please share :)**

```swift
class Solution {
    func shuffle(_ nums: [Int], _ n: Int) -> [Int] {
        var res = [Int]()
        for i in 0..<n {
            res.append(nums[i])
            res.append(nums[i + n])
        }
        return res
    }
}
```