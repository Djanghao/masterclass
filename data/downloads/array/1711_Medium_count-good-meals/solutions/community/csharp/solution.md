# Count pairs with given sum...

**Author:** Bogdan-Dinu
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/3779874/](https://leetcode.com/problems/count-good-meals/solutions/3779874/)

---

*deliciousness[i] <= 2^20*, so in a pair, the max sum is `2 * 2^20 = 2^21` - try all 22 possibilities 

# Code
```
public class Solution {
    public int CountPairs(int[] deliciousness) 
    {
        const long M = 1000000007;
        int ret = 0, targetSum = 1;

        for(int k = 0; k <= 21; k++)
        {
            var d = new Dictionary<int, int>();
            for(int i = 0; i < deliciousness.Length; i++)
            {
                if (d.ContainsKey(targetSum - deliciousness[i]))
                    ret = (int)((ret + d[targetSum - deliciousness[i]]) % M);
                d[deliciousness[i]] = d.ContainsKey(deliciousness[i]) ? d[deliciousness[i]] + 1 : 1;
            }

            targetSum *= 2;
        }

        return ret;
    }
}
```