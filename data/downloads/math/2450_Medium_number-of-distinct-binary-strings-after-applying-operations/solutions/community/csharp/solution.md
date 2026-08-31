# c# oneliner

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2745569/](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2745569/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we have a pure combinatoric problem which can be solved with a help of `BigInteger` class

# Code
```
public class Solution {
    public int CountDistinctStrings(string s, int k) => 
        (int)BigInteger.ModPow(2, s.Length - k + 1, 1_000_000_007);
}
```