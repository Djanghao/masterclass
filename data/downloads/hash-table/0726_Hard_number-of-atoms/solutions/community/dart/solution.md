# O(N) Solution || Using DART 🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5472817/](https://leetcode.com/problems/number-of-atoms/solutions/5472817/)

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
  String countOfAtoms(String formula) {
    // Stack to hold map of atom counts for each nested level
    List<Map<String, int>> stack = [];
    stack.add(Map<String, int>());

    int i = 0;
    while (i < formula.length) {
      if (formula[i] == '(') {
        // Start of a new group, push an empty map to stack
        stack.add(Map<String, int>());
        i++;
      } else if (formula[i] == ')') {
        // End of a group, pop from stack and merge with previous map
        Map<String, int> top = stack.removeLast();
        i++;
        int iStart = i;
        while (i < formula.length && isDigit(formula[i])) {
          i++;
        }
        int multiplicity = (i > iStart) ? int.parse(formula.substring(iStart, i)) : 1;
        top.forEach((element, count) {
          stack.last[element] = (stack.last[element] ?? 0) + count * multiplicity;
        });
      } else {
        // Parse element name
        int iStart = i;
        i++;
        while (i < formula.length && isLowerCase(formula[i])) {
          i++;
        }
        String name = formula.substring(iStart, i);
        // Parse multiplicity
        iStart = i;
        while (i < formula.length && isDigit(formula[i])) {
          i++;
        }
        int multiplicity = (i > iStart) ? int.parse(formula.substring(iStart, i)) : 1;
        stack.last[name] = (stack.last[name] ?? 0) + multiplicity;
      }
    }

    // Sort atoms and format result
    Map<String, int> atomCounts = stack.removeLast();
    List<String> sortedAtoms = atomCounts.keys.toList()..sort();
    StringBuffer result = StringBuffer();
    for (String atom in sortedAtoms) {
      result.write(atom);
      if (atomCounts[atom]! > 1) {
        result.write(atomCounts[atom]);
      }
    }
    return result.toString();
  }

  bool isDigit(String ch) {
    return '0'.compareTo(ch) <= 0 && ch.compareTo('9') <= 0;
  }

  bool isLowerCase(String ch) {
    return 'a'.compareTo(ch) <= 0 && ch.compareTo('z') <= 0;
  }
}
```