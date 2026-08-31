# C# | Optimal and easy to read solution. Beats 100% Runtime

**Author:** neerex
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/3486454/](https://leetcode.com/problems/find-and-replace-pattern/solutions/3486454/)

---

![image.png](./images/0.png)

# Code
```
public class Solution 
{
    public IList<string> FindAndReplacePattern(string[] words, string pattern) 
    {
        var result = new List<string>();
        var dict = new Dictionary<char, char>();

        foreach (string word in words)
        {
            if(word.Length != pattern.Length) 
                continue;
            
            for (int i = 0; i < pattern.Length; i++)
            {
                if(dict.ContainsKey(pattern[i]) && dict[pattern[i]] != word[i])
                    break;
                
                if(!dict.ContainsKey(pattern[i]) && dict.ContainsValue(word[i]))
                    break;
                
                if(i == pattern.Length - 1) 
                    result.Add(word);
                
                dict.TryAdd(pattern[i], word[i]);
            }
            
            dict.Clear();
        }

        return result;
    }
}
```