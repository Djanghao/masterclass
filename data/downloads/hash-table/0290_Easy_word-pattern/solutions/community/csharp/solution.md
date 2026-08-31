# C# | Dictionary Method | O(N)

**Author:** hotsauce2308
**Votes:** 6
**Link:** [https://leetcode.com/problems/word-pattern/solutions/2980786/](https://leetcode.com/problems/word-pattern/solutions/2980786/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool WordPattern(string pattern, string s) {
      var dict1 = new Dictionary<char,string>();
      var dict2 = new Dictionary<string,char>();
      var sList = s.Split(' ', StringSplitOptions.None);

      if(pattern.Length != sList.Count()) return false;

      for(int i=0;i<sList.Count();i++){
        dict1.TryAdd(pattern[i], sList[i]);
        dict2.TryAdd(sList[i],pattern[i]);
        if(dict1[pattern[i]] != sList[i]) return false;
        if(dict2[sList[i]] != pattern[i]) return false;
      }
      
      return true;
    }
}
```