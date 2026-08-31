# The easiest solution(HASHMAP!!!)

**Author:** StupidNizo
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/4097186/](https://leetcode.com/problems/making-file-names-unique/solutions/4097186/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string[] GetFolderNames(string[] names)
    {
        Dictionary<string, int> NameAndCount = new();
        for (int i = 0; i < names.Length; i++)
        {
            NameAndCount.TryGetValue(names[i], out int val);
            int c = val;
            string uName = names[i];
            if(c > 0)
            {
                while(NameAndCount.ContainsKey(uName))
                {
                    uName = $"{names[i]}({c})";
                    c++;
                }
                NameAndCount[names[i]] = c;

            }
            NameAndCount.Add(uName, 1);
            names[i] = uName;
        }
        return names;
    }
}
```