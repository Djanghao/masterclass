# Two linear scans for O(n)/O(1) complexity

**Author:** adam-hoelscher
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4934654/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4934654/)

---

# Intuition

We can separate the array into 3 subarrays:
* A sorted prefix.
* A sorted suffix.
* The middle between the 2 that must be removed.

For each possible subarray of the prefix, we can keep any subarray of the suffix as long as the first kept element of the suffix is greater than the last kept element of the prefix.

There's a special case if the array is sorted. In that case the prefix and suffix are both equal to the entire array. When this happens we can remove any subarray and the final array will still be sorted.

# Approach

1. Scan from the back of the array to build the suffix.
2. Check for the special case. If the suffix is the entire array, return the n-th triangular number.
3. Add the length of the suffix for the option where we keep none of the prefix.
4. Scan from the front of the array adding to the prefix.
    * If prefix is no longer sorted, stop.
    * Remove lead items from the suffix until the front of the suffix is greater than the back of the prefix.
    * Add the length of the current suffix for the option where we keep this much of the prefix.

# Complexity

### Time complexity: $$O(n)$$
The backward scan to find the suffix takes $$O(n)$$.
The forward scan through the prefix takes $$O(n)$$.
The removal of items from the suffix during the prefix scan takes $$O(n)$$.

### Space complexity: $$O(1)$$
We create a constant number of variables to hold the index of the front of the suffix, the output, and the previously seen value in the prefix.

# Code
```
func incremovableSubarrayCount(nums []int) int {

    n := len(nums)

    var j int

    // Find the increasing suffix.
    for j = n-1; j > 0 && nums[j-1] < nums[j]; j-- {}

    // If the array is sorted, every subarray is valid.
    if j == 0 {
        return n * (n+1) / 2
    }

    // Removing the entire prefix is valid.
    count := n-j+1

    prev := math.MinInt
    for _, x := range nums {

        // If the prefix is no longer sorted, stop.
        if x <= prev {
            break
        }
        prev = x

        // Move the head of the suffix back until valid.
        for j < n && nums[j] <= x {
            j++
        }

        // Add the number of valid suffixes.
        count += n-j+1
    }

    return count
}
```