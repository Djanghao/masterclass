# Backward-filling with an early exit [bad code!]

**Author:** anikit
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1873064/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1873064/)

---

There is one optimization in the code below that is helpful for large `n`: As soon as `k == n`, we know that the rest of the sought string is `'a'` (s. `&& k > n` in the `while` condition).

While this code works, there are a few bad coding practices here which should be avoided:
1. Re-use of variables: the arguments `n` and `k` are used and modified directly. It would be better to have local variables with speaking names instead.
2. `--` is used inline twice. Yes, it makes the code more concise, but also less readable.
3. No comments whatsoever. If you implement an algorithm, its non-trivial parts should be commented.

And now the code:
```csharp
public string GetSmallestString(int n, int k)
{      
    var res = new char[n--];
    Array.Fill(res, 'a');
    
    while (n >= 0 && k > n)
    {
        int c = Math.Min(26, k - n);
        k -= c;
        res[n--] = (char)(c + 'a' - 1);
    }
    
    return new String(res);
}
```