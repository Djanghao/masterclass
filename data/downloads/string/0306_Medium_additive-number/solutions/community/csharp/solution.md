# C# | Backtracking

**Author:** zakharseva1980
**Votes:** 0
**Link:** [https://leetcode.com/problems/additive-number/solutions/6077059/](https://leetcode.com/problems/additive-number/solutions/6077059/)

---

# Intuition
Brute force attempt to split into all possible pairs (s1, s2) for recursive check.


# Approach
Recursive check based on a pair.

# Complexity
- Time complexity: O(2^(n/2) )
- Space complexity: O(n)

where n is length of num
# Code
```csharp []
public class Solution 
{
    public bool IsAdditiveNumber(string num)
    {
        int n = num.Length;

        for (int i = 1; i <= n / 2; i++) // first number len
        {
            for (int j = 1; Math.Max(i, j) <= n - i - j; j++) // second number len
            {
                if (DFS(num.Substring(0, i), num.Substring(i, j), num.Substring(i + j)))
                   return true;
            }
        }
     
        return false;
    }
    bool DFS(string s1, string s2, string remaining)
    {
        if ((s1.Length > 1 && s1[0] == '0') || (s2.Length > 1 && s2[0] == '0'))
            return false;

        long num1 = long.Parse(s1);
        long num2 = long.Parse(s2);
        string sum = (num1 + num2).ToString();

        if (!remaining.StartsWith(sum))
            return false;

        if (remaining == sum)
            return true;
     
        return DFS(s2, sum, remaining.Substring(sum.Length));
    }

}
```