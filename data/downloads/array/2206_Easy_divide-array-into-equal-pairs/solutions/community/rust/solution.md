# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1864997/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1864997/)

---

1. Simple fast solution (0 ms)
```
impl Solution {
    pub fn divide_array(nums: Vec<i32>) -> bool {
        let mut counter = [0; 501];
        nums.iter().for_each(|&x| counter[x as usize] += 1);
        counter.iter().filter(|x| **x > 0).all(|&x| x & 1 == 0)
    }
}
```

2. Slow functional one-liner (50 ms)
```
impl Solution {
    pub fn divide_array(nums: Vec<i32>) -> bool {
        nums.iter()
            .fold([0; 501], |mut acc, &x| {
                acc[x as usize] += 1;
                acc
            })
            .iter()
            .filter(|x| **x > 0)
            .all(|&x| x & 1 == 0)
    }
}
```