# rust 100% one line

**Author:** 0xmingx
**Votes:** 2
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/2910840/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/2910840/)

---

```
impl Solution {
    pub fn decompress_rl_elist(nums: Vec<i32>) -> Vec<i32> {
        nums.chunks(2)
            .map(|c| [c[1]].repeat(c[0] as usize))
            .flatten()
            .collect::<Vec<i32>>()
    }
}
```
or we can just use `flat_map()` instead of `map()` and `flatten()`:
```
impl Solution {
    pub fn decompress_rl_elist(nums: Vec<i32>) -> Vec<i32> {
        nums.chunks(2)
            .flat_map(|c| [c[1]].repeat(c[0] as usize))
            .collect::<Vec<i32>>()
    }
}
```