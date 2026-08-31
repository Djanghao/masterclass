# Swift

**Author:** ksmirnovnn
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5634002/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5634002/)

---


```
class Solution {
    func smallestDistancePair(_ nums: [Int], _ k: Int) -> Int {
        // Step 1: Sort the array to make it easier to find and count pairs
        let nums = nums.sorted()
        let n = nums.count
        
        // Step 2: Define the search range for binary search
        // The smallest possible distance is 0, and the largest possible distance
        // is the difference between the largest and smallest elements in the array.
        var low = 0
        var high = nums[n - 1] - nums[0]
        
        // Step 3: Perform binary search on the distance
        while low < high {
            // Calculate the mid-point of the current search range
            let mid = (low + high) / 2
            
            // Step 4: Count the number of pairs with a distance less than or equal to mid
            var count = 0
            var left = 0
            
            for right in 0..<n {
                // Adjust the left pointer to maintain the condition
                // that the distance between nums[right] and nums[left] is <= mid
                while nums[right] - nums[left] > mid {
                    left += 1
                }
                // The number of valid pairs with nums[right] as the right element
                // is (right - left)
                count += right - left
            }
            
            // Step 5: Determine if we need to search for smaller or larger distances
            if count >= k {
                // If there are at least k pairs with distance <= mid,
                // then mid could be the answer or we need a smaller distance,
                // so we narrow the search range to the left side.
                high = mid
            } else {
                // If there are fewer than k pairs with distance <= mid,
                // then we need to search for a larger distance,
                // so we narrow the search range to the right side.
                low = mid + 1
            }
        }
        
        // Step 6: Return the smallest distance that has at least k pairs
        return low
    }
}

```