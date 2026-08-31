# Typescript inDegree approach (easy to understand)

**Author:** alexgavrilov
**Votes:** 2
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/3513763/](https://leetcode.com/problems/course-schedule-ii/solutions/3513763/)

---

# Complexity
- Time complexity:
O(V + E)

- Space complexity:
O(V + E)

# Code
```
// Approach: InDegree
// Example // prerequisites: [[1,0],[2,0],[3,1],[3,2]], numCourses: 4
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const inDegrees = new Array(numCourses).fill(0);
    for (const [v] of prerequisites) inDegrees[v]++
    // by our example we will have a structure:
    //  |0||1||2||3|
    // [ 0, 1, 1, 2 ]

    const queue: number[] = [];
    for (let i = 0; i < inDegrees.length; i++) {
        inDegrees[i] === 0 && queue.push(i);
    }
    // queue: [0] - courses that don't block anyone

    const topologicalSortedOrder: number[] = [];
    while (queue.length) {
        const node: number = queue.shift();
        numCourses -= 1;
        topologicalSortedOrder.push(node);
        for (const [v, e] of prerequisites) {
            if (e === node) {
                inDegrees[v] -= 1;
                inDegrees[v] === 0 && queue.push(v);
            }
        }
    }

    if (numCourses > 0) return []; // the cycle is detected

    return topologicalSortedOrder;
}




```