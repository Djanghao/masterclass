# Concise Rust Solution

**Author:** xiaoping3418
**Votes:** 3
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/2706996/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/2706996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn product_queries(n: i32, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut data = vec![];

        for i in 0..32 {
            if n & (1 << i as i32) == 0 { continue }
            data.push(1 << i as i32);
        }

        let mut ret = vec![];
        for q in queries {
            let mut temp = 1i64;
            for i in q[0] as usize..=q[1] as usize {
                temp = (temp * data[i] as i64) % 1_000_000_007;
            }
            ret.push(temp as i32);
        }

        ret
    }
}
```