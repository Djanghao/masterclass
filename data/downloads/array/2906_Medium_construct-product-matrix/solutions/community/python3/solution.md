# [Python/Rust] flatten + prefix + suffix (+BONUS)

**Author:** iablokov
**Votes:** 34
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4169695/](https://leetcode.com/problems/construct-product-matrix/solutions/4169695/)

---

It's a typical problem where one should precompute product of prefixes and suffixes. Given that the problem is 2-dimensional, we treat the matrix as flattened. See [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self) for the baby version of this problem.

```python
class Solution:
    def constructProductMatrix(self, grid: List[List[int]]) -> List[List[int]]:
        
        m,n = len(grid), len(grid[0])
        
        prefix, suffix = [1], [1]
        
        for i in range(m):
            for j in range(n):
                prefix.append((prefix[-1] * grid[i][j]) % 12345)

        for i in reversed(range(m)):
            for j in reversed(range(n)):
                suffix.append((suffix[-1] * grid[i][j]) % 12345)
        
        for i,j in product(range(m), range(n)):
            k = i * n + j
            grid[i][j] = (prefix[k] * suffix[-k-2]) % 12345
        
        return grid
```

**BONUS**. A more concise version using some functional-style tricks.

```python []
class Solution:
    def constructProductMatrix(self, grid: List[List[int]]) -> List[List[int]]:
        
        it_fwd = (elem for row in grid for elem in row)
        it_rev = (elem for row in reversed(grid) for elem in reversed(row))
        
        prefix = list(accumulate(it_fwd, lambda x, y: (x * y) % 12345, initial=1))
        suffix = list(accumulate(it_rev, lambda x, y: (x * y) % 12345, initial=1))

        m,n = len(grid), len(grid[0])
        for i,j in product(range(m), range(n)):
            k = i * n + j
            grid[i][j] = (prefix[k] * suffix[-k-2]) % 12345
        
        return grid
```
```rust []
use std::iter::once;
impl Solution
{
    pub fn construct_product_matrix(mut grid: Vec<Vec<i32>>) -> Vec<Vec<i32>>
    {
        let prefix = grid
            .iter().flatten()
            .scan(1, |p, n| { *p = (*p * (*n % 12345)) % 12345; Some(*p) })
            .collect::<Vec<i32>>();

        let suffix = grid
            .iter().flatten().rev()
            .scan(1, |p, n| { *p = (*p * (*n % 12345)) % 12345; Some(*p) })
            .collect::<Vec<i32>>();

        once(&1).chain(prefix.iter())
            .zip(suffix.iter().rev().skip(1).chain(once(&1)))
            .map(|(p, s)| (p * s) % 12345)
            .collect::<Vec<i32>>()
            .chunks(grid[0].len())
            .map(|c| c.to_vec())
            .collect::<Vec<Vec<i32>>>()            
    }
}
```