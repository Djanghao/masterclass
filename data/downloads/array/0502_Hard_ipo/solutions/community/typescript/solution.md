# Typescript/Priority-Queue (Heap) Clean Intuitive Solution

**Author:** Adetomiwa
**Votes:** 4
**Link:** [https://leetcode.com/problems/ipo/solutions/3222212/](https://leetcode.com/problems/ipo/solutions/3222212/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each iteration, we basically need to get a list of project that can be done with the current capital at hand.

Then we need to get the most profitable out of that list and add to our current capital at hand.

# Approach
<!-- Describe your approach to solving the problem. -->
Note: The capital at hand can never decrease, so you don't have to iterate over a project more than once.

For each step <b>(k - 0)</b>
    - Loop through the list of doable projects(project's capital < capital at hand), and add their profits to a max priority queue.
    - If queue is empty, return capital at hand
    - Otherwise, add maximum profit in queue to capital at hand.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    // consider capital at hand first at every iteration
    // get a list of projects you can do with that capital,
    // pick most profitable project to do from that list.

    // Note: profit is not (profit[i]-capital[i]), it is just (profit[i])

    let queue = new MaxPriorityQueue();
    
    let combinedData: number[][] = capital.map((item, idx) => [item, profits[idx]]);
    combinedData.sort((a,b) => a[0]-b[0]);

    let currentCapital: number = w;
    let currentIdx: number = 0;

    while(k > 0) {

        while(currentIdx < combinedData.length && combinedData[currentIdx][0] <= currentCapital){
            const [capital, profit] = combinedData[currentIdx];

            queue.enqueue(profit);

            currentIdx += 1;
        }

        if(queue.size() === 0){
            return currentCapital;
        }

        const {element} = queue.dequeue();
        currentCapital += element;

        k-=1;
    }

    return currentCapital;
};
```