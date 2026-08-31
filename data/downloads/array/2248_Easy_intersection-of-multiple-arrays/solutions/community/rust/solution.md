# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/1978809/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/1978809/)

---

```
impl Solution {
    pub fn intersection(nums: Vec<Vec<i32>>) -> Vec<i32> {
        let l = nums.len();
        let mut counter = [0; 1001];
        nums.iter()
            .flat_map(|v| v.iter())
            .for_each(|v| counter[*v as usize] += 1);

        counter
            .iter()
            .zip(0..)
            .filter_map(|(&num, idx)| if num == l { Some(idx) } else { None })
            .collect()
    }
}
```