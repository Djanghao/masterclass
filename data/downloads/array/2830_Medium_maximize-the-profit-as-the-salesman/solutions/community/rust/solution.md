# Rust DP

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934171/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3934171/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn maximize_the_profit(n: i32, offers: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut mx = vec![0; n];
        let mut offers = offers;
        
        let mut j = 0;
        offers.sort_by(|a, b| a[1].cmp(&b[1]));
        for i in 0 .. n {
            if i > 0 { mx[i] = mx[i - 1]; }
            
            while j < offers.len() && offers[j][1] == i as i32 {
                let mut t = offers[j][2];
                let k = offers[j][0] as usize;
                if k > 0 { t += mx[k - 1]; }
                mx[i] = mx[i].max(t);
                j += 1;
            }
        }
        
        mx.into_iter().max().unwrap()
    }
}
```