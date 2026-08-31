# Rust solutions

**Author:** BigMih
**Votes:** 10
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/1330952/](https://leetcode.com/problems/concatenation-of-array/solutions/1330952/)

---

1. One-liner with ```chain```. 
```
impl Solution {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        nums.iter().chain(nums.iter()).cloned().collect()
    }
}
```

2. One-liner with ```cycle```. 
```
impl Solution {
    pub fn get_concatenation_cycle(nums: Vec<i32>) -> Vec<i32> {
        nums.iter().cycle().take(nums.len() * 2).cloned().collect()
    }
}
```

3. Element-wise creation of a prepared vector by indices
```
impl Solution {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        let mut res = vec![0; nums.len() * 2];
        nums.iter().enumerate().for_each(|(ind, &x)| {
            res[ind] = x;
            res[ind + nums.len()] = x;
        });
        res
    }
}
```