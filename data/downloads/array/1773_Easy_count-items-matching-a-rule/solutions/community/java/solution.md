# [Java] easy and short  %100 memory

**Author:** zeldox
**Votes:** 185
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/1093390/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/1093390/)

---

if you like it pls upvote

Java 
```
class Solution {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int res = 0;
        
        for(int i = 0 ;i<items.size();i++){
            if(ruleKey.equals("type") && items.get(i).get(0).equals(ruleValue)) res++;
            if(ruleKey.equals("color") && items.get(i).get(1).equals(ruleValue)) res++;
            if(ruleKey.equals("name") && items.get(i).get(2).equals(ruleValue)) res++;
        }
        
        return res;
        
    }
}
```