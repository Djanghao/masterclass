# 3 Lines Math Based Solution | O(1) | Rust

**Author:** Prog_Jacob
**Votes:** 3
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3312185/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3312185/)

---

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
pub fn dist_money(money: i32, children: i32) -> i32 {
    if money < children { return -1 };
    // (1)             x + 8 * y = money
    // (2)             x + y = children
    // From (2)        x = children - y
    // From (1, 2)     children - y + 8 * y = money
    // Then            7 * y = money - children
    // Since the answer is less or equal to children, then y is:
    let mut y = children.min((money - children) / 7);

    // Ensure that will not be any children left with only 4$.
    while money - 8 * y == 4 && children - y == 1 ||
          // or any money left without being distributed.
          money - 8 * y > 0 && children - y == 0 { y -= 1 }
    
    y
}
```