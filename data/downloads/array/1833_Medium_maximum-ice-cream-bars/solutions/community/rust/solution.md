# [Rust] Simple | 18ms

**Author:** tmtappr
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005224/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3005224/)

---

# Intuition
The price range is small enough to make using [counting sort](https://en.wikipedia.org/wiki/Counting_sort) a good option for performing an $$O(n)$$ sort. The smallest array that can hold the price range and $$n<=10^5$$ bars is 400KB.

Aside from the advantage of sorting in $$O(n)$$, counting sort also has the advantage that its array can fit nicely in L1/L2 cache and reduce memory read overhead, especially since most elements are compactly represented by the count values (the counts can be held in a register and don't require memory accesses to iterate over each element they represent). This can offset the wasted cycles for array elements with counts of 0.

# Approach
The counting sort array, `bars` is populated by scanning `costs` once in linear time. Then `price` indexes into `bars` to get the number of bars available at each price.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$ *auxiliary* space. The `bars` array size is constant and doesn't vary with input.

# Code
```rust
impl Solution {
    pub fn max_ice_cream(costs: Vec<i32>, coins: i32) -> i32 {
        let mut bars  = [0_u32; 100_001];
        let mut coins = coins;
        let mut price = 1;
        let mut count = 0;

        costs.into_iter().for_each(|c| bars[c as usize] += 1);

        while coins >= price && price <= 100_000 {
            while bars[price as usize] > 0 && coins >= price {
                bars[price as usize] -= 1;
                coins -= price;
                count += 1;
            }
            price += 1;
        }
        count
    }
}
```