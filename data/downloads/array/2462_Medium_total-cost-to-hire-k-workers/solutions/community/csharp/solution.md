# [C#], 2 Priority queues

**Author:** Yerkon
**Votes:** 4
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/2791105/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/2791105/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
By using priority queues always get min priority item from *begin* and *end* range.

# Approach
<!-- Describe your approach to solving the problem. -->
Use two priority queues from begin and end using two pointers (i, j)
When Dequeue element from queue, Enqueue new element to fill candidates range (i++, j--) until $$i<=j$$

# Complexity
- Time complexity: $$O(NLogN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long TotalCost(int[] costs, int k, int candidates) {
        var pq1 = new PriorityQueue<int, int>();
        var pq2 = new PriorityQueue<int, int>();
        int i = 0, j = costs.Length - 1;
        long totalCost = 0;

        while (k > 0) {
            while (pq1.Count < candidates && i <= j) {
                pq1.Enqueue(costs[i], costs[i]);
                i++;
            }

            while (pq2.Count < candidates && j >= i) {
                pq2.Enqueue(costs[j], costs[j]);
                j--;
            }

            int p1 = pq1.Count > 0 ? pq1.Peek() : int.MaxValue;
            int p2 = pq2.Count > 0 ? pq2.Peek() : int.MaxValue;

            if (p1 <= p2) {
                totalCost += p1;
                pq1.TryDequeue(out int e, out int p);
            }
            else {
                totalCost += p2;
                pq2.TryDequeue(out int e, out int p);
            }

            k--;
        }

        return totalCost;
    }
}

```