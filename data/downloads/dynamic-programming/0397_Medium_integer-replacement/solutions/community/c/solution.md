# 0 ms C++ recursion solution with Explanation

**Author:** Mad_air
**Votes:** 31
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/87942/](https://leetcode.com/problems/integer-replacement/solutions/87942/)

---

All you need is determine replace `n` with `n + 1` or `n - 1`, when n is odd. since,
- if n is even, you get no choice, just replace it with `n / 2`.
- if n is odd, you can either `add 1` or `reduce 1`. 

If `n + 1 % 4 == 0`, replace `n` with `n + 1` will short the path. Otherwise, replace `n` with `n - 1` is always the right direction.

 **Examle:**
```
Input:
31

- 1. Replace 31 with 32:
31 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1

- 2. Replace 31 with 30:
31 -> 30 -> 15 -> 16 -> 8 -> 4 -> 2 -> 1

Output:
6
```

 **Code:**
```c++
class Solution 
{
    // date: 2016-09-11     location: Vista Del Lago III Apartments
    int res = 0;
public:
    int integerReplacement(int n) 
    {
        if (n == 1)
            return res;
        if (n == 3)
        {
            res += 2;
            return res;
        }
        if (n == INT_MAX)
            return 32;
        if (n & 1)     // odd
        {
            res ++;
            if ((n + 1) % 4 == 0)
                integerReplacement(n + 1);
            else
                integerReplacement(n - 1);
        }
        else     // even
        {
            res ++;
            integerReplacement(n / 2);
        }
        return res;
    }
};
```


make it shorter:
```c++
class Solution 
{
    // date: 2016-09-11     location: Vista Del Lago III Apartments
    int res = 0;
public:
    int integerReplacement(int n) 
    {
        if (n == 1)
            return res;
        if (n == 3)
        {
            res += 2;
            return res;
        }
        if (n == INT_MAX)
            return 32;
        
        res ++;
        if (n & 1)
            if ((n + 1) % 4 == 0)
                integerReplacement(n + 1);
            else
                integerReplacement(n - 1);
        else
            integerReplacement(n / 2);
            
        return res;
    }
};
```