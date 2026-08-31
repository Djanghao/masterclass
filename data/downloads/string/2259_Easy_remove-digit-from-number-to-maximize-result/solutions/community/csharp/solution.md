# C# simple solution

**Author:** 1MeTr
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/3274049/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/3274049/)

---


# Code
```
public class Solution {
    public string RemoveDigit(string number, char digit) 
    {
        List<string> numbers = new List<string>();
        for(int i = 0; i < number.Length; i++)
        {
            if(number[i] == digit)
            {
                numbers.Add(number.Remove(i, 1));
            }
        }

        return numbers.Max();
    }
}
```