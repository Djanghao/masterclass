# Group by Index and MinPriorityQueue by Height

**Author:** yfyau
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4306717/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4306717/)

---

# Intuition
Refer and refactor from: 
https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/4304269/java-c-python-priority-queue/

# Complexity
- Time complexity: O(Q logQ)
- Space complexity: O(Q)

# Code
```
function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
    const ans = new Array(queries.length).fill(-1);

    const remain = new Array(heights.length).fill(1).map(x => new Array());
    for (let i = 0; i < queries.length; i++) {
        const [q1, q2] = queries[i];

        const left = q1 < q2 ? q1 : q2;
        const right = q1 < q2 ? q2 : q1;
        
        if (left === right) {
            ans[i] = right;
            continue;
        }
        
        const heightLeft = heights[left];
        const heightRight = heights[right];
        
        if (heightLeft < heightRight) {
            ans[i] = right;
            continue;
        }

        // Group remaining queries by index
        remain[right].push({
            height: Math.max(heightLeft, heightRight),
            queryIndex: i 
        });
    }

    const minPQ = new MinPriorityQueue({
        priority: (item) => item.height
    });

    for (let j = 0; j < heights.length; j++) {
        while (!minPQ.isEmpty() && minPQ.front().element.height < heights[j]) {
            ans[minPQ.dequeue().element.queryIndex] = j;
        }

        // Push new queries that meet index conditions
        // So we just need to check the height later
        for (const r of remain[j]) {
            minPQ.enqueue(r);
        }
    }
    
    return ans;
};
```