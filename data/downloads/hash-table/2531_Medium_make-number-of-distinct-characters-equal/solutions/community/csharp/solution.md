# Solution in C# | beats 100%

**Author:** yeuhoahuuco
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/5120143/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/5120143/)

---

![image.png](./images/0.png)

# Code
```
public class Solution {
    public bool IsItPossible(string word1, string word2) {
        var d1 = new Dictionary<char, int>();
        var d2 = new Dictionary<char, int>();

        for(int i = 0; i < word1.Length; i++)
        {
            d1[word1[i]] = d1.GetValueOrDefault(word1[i], 0) + 1;
        }
        for(int i = 0; i < word2.Length; i++)
        {
            d2[word2[i]] = d2.GetValueOrDefault(word2[i], 0) + 1;
        }

        if(Math.Abs(d1.Count - d2.Count) > 2)
        {
           return false;
        }

        foreach(var i in d1)
        {
            int x = d1.Count, y = d2.Count;
            if(i.Value == 1)
            {
                x--;
            }
            
            foreach(var j in d2)
            {
                int x1 = x, y1 = y;
                if(j.Value == 1)
                {
                    y1--;
                }

                if(!d1.ContainsKey(j.Key) || (j.Key == i.Key && i.Value == 1))
                {
                    x1++;
                }

                if(!d2.ContainsKey(i.Key) || (i.Key == j.Key && j.Value == 1))
                {
                    y1++;
                }

                if(x1 == y1)
                {
                    return true;
                }
            }
        }

        return false;
    }
}
```