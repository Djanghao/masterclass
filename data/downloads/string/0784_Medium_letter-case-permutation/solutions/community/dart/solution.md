# Queue approach with comments

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/5627549/](https://leetcode.com/problems/letter-case-permutation/solutions/5627549/)

---

n = length of s

# Complexity
- Time complexity: O(n * 2<sup>n</sup>)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n * 2<sup>n</sup>)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

class Solution {
  List<String> letterCasePermutation(String s) {   
    // Contains "extending" permutations 
    final queue = Queue<String>.from(['']);

    // Iterate each character of [s]
    for (int i = 0; i < s.length; i++) {
      final currChar = s[i];
      final queueLength = queue.length;       // Maintain [queueLength] externally because we will edit the [queue] in the loops

      if (currChar.isAlpha) {
        // Take each permuation in the [queue] and extend it with
        // a lowercase and uppercase character of the [currChar]
        // So for each permutation we will pop it then add 2 new permuations to the [queue].
        for (int j = 0; j < queueLength; j++) {
          final perm = queue.removeFirst();
          queue.add(perm + currChar.toLowerCase());
          queue.add(perm + currChar.toUpperCase());
          
        }
      } else {
        // If it was a non-alpha character just pop each permutation and add the 
        // character without any transformation back to the [queue].
        for (int j = 0; j < queueLength; j++) {
          final perm = queue.removeFirst();
          queue.add(perm + currChar);
        }
      }
    }

    return queue.toList();
  }
}


extension on String {
  bool get isAlpha {
    for (int codeUnit in codeUnits) {
      if (65 <= codeUnit && codeUnit <= 90) return true;   // A-Z
      if (97 <= codeUnit && codeUnit <= 122) return true;  // a-z
    }

    return false;
  }
}
```