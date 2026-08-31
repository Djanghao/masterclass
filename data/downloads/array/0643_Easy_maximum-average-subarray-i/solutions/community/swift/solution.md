# Two Simple Solutions

**Author:** ProbablyLost
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/4191334/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/4191334/)

---

# First Solution

- Time complexity:
$$O(n*k)$$, where `n` is the number of times the $$while$$ loop is done.
`n = nums.count - k + 1` At worst, n = lenth of the input array.
where`k` is the size of the window, i.e the number of times the loop `reduce` inside $$findAverage$$ function is executed. 

- Space complexity:
$$O(1)$$ 
# Code
```
class Solution {
    func findMaxAverage(_ nums: [Int], _ k: Int) -> Double {
        var i = 0, j = k-1
        var maxAverage = -Double.greatestFiniteMagnitude //lowest possible value
        
        guard nums.count > 1 else {
            return Double(nums.first ?? 0) / Double(k)
        }
        
        while j <= (nums.count - 1) {
            maxAverage = max(maxAverage, findAverage(of: nums, from: i, to: j, over: k))
            i += 1
            j += 1
        }
        return maxAverage
    }
    
    private func findAverage(of nums: [Int], from start: Int, to end: Int, over k: Int) -> Double {
        return Double(nums[start...end].reduce(0, +)) / Double(k)
    }
}
```

# Enhanced Solution

- Time complexity:
$$O(n)$$, where `n` is the length of the input array `nums`

- Space complexity:
$$O(1)$$ because a constant amount of additional space is used to store variables like sum and maxAverage. The space used does not depend on the size of the input array.
```
class Solution {
    func findMaxAverage(_ nums: [Int], _ k: Int) -> Double {
        var sum = 0

        // Calculate the initial sum of the first 'k' elements
        for i in 0..<k {
            sum += nums[i]
        }

        // Initialize maxAverage with the average of the first 'k' elements
        var maxAverage = Double(sum) / Double(k)

        for j in k..<nums.count {
            // Update the sum by adding the new element and subtracting the old element
            sum += nums[j] - nums[j - k]

            // Update maxAverage if the current window has a higher average
            maxAverage = max(maxAverage, Double(sum) / Double(k))
        }

        return maxAverage
    }
}
```