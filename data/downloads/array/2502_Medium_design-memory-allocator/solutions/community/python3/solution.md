# Python simple solution with video explanation

**Author:** leetcodingm
**Votes:** 9
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/2899475/](https://leetcode.com/problems/design-memory-allocator/solutions/2899475/)

---

# Approach
create an array of length n initialize with -1 
- for allocate look for a free block of length size, once found set all values in it to mID and returns the start index 
- for free find all those set to mID and set to -1 

Video explanation: https://www.youtube.com/watch?v=k9l1PvIRNRw
# Code
```
class Allocator:

    def __init__(self, n: int):
        self.blocks = [-1] * n
        self.n = n
        
    def allocate(self, size: int, mID: int) -> int:
        available = 0
        for i in range(self.n):
            if self.blocks[i] == -1:
                available += 1
            else:
                available = 0
            if available == size: 
                for j in range(i - available + 1, i + 1):
                    self.blocks[j] = mID
                return i - available + 1
        return -1 
    
    def free(self, mID: int) -> int:
        count = 0
        for i in range(self.n):
            if self.blocks[i] == mID:
                count += 1
                self.blocks[i] = -1
        return count
```