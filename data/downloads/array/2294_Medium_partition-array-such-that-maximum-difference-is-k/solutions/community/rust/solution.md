# Rust NlogN solution

**Author:** ckousik
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/5135418/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/5135418/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since we can use a subsequence instead of a subarray, we can just sort the array and still have valid subsequences. Sorting also makes it easier to get the difference between the min and max element of a subsequence as the smallest element is the beginning of the subsequence and largest is the end of the subsequence.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the array.
2. Greedily build each subsequence.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(NlogN)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
impl Solution {
    pub fn partition_array(mut a: Vec<i32>, k: i32) -> i32 {
        a.sort();
        // greedily build partitions   
        let (mut i, mut j, mut r) = (0usize, 0usize, 0i32);
        let n = a.len();
        while i < n && j < n {
            if a[j] - a[i] <= k {
                j += 1;
                continue;
            }
            r += 1;
            i = j;
        }
        r + 1
    }
}
```