# Fastes O(n) Easy to understand | Swift ✅

**Author:** rishixcode
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/5924029/](https://leetcode.com/problems/maximum-swap/solutions/5924029/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {

func maximumSwap(_ num: Int) -> Int {
    var arr = Array(String(num)).compactMap {Int(String($0))}
    var max = Int.min
    var maxIndex = 0
    var ind1 = -1
    var ind2 = -1
    
    // starting from behind do get the max element from last to swap with front
    for i in stride(from: arr.count - 1, through: 0, by: -1) {
        if arr[i] > max {
            max = arr[i]
            maxIndex = i
        } else if arr[i] < max {
            ind1 = i
            ind2 = maxIndex
        }
    }
    arr.swapAt(ind1, ind2)
    return Int(arr.compactMap {String($0)}.joined())!
}
}
```