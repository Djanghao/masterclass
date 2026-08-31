# Maximum Score From Removing Stones

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/6121681/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/6121681/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Initialize a priority queue and insert the piles.

Repeat the following steps until there are fewer than two non-empty piles:
a. Remove the two largest piles from the priority queue.
b. Add 1 point to the score.
c. If the size of the larger pile is greater than 0, add it back to the priority queue minus 1.
Return the final score.

This approach ensures that we always choose the two largest piles for each turn, maximizing our score. The use of a priority queue allows us to efficiently track the sizes of the piles and determine the two largest at each turn.

# Complexity
# Time complexity: O(n log(n))
Where n is the number of stones in the piles. This is because we are using a priority queue, which has an average time complexity of O(log n) for inserting and removing elements. In each iteration of the while loop, we remove two elements from the priority queue, so the total time complexity for the loop is O(n log n).

# Space complexity: O(n)
Where n is the number of stones in the piles. This is because we are using a priority queue to store the sizes of the piles, and the number of elements in the priority queue will be equal to the number of stones in the piles.
# Code
```typescript []
function maximumScore(a: number, b: number, c: number): number {
    let ans: number = 0;
    const pq = new MaxPriorityQueue();
    pq.enqueue(a);
    pq.enqueue(b);
    pq.enqueue(c);
    
    while(pq.size() > 1) {
        let first = pq.dequeue().element;
        let second = pq.dequeue().element;
        
        first--;
        second--;
        ans++;
        
        if(first > 0) {
            pq.enqueue(first);
        }
        if(second > 0) {
            pq.enqueue(second);
        }
    }
    
    return ans;
};
```