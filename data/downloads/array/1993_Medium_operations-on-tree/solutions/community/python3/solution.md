# [Python3] tree traversal

**Author:** ye15
**Votes:** 15
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/1444123/](https://leetcode.com/problems/operations-on-tree/solutions/1444123/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/471dd5133055b331710ed3828849586ce1796b1a) for solutions of biweekly 60.
```
class LockingTree:

    def __init__(self, parent: List[int]):
        self.parent = parent
        self.tree = [[] for _ in parent]
        for i, x in enumerate(parent): 
            if x != -1: self.tree[x].append(i)
        self.locked = {}

    def lock(self, num: int, user: int) -> bool:
        if num in self.locked: return False 
        self.locked[num] = user
        return True 

    def unlock(self, num: int, user: int) -> bool:
        if self.locked.get(num) != user: return False 
        self.locked.pop(num)
        return True 

    def upgrade(self, num: int, user: int) -> bool:
        if num in self.locked: return False # check for unlocked
        
        node = num
        while node != -1: 
            if node in self.locked: break # locked ancestor
            node = self.parent[node]
        else: 
            stack = [num]
            descendant = []
            while stack: 
                node = stack.pop()
                if node in self.locked: descendant.append(node)
                for child in self.tree[node]: stack.append(child)
            if descendant: 
                self.locked[num] = user # lock given node 
                for node in descendant: self.locked.pop(node) # unlock all descendants
                return True 
        return False # locked ancestor 
```