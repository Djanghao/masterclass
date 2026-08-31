# Typescript solution with built-in min queue

**Author:** alexgavrilov
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3684298/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3684298/)

---

# Complexity
- Time complexity:
O((k + m) * log m), m - candidates

- Space complexity:
O(m)

# Code
```
function totalCost(costs: number[], k: number, candidates: number): number {
    const minPq = new MinPriorityQueue({ 
        compare: (a, b) => a.cost === b.cost ? a.index - b.index : a.cost - b.cost
    });

    let totalCost: number = 0;
    let nextHead: number = candidates;
    let nextTail: number = costs.length - candidates - 1;

    for (let i = 0; i < candidates; i++) {
      minPq.enqueue({cost: costs[i], index: i});
    }
    for (let i = Math.max(candidates, costs.length - candidates); i < costs.length; i++) {
      minPq.enqueue({cost: costs[i], index: i});
    }

    while (k-- > 0) {
      const element = minPq.dequeue();
      totalCost += element.cost;
      if (nextHead > nextTail) continue;

      minPq.enqueue(element.index < nextHead ? 
        {index: nextHead, cost: costs[nextHead++]}:
        {index: nextTail, cost: costs[nextTail--]}
      );
    }

    return totalCost;
};



```