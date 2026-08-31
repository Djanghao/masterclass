# Easy 1 liner in C# with LINQ

**Author:** DavidLindon
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3189763/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3189763/)

---

Here is an easy to understand 1 liner

# Approach
1. Convert the num array to a string
2. Parse as a number
3. Add k
4. Convert value to string
5. Convert each element to an int
6. Build list to return

# Code
```
using System.Numerics;
public class Solution {
    public IList<int> AddToArrayForm(int[] num, int k) {
        return (BigInteger.Parse(string.Join("", num.Select(x => x))) + k).ToString().Select(x => int.Parse(x.ToString())).ToList();
    }
}
```