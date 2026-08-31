# C# | Priority Queue

**Author:** tyler7410
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2632239/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2632239/)

---

```
public class Solution
{
    public int MinStoneSum(int[] piles, int k)
    {
        int sum = piles.Sum();
        PriorityQueue<int,int> pq = new PriorityQueue<int,int>();
        for (int i = 0; i < piles.Length; i ++)
        {
            pq.Enqueue(piles[i],0-piles[i]);
        }
        for (int i = 0; i < k; i ++)
        {
            int sub = pq.Peek() / 2;
            sum -= sub;
            int addBack = pq.Dequeue();
            pq.Enqueue(addBack - sub, 0 - (addBack - sub));
        }
        return sum;
    }
}
```