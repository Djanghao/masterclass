# Rust solution with zip and insert

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1343406/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1343406/)

---

```
impl Solution {
    pub fn create_target_array(nums: Vec<i32>, index: Vec<i32>) -> Vec<i32> {
        let mut res = Vec::with_capacity(nums.len());
        nums.iter()
            .zip(index.iter())
            .for_each(|(x, ind)| res.insert(*ind as usize, *x));
        res
    }
}
```