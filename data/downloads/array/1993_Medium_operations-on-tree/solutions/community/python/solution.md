# [Python] Just do what the description says

**Author:** asbefu
**Votes:** 5
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/1444185/](https://leetcode.com/problems/operations-on-tree/solutions/1444185/)

---

Time complexity:
Lock and unlock: O(1)
Upgrade: O(n)

```
class LockingTree:

    def __init__(self, parent: List[int]):
        self.parent = parent
        self.locked_nodes = defaultdict(int)
        self.graph = defaultdict(list)
        
        for i, v in enumerate(parent):
            self.graph[v].append(i)
            
        print(self.graph)

    def lock(self, num: int, user: int) -> bool:
        if num in self.locked_nodes:
            return False
        self.locked_nodes[num] = user
        return True

    def unlock(self, num: int, user: int) -> bool:
        if num not in self.locked_nodes or self.locked_nodes[num] != user:
            return False
        
        del self.locked_nodes[num]
        return True
        
    def upgrade(self, num: int, user: int) -> bool:
        def check_ancestors(num):
            if num in self.locked_nodes:
                return True
            elif num == -1:
                return False
            else:
                return check_ancestors(self.parent[num])
        
        def descendants(num):
            for node in self.graph[num]:
                if node in self.locked_nodes:
                    return True
                if descendants(node):
                    return True
            return False
                
        def unlock_descendants(num):
            for node in self.graph[num]:
                if node in self.locked_nodes:
                    del self.locked_nodes[node]
                unlock_descendants(node)
            
        if num in self.locked_nodes:
            return False
        elif check_ancestors(self.parent[num]):
            return False
        elif not descendants(num):
            return False
        
        unlock_descendants(num)
        self.locked_nodes[num] = user
        
        return True
```