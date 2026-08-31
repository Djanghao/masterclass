# C#, 3 Methods

**Author:** CDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3522292/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3522292/)

---

# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(1)$$ 

# Method 1
```
public class Solution 
{
    public bool DoesValidArrayExist(int[] derived)
    {
        //State 1: Start with 0
        int firstNumber = 0;
        foreach (int dr in derived)
        {
            if (dr == 1)
            {
                if (firstNumber == 0)
                    firstNumber = 1;
                else
                    firstNumber = 0;
            }
        }
        if (firstNumber != 0)
            return false;

        //State 2: Start with 1
        firstNumber = 1;
        foreach (int dr in derived)
        {
            if (dr == 1)
            {
                if (firstNumber == 0)
                    firstNumber = 1;
                else
                    firstNumber = 0;
            }
        }
        if (firstNumber != 1)
            return false;

        return true;
    }
}
```
# Method 2
```
public class Solution 
{
    public bool DoesValidArrayExist(int[] derived)
    {
        int xorAll = 0;
        foreach (int dr in derived)
        {
            xorAll ^= dr;
        }
        return xorAll == 0;
    }
}
```
# Method 3
```
public class Solution 
{
    public bool DoesValidArrayExist(int[] derived)
    {
        return derived.Sum() % 2 == 0;
    }
}
```