# Simple Solution

**Author:** chanshiyucx
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4990521/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/4990521/)

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
function countStudents(students: number[], sandwiches: number[]): number {
  let curIndex = 0
  while (students.length > 0 && curIndex !== students.length) {
    if (sandwiches[0] === students[0]) {
      sandwiches.shift()
      students.shift()
      curIndex = 0
    } else {
      students.push(students.shift())
      curIndex++
    }
  }
  return students.length
}

```