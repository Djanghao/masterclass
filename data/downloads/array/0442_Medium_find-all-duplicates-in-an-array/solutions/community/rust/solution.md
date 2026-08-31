# Rust: map solution

**Author:** 16yuki0702
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/798317/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/798317/)

---

Runtime: 20 ms, faster than 44.83% of Rust online submissions for Find All Duplicates in an Array.
Memory Usage: 4.4 MB, less than 5.17% of Rust online submissions for Find All Duplicates in an Array.
```
impl Solution {
    pub fn find_duplicates(nums: Vec<i32>) -> Vec<i32> {
        let (mut m, mut res) = (std::collections::HashMap::new(), vec![]);

        for v in nums.iter() {
            if let Some(_) = m.get(v) {
                res.push(*v);
            } else {
                m.insert(v, 1);
            }
        }
        
        res
    }
}
```