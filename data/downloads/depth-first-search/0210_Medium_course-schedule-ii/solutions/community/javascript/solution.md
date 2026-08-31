# Clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 29
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/420402/](https://leetcode.com/problems/course-schedule-ii/solutions/420402/)

---

```js
const findOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++;
  }

  const q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) q.push(i);
  }

  const res = [];
  while (q.length) {
    const u0 = q.shift();
    numCourses--;
    res.push(u0);
    for (const [v, u] of prerequisites) {
      if (u === u0) {
        inDegrees[v]--;
        if (inDegrees[v] === 0) q.push(v);
      }
    }
  }
  return numCourses === 0 ? res : [];
};
```
