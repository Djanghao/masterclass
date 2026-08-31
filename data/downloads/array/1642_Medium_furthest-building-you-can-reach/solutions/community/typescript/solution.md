# ✅8 lines of optimized code | Step by step explanation

**Author:** SumitPokhriyal
**Votes:** 2
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4741112/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4741112/)

---

# Intuition
The problem asks to find the furthest building that can be built given a certain number of bricks and ladders. The intuition here is to use a greedy approach where we prioritize using ladders for the tallest climbs and use bricks for the rest. This ensures that we can build as far as possible while minimizing the use of bricks.

# Approach
1. We iterate through the heights array, calculating the difference between consecutive heights.
2. We enqueue the positive differences (indicating a climb) into a priority queue (min heap).
3. If the size of the priority queue exceeds the number of available ladders, we start using bricks instead. We subtract the element (height difference) dequeued from the priority queue from the available bricks.
4. If the number of available bricks becomes negative, we return the index of the current building as this indicates we can't proceed further.
5. If we successfully iterate through the array without running out of bricks, we return the index of the last building.
# Complexity
## Time complexity:
* The time complexity of enqueuing into and dequeuing from the priority queue is logarithmic in the number of elements, so overall the time complexity is O(n log ladders), where n is the number of buildings and ladders is the number of available ladders.
## Space complexity:
* The space complexity is O(ladders) since the priority queue can hold at most ladders elements.

# Code
```
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const n = heights.length;
    const pq = new MinPriorityQueue()
    for( let i = 0; i < n - 1; i++ ){
        let diff = heights[i + 1] - heights[i];
        if( diff > 0 )pq.enqueue(diff);
        if( pq.size() > ladders )bricks -= pq.dequeue().element;
        if( bricks < 0 )return i;
    }
    return n - 1
}
```