# Union with common primes

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/5980669/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/5980669/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    private int[] par;
    private int[] rank;

    private int FindPar(int x)
    {
        if(par[x] != x)
            par[x] = FindPar(par[x]);

        return par[x];
    }

    private bool Union(int x, int y)
    {
        int xPar = FindPar(x), yPar = FindPar(y);
        if(xPar == yPar)
            return false;
        par[xPar] = par[yPar];

      /*  if(rank[x] >= rank[y])
        {
            par[yPar] = xPar;
            rank[xPar]++;
        }  
        else
        {
            par[xPar] = yPar;
            rank[yPar]++;
        }
*/
        return true;
    }

    public List<int> FindPrime(int n)
    {
        List<int> pr = new();
        bool[] isPrime = Enumerable.Repeat(true, n+1).ToArray();
        for(int i = 2; i <= n; i++)
        {
           if(isPrime[i])
            pr.Add(i);

            for(int j = i+i; j <= n; j+= i)
            {
                isPrime[j] = false;
            }
        }

        return pr;
    }

    public int LargestComponentSize(int[] nums) {
        int len = nums.Length, res = 1, maxV = int.MinValue;
        if(len < 2)
            return len;

        par = new int[len];
        rank = new int[len];
        for(int i = 0; i < len; i++)
        {
            par[i] = i;
        }

        Array.Sort(nums);
        var primes = FindPrime(nums[len-1]);
        int first = -1, skip = 0, components = len;

        foreach(int p in primes)
        {
            first = -1;
            for(int j = skip; j < len; j++)
            {
                if(nums[j] < p)
                    skip++;
                    else if(nums[j] % p == 0)
                    {
                        if(first >= 0)
                        {
                            components -= Union(first, j) ? 1 : 0;
                            if(components == 1) // in case : union all the items
                                return len;
                        }
                        else
                            first = j;
                    }
            }
        }

        Dictionary<int, int> dict = new();
        maxV = 0;

        for(int i = 0; i < len; i++)
        {
            int root = FindPar(i);
            if(!dict.ContainsKey(root))
                dict.Add(root, 1);
            else
                dict[root]++;

            maxV = Math.Max(maxV, dict[root]);
        }

        return maxV;
    }
}
```