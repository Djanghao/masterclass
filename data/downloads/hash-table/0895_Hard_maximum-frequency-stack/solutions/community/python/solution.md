# python O(1) solution list of stacks

**Author:** hkwu6013
**Votes:** 60
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/1862029/](https://leetcode.com/problems/maximum-frequency-stack/solutions/1862029/)

---

**Idea:**
* Construct and maintain a list of stacks (stks), where the ith element is the stack of values that have appeared i+1 times. The order of elements in the same stack follows the order in which they are pushed.
* For example, with the pushed series [5,5,3,4,4,5], stks will be [[5,3,4], [5,4], [5]].
* During the pop calls, we will just pop from the top of the last stack.
* This can be constructed and maintained easily during the push and pop calls.


**Time complexity: O(1)
Space complexity: O(N)**


```
class FreqStack:

    def __init__(self):
        self.stks = []
        self.freq = defaultdict(int)
        
    def push(self, val: int) -> None:
        self.freq[val] += 1
        if self.freq[val] > len(self.stks):
            self.stks.append([val])
        else:
            self.stks[self.freq[val]-1].append(val)
            
    def pop(self) -> int:
        val = self.stks[-1].pop()
        if not self.stks[-1]:
            self.stks.pop()
        self.freq[val] -= 1
        return val
```