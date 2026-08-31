# Swift solution

**Author:** UnHommeBien
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/5700681/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/5700681/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
nlogn
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```swift []
class Solution {
    func countSmaller(_ nums: [Int]) -> [Int] {
    var n = nums.count
    var newNums = nums
    var trackIndexes = Array(repeating: 0, count: nums.count)
    var ans = Array(repeating: 0, count: nums.count)

    // Initialize trackIndexes with initial indices
    for i in 0..<trackIndexes.count {
        trackIndexes[i] = i
    }
    
    // Perform merge sort
    mergeSort(&newNums, 0, n - 1)
    return ans

    // Merge Sort
    func mergeSort(_ newNums: inout [Int], _ low: Int, _ high: Int) {
        if low >= high { return }
        let mid = (low + high) / 2
        mergeSort(&newNums, low, mid)
        mergeSort(&newNums, mid + 1, high)
        mergeArray(&newNums, low, mid, high)
    }

    // Merge Array with Index Tracking
    func mergeArray(_ newNums: inout [Int], _ low: Int, _ mid: Int, _ high: Int) {
        var temp = [Int]()
        var tempIndexes = [Int]()
        var left = low
        var right = mid + 1
        var rightCounter = 0 // Tracks how many elements from the right are smaller

        while left <= mid && right <= high {
            if newNums[left] <= newNums[right] {
                temp.append(newNums[left])
                tempIndexes.append(trackIndexes[left])
                // Update count for original index from trackIndexes
                ans[trackIndexes[left]] += rightCounter
                left += 1
            } else {
                temp.append(newNums[right])
                tempIndexes.append(trackIndexes[right])
                rightCounter += 1 // This element in the right half is smaller
                right += 1
            }
        }

        while left <= mid {
            temp.append(newNums[left])
            tempIndexes.append(trackIndexes[left])
            ans[trackIndexes[left]] += rightCounter
            left += 1
        }

        while right <= high {
            temp.append(newNums[right])
            tempIndexes.append(trackIndexes[right])
            right += 1
        }

        for i in low...high {
            newNums[i] = temp[i - low]
            trackIndexes[i] = tempIndexes[i - low]
        }
    }
}

}
```