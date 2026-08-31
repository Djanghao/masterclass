# filter + count

**Author:** user5285Zn
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5366758/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5366758/)

---


```
impl Solution {
    pub fn minimum_operations(nums: Vec<i32>) -> i32 {
        nums.into_iter().filter(|x|x%3!=0).count() as _ 
    }
}
```