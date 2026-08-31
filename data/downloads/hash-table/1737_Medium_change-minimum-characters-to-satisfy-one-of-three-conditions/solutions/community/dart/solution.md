# Change Minimum Character to Satisfy One of Three Conditions

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/6121720/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/6121720/)

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
  int minCharacters(String a, String b) {
    int ans = a.length + b.length;
    
    for (int ch = 'a'.codeUnitAt(0); ch < 'z'.codeUnitAt(0); ch++) {
      int op = 0;
      for (int x = 0; x < a.length; x++) {
        if (a[x].codeUnitAt(0) > ch) op++;
      }
      for (int x = 0; x < b.length; x++) {
        if (ch >= b[x].codeUnitAt(0)) op++;
      }
      ans = ans < op ? ans : op;
    }

    for (int ch = 'a'.codeUnitAt(0); ch < 'z'.codeUnitAt(0); ch++) {
      int op = 0;
      for (int x = 0; x < b.length; x++) {
        if (b[x].codeUnitAt(0) > ch) op++;
      }
      for (int x = 0; x < a.length; x++) {
        if (ch >= a[x].codeUnitAt(0)) op++;
      }
      ans = ans < op ? ans : op;
    }

    Map<int, int> am = {};
    Map<int, int> bm = {};
    for (var ch in a.runes) am[ch] = (am[ch] ?? 0) + 1;
    for (var ch in b.runes) bm[ch] = (bm[ch] ?? 0) + 1;

    int mxa = 0;
    int cha = '-'.codeUnitAt(0);
    for (var entry in am.entries) {
      if (mxa < entry.value) {
        mxa = entry.value;
        cha = entry.key;
      }
    }

    int mxb = 0;
    int chb = '-'.codeUnitAt(0);
    for (var entry in bm.entries) {
      if (mxb < entry.value) {
        mxb = entry.value;
        chb = entry.key;
      }
    }

    int aa = b.length - mxb + a.length - (am[chb] ?? 0);
    int bb = a.length - mxa + b.length - (bm[cha] ?? 0);
    ans = ans < aa ? ans : aa;
    ans = ans < bb ? ans : bb;

    return ans;
  }
}
```