# Dart Conversion

**Author:** deepakumar-developer
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4451488/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4451488/)

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
  int minOperations(String s) {
    int o1=0,o2=0;
    for(int i=0;i<s.length;i++) {
        if(i%2==0) {
            if(s[i]=="0") {
                o2+=1;
            } else {
                o1+=1;
            }
        } else {
            if(s[i]=="1") {
                o2+=1;
            } else {
                o1+=1;
            }
        }
    }
    return min(o1,o2);
  }
}
```