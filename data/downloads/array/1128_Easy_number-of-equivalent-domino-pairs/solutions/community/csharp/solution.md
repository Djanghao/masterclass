# ✅ C# | easy and readable solution

**Author:** Thanat05
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/4513855/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/4513855/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```
public class Solution {
    public int NumEquivDominoPairs(int[][] dominoes) {
        Dictionary<int, int> dc = new();
        int counter = 0;
        foreach (int[] d in dominoes)
        {
            int small = d[0];
            int big = d[1];
            if (d[0] > d[1])
            {
                big = d[0];
                small = d[1];
            }
            small = small * 10 + big;
            if (!dc.ContainsKey(small))
                dc.Add(small, 1);
            else
            {
                counter += dc[small];
                dc[small]++;
            }
        }
        return counter;
    }
}
```

If you like it don't forget to **upvote!**