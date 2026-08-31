# Easy solution C# O(1) time complexity

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/5382740/](https://leetcode.com/problems/clumsy-factorial/solutions/5382740/)

---


# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int Clumsy(int n) {
        if (n <= 2) 
            return n;
        if (n == 3) 
            return 6;
        
        int result = n * (n - 1) / (n - 2) + (n - 3);
        n -= 4;
        while (n >= 4)
        {
            result -= n * (n - 1) / (n - 2);
            result += (n - 3);
            n -= 4;
        }
        if (n == 3)
            result -= 3 * 2 / 1;
        else if (n == 2) 
            result -= 2 * 1;
        else if (n == 1) 
            result -= 1;
        return result;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
