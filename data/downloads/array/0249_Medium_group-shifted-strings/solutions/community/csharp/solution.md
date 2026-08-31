# C# | Simple | Iterative

**Author:** sree_lakshmi
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/4565952/](https://leetcode.com/problems/group-shifted-strings/solutions/4565952/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O (NK)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O (NK)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    Dictionary<string, IList<string>> strDict = new();
    
    public IList<IList<string>> GroupStrings(string[] strings) {
        foreach(string str in strings){
            string s = GetKey(str);
            strDict.TryAdd(s, new List<String>());
            strDict[s].Add(str);
        }

        return strDict.Values.ToList();
    }

    public string GetKey(string str){
        StringBuilder sb = new();
        for(int i=1; i<str.Length; i++){
            sb.Append((str[i] - str[i-1] + 26 ) % 26 + 'a');
        }
        return sb.ToString();
    }
}
```