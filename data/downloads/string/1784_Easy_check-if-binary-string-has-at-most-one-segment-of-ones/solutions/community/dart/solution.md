# dart beginners solution

**Author:** kevin037
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/5541833/](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/5541833/)

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
  bool checkOnesSegment(String s) {
     int count =0;

    for(int i=0;i<s.length-1;i++){
       if(s[i]!=s[i+1])count++;
    }
    return count<=1;
  }
}
```