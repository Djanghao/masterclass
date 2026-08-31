# C# beats 100%

**Author:** royraihen
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/3287825/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/3287825/)

---

# Intuition
Count the amount of ruleValue's by indexing the ruleKey
# Approach
Since there are exactly 3 options, create a simple indexer based on one of the 3 options

# Complexity
- Time complexity:
O(n) - where n is the amount of elements in items
- Space complexity:
O(1) - only added primitive types

# Code
```
public class Solution {
    public int CountMatches(IList<IList<string>> items, string ruleKey, string ruleValue) {
        int res = 0;
        int indexer = 0;
        //Create the indexer - already initialized as 0, no need to add it implicity, just change it if necessary
        if(!ruleKey.Equals("type")){
            if(ruleKey.Equals("color")) indexer = 1;
            else indexer = 2;
        }       
            
        foreach(var item in items){
            if(item[indexer]==ruleValue) res++;
        }

        return res;
    }
}
```