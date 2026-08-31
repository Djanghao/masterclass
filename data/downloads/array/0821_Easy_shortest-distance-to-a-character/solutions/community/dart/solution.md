# dart solution that beats 100% of users

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/5211831/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/5211831/)

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
  List<int> shortestToChar(String s, String c) {
    List<int> occurences = [];
    for(int i=0;i<s.length;i++){
        if(s[i]==c){
            occurences.add(i);
        }
    }
    List<int>result=[];
    for(int i=0;i<s.length;i++){
        int min  = s.length+1;
        for(int j=0;j<occurences.length;j++){
            int sum = (i-occurences[j]).abs();
            if(min>sum){
                min= sum;
            }
        }
        result.add(min);

    }
    return result;
  }
}
```