# C# Minimum Lines

**Author:** gregsklyanny
**Votes:** 15
**Link:** [https://leetcode.com/problems/ipo/solutions/3221164/](https://leetcode.com/problems/ipo/solutions/3221164/)

---

# Code
```
public class Solution 
{
    public int FindMaximizedCapital(int k, int w, int[] profits, int[] capital) 
    {
        Array.Sort(capital, profits);
        var pq = new PriorityQueue<int,int>();
        int index = 0;
        while(k > 0)
        {
            while (index < profits.Length && w >= capital[index]) 
            {
                pq.Enqueue(profits[index], -profits[index]);
                index++;
            }
            if (pq.Count == 0) return w;
            w += pq.Dequeue();
            k--;
        }
        return w;
    }
}
```