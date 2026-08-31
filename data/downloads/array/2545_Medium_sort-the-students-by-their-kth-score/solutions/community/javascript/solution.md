# beginner solution

**Author:** RendraAndriansyah
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3220299/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3220299/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
   for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (score[i][k] > score[j][k]) {
        [score[i], score[j]] = [score[j], score[i]];
      }
    }
  }
  return score;  
};
```