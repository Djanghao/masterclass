# ✅ C# | easy and readable solution 🚅 faster than 90% 💻 less than 90%

**Author:** Thanat05
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/4179251/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/4179251/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```
public class Solution {
    public int CountBalls(int lowLimit, int highLimit) {
        int[] ans = new int[46];
        for (int i = lowLimit; i <= highLimit; i++)
        {
            int sum = 0;
            int tmp = i;
            while (tmp > 0)
            {
                sum += tmp % 10;
                tmp /= 10;
            }
            ans[sum] += 1;
        }
        return ans.Max();
    }
}
```

If you like it don't forget to **upvote!**