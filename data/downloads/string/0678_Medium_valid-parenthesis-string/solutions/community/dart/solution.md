# Unique Solution Using Counter in O(n) with O(1) space in dart

**Author:** user7097xf
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4989585/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4989585/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Approach is based on the considering "*" as close bracket once and open bracket once , initiallize the counter accordingly.
Please dry run the code for better Understanding.

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool checkValidString(String s) {
    int open =0;
    int close=0;

    for(int i =0; i<s.length;i++){
        if(s[i]=="("){
            open++;
            close++;
        }
        else if(s[i]==")"){
            open--;
            close--;
        }else{
            open++;
            close--;
        }
        if(close <0){
            close=0;
        }
        if(open <0){
            return false;
        }
    }
    return close==0;
  }
}
```