# Beats 100% | Easy to understand C# Solution

**Author:** algorithms286
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/5990586/](https://leetcode.com/problems/shopping-offers/solutions/5990586/)

---

# Code
```csharp []
public class Solution
{
    public int ShoppingOffers(IList<int> price, IList<IList<int>> special, IList<int> needs)
    {
        int n = price.Count;
        int m = special.Count;

        bool ValidProfitableOffer(int[] curNeeds, int i)
        {
            int packagePrice = special[i][n];
            int itemsPrice = 0;

            for (int j = 0; j < n; j++)
            {
                if (curNeeds[j] - special[i][j] < 0)
                    return false;

                itemsPrice += special[i][j] * price[j];
            }

            return packagePrice <= itemsPrice;
        }


        int res = 0;

        for (int j = 0; j < n; j++)
            res += needs[j] * price[j];

        var cache = new Dictionary<(int, string), int>();
        
        return Math.Min(res, Solver(0, needs.ToArray()));
        int Solver(int i, int[] needs)
        {
            if (needs.Max() == 0)
                return 0;

            var key = (i, string.Join(",", needs));
            if (cache.ContainsKey(key)) return cache[key];
            cache[key]=0;
            
            for (int j = 0; j < n; j++)
                cache[key] += needs[j] * price[j];


            for (int cur = i; cur < m; cur++)
            {
                if (ValidProfitableOffer(needs.ToArray(), cur))
                {
                    for (int j = 0; j < n; j++)
                        needs[j] -= special[cur][j];
                        
                    cache[key] = Math.Min(cache[key], special[cur][n] + Solver(cur, needs));
                    cache[key] = Math.Min(cache[key], special[cur][n] + Solver(cur + 1, needs));

                    for (int j = 0; j < n; j++)
                        needs[j] += special[cur][j];
                }

            }
            return cache[key];
        }
    }
}

```