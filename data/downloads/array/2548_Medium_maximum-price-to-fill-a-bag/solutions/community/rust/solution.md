# Rust Customized Sort & Greedy

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3113623/](https://leetcode.com/problems/maximum-price-to-fill-a-bag/solutions/3113623/)

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
    pub fn max_price(items: Vec<Vec<i32>>, capacity: i32) -> f64 {
        let mut items = items;
        items.sort_by(|a, b| (a[0] * b[1]).cmp(&(a[1] * b[0])));
        let (mut ret, mut capacity) = (0f64, capacity);

        while let Some(a) = items.pop() {
            if a[1] <= capacity {
                capacity -= a[1];
                ret += a[0] as f64;
                continue
            }
            ret += capacity as f64 / a[1] as f64 * a[0] as f64;
            capacity = 0;
            break
        } 

        if capacity > 0 { -1f64 } else { ret }
    }
}
```