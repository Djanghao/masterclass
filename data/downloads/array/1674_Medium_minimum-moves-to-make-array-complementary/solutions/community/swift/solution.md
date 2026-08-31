# Swift interpretation of the top O(max(n,k)) method

**Author:** stevenpcurtis
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/953737/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/953737/)

---

Here is the Swift version

```swift
class Solution {
    func minMoves(_ nums: [Int], _ limit: Int) -> Int {
        var delta: [Int] = Array(repeating: 0, count: 2 * limit + 2)
        let n = nums.count
        for i in 0..<n / 2{
            let a = nums[i]
            let b = nums[n - 1 - i]
            delta[2] += 2
            delta[min(a, b) + 1] -= 1
            delta[a + b] -= 1
            delta[a + b + 1] += 1
            delta[max(a, b) + limit + 1] += 1
        }
        var res = 2 * n
        var curr = 0
        for i in 2...2 * limit {
            curr += delta[i]
            res = min(res, curr)
        }
        return res
    }
}

```