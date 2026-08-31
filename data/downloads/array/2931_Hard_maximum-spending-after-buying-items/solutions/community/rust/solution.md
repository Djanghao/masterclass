# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4279126/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4279126/)

---

```
impl Solution {
    pub fn max_spending(values: Vec<Vec<i32>>) -> i64 {
        let mut ans = 0;
        let mut price = vec![];
        for it in values {
            for i in it {
                price.push(i);
            }
        }
        price.sort_unstable();
        for i in 0..price.len() {
            ans += price[i] as i64 * (i as i64 + 1);
        }
        ans
    }
}
```