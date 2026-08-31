# C# PriorityQueue

**Author:** 3S_AKB
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5720087/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5720087/)

---


# Code
```csharp []
public class Solution {
    public int[] ResultsArray(int[][] q, int k) {
        PriorityQueue<int, int> a = new PriorityQueue<int, int>();
        int[] res = Enumerable.Repeat(-1, q.Length).ToArray();
        for (int i = 0; i < q.Length; i++)
        {
            a.Enqueue(Math.Abs(q[i][0]) + Math.Abs(q[i][1]), -Math.Abs(q[i][0]) - Math.Abs(q[i][1]));
            if (a.Count > k)
                a.Dequeue();
            if (a.Count >= k)
                res[i] = a.Peek();
        }
        return res;
    }
}
```