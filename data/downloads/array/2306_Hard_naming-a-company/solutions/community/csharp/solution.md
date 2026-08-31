# ✅C# || JAVA || Python||✔Simple Solution || ✅Code with Comments

**Author:** Santhosh1608
**Votes:** 6
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/3162509/](https://leetcode.com/problems/naming-a-company/solutions/3162509/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(26*26*n);
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(2+(26*26))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long DistinctNames(string[] ideas) {
        long distinctCompany = 0;
        Dictionary<char, HashSet<string>> dict = new Dictionary<char, HashSet<string>>();
        //Initially map the key as first letter from the hint of question and value is string
        foreach(var idea in ideas){
        if (!dict.ContainsKey(idea[0])){
            dict.Add(idea[0], new HashSet<string>());
            }
            dict[idea[0]].Add(idea);
        }
        Dictionary<char,Dictionary<char,long>> set = new Dictionary<char,Dictionary<char, long>>();
        //Generate All possible combinations of the company name
        foreach(var idea1 in dict.Keys)
        {
            set.Add(idea1, new Dictionary<char, long>());
            foreach(var idea2 in dict.Keys)
            {
                if (idea1 == idea2){
                    continue;
                }
                set[idea1].Add(idea2, 0);
                foreach(var str in dict[idea2])
                {
                    var posCompany = $"{idea1}" + str.Substring(1);
                    if (!dict[idea1].Contains(posCompany)){
                        set[idea1][idea2]++;
                    }
                }
            }
        }
        // Compute the which all are distinct.
        foreach (var idea1 in dict.Keys)
        {
            foreach (var idea2 in dict.Keys)
            {
                if (idea1 == idea2) continue;
                distinctCompany += set[idea1][idea2] * set[idea2][idea1];
            }
        }
        return distinctCompany;
    }
}


```