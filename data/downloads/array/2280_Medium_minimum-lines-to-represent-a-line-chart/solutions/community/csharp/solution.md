# C# O(nlogn)

**Author:** Msey
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2859386/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2859386/)

---

```
public class Solution 
{
    public int MinimumLines(int[][] stockPrices) 
    {
        if (stockPrices.Length == 1)
        {
            return 0;
        }

        var result = 1;

        Array.Sort(stockPrices, (a, b) => a[0].CompareTo(b[0]));

        for (int i = 1; i < stockPrices.Length - 1; i++)
        {
           if ((stockPrices[i][0] - stockPrices[i - 1][0]) * (stockPrices[i+1][1] - stockPrices[i][1]) !=
           (stockPrices[i+1][0] - stockPrices[i][0]) * (stockPrices[i][1] - stockPrices[i-1][1]))
           {
                result++;
           }
        }

        return result;
    }
}
```