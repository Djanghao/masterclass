# [C#] Simple solution beats 100%

**Author:** ktulu_fhtagn
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/3824012/](https://leetcode.com/problems/string-matching-in-an-array/solutions/3824012/)

---

# Code
```
public class Solution {
    public IList<string> StringMatching(string[] words) {
        List<string> result = new();
        string temp;

        for(int i = 0; i < words.Length; i++){
            temp = words[i];
            words[i] = "";

            if(String.Join(" ",words).IndexOf(temp) >= 0)
                result.Add(temp);
            
            words[i] = temp;
        }

        return result;
    }
}
```