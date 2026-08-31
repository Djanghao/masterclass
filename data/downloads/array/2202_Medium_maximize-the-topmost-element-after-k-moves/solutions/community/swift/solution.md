# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/5308802/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/5308802/)

---

# Intuition
The problem requires determining the maximum value that can be on the top of a pile after exactly k moves. Each move allows either removing the top element or adding any previously removed element back onto the pile. We need to consider both operations to ensure we get the maximum possible top element after k moves.

# Approach
1. Initial Checks:

- If k is 0, return the top element if it exists; otherwise, return -1.
- If the array has only one element and k is odd, return -1 because we will end up removing the single element.
Simulation:

2.  Simulation:
- Iterate through the first k elements and find the maximum value that can be the top of the pile after removing elements. We only consider up to k-1 elements because after k moves, any of these can be the top.
- Additionally, if k is less than the number of elements, consider the element at index k because it can be added back to the pile after k moves.

# Complexity
- Time complexity:
The time complexity is O(min(k,n)) because we iterate through the first k elements or the entire array, whichever is smaller.

- Space complexity:
The space complexity is O(1) because we only use a few extra variables, regardless of the input size.

# Code
```
class Solution {
    func maximumTop(_ nums: [Int], _ k: Int) -> Int {
        let n = nums.count
        
        if k == 0 {
            return n > 0 ? nums[0] : -1
        }
        
        if n == 1 {
            return k % 2 == 0 ? nums[0] : -1
        }
        
        var maxTop = -1
        
        for i in 0..<min(k, n) {
            if i < k - 1 {
                maxTop = max(maxTop, nums[i])
            }
        }
        
        if k < n {
            maxTop = max(maxTop, nums[k])
        }
        
        return maxTop
    }
}

```