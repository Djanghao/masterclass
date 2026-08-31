# Two greedy solutions, very simple

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3007872/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3007872/)

---

The idea behind a greedy algorithm: Take the cheapest bar while there is some money left.

Min Heap (basically a hidden sorting):
```csharp
public class Solution
{
    public int MaxIceCream(int[] costs, int coins)
    {
        int res = 0;
        PriorityQueue<int, int> q = new(costs.Select(x => (x, x)));

        while (q.Count > 0 && coins >= q.Peek())
        {
            coins -= q.Dequeue();
            res++;
        }

        return res;
    }
}
```

Sorting:
```csharp
public class Solution
{
    public int MaxIceCream(int[] costs, int coins)
    {
        int res = 0;

        foreach (int cost in costs.OrderBy(x => x))
        {
            if (cost > coins) break;
            coins -= cost;
            res++;
        }

        return res;        
    }
}
```