# Dart simple 0ms

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/6080919/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/6080919/)

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
```dart []
class Solution {
  int countMatches(List<List<String>> items, String ruleKey, String ruleValue){
    int ind=0;
    int result=0;
    if(ruleKey=='color')ind=1;
    else if(ruleKey=='name')ind=2;
    for(int i=0;i<items.length;i++){
        if(items[i][ind]==ruleValue)result++;
    }
    return result;
  }
}
```