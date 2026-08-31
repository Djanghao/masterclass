# rust 100% oneliner

**Author:** skymnok
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3093947/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3093947/)

---


```
impl Solution {
    pub fn sort_the_students(mut score: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        score.sort_unstable_by_key(|key| -key[k as usize]);
        score
    }
}
```