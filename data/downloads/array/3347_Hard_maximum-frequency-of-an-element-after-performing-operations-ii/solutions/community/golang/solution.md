# 🔍 Sliding Window Magic: Maximize Frequency with 2 Types of Ranges: k & 2k ✨ || Clear Code in Go 🚀

**Author:** rutsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solutions/6051379/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solutions/6051379/)

---

## \uD83D\uDD11 Key Intuition and Edge Cases

#### Key Observations:
- __Sliding Window__ of $$k$$ is used to maximize the frequency of an existing element in the array.
- __Sliding Window__ of $$2k$$ is used when we need to create a new frequent element from existing elements.
- __Precomputing Frequencies__ using the $$freqs$$ array allows us to efficiently track contiguous occurrences of elements, reducing redundant operations.
- By combining these techniques, we maximize the frequency while staying within the operation limits.

#### Edge Cases:
- $$numOperations == 0$$: No changes allowed; return the frequency of the most common element in nums.
- $$k == 0$$: No range for changes; behavior depends entirely on initial frequencies.
- _All elements are the same_: Return the array length directly.


## \uD83E\uDDE0 Approach Breakdown \u2013 Step by Step

We have two main cases to consider when trying to maximize the frequency of any element in the array after performing the operations.

#### Case 1: The Maximum Frequency Element is Already in the Array \uD83C\uDFAF

1. What This Means:
    - In this scenario, the element that has the highest frequency is already present in the array. Our goal is to increase the frequency of this element using the allowed operations.
2. Sliding Window Technique with Radius $$k$$:
    - We can use the sliding window technique to check a range of elements that can potentially become the most frequent element.
    - We slide a window of size $$k$$ around each element in the array.
    - Why $$k$$? Because the allowed operation adds values in the range $$[-k, k]$$ to the elements in the array. So, any element within this range can be transformed into the current element using one operation.
3. Using the $$freqs$$ Array:
    - The $$freqs$$ array helps track how many times each element appears consecutively in the array.
    - This helps us quickly identify the frequency of adjacent elements without recalculating it from scratch.
    - If a certain number already appears frequently in a group of contiguous elements, we don\u2019t need to use operations to increase its count; it\u2019s already a candidate for the most frequent element.

4. How We Maximize Frequency:
    - For each element in the array, we check if we can extend its range of contiguous elements (using the sliding window) within the k bounds.
     - We calculate the number of operations required to turn other numbers within the window into this element and update the maximum frequency accordingly.

### Case 2: The Maximum Frequency Element Isn't in the Array \uD83D\uDE80

1. What This Means:
    - In this case, the element with the maximum frequency does not already exist in the array. Instead, we are trying to create a new "most frequent" element by adjusting elements from the array.

2. Sliding Window Technique with Radius $$2k$$:
    - Since we are now trying to make an element that doesn\u2019t exist in the array, we expand our window size to 2k.
    - The reason we need a 2k window is that we need to cover both the potential range of existing elements (with a k margin on each side) and still be able to transform them into the new frequent element.

3. Maximizing Frequency with the $$2k$$ Window:
    - The sliding window starts with one side aligned to an element in the array.
    - As we move the other side of the window, we check if the difference between the numbers within the window is less than or equal to 2k. If it is, we can potentially transform all these elements into a new frequent element using our allowed operations.


# Complexity
- Time complexity:
    - Sorting the array takes O(n log n).
    - Sliding window iterations are linear, making them O(n).
    - Total: O(n log n).

- Space complexity:
    - Storing frequency array: O(n).
    - Total: O(n).
    - 
# Code
```golang []
import "slices"

// Helper function to compute initial frequencies of contiguous elements
func calcFreqs(nums []int) []int {
    freqs := make([]int, len(nums))
    for i := 0; i < len(nums); i++ {
        k := i
        // Count the range of contiguous elements
        for ; k < len(nums) && nums[k] == nums[i]; k++ {}
        // Assign the frequency to all elements in this range
        for j := i; j < k; j++ {
            freqs[j] = k - i
        }
        // Skip to the next unique element
        i = k - 1
    }
    return freqs
}

// Main function to maximize the frequency
func maxFrequency(nums []int, k int, numOperations int) int {
    // Sort the array for easier range-based calculations
    slices.Sort(nums)
    
    // Compute initial frequencies of contiguous elements
    freqs := calcFreqs(nums)
    var maxFreq int

    // First sliding window to handle operations within k range
    l, r := 0, 1
    for i := range nums {
        // Expand the range to include numbers within k distance
        for ; r < len(nums) && nums[r] <= nums[i]+k; r++ {}
        // Shrink the left boundary if it goes beyond k
        for ; nums[l] < nums[i]-k; l++ {}
        // Calculate maximum frequency using operations
        maxFreq = max(freqs[i] + min(r-l-freqs[i], numOperations), maxFreq)
    }

    // Second sliding window to consider combining numbers within 2k range
    l, r = 0, 1
    for ; l < len(nums); l++ {
        for r < len(nums) && nums[r]-nums[l] <= 2*k {
            r++
        }
        maxFreq = max(min(r-l, numOperations), maxFreq)
    }

    return maxFreq
}

// Helper function to compute the absolute value
func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}

// Helper function to find the maximum of two integers
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

// Helper function to find the minimum of two integers
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```