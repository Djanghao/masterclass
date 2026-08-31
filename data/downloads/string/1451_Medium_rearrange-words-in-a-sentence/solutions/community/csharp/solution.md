# C# Dictionary

**Author:** BinksWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4673031/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4673031/)

---

# Code
```
public class Solution {
    public string ArrangeWords(string text) {
        if(!text.Contains(' ')) return text;
        
        var dict = new Dictionary<int, List<string>>();
        var rs = "";
        text = text[0].ToString().ToLower() + text.Substring(1, text.Length - 1);
        string[] arr = text.Split(' ');

        foreach(var s in arr){
            if(!dict.ContainsKey(s.Length))
                dict.Add(s.Length, new List<string>());
            dict[s.Length].Add(s);
        }

        while(dict.Count > 0){
            var min = dict.Keys.Min();
            foreach(var str in dict[min])
                rs += str + " ";
            dict.Remove(min);
        }

        return rs[0].ToString().ToUpper() + rs.Substring(1, rs.Length - 2);
    }
}
```