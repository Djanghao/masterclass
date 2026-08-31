# C# Queue O(n)

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/5635351/](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/5635351/)

---

# Intuition
From left to right, for each `it`, if there are `nit`s can be caught by it, catch always the leftmost one.

# Approach
Queue

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int CatchMaximumAmountofPeople(int[] team, int dist) {
        var nit = new Queue<int>();
        var it = new Queue<int>();
        var len = team.Length;
        for (var i = 0; i < len; ++i)
        {
            if (team[i] == 0) nit.Enqueue(i);
            else it.Enqueue(i);
        }
        var res = 0;
        while (it.Count > 0 && nit.Count > 0)
        {
            var m = it.Dequeue();
            var lo = m - dist;
            var hi = m + dist;
            while (nit.Count > 0 && nit.Peek() < lo) nit.Dequeue();
            if (nit.Count > 0 && nit.Peek() <= hi)
            {
                res++;
                nit.Dequeue();
            }
        }
        return res;
    }
}
```