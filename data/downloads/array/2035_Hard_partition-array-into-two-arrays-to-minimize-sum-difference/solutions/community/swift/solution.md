# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/5226836/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/5226836/)

---

### Intuition
The problem requires partitioning an array into two equal-sized subarrays such that the absolute difference between their sums is minimized. This suggests that we need to balance the sums of the two subarrays as closely as possible. Given the constraints and the need to explore combinations of elements, an exhaustive search could be infeasible. Instead, using a more optimized approach leveraging combinations and binary search can help solve this problem efficiently.

# Approach
1. **Split the Array**: Divide the array `nums` into two halves.
2. **Subset Sums**: For each half, calculate all possible subset sums. This means generating sums for all combinations of elements in each half.
3. **Sort Sums for Efficient Search**: Sort the subset sums of the second half to enable efficient searching.
4. **Binary Search for Optimal Pairing**: For each possible sum of a subset from the first half, use binary search on the sorted sums of the second half to find the sum that, combined with the first half's sum, brings the total closest to half of the array's total sum.
5. **Calculate Minimum Difference**: Track the minimum difference encountered during these checks.

# Complexity
- **Time Complexity**: 
  - Calculating all subset sums for both halves takes \\(O(2^{n/2})\\) for each half, making it \\(O(2^n)\\) in total.
  - Sorting the subset sums for one half is \\(O(2^{n/2} \\log 2^{n/2})\\), simplifying to \\(O(2^{n/2} \\cdot (n/2))\\).
  - The binary search for each combination sum of the first half's subsets takes \\(O(\\log 2^{n/2})\\) for each of the \\(2^{n/2}\\) subsets, resulting in \\(O(2^{n/2} \\cdot \\log 2^{n/2})\\) checks.
  - Overall, the complexity is \\(O(2^{n/2} \\cdot (n/2 + \\log 2^{n/2}))\\).

- **Space Complexity**: 
  - Storing the subset sums requires \\(O(2^{n/2})\\) space for each half, leading to \\(O(2^n)\\) in total.
  
Given that the problem constraints likely have \\(n\\) reasonably small, this approach should be efficient enough to handle the input within acceptable limits.

# Code
```
class Solution {
    func minimumDifference(_ nums: [Int]) -> Int {
        let n = nums.count / 2
        let totalSum = nums.reduce(0, +)
        let target = totalSum / 2

        // Function to generate all possible subset sums for a given array
        func subsetSums(_ array: [Int]) -> [[Int]] {
            let size = array.count
            var result = Array(repeating: [Int](), count: size + 1)

            for mask in 0..<(1 << size) {
                var sum = 0
                var count = 0
                for i in 0..<size {
                    if (mask & (1 << i)) != 0 {
                        sum += array[i]
                        count += 1
                    }
                }
                result[count].append(sum)
            }
            return result
        }

        // Split nums into two halves
        let left = Array(nums[0..<n])
        let right = Array(nums[n..<2*n])

        // Get all subset sums for both halves
        let leftSums = subsetSums(left)
        var rightSums = subsetSums(right) // Changed to 'var' for mutability

        // Sort all subsets sums for the right half for efficient searching
        for i in 0..<rightSums.count {
            rightSums[i].sort()
        }

        var minDiff = Int.max

        // Iterate over all subsets of the left half
        for i in 0..<leftSums.count {
            for leftSum in leftSums[i] {
                let remainingElements = n - i
                let rightSubsetSums = rightSums[remainingElements]
                // Binary search to find the closest sum in rightSubsetSums
                var low = 0
                var high = rightSubsetSums.count - 1

                while low <= high {
                    let mid = (low + high) / 2
                    let rightSum = rightSubsetSums[mid]
                    let currentDiff = abs(totalSum - 2 * (leftSum + rightSum))

                    if currentDiff < minDiff {
                        minDiff = currentDiff
                    }

                    if leftSum + rightSum < target {
                        low = mid + 1
                    } else {
                        high = mid - 1
                    }
                }
            }
        }

        return minDiff
    }
}

```