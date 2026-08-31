# Swift

**Author:** shams24x7
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/5686434/](https://leetcode.com/problems/maximum-gap/solutions/5686434/)

---

# Intuition
The problem requires finding the maximum difference between any two successive elements in the sorted form of an array. A direct sorting approach would take O(n log n) time, but we can do better using the concept of bucket sort. The idea is that by placing numbers into different buckets based on their values, we can indirectly sort the numbers and find the maximum gap efficiently. This approach leverages the fact that if numbers are distributed across buckets correctly, the maximum gap will not be between numbers within the same bucket but rather between the maximum of one bucket and the minimum of the next non-empty bucket.

# Approach
1. Edge Case Handling: If the number of elements is less than 2, return 0 because no meaningful gap can be calculated.

2. Find Min and Max: Determine the minimum (mn) and maximum (mx) values in the array. If they are the same, return 0 since all numbers are identical, and there can be no gap.

3. Calculate Gap and Bucket Size: 
   - Calculate the ideal gap size using the formula gap = ceil((mx - mn) / (n - 1)), where n is the number of elements. This ensures that the largest possible gap can be captured.
   - Calculate the number of buckets needed using the formula bucketSize = (mx - mn) / gap + 1.

4. Initialize Buckets: Create an array of Bucket structures, each initialized to hold very high and low values to ensure proper updates.

5. Distribute Numbers into Buckets: For each number, determine the appropriate bucket based on its value and update the bucket's minimum and maximum values.

6. Calculate Maximum Gap: Iterate through the buckets, and for each non-empty bucket, calculate the gap between the minimum of the current bucket and the maximum of the previous bucket. Track the maximum of these gaps.

# Complexity
- Time Complexity: O(n)  
  The algorithm effectively scans through the list of numbers multiple times (to find min/max, place into buckets, and calculate the gap), each taking linear time. Therefore, the overall complexity is O(n).

- Space Complexity: O(n) 
  The space complexity is mainly due to the additional space required for the buckets. In the worst case, each element might have its own bucket, leading to a space complexity of O(n).

# Code
```swift []
import Foundation

struct Bucket {
    var mn: Int
    var mx: Int
}

class Solution {
    func maximumGap(_ nums: [Int]) -> Int {
        if nums.count < 2 {
            return 0
        }
        
        let mn = nums.min()!
        let mx = nums.max()!
        if mn == mx {
            return 0
        }
        
        let gap = Int(ceil(Double(mx - mn) / Double(nums.count - 1)))
        let bucketSize = (mx - mn) / gap + 1
        var buckets = [Bucket](repeating: Bucket(mn: Int.max, mx: Int.min), count: bucketSize)
        
        for num in nums {
            let i = (num - mn) / gap
            buckets[i].mn = min(buckets[i].mn, num)
            buckets[i].mx = max(buckets[i].mx, num)
        }
        
        var ans = 0
        var prevMax = mn
        
        for bucket in buckets {
            if bucket.mn == Int.max {
                continue // empty bucket
            }
            ans = max(ans, bucket.mn - prevMax)
            prevMax = bucket.mx
        }
        
        return ans
    }
}

```