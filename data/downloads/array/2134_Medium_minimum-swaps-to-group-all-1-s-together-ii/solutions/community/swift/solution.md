# Swift💯fast🛝🪟

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5571687/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5571687/)

---

**Sliding Window (accepted answer)**
```
class Solution {
    func minSwaps(_ nums: [Int]) -> Int {
        let windowSize = nums.reduce(0,+)
        var onesInWindow = nums.prefix(windowSize).reduce(0,+)
        let maxOnesInWindow = nums.indices.reduce(0) { maxOnes, i in
            onesInWindow -= nums[i] // slide trailing edge
            onesInWindow += nums[(i+windowSize) % nums.count] // slide leading edge
            return max(maxOnes, onesInWindow)
        }
        return windowSize - maxOnesInWindow
    }
}
```
1) Create a window (window size = 1's count). 
2) Slide window across all elements of array. Determine which window position has max 1's present
3) Subtract max 1's from window size and that's the minimum swap count to return.
