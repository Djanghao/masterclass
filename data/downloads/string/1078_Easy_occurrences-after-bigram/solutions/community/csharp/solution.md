# C# faster than 100%

**Author:** SaleemKassab
**Votes:** 1
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/2534143/](https://leetcode.com/problems/occurrences-after-bigram/solutions/2534143/)

---

```
public class Solution {
    public string[] FindOcurrences(string text, string first, string second) {
      string[] splitedText = text.Split(" ");

    List<string> result = new List<string>();


    for (int i = 0; i < splitedText.Count() - 1; i++)
    {
        if (splitedText[i] == first && splitedText[i + 1] == second && i + 2 <= splitedText.Length - 1)
        {
            result.Add(splitedText[i + 2]);
        }
    }

    return result.ToArray();    
    }
}
```