# FLAG

**Author:** kapitan-karablya
**Votes:** 0
**Link:** [https://leetcode.com/problems/simplify-path/solutions/5106601/](https://leetcode.com/problems/simplify-path/solutions/5106601/)

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
  String simplifyPath(String path) {
    List splitedPath = path.split('/');
    List<String> canonicalPath = [];

    for (String item in splitedPath) {
        if (item == '..'){
            if (canonicalPath.isNotEmpty) canonicalPath.removeLast();
        } else if (item.isNotEmpty && item != '.') { 
            canonicalPath.add(item);
        }
    }

    return '/${canonicalPath.join('/')}';
  }
}
```