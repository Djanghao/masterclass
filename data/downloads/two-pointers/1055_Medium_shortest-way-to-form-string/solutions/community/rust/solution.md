# Rust Solution Two Pointers & Iteration

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/2729380/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/2729380/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In each iteration, advance the target string as much as possible.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(M * N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
impl Solution {
    pub fn shortest_way(source: String, target: String) -> i32 {
        let (m, n) = (source.len(), target.len());
        let source = source.chars().collect::<Vec<char>>();
        let target = target.chars().collect::<Vec<char>>();
        
        let mut ret = 0;
        let (mut i, mut last_i) = (0, 0);
        
        while i < n {
            let mut j = 0;
            while i < n && j < m {
                if source[j] == target[i] { i += 1; }
                j += 1;
            }
            if i == last_i && j == m { return -1 }
            last_i = i;
            ret += 1;
        }
        
        ret
    }
}
```