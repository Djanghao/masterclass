# C# solution using recursion - faster than 100%

**Author:** Jdg1125
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-iii/solutions/5195027/](https://leetcode.com/problems/strobogrammatic-number-iii/solutions/5195027/)

---

# Intuition
This solution builds on the level-wise traversal approach for the Strobogrammatic Number II problem, i.e. all strobo numbers of size N are built from strobo numbers of size N - 2. Obviously, for numbers of 2+ digits, strings beginning with '0' are invalid.
 

# Approach
- The recursive method FindStrobogrammatic has two base cases, which are taken from the Strobogrammatic Number II problem: N == 0 and N == 1. 
- Bottom-up, we generate 2 queues of strings for the even and odd cases. 
- The caller method StrobogrammaticInRange calls FindStrobogrammatic for m = low.Length to n = high.Length inclusive, generating all possible strobo numbers. 
- Since FindStrobomagrammatic may return some "garbage" strings, i.e. ones with Length > 1 beginning with '0', we filter these out in StrobogrammaticInRange.

# Complexity
Time complexity:

- Let M = low.Length, N = high.Length, 
- We are building all strobo numbers of length M to length N.
- For any k in [M, N], the number of strings generated is roughly 5^(k/2) (maybe I'm off by one here - please someone correct me if so). 
- For every 5^(k/2) strings, we do an extra O(k) amount of work to build the string. 
- Therefore, the runtime complexity is given by the sum (M)5^(M/2) + (M+1)5^(M/2 + 1) + ... + (N)5^(N/2). 
- This sum is evaluated here: https://www.wolframalpha.com/input?i2d=true&i=Sum%5Bk*Power%5B5%2CDivide%5Bk%2C2%5D%5D%2C%7Bk%2Cm%2Cn%7D%5D

- Please correct my reasoning if you find it to be incorrect.

Space complexity:

- We end up generating 2 queues, one holding strings where Length is even, the other where Length is odd. 
- From the calculation of the runtime complexity, we get that there are 5^(M/2) + 5^(M/2 + 1) + ... + 5^(N/2) strings created. 
- This is a partial geometric series, so the total space complexity, dropping the constants, is O(5^(N+1) - 5^(M+1)). 

# Code
```
public class Solution
{
    Dictionary<char, char> mirror = new();
    ulong low;
    ulong high;
    Queue<string>[] memo = new Queue<string>[16];

    public Solution()
    {
        mirror.Add('1', '1');
        mirror.Add('6', '9');
        mirror.Add('9', '6');
        mirror.Add('8', '8');
        mirror.Add('0', '0');
    }

    public Queue<string> FindStrobogrammatic(int n)
    {
        if (n == 0)
        {
            memo[0] = new();
            memo[0].Enqueue("");
            return memo[0];
        }
        if (n == 1)
        {
            memo[1] = new();
            memo[1].Enqueue("0");
            memo[1].Enqueue("1");
            memo[1].Enqueue("8");
            return memo[1];
        }

        if (memo[n] != null)
            return memo[n];

        Queue<string> q = FindStrobogrammatic(n - 2);


        for (int i = q.Count; i > 0; --i)
        {
            string core = q.Dequeue();
            foreach (var key in mirror.Keys)
            {
                q.Enqueue($"{key}{core}{mirror[key]}");
            }
        }
        return memo[n] = q;
    }

    public int StrobogrammaticInRange(string low, string high)
    {
        int result = 0;
        this.low = ulong.Parse(low);
        this.high = ulong.Parse(high);

        for (int startLen = low.Length; startLen <= high.Length; ++startLen)
        {
            Queue<string> q = FindStrobogrammatic(startLen);
            result += q.Where(item => IsValid(item) && IsInRange(item)).Count();
        }
        return result;
    }

    private bool IsValid(string s)
    {
        return s.Length < 2 || s[0] != '0';
    }

    private bool IsInRange(string s)
    {
        ulong num = ulong.Parse(s);
        return num >= low && num <= high;
    }
}


```