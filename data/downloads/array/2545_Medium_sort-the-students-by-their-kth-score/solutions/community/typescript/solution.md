# JavaScript || Sort

**Author:** astiksarathe
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3084094/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3084094/)

---

# Code
```
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    score.sort((a,b)=>b[k]- a[k])
    return score
};
```