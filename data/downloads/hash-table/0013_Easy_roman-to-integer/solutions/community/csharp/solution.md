# C# Runtime 94% and Memory 98% O(n)

**Author:** Koliter
**Votes:** 46
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/1362651/](https://leetcode.com/problems/roman-to-integer/solutions/1362651/)

---

This solution uses a switch case to reduce memory usage as well as a method scope `currentValue` Variable which enables the code to reuse the memory and thus drastically reduce memory usage. Simple for loop means solution is O(n), n being the length of the string.

The Results : 
Runtime: 80 ms, faster than 93.83% of C# online submissions for Roman to Integer.
Memory Usage: 25.9 MB, less than 97.87% of C# online submissions for Roman to Integer.

```
public class Solution {
    public int RomanToInt(string s) {

        var chars = s.ToCharArray();
        var result = 0;
        var currentValue = 0;
        for(var i = 0; i < chars.Length - 1; i++){
            currentValue = RomanNumerals(chars[i]);
            result += (RomanNumerals(chars[i+1]) > currentValue ? -1 : 1) * currentValue;
        }
        
        return result +  RomanNumerals(chars[chars.Length - 1]);
    }
    
    public int RomanNumerals(char c)
    {
        switch(c){
            case 'I' : return 1;
            case 'V' : return 5;
            case 'X' : return 10;
            case 'L' : return 50;
            case 'C' : return 100;
            case 'D' : return 500;
            case 'M' : return 1000;
        };  
        return 0;
    }
}
```