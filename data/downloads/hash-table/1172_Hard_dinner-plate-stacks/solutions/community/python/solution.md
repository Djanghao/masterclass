# Simple Python 2-pointer (no heap) solution

**Author:** qh5ny8wni40i
**Votes:** 6
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/370386/](https://leetcode.com/problems/dinner-plate-stacks/solutions/370386/)

---

It seems a lot of people used a min heap to help find the leftmost stack with available space for push() while leaving pop() to walk back from the right end of the stacks. I didn't use a heap but essentially did the same thing on both ends of the "stacks",  ie walking forward/right from the left to find the first available space. So I maintain a left and a right pointer helping me narrow down where to push/pop. It's not as fast as the heap solutions (about 950 ms, 75.7 mb) but a pretty simple/straightforward approach.

```
class DinnerPlates1(object):
  def __init__(self, capacity):
    self.capacity, self.stacks = capacity, [[]]
    self.left, self.right = 0, 0

  def push(self, val):
    while self.left < len(self.stacks) and len(self.stacks[self.left]) == self.capacity:
      self.left += 1 # find the leftmost stack with space
    if self.left == len(self.stacks):
      self.stacks += [],  # all our stacks are full, add a new one on the right
    self.stacks[self.left] += val,  
    if self.left > self.right:
      self.right = self.left # update right pointer if needed

  def pop(self):
    while self.right > 0 and not len(self.stacks[self.right]):
      self.stacks.pop() # clear up any empty stacks on the right
      self.right -= 1
    if self.right < self.left:
      self.left = self.right  # update left pointer if needed
    return -1 if not len(self.stacks[self.right]) else self.stacks[self.right].pop()

  def popAtStack(self, index):
    if index > len(self.stacks) or not len(self.stacks[index]):
      return -1
    if index < self.left:
      self.left = index # we have an empty space even more left than before
    return self.stacks[index].pop()
```