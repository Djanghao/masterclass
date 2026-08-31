# JavaScript Beats 89.19% by time. Topological sort solution.

**Author:** gleb7raul
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/5529852/](https://leetcode.com/problems/parallel-courses/solutions/5529852/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m+n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimumSemesters(n: number, relations: number[][]): number {
    const inDegree = Array(n + 1).fill(0);
    const map = new Map();

    for (let [from, to] of relations) {
      if (!map.has(from)) map.set(from, new Set());
      map.get(from).add(to);
      inDegree[to]++;
    }

    const queue = [];
    for (let i = 1; i <= n; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    let level = 0;
    while (queue.length) {
      let length = queue.length;
      
      for (let i = 0; i < length; i++) {
        let curr = queue.shift();

        if (map.has(curr)) {
          for (let next of map.get(curr)) {
            inDegree[next]--;
            if(inDegree[next] === 0) {
              queue.push(next);
            }
          }
        }
      }
      level++;
    }

    for (let i = 1; i <= n; i++) {
      if (inDegree[i] !== 0) return -1;
    }

    return level;
}
```