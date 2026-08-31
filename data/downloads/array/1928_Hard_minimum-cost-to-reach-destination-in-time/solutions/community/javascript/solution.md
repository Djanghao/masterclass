# Javascript Solution using Djikstra's

**Author:** mygosity
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/2142631/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/2142631/)

---

There's two key points to solving this problem. 

Firstly you need a way to ensure you only add to the queue when it will either be a benefit to cost or time. And the 2nd thing to note is that there could be more than one edge with a different time factor so you should only try to  store the best time for each edge.

With that in mind the solution below is an application of Djikstra's algorithm to solve for best cost vs a limit on max time.

```
var minCost = function (maxTime, edges, passingFees) {
    const n = passingFees.length;
    const graph = new Array(n);

    for (let i = 0; i < edges.length; ++i) {
        const [from, to, time] = edges[i];

        graph[from] = graph[from] || [];
        graph[from][to] = Math.min(graph[from][to] ?? Infinity, time);

        graph[to] = graph[to] || [];
        graph[to][from] = Math.min(graph[to][from] ?? Infinity, time);
    }

    const q = new MinPriorityQueue();
    q.enqueue([0, 0], passingFees[0]);

    const bestTimes = new Array(n).fill(Infinity);

    while (q.size()) {
        const { element, priority } = q.dequeue();
        const [currNode, currTime] = element;
        
        if (currNode === n - 1) {
            return priority;
        }

        for (const node in graph[currNode]) {
            const nextNode = parseInt(node);
            const nextTime = graph[currNode][node] + currTime;

            if (nextTime <= maxTime && nextTime < bestTimes[nextNode]) {
                bestTimes[nextNode] = nextTime;
                q.enqueue([nextNode, nextTime], passingFees[nextNode] + priority);
            }
        }
    }
    return -1;
};
```

Edited thanks to @da5idf