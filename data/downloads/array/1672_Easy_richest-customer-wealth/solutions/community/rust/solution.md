# Rust one-liner

**Author:** tinozzo123
**Votes:** 24
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/954567/](https://leetcode.com/problems/richest-customer-wealth/solutions/954567/)

---

```
impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        accounts.iter().map(|ac| ac.iter().sum()).max().unwrap()
    }
}
```