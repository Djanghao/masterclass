# O(n∗log(m)) solution in rust

**Author:** archraven
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-peak-element-ii/solutions/4333541/](https://leetcode.com/problems/find-a-peak-element-ii/solutions/4333541/)

---

# Approach
Search each row (linear complexity), if a peak is found in this column then returns its index else search the middle comlumn of the partition which has negative gradient (wrt max_val of curr column). 

# Complexity
- Time complexity: $$O(n * log(m))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn find_peak_grid(mat: Vec<Vec<i32>>) -> Vec<i32> {
    let mut start = 0_usize;
    let mut end = mat.len();
    let (m, n) = (mat.len(), mat[0].len());
    while start < end {
        let mid: usize = (start + end) / 2;
        let (mut max_idx, mut max_val) = (0_usize, mat[mid][0]);
        for i in 0..n {
            if mat[mid][i] > max_val {
                max_idx= i; 
                max_val = mat[mid][i];
            }
        }
        if mid > 0 && mat[mid - 1][max_idx] > max_val {
            end = mid;
        } else if mid < m - 1 && mat[mid + 1][max_idx] > max_val {
            start = mid + 1;
        } else {
            return vec![mid as i32, max_idx as i32];
        }
    }
    vec![0, 0]
}
}
```