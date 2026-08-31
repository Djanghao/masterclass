# [ JavaScript ] - swap strings

**Author:** lukaasatiani73
**Votes:** 5
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/3904452/](https://leetcode.com/problems/faulty-keyboard/solutions/3904452/)

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
var finalString = function(s) {
  let 
    str = '',
    revStr = '';

  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'i') {
      [str, revStr] = [revStr, str];
    } else {
      str += s[i];
      revStr = s[i] + revStr;
    }
  }
  
  return str;
};
```