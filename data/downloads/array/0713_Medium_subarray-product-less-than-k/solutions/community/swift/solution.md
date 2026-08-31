# Sliding Window ( 2 Simple Solutions)

**Author:** ProbablyLost
**Votes:** 2
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/4192856/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/4192856/)

---

# Intuition
Iterate through each single integer and corresponding subarray(s), and test condition against `k`, while saving frequency of success in `result`

# First Solution
$$O(n^2)$$
```
class Solution {
    func numSubarrayProductLessThanK(_ nums: [Int], _ k: Int) -> Int {
        var i = 0, j = 0, product = 1, result = 0
        
        guard nums.count > 1 else { //early exit if array has only one element
            return ((nums.first ?? 0) < k ? 1:0)
        }
        
        while j < nums.count {
            product *= nums[j] //sliding window should always start with 1*num
            if product < k {
                j += 1 //expand window by incrementing right pointer
                result += 1
            } 
            
            if product >= k || j >= nums.count {
                i += 1 //start new window
                j = i
                product = 1
            }
        }
        return result
    }
}
```

# Second Solution
$$O(n^2)$$
```
class Solution {
    func numSubarrayProductLessThanK(_ nums: [Int], _ k: Int) -> Int {
        var i = 0, product = 1, result = 0

        guard nums.count > 1 else { //early exit if array has only one element
            return ((nums.first ?? 0) < k ? 1:0)
        }

        for j in 0 ..< nums.count {
            product *= nums[j] 
            i = j
            while product < k && (i < nums.count) {
                result += 1
                i += 1
                if i < nums.count {
                    product *= nums[i]
                }
            }
            product = 1
        }
        return result
    }
}
```