# Swift - Easy to understand solution

**Author:** atakan14
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-or/solutions/5119353/](https://leetcode.com/problems/maximum-or/solutions/5119353/)

---

# Intuition
For all the numbers in nums array find the total OR (|) of all the numbers before and after it, then apply operations to every number and calculate max OR's

# Approach
* Create a pre array which contains the total OR's before the current num at i
```swift 
let nums = [8,2,1]
let pre = [0, 8, 10]

// pre[2] = 10, which means total OR's of nums before i = 2 (8 | 2)
// Note: pre[0] = 0 because there's no number before index 0
```

* Create a post array which contains the total OR's after the current num at i
```swift
let nums = [8,2,1]
let post = [3, 1, 0]

// post[0] = 3, which means total OR's of nums after i = 0 (2 | 1)
// Note: post[2] = 0 because there's no number after index 2
```

* Iterate over nums and for every number apply the operation (multiplying it by 2) k times and calculate the total OR by OR'ing pre, current and post and find the largest possible OR
```swift
let i = 1
let currentOR = pre[i] | (nums[i] << k) | post[i]
```

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift
class Solution {
    func maximumOr(_ nums: [Int], _ k: Int) -> Int {
        var n = nums.count
        var largest = 0
        var pre = [Int](repeating: 0, count: n)
        var post = [Int](repeating: 0, count: n)

        for i in 1 ..< n {
            pre[i] = pre[i - 1] | nums[i - 1]
        }

        for i in stride(from: n - 2, through: 0, by: -1) {
            post[i] = post[i + 1] | nums[i + 1]
        }

        for i in 0 ..< n {
            let currentOR = pre[i] | nums[i] << k | post[i]
            largest = max(largest, currentOR)
        }

        return largest
    }
}
```