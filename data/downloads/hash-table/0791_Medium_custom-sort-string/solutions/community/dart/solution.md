# simple dart solution

**Author:** sayedadinan
**Votes:** 2
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/5044121/](https://leetcode.com/problems/custom-sort-string/solutions/5044121/)

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
class Solution {
  String customSortString(String order, String s) {
    Map<String,dynamic>map={};
    String result="";
    for(int i=0;i<s.length;i++){
        map[s[i]]=(map[s[i]]??0)+1;
    }
   for (String char in order.split('')) {
      if (map.containsKey(char)) {
        result += char * map[char];
        map.remove(char);
      }
    }
    map.forEach((key,value){
        result+=key*value;
    });
    return result;
  }
}
```