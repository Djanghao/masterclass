# Shortest solution using Min Heap (PriorityQueue)

**Author:** anikit
**Votes:** 19
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/1922285/](https://leetcode.com/problems/last-stone-weight/solutions/1922285/)

---

**Step 1:** Put the array into a min heap. To avoid creating a custom comparer, let's just revert priorities (`-x`).
**Step 2:** Get the two "heaviest" stones from the heap and smash them together. If there is something left, put it back into the heap.

```csharp
public int LastStoneWeight(int[] stones)
{
    var q = new PriorityQueue<int, int>(stones.Select(x => (x, -x)));
    
    while (q.Count > 1)
    {
        int a = q.Dequeue() - q.Dequeue();
        if (a != 0) q.Enqueue(a, -a);
    }
        
    return (q.Count == 0) ? 0 : q.Peek();
}
```