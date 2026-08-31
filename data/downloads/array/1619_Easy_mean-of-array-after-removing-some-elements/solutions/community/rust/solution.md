# Rust 0ms solution with sort

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/1190660/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/1190660/)

---

```
impl Solution {
    pub fn trim_mean(mut arr: Vec<i32>) -> f64 {
        let (l, l_5per) = (arr.len(), arr.len() / 20);
        arr.sort_unstable();
        arr[l_5per..(l - l_5per)].iter().sum::<i32>() as f64 / (l - 2 * l_5per) as f64
    }
}
```