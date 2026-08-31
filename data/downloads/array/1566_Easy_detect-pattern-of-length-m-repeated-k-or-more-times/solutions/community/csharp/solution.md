# ✅ C# | easy and readable solution 🚅 faster than 91%

**Author:** Thanat05
**Votes:** 1
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/3326486/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/3326486/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```
public class Solution {
    public bool ContainsPattern(int[] arr, int m, int k) {
        int len = arr.Length;
        for (int i = 0; i < len - m; i++) {
            int j = i;
            while (j < len - m && arr[j] == arr[j + m])
                j++;
            if ((j - i) / m + 1 >= k)
                return true;
        }
        return false;

    }
}
```

If you like it don't forget to **upvote!**