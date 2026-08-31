# ✅✅✅ Swift Solution | Easy Understanding 🚀

**Author:** nanc0031
**Votes:** 5
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/2664623/](https://leetcode.com/problems/max-consecutive-ones/solutions/2664623/)

---

```
    func findMaxConsecutiveOnes(_ nums: [Int]) -> Int {
        var count: Int = 0
        var maxValue: Int = 0
        for num in nums {
            if (num == 1) {
                count = count+1
                maxValue = max(maxValue, count)
            } else {
                count = 0
            }
        }
        return maxValue
    }
```
**Do upvote if you understood the solution**