# Compare sums of ranges of equal length

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3892712/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3892712/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
* Compare sums of ranges of equal length
* A range with a greater sum must contain the answer
* If the sums are equal, then the answer must be *mid*

# Complexity
- Time complexity: $$O(log(N))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * struct ArrayReader;
 * impl Array Reader {
 *     pub fn compareSub(l: i32, r: i32, x: i32, y: i32) -> i32 {}
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     // Returns the length of the array
 * }
 */

impl Solution {
    pub fn get_index(reader: &ArrayReader) -> i32 {
		let mut lo = 0;
        let mut hi = reader.length() - 1;
        while lo <= hi {
            let mid = lo + (hi - lo) / 2;
            let mid_adj = ((hi - lo) % 2 != 0) as i32;
            let cmp = reader.compareSub(lo, mid, mid + mid_adj, hi);

            if cmp > 0 { hi = mid - 1 + mid_adj }
            else if cmp < 0 { lo = mid + 1 }
            else { return mid }
        }
        unreachable!()
    }
}
```