# Hashmap to count frequencies

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/4479759/](https://leetcode.com/problems/degree-of-an-array/solutions/4479759/)

---


# Code
```
fn f(x: i32, nums: &[i32]) -> i32 {
    let n = nums.len();
    let a = nums.iter().position(|&y|y==x).unwrap();
    let b = n - nums.iter().rev().position(|&y|y==x).unwrap();
    (b-a) as _ 
}

impl Solution {
    pub fn find_shortest_sub_array(nums: Vec<i32>) -> i32 {
        let mut fq = std::collections::HashMap::new();

        for &x in nums.iter() {
            *fq.entry(x).or_default() += 1   
        }
        let deg : i32 = *fq.values().max().unwrap();
        fq.keys().filter(|&x|fq[x]==deg)
            .map(|&x|f(x,&nums)).min().unwrap()     
    }
}
```