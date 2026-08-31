# SIR Dijkstra

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/6084942/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/6084942/)

---

$$Note :$$ This is my custom implementation for MinMaxHeap. I use it everywhere. It's effiecient and easy to copy & paste. You can also use which is part of LC enviorment.

---

```javascript []
class MinMaxPriorityQueue {

  #heap = []
  #compare;

  constructor(compare) {
    this.#heap = [];
    this.#compare = compare || ((a, b) => a - b) //By default, keep it MinHeap
  }

  // Add a new element to the priority queue
  enqueue = (value) => {
    this.#heap.push(value);
    this.#heapifyUp(this.#heap.length - 1);
  }

  // Remove and return the element with the highest priority (smallest for min-heap, largest for max-heap)
  dequeue = () => {
    if (this.#heap.length === 0) return null;
    const root = this.#heap[0];
    const end = this.#heap.pop();
    if (this.#heap.length > 0) {
      this.#heap[0] = end;
      this.#heapifyDown(0);
    }
    return root;
  }

  // Peek at the element with the highest priority without removing it
  peek = () => {
    return this.#heap.length > 0 ? this.#heap[0] : null;
  }

  // Check if the priority queue is empty
  isEmpty = () => {
    return this.#heap.length === 0;
  }

  // Get the size of the priority queue
  size = () => {
    return this.#heap.length;
  }

  // Maintain heap property by moving element up
  #heapifyUp = (index) => {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.#compare(this.#heap[index], this.#heap[parent]) < 0) {
      this.#swap(index, parent)
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // Maintain heap property by moving element down
  #heapifyDown = (index) => {
    const length = this.#heap.length;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let extreme = index;

    if (left < length && this.#compare(this.#heap[left], this.#heap[extreme]) < 0) {
      extreme = left;
    }

    if (right < length && this.#compare(this.#heap[right], this.#heap[extreme]) < 0) {
      extreme = right;
    }

    if (extreme !== index) {
      this.#swap(index, extreme)
      this.#heapifyDown(extreme);
    }
  }

  #swap = (i, j) => {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]]
  }
}

/**
 * @param {number} n
 * @param {number[][]} highways
 * @param {number} discounts
 * @return {number}
 */
var minimumCost = function (n, highways, discounts) {
  // Step 1: Build adjacency list
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, cost] of highways) {
    graph[u].push([v, cost]);
    graph[v].push([u, cost]);
  }

  // Step 2: Initialize Min-Heap (priority queue)
  const pq = new MinMaxPriorityQueue((a, b) => a[0] - b[0]); // [cost, city, discountsUsed]
  pq.enqueue([0, 0, 0]); // Start with cost 0 at city 0 with 0 discounts used

  // Step 3: Initialize visited array
  const visited = Array.from({ length: n }, () => Array(discounts + 1).fill(Infinity));
  visited[0][0] = 0;

  // Step 4: Dijkstra's algorithm
  while (!pq.isEmpty()) {
    const [currCost, currCity, discountsUsed] = pq.dequeue();

    // If we've reached the destination city, return the cost
    if (currCity === n - 1) return currCost;

    // Skip if the current path is not optimal
    if (currCost > visited[currCity][discountsUsed]) continue;

    for (const [nextCity, travelCost] of graph[currCity]) {
      // Case 1: Travel without a discount
      const nextCost = currCost + travelCost;
      if (nextCost < visited[nextCity][discountsUsed]) {
        visited[nextCity][discountsUsed] = nextCost;
        pq.enqueue([nextCost, nextCity, discountsUsed]);
      }

      // Case 2: Travel using a discount (if available)
      if (discountsUsed < discounts) {
        const discountedCost = currCost + Math.floor(travelCost / 2);
        if (discountedCost < visited[nextCity][discountsUsed + 1]) {
          visited[nextCity][discountsUsed + 1] = discountedCost;
          pq.enqueue([discountedCost, nextCity, discountsUsed + 1]);
        }
      }
    }
  }

  // If we exhaust the queue and don't reach the destination city
  return -1;
};
```