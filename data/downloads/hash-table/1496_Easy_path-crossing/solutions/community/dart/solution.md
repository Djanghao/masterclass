# Easy clearance DART solution

**Author:** deepakumar-developer
**Votes:** 5
**Link:** [https://leetcode.com/problems/path-crossing/solutions/4447191/](https://leetcode.com/problems/path-crossing/solutions/4447191/)

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
  bool isPathCrossing(String path) {
    int vat = 0;
    int har = 0;
    List<List<int>> out = [[0,0]];
    List<String> p1 = path.toLowerCase().split("");
    for(var i in p1) {
        if(i == "n"){
            vat++;
        } 
        if(i == "s"){
            vat--;
        } 
        if(i == "e"){
            har++;
        } 
        if(i == "w"){
            har--;
        } 
        List<int> o = [har,vat];
        for(var j in out){
            if(j[0] == o[0] && j[1] == o[1]){
                return true;
            }
        }
        out.add(o);
    }
    return false;
  }
}
```