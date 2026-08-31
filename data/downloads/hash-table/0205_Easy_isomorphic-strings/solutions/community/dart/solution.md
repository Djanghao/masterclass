# Dart solution

**Author:** brntsv
**Votes:** 2
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/3144643/](https://leetcode.com/problems/isomorphic-strings/solutions/3144643/)

---



# Code
```
class Solution {
  bool isIsomorphic(String s, String t) {
    Map<String, int> mapS = {};
    Map<String, int> mapT = {};
    for (int i = 0; s.length > i; i++) {
      mapS.addEntries({s[i]: i}.entries);
      mapT.addEntries({t[i]: i}.entries);
    }
    return mapS.values.join() == mapT.values.join();
  }
}
```