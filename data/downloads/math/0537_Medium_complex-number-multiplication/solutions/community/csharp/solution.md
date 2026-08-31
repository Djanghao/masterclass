# C#

**Author:** Dmitriy-Maksimov
**Votes:** 0
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/5026029/](https://leetcode.com/problems/complex-number-multiplication/solutions/5026029/)

---

# Approach
- Parse numbers
- Perform operation and convert to string

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```
public class Solution
{
    public string ComplexNumberMultiply(string num1, string num2)
    {
        var (realA, imagA) = Parse(num1);
        var (realB, imagB) = Parse(num2);

        return $"{realA * realB - imagA * imagB}+{realA * imagB  + realB * imagA}i";
    }
    
    private static (int real, int imaginary) Parse(string num)
    {
        var n = num.IndexOf('+');
        var real = int.Parse(num[.. n]);
        var imaginary = int.Parse(num[(n+1)..^1]);
        return (real, imaginary);
    } 
}
```