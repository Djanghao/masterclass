# ⛳️ Simple TypeScript solution using MaxPriorityQueue

**Author:** AlexanderFSP
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4003594/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4003594/)

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
function connectSticks(sticks: number[]): number {
    /**
     * @see https://github.com/datastructures-js/priority-queue/tree/v4.1.0
     */
    const queue = new MinPriorityQueue();
    
    for (const stick of sticks) {
        queue.enqueue(stick);
    }
    
    let cost = 0;
    
    while (queue.size() > 1) {
        const sum = queue.dequeue().element + queue.dequeue().element;
        
        cost += sum;
        
        queue.enqueue(sum);
    }
    
    return cost;
};
```