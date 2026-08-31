# ✅ [Accepted] [Swift] O(n log n) Count range sum

**Author:** maxches99
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/3264339/](https://leetcode.com/problems/count-of-range-sum/solutions/3264339/)

---


# Approach
The approach used in this algorithm is based on the concept of merge sort and binary search.

Firstly, we compute the prefix sum of the input array and store it in an array sums. The prefix sum at any index i is the sum of all the elements from the beginning of the array to the index i.

Then, we create a helper function mergeSort() that performs the merge sort algorithm on the sums array. During the merge step, we keep track of the number of range sums that lie between lower and upper. We do this by maintaining two pointers left and right, which point to the left and right subarrays being merged. We calculate the number of valid range sums as follows:

For each element sums[i] in the left subarray, we count the number of elements in the right subarray that are within the range [sums[i]+lower, sums[i]+upper]. We do this using binary search, since the sums array is sorted.

We return the total count of valid range sums obtained from merging the left and right subarrays.

Finally, we call the mergeSort() function on the sums array, and return the total count of valid range sums.

# Complexity
- Time complexity:
$$O(n log n)$$, since we perform a merge sort on the sums array, and perform binary search for each element in the left subarray

- Space complexity:
$$O(n)$$, since we create a new array sums to store the prefix sums.

# Code
```
class Solution {
    func countRangeSum(_ nums: [Int], _ lower: Int, _ upper: Int) -> Int {
        var count = 0
        var sum = 0
        var sums = [0] // prefix sums
        for num in nums {
            sum += num
            sums.append(sum)
        }
        count = mergeSort(&sums, 0, sums.count - 1, lower, upper)
        return count
    }
    
    // merge sort and count the number of valid range sums
    func mergeSort(_ sums: inout [Int], _ left: Int, _ right: Int, _ lower: Int, _ upper: Int) -> Int {
        if left >= right { return 0 }
        let mid = (left + right) / 2
        var count = mergeSort(&sums, left, mid, lower, upper) + mergeSort(&sums, mid + 1, right, lower, upper)
        
        // count the number of valid range sums that cross mid
        var lo = mid + 1
        var hi = mid + 1
        for i in left...mid {
            while lo <= right && sums[lo] - sums[i] < lower { lo += 1 }
            while hi <= right && sums[hi] - sums[i] <= upper { hi += 1 }
            count += hi - lo
        }
        
        // merge two sorted subarrays
        var merged = Array(repeating: 0, count: right - left + 1)
        var i = left, j = mid + 1, k = 0
        while i <= mid && j <= right {
            if sums[i] <= sums[j] {
                merged[k] = sums[i]
                i += 1
            } else {
                merged[k] = sums[j]
                j += 1
            }
            k += 1
        }
        while i <= mid {
            merged[k] = sums[i]
            i += 1
            k += 1
        }
        while j <= right {
            merged[k] = sums[j]
            j += 1
            k += 1
        }
        for i in 0..<merged.count {
            sums[left + i] = merged[i]
        }
        
        return count
    }
}
```