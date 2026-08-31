# ✅ Easy-to-understand C# solution using Sieve of Eratosthenes

**Author:** KamronSaliev
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-primes/solutions/3291580/](https://leetcode.com/problems/count-primes/solutions/3291580/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
public class Solution 
{
    public int CountPrimes(int n)
    {
        var count = 0;
        var isComposite = new bool[n + 1];

        for (var i = 2; i < n; i++)
        {
            if (isComposite[i])
            {
                continue;
            }

            count++;

            for (var j = i * 2; j < n; j += i)
            {
                isComposite[j] = true;
            }
        }

        return count;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
