# Python O(1) push, pop, top, and peekMax, O(N) popMax

**Author:** bindloss
**Votes:** 47
**Link:** [https://leetcode.com/problems/max-stack/solutions/391403/](https://leetcode.com/problems/max-stack/solutions/391403/)

---

This solution stores tuples in a stack; the first item in the tuple is the value and the second item is the index of the current max value. Push, pop, top, and peekMax are all O(1). popMax is O(N) in the worst case.
```
class MaxStack(object):

    def __init__(self):
        self.stack = []

    def push(self, x):
        if self.stack and x >= self.stack[self.stack[-1][1]][0]:
            i = len(self.stack)  # index of max
        else:
            i = self.stack[-1][1] if self.stack else 0
        self.stack.append((x, i))

    def pop(self):
        return self.stack.pop()[0]

    def top(self):
        return self.stack[-1][0]

    def peekMax(self):
        return self.stack[self.stack[-1][1]][0]

    def popMax(self):
        index = self.stack[-1][1]  # index where the max exists
        result = self.stack[index][0]  # max value to return
        new_max = self.stack[self.stack[index-1][1]][0] if index > 0 else -float('inf')
        # Scan the stack starting at 'index' to recompute the max values and shift all
        # values to the left by one:
        for i in range(index, len(self.stack)-1):
            if self.stack[i+1][0] >= new_max:
                new_max = self.stack[i+1][0]
                self.stack[i] = (self.stack[i+1][0], i)
            else:
                self.stack[i] = (self.stack[i+1][0], self.stack[i-1][1])
        self.stack.pop()
        return result
