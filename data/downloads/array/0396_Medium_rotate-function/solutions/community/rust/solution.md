# compute F(0) and then update in O(1) for each consecutive

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-function/solutions/4890496/](https://leetcode.com/problems/rotate-function/solutions/4890496/)

---



# Code
```
impl Solution {
    pub fn max_rotate_function(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let (s, f) = nums.iter().enumerate().fold((0,0),
            |(s, f),(i,&x)| (s+x, f + x*i as i32));
        
        nums.into_iter()
            .scan(f, |mut f, x|
            {  *f += -s + (n as i32 * x); Some(*f)}).max().unwrap()          
        }
}
```