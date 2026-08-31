# simple dart solution

**Author:** sayedadinan
**Votes:** 2
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/4940559/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/4940559/)

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
  int prefixCount(List<String> words, String pref) {
    int count=0;
    for(String val in words){
        if(val.startsWith(pref)){
            count+=1;
        }
    }
    return count;
  }
}
```