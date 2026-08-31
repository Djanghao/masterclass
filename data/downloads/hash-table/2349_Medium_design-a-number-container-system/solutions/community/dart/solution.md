# SplayTree solution ⚡⚡⚡

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/5521575/](https://leetcode.com/problems/design-a-number-container-system/solutions/5521575/)

---


# Code
```
import 'dart:collection';

class NumberContainers {
  // B\u1EA3n \u0111\u1ED3 \u0111\u1EC3 l\u01B0u c\xE1c s\u1ED1 v\xE0 SplayTreeSet c\xE1c ch\u1EC9 s\u1ED1 c\u1EE7a ch\xFAng
  Map<int, SplayTreeSet<int>> numberToIndices = {};
  // B\u1EA3n \u0111\u1ED3 \u0111\u1EC3 l\u01B0u c\xE1c ch\u1EC9 s\u1ED1 v\xE0 s\u1ED1 t\u01B0\u01A1ng \u1EE9ng
  Map<int, int> indexToNumber = {};

  NumberContainers();

  void change(int index, int number) {
    // N\u1EBFu ch\u1EC9 s\u1ED1 n\xE0y \u0111\xE3 c\xF3 s\u1ED1, ta c\u1EA7n x\xF3a ch\u1EC9 s\u1ED1 n\xE0y kh\u1ECFi danh s\xE1ch ch\u1EC9 s\u1ED1 c\u1EE7a s\u1ED1 c\u0169
    if (indexToNumber.containsKey(index)) {
      int oldNumber = indexToNumber[index]!;
      numberToIndices[oldNumber]?.remove(index);
    }
    
    // C\u1EADp nh\u1EADt s\u1ED1 t\u1EA1i ch\u1EC9 s\u1ED1 n\xE0y
    indexToNumber[index] = number;
    
    // Th\xEAm ch\u1EC9 s\u1ED1 v\xE0o danh s\xE1ch ch\u1EC9 s\u1ED1 c\u1EE7a s\u1ED1 m\u1EDBi
    if (!numberToIndices.containsKey(number)) {
      numberToIndices[number] = SplayTreeSet<int>();
    }
    numberToIndices[number]!.add(index);
  }

  int find(int number) {
    // N\u1EBFu s\u1ED1 n\xE0y kh\xF4ng t\u1ED3n t\u1EA1i trong h\u1EC7 th\u1ED1ng, tr\u1EA3 v\u1EC1 -1
    if (!numberToIndices.containsKey(number) || numberToIndices[number]!.isEmpty) {
      return -1;
    }
    
    // Tr\u1EA3 v\u1EC1 ch\u1EC9 s\u1ED1 nh\u1ECF nh\u1EA5t ch\u1EE9a s\u1ED1 n\xE0y
    return numberToIndices[number]!.first;
  }
}

```