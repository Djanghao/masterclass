# JavaScript Topological Sort

**Author:** shengdade
**Votes:** 36
**Link:** [https://leetcode.com/problems/course-schedule/solutions/526053/](https://leetcode.com/problems/course-schedule/solutions/526053/)

---

Wiki - https://en.wikipedia.org/wiki/Topological_sorting

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);

  for (const [e, v] of prerequisites) {
    // build graph map
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    // build indegree array
    indegree[e]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length;
};
```

* 42/42 cases passed (60 ms)
* Your runtime beats 96.87 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (38.2 MB)