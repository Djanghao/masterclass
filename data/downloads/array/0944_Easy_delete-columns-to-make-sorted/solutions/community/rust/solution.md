# Rust iterator based simple solution

**Author:** bankq
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2989847/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2989847/)

---


# Approach
for each column check order using windows() and all()

# Code
```
impl Solution {
    pub fn min_deletion_size(strs: Vec<String>) -> i32 {
        let mut count = 0;
        for i in 0..strs[0].len() {
            if !strs.iter().map(|s| s.as_bytes()[i])
            .collect::<Vec<u8>>()
            .windows(2)
            .all(|pair| pair[0]<= pair[1]) {
                count+=1;
            }
        }
        count
    }
}
```