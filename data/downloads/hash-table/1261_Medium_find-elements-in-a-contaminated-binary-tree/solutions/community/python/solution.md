# Easy Python | O(1) Find | Recursion + Queue

**Author:** Aragorn_
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/797703/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/797703/)

---

**Easy Python | O(1) Find | Recursion + Queue**

**A) Standard Code**

In this problem, we can recover the values of the original Binary Tree, and store them in a "set" directly. (There's no need to keep the Binary Tree itself)

This way, we can "find" any element with O(1) time/space complexity. The initialization method still runs with O(n) time/space complexity though.

```
class FindElements(object):
    def __init__(self, root):
        self.A = A = set()
        #
        def recover(n,x):
            if n:
                A.add(x)
                recover(n.left , 2*x + 1)
                recover(n.right, 2*x + 2)
        #
        recover(root,0)
    #
    def find(self, target):
        return target in self.A
```

**B) 4 Lines of Code**

One-Liner version of the "Recover" function :)

```
class FindElements:
    def __init__(self, root):
        self.A = A = set()
        recover = lambda n,x: [ A.add(x) , recover(n.left,2*x+1) , recover(n.right,2*x+2) ] if n else None
        recover(root,0)
    def find(self, target):
        return target in self.A
```

**C) Queue Method**

The previous code versions work fine. However, recursion consumes a lot of system resources, due to the initialization, namespace, and environment variables of each function call. Besides, many compilers have a hardcoded limit for Max. Recursion Depth, and there can be complicaitons by constantly needing to edit global settings.

There's still hope in the galaxy though. We can use "Queues" to traverse the original Binary Tree without applying recursion.

Here's the code:

```
# C) Improved Function without Recursion
class FindElements:
    def __init__(self, root):
        self.A = A = set()
        # ---------------------------------------------------------------
        #     Queue Version of the Binary Tree "Recovery" Method 
        # ---------------------------------------------------------------
        if not root:
            return
        #
        queue = collections.deque([[root,0]])
        while queue:
            n,x = queue.popleft()
            A.add(x)
            if n.left:
                queue.append( [n.left  , 2*x+1] )
            if n.right:
                queue.append( [n.right , 2*x+2] )
    #
    def find(self, target):
        return target in self.A
```

I hope the code was helpful. Cheers,
