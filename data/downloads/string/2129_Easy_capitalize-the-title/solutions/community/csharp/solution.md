# c#

**Author:** neildeng0705
**Votes:** 2
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/2681941/](https://leetcode.com/problems/capitalize-the-title/solutions/2681941/)

---


```
public class Solution 
{
    public string CapitalizeTitle(string title) 
    {
        string[] pieces = title.ToLower().Split(" ");

        for (int i=0; i<pieces.Length; i++)
        {
            if (pieces[i].Length > 2)
            {
                //pieces[i] = char.ToUpper(pieces[i][0]) + pieces[i].Substring(1);
                char[] chars = pieces[i].ToCharArray();
                chars[0] = Char. ToUpper(chars[0]);
                pieces[i] = string.Join("", chars);
            }
        }

	    return string.Join(" ", pieces);
    }
}
```