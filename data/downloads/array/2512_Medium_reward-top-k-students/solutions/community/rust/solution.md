# Rust/Python set and sort and explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/3554505/](https://leetcode.com/problems/reward-top-k-students/solutions/3554505/)

---

# Intuition
 - Put all values in two sets of positives and negatives.
 - iterate over all reports and for every report calculate score based on existence int two sets
 - sort the score, student and take top k

# Complexity

Let number of the size of all strings is `n`,

- Time complexity: $O(n)$
- Space complexity: $O(n)$
- 
# Code
```Rust []
use std::collections::HashSet;
use std::iter::FromIterator;

impl Solution {
  pub fn top_students(pos: Vec<String>, neg: Vec<String>, report: Vec<String>, student_id: Vec<i32>, k: i32) -> Vec<i32> {
    let pos: HashSet<String> = HashSet::from_iter(pos);
    let neg: HashSet<String> = HashSet::from_iter(neg);

    let mut data = Vec::new();
    for i in 0 .. report.len() {
      let mut score = 0;
      for w in report[i].split_whitespace() {
        if pos.contains(w) {
          score += 3;
        }
        if neg.contains(w) {
          score -= 1;
        }
      }
      data.push((-score, student_id[i]));
    }

    data.sort_unstable();
    let mut res = Vec::new();
    for i in 0 .. k as usize {
      res.push(data[i].1);
    }

    return res;
  }
}
```
```python []
class Solution:
  def topStudents(self, pos: List[str], neg: List[str], report: List[str], student_id: List[int], k: int) -> List[int]:
    pos, neg = set(pos), set(neg)

    data = []
    for i in range(len(report)):
      score = 0
      for w in report[i].split():
        if w in pos:
          score += 3
        elif w in neg:
          score -= 1
      
      data.append((score, -student_id[i]))
    
    data.sort(reverse=True)
    return [-data[i][1] for i in range(k)]
```
