# Sort the products

**Author:** S_T_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/6045057/](https://leetcode.com/problems/tuple-with-same-product/solutions/6045057/)

---

```rust []
impl Solution {
    fn gauss(n : i32) -> i32 {
        n * (n - 1) / 2
    }
    // O(n ^ 2 * log n)
    // so in theory this is slower than some of the other hashmap-based solutions
    // but in practise sorting outperforms hashmaps most of the time
    pub fn tuple_same_product(nums: Vec<i32>) -> i32 {
        let mut prods = Vec::with_capacity(Solution::gauss(nums.len() as i32) as usize);
        for i in 0..nums.len() {
            for j in i + 1..nums.len() {
                prods.push(nums[i] * nums[j]);
            }
        }
        prods.sort_unstable();
        let mut prev_prod = i32::MIN;
        let mut count = 0;
        let mut total = 0;
        for i in 0..prods.len() {
            count += 1;
            if prods[i] != prev_prod {
                total += Solution::gauss(count);
                count = 0;
                prev_prod = prods[i];
            }
        }
        total += Solution::gauss(count);
        return 8  * total;
    }
}
```