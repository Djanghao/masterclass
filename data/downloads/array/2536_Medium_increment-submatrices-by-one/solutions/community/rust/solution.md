# Rust Concise Solution

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3052928/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3052928/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N * (N + Q))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N * N)
# Code
```
impl Solution {
    pub fn range_add_queries(n: i32, queries: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let n = n as usize;
        let mut data = vec![vec![0; n + 1]; n];
        
        for q in queries {
            let (x, y, u, v) = (q[0] as usize, q[1] as usize, q[2] as usize, q[3] as usize);
            for i in x ..= u {
                data[i][y] += 1;
                data[i][v + 1] -= 1;
            }
        }
        
        let mut ret = vec![];
        for i in 0 .. n {
            let mut v = vec![];
            let mut sum = 0;
            for j in 0 .. n {
                sum += data[i][j];
                v.push(sum);
            }
            ret.push(v);
        }
        
        ret
    }
}
```