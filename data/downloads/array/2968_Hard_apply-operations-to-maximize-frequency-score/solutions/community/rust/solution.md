# Prefix Sum + Binary Search

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4428581/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4428581/)

---

# Intuition
Let's cosider the cost, to make all the elements of the array $[a_0, a_1, ..., a_{n - 1}]$ are equal to $x$, as:

$S = |a_0 - x| + |a_1 - x| + ... + |a_{n-1} - x|$

This value is minimum if $x$ is the element of this array, located at the median. 

The proof is here: https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4418867/backtracking/
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1) Pre calculate prefix sum array $s$ of the $nums$ array in $O(n)$ time, where $n$ is the length of the $nums$ array
2) Using binary search find the maximum length of the sub array where all elements are equalized using at most $k$ operations in $O(logn)$ time
3) For each of this sub array search is there exist a sub array where all elements are equalized using at most $k$ operations in at most $O(n)$ time, i.e. for each $i = [1..n - m]$ we need to check $s[j] - s[(j + i) / 2] - s[(j + i - 1) / 2] + s[i - 1] \\le k$, where $m$ is the length of the sub array and $j = i + m$
4) So the total time is $O(n + n*logn) = O(n*logn)$
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n*logn)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the length of the $nums$ array.

# Code
```
impl Solution {
    pub fn max_frequency_score(mut nums: Vec<i32>, mut k: i64) -> i32 {
        let n = nums.len();

        nums.sort_unstable();

        let mut s = vec![0; n + 1];        

        for i in 0..n {
            s[i + 1] = s[i] + nums[i] as i64;
        }

        let mut l = 1;
        let mut r = n;

        while l < r {
            let m = (l + r + 1) / 2;

            for i in 0..n - m + 1 {
                if s[i + m] - s[(2*i + m + 1) / 2] - s[(2*i + m) / 2] + s[i] <= k {
                    l = m;
                    break;
                }
            }

            if l < m {
                r = m - 1;
            }
        }

        l as i32
    }    
}
```