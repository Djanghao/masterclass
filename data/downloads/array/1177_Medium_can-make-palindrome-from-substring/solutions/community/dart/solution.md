# dart

**Author:** xfjboss
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/4437109/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/4437109/)

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
  List<bool> canMakePaliQueries(String s, List<List<int>> queries) {
    List<bool> res = List.generate(queries.length, (_) => false);
    List<List<int>> prefixSum = List.generate(s.length + 1, (_) => List.filled(26, 0));
    List<int> numList = List.filled(26, 0);

    for (int i = 0 ; i < s.length ; i++) {
        for (int j = 0 ; j < 26 ; j++) {
            if (s.codeUnitAt(i) - 'a'.codeUnitAt(0) == j) {
                numList[j] = numList[j] + 1;
            }
            prefixSum[i][j] = numList[j] % 2;
        }
    }
    
    for (int i = 0 ; i < queries.length ; i++) {
        int number = queries[i][2];
        int start = queries[i][0];
        int end = queries[i][1];
        List<int> startList = [];
        if (start - 1 < 0) {
            startList = List.filled(26, 0);
        } else{
            startList = prefixSum[start - 1];
        }
        List<int> endList = prefixSum[end];
        int oddDiff = 0;
        for (int j = 0 ; j < startList.length ; j++) {
            oddDiff += (endList[j] - startList[j]).abs();
        }
        if ((oddDiff / 2).floor() <= number) {
            res[i] = true;
        }
    }
    return res;
  }
}
```