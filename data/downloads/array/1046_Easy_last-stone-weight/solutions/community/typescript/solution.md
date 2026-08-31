# Typescript || Array || Heap

**Author:** webdot
**Votes:** 3
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/3448782/](https://leetcode.com/problems/last-stone-weight/solutions/3448782/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We initialize a maximum priority queue which ensures the element we call each time has the maximum weight. 

We then insert all stones into this queue. As far as we have at least 2 stones, we pop out the two stones, if they are equal in weight we do nothing, else we get the difference and push back into the queue.

We then return the weight of the last stone left or 0 if none.

# Complexity
- Time complexity: $$O(n . logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function lastStoneWeight(stones: number[]): number {
    const maxPQueue = new MaxPriorityQueue();

    stones.map(stone => maxPQueue.enqueue(stone));

    while(maxPQueue.size() > 1) {
        let first: number = maxPQueue.dequeue().element;
        let second: number = maxPQueue.dequeue().element;

        if(first !== second) {
            maxPQueue.enqueue(first - second);
        }
    }

    return maxPQueue.dequeue()?.element ?? 0;
};
```