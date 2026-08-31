# Go Simple solution || O(n logn) || 0ms || beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/5315024/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/5315024/)

---

# Intuition
When a partition is sorted, its sum should equal the sum of elements in original array, then we can make that partition. So just keep running sum of both original and sorted array and make partition when both sums are equal.

# Complexity
- Time complexity: $$O(nlogn)$$

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxChunksToSorted(arr []int) int {
    sarr := make([]int, len(arr))
    copy(sarr, arr)
    slices.Sort(sarr)
    sum, sorted_sum, ans := 0, 0, 0
    for i := 0; i < len(arr) ; i++ {
        sum += arr[i]
        sorted_sum += sarr[i]
        if sum == sorted_sum {
            ans++
        }
    }
    return ans
}
```