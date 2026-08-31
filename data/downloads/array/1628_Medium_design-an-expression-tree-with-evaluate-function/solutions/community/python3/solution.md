# Python 3 | Stack, Tree, Design, DFS | Explanation

**Author:** idontknoooo
**Votes:** 49
**Link:** [https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/1441886/](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/1441886/)

---

> **NOTE**: It's not so difficult as it looks like. Once you understand what the question is asking, it's fairly easy.
### Explanation
- `evaluate` is basically a `DFS` process, all digits are at leaf nodes; otherwise we will calculate the result recursively
- Building tree based on postfix list can be easy with help of `stack`
### Implementation
```
import abc 
from abc import ABC, abstractmethod 
"""
This is the interface for the expression tree Node.
You should not remove it, and you can define some classes to implement it.
"""

class Node(ABC):
    @abstractmethod
    # define your fields here
    def evaluate(self) -> int:
        pass

class TreeNode(Node):
    def evaluate(self):
        if self.val.isdigit():
            return int(self.val)
        elif self.val == '*':
            return self.left.evaluate() * self.right.evaluate()
        elif self.val == '+':
            return self.left.evaluate() + self.right.evaluate()
        elif self.val == '-':
            return self.left.evaluate() - self.right.evaluate()
        else:    
            return self.left.evaluate() // self.right.evaluate()
            
    
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
"""    
This is the TreeBuilder class.
You can treat it as the driver code that takes the postinfix input
and returns the expression tree represnting it as a Node.
"""

class TreeBuilder(object):
    def buildTree(self, postfix: List[str]) -> 'Node':
        cur, stack = None, []
        for c in postfix:
            cur = TreeNode(c)
            if not c.isdigit():
                cur.right = stack.pop()
                cur.left = stack.pop()
            stack.append(cur)
        return cur           
		
"""
Your TreeBuilder object will be instantiated and called as such:
obj = TreeBuilder();
expTree = obj.buildTree(postfix);
ans = expTree.evaluate();
"""
```