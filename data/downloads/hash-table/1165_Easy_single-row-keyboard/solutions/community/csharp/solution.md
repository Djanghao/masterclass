# C# simple way

**Author:** neildeng0705
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/2681782/](https://leetcode.com/problems/single-row-keyboard/solutions/2681782/)

---


```
public class Solution 
{
    public int CalculateTime(string keyboard, string word) 
    {       
       int sum = 0;
       int preIndex = 0;

       for(int i=0; i<word.Length; i++)
       {
            int index = keyboard.IndexOf(word[i]);
            sum += Math.Abs(index -preIndex);
            preIndex = index;
       }

       return sum;
    }
}
```