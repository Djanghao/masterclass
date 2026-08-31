# rust

**Author:** khanka
**Votes:** 1
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/3309680/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/3309680/)

---


# Code
```
impl Solution {
    pub fn contains_pattern(arr: Vec<i32>, m: i32, k: i32) -> bool {
        let m = m as usize;
        for i in 0..=arr.len()-m {
            let pattern = &arr[i..i+m];
            let count = arr[i+m..].chunks(m).take_while(|&another_pattern| pattern == another_pattern).count() as i32;
            if count >= k-1 {
                return true
            }
        }
        false
    }
}
```