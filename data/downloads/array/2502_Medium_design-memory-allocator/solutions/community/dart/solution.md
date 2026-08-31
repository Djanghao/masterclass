# Dart solution

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/5538674/](https://leetcode.com/problems/design-memory-allocator/solutions/5538674/)

---



# Code
```
class Allocator {
  late List<int> memory;
  late int size;

  Allocator(int n) {
    memory = List.filled(n, 0);
    size = n;
  }

  int allocate(int blockSize, int mID) {
    for (int i = 0; i <= size - blockSize; i++) {
      bool canAllocate = true;
      for (int j = 0; j < blockSize; j++) {
        if (memory[i + j] != 0) {
          canAllocate = false;
          break;
        }
      }
      if (canAllocate) {
        for (int j = 0; j < blockSize; j++) {
          memory[i + j] = mID;
        }
        return i;
      }
    }
    return -1;
  }

  int free(int mID) {
    int freedUnits = 0;
    for (int i = 0; i < size; i++) {
      if (memory[i] == mID) {
        memory[i] = 0;
        freedUnits++;
      }
    }
    return freedUnits;
  }
}

```