# C#, LINQ

**Author:** user1014ih
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/6120575/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/6120575/)

---


# Code
```csharp []
public class Solution {
    public int KItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) => 
        Enumerable.Repeat(1,numOnes)
        .Concat(Enumerable.Repeat(0,numZeros))
        .Concat(Enumerable.Repeat(-1,numNegOnes)).Take(k).Sum();
}

```