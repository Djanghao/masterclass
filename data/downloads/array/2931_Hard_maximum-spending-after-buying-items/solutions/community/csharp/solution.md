# [C#] Priority Queue

**Author:** Pavel_For_Sure
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4277491/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4277491/)

---

# Approach

We need to buy the cheapest one first so that the most expensive ones have the largest multiplier

# Complexity
- Time complexity:
O(nmLogn)

- Space complexity:
O(n)

# Code
```
public class Solution 
{
    public long MaxSpending(int[][] values) 
    {
        int itemCount = values[0].Length;
        PriorityQueue<(int shop, int itemIndex), int> q = new();

        //Fill queue with last items from shops
        for (int shopNumber = 0; shopNumber < values.Length; shopNumber++)
            q.Enqueue((shopNumber, itemCount - 1), values[shopNumber][itemCount - 1]);

        long result = 0, day = 1;

        while (q.Count > 0)
        {
            (int shop, int itemIndex) = q.Dequeue();
            result += values[shop][itemIndex] * day++;
            
            if (itemIndex == 0)
                continue;

            itemIndex--;
            int cost = values[shop][itemIndex];
            q.Enqueue((shop, itemIndex), cost);
        }

        return result;
    }
}
```