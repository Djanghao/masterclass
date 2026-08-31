# Using Min Heap

**Author:** mxvlshn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/5999460/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/5999460/)

---

# Approach
Using min heap.

# Complexity
- Time complexity: O(n*logn)
Enqueue n elements in the queue costs n*logn.
Dequeue an element from the queue is O(1).

- Space complexity: O(n)

# Code
```csharp []
public class Solution {
    public int ConnectSticks(int[] sticks) 
    {
        // create a min heap of the sticks array
        var heap = new PriorityQueue<int, int>();
        foreach (var s in sticks)
        {
            heap.Enqueue(s, s);
        }    

        var cost = 0;
        while (heap.Count > 1)
        {
            // sum lowest two sticks
            var sum = heap.Dequeue() + heap.Dequeue();

            // update the total cost
            cost += sum;

            // put the new stick back in the heap
            heap.Enqueue(sum, sum);
        }
        return cost;
    }
}
```