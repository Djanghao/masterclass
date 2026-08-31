# ✅ Accepted Solution

**Author:** eleev
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/3646934/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/3646934/)

---

# Approach
***TODO***

# Time Complexity
***TODO***

# Space complexity
***TODO***

# Solution
```swift
class Solution {
    private var dp: [String: Int] = [:]

    func makeArrayIncreasing(_ arr1: [Int], _ arr2: [Int]) -> Int {
        let sorted = arr2.sorted()
        let result = dfs(0, Int.min, arr1, sorted)
        return result < 2001 ? result : -1
    }
    
    private func dfs(_ i: Int, _ prev: Int, _ arr1: [Int], _ arr2: [Int]) -> Int {
        // If we have reached the end of arr1, no more operations are needed
        if i == arr1.count { return 0 }

        // Construct a key from i and prev
        let key = "\\(i),\\(prev)"

        // If the result for this key is already computed, return it
        if let value = dp[key] { return value }

        // Initialize the cost to a cap
        var cost = 2001

        // If the current number in arr1 is greater than prev, we can leave it
        if arr1[i] > prev { cost = dfs(i + 1, arr1[i], arr1, arr2) }

        // Find the first number in arr2 that is greater than prev
        let idx = binarySearch(arr2, prev)

        // If such a number is found, replace the current number in arr1 with it
        if idx < arr2.count { cost = min(cost, 1 + dfs(i + 1, arr2[idx], arr1, arr2)) }

        // Save the result in the dictionary and return it
        dp[key] = cost
        return cost
    }
    
    private func binarySearch(_ arr: [Int], _ value: Int) -> Int {
        var leading = 0, trailing = arr.count
        
        while leading < trailing {
            let mid = (leading + trailing) / 2
            arr[mid] <= value ? (leading = mid + 1) : (trailing = mid)
        }
        return leading
    }
}

```