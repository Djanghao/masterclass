# Python one stack solution, without linklist

**Author:** bby880201
**Votes:** 131
**Link:** [https://leetcode.com/problems/min-stack/solutions/49183/](https://leetcode.com/problems/min-stack/solutions/49183/)

---


class MinStack(object):
    
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack= []

    def push(self, x):
        """
        :type x: int
        :rtype: nothing
        """
        if not self.stack:self.stack.append((x,x)) 
        else:
           self.stack.append((x,min(x,self.stack[-1][1])))

    def pop(self):
        """
        :rtype: nothing
        """
        if self.stack: self.stack.pop()

    def top(self):
        """
        :rtype: int
        """
        if self.stack: return self.stack[-1][0]
        else: return None

    def getMin(self):
        """
        :rtype: int
        """
        if self.stack: return self.stack[-1][1]
        else: return None