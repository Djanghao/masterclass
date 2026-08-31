# Good code is code that works tomorrow just as well as today

**Author:** Anevil
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/6040099/](https://leetcode.com/problems/faulty-keyboard/solutions/6040099/)

---

# Code
```csharp []
public class Solution {
    public string FinalString(string s) 
    {
        var result = new List<char>();
        foreach(var c in s)
        {
            if (c == 'i')
            {
                result.Reverse();
            }
            else
            {
                result.Add(c);
            }
        }

        return new string(result.ToArray());
    }
}
```