# C# solution with priority queue

**Author:** Legon2k
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3506937/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3506937/)

---

# Code
```
public class Solution
{
    public IList<IList<int>> KSmallestPairs(int[] nums1, int[] nums2, int k)
    {
        var r = new List<IList<int>>(k);

        var pq = new PriorityQueue<(int, int), int>(
            k + 1, Comparer<int>.Create((x, y) => y - x));

        int maxPriority = int.MaxValue;

        foreach (var n1 in nums1)
        {
            foreach (var n2 in nums2)
            {
                var pr = n1 + n2;

                if (pr < maxPriority)
                {
                    pq.Enqueue((n1, n2), pr);

                    if (pq.Count > k)
                        pq.TryDequeue(out _, out maxPriority);
                }
                else
                {
                    break;
                }
            }
        }

        while (pq.Count > 0)
        {
            var (a, b) = pq.Dequeue();

            r.Add(new[] { a, b });
        }

        return r;
    }
}

```