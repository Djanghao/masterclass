# My Simple and Fast Swift Solution

**Author:** yy929058
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/94928/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/94928/)

---

    func minMoves2(_ nums: [Int]) -> Int {
        let sorted = nums.sorted(by: <)
        let middle = nums.count/2
        var ans = 0
        for i in sorted{
            ans += abs(sorted[middle] - i)
        }
        return ans
    }