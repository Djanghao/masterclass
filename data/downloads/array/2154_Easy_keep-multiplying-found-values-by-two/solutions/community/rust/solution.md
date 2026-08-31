# 🦀[RUST] Fast O(N) Solution

**Author:** blessingman
**Votes:** 1
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/2949939/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/2949939/)

---


```
impl Solution {
    pub fn find_final_value(nums: Vec<i32>, original: i32) -> i32 {
        let( mut o , mut array)= (original,nums);
        array.sort();
        array.iter().fold(o,|res , &x | if o == x { 
            o = x*2;
            x*2
        } else {
            res
        })
    }
}
```