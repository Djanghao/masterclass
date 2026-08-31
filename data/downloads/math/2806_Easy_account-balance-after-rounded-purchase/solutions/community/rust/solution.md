# brute force

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/5705197/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/5705197/)

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
```rust []

impl Solution {
  pub fn account_balance_after_purchase(purchase_amount: i32) -> i32 {
    let mut pa = purchase_amount;
    for i in 0..=5 {

      if (pa + i) % 10 == 0 {
        pa = pa+i;
        break;
      } else if (pa-i) % 10 == 0 {
        pa = pa-i;
        break;
      }
    }
    100 - pa
  }
}
```