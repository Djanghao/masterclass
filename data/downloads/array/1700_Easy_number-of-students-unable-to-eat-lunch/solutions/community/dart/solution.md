# Dart, simple solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4990301/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4990301/)

---

# Code
```
class Solution {
  int countStudents(List<int> students, List<int> sandwiches) {
    var freq = [0, 0];
    students.forEach((student) => freq[student]++);

    int k = 0;
    while (k < sandwiches.length) {
      if (freq[sandwiches[k]] > 0) {
        freq[sandwiches[k]]--;
      } else {
        break;
      }
      k++;
    }

    return sandwiches.length - k;
  }
}

```