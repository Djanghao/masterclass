# Sliding Window + Prefix Sum + Binary Search

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5715322/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5715322/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) Using sliding window, calculate count of the substrings and construct prefix sum $s$
2) We can see that the $s[i] - s[i-1]$ is the number of the substrings from the leftmost position to $i$
3) For each query, the count of substrings in the range $l..r$ is $s[r] - s[l-1]$. But it is also necessary to take into account that in each prefix sum $s[i]$ in the range $l \\leq i \\leq r$ we need to delete substrings from the lefmost position to the $l-1$ index.
4) In order to delete these substrings for each prefix sum $s[i]$ in the range $l \\leq i \\leq r$, we need to use binary search. From the previous point $2$, we can see that the $s[i] - s[i-1]$ should be less or equal $i - l + 1$, where $l \\leq i \\leq r$, and also we can see that if $s[j] - s[j-1] < j - l + 1$ for some $l \\leq j \\leq r$, then $s[i] - s[i-1] < i -l + 1$ for all $j < i \\leq r$

# Approach
<!-- Describe your approach to solving the problem. -->
Sliding Window + Prefix Sum + Binary Search

# Complexity
- Time complexity: $O(n + m \\cdot log(max(l_i - r_i)))$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n + m)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the length of the $s$ string, and $m$ is the length of the $queries$ array

# Code
```rust []
impl Solution {
    pub fn count_k_constraint_substrings(s: String, k: i32, queries: Vec<Vec<i32>>) -> Vec<i64> {
        let n = s.len();
        let mut b = s.as_bytes();

        let mut o = 0;
        let mut z = 0;

        let mut i = 0;
        let mut s = vec![0; n];

        for j in 0..n {
            o += if b[j] == b'1' {1} else {0};
            z += if b[j] == b'0' {1} else {0};

            while o > k && z > k {
                o -= if b[i] == b'1' {1} else {0};
                z -= if b[i] == b'0' {1} else {0};

                i += 1;
            }

            s[j] = (j - i + 1) as i64;

            if j > 0 {
                s[j] += s[j-1];
            }
        }        

        let n = queries.len();
        let mut v = vec![0; n];

        for k in 0..n {
            let mut i = queries[k][0] as usize;
            let mut j = queries[k][1] as usize;

            if i == 0 {
                v[k] = s[j];
            } else {
                v[k] = s[j] - s[i-1];

                let mut l = i;
                let mut r = j;

                while l < r {
                    let m = (l + r + 1) / 2;

                    if s[m] - s[m-1] < (m - i + 1) as i64 {
                        r = m - 1;
                    } else {
                        l = m;
                    }
                }

                let d = s[l] - s[i-1];

                v[k] += ((l - i + 2) as i64 * (l - i + 1) as i64) / 2 - d;
            }
        }       

        v 
    }
}
```