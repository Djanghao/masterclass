# Concise solution with two heaps

**Author:** anikit
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/2808178/](https://leetcode.com/problems/find-median-from-data-stream/solutions/2808178/)

---

```csharp
public class MedianFinder
{
    PriorityQueue<int, int> left = new();
    PriorityQueue<int, int> right = new();
    bool odd = false;

    public void AddNum(int n)
    {
        odd = !odd;
        int m = right.EnqueueDequeue(n, -n);
        left.Enqueue(m, m);

        if (left.Count - 1 > right.Count)
        {
            m = left.Dequeue();
            right.Enqueue(m, -m);
        }
    }
    
    public double FindMedian() =>
        odd ? left.Peek() : (left.Peek() + right.Peek()) / 2.0;
}
```