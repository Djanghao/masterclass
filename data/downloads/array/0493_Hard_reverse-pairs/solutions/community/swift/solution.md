# Swift solution

**Author:** UnHommeBien
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/5703214/](https://leetcode.com/problems/reverse-pairs/solutions/5703214/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(2nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```swift []
class Solution {
   func reversePairs(_ nums: [Int]) -> Int {
    var n = nums.count
    var newNums = nums

    // Perform merge sort
    return mergeSort(&newNums, 0, n - 1)

    // Merge Sort
    func mergeSort(_ newNums: inout [Int], _ low: Int, _ high: Int) -> Int {
        if low >= high { return 0 }
        let mid = (low + high) / 2
        let leftCount = mergeSort(&newNums, low, mid)
        let rightCount = mergeSort(&newNums, mid + 1, high)
        let crossCount = countReversePairs(&newNums, low, mid, high)
        
        // Merge the two sorted halves
        mergeArray(&newNums, low, mid, high)
        
        return leftCount + rightCount + crossCount
    }

    // Count Reverse Pairs
    func countReversePairs(_ newNums: inout [Int], _ low: Int, _ mid: Int, _ high: Int) -> Int {
        var count = 0
        var left = low
        var right = mid + 1
        
        while left <= mid && right <= high {
            if newNums[left] > 2 * newNums[right] {
                count += (mid - left) + 1
                right += 1
            } else {
                left += 1
            }
        }
        return count
    }

    // Merge Array
    func mergeArray(_ newNums: inout [Int], _ low: Int, _ mid: Int, _ high: Int) {
        var temp = [Int]()
        var left = low
        var right = mid + 1

        while left <= mid && right <= high {
            if newNums[left] <= newNums[right] {
                temp.append(newNums[left])
                left += 1
            } else {
                temp.append(newNums[right])
                right += 1
            }
        }

        while left <= mid {
            temp.append(newNums[left])
            left += 1
        }

        while right <= high {
            temp.append(newNums[right])
            right += 1
        }

        for i in low...high {
            newNums[i] = temp[i - low]
        }
    }
}

}
```