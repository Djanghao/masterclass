# Dart simple 0ms

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/6087675/](https://leetcode.com/problems/count-asterisks/solutions/6087675/)

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
  int countAsterisks(String s) {
    bool flag=false;
    int count=0;
    for(int i=0;i<s.length;i++){
        if(s[i]=='|')flag=!flag;
        if(flag==false&&s[i]=='*')count++;
    }
    return count;
  }
}
```