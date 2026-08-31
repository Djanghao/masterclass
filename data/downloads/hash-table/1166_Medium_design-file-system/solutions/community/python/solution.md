# Python Trie  Simple Solution

**Author:** hustlingfornewjob
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-file-system/solutions/2551668/](https://leetcode.com/problems/design-file-system/solutions/2551668/)

---

```
class Tree:
    def __init__(self, val=None, childredn = defaultdict()):
        
        self.children = {}
        self.val = val
        
class FileSystem:

    def __init__(self):
        self.root = Tree()
        
    def createPath(self, path: str, value: int) -> bool:
        node = self.root
        if path == "" or path == "/":
            return False 
        paths = path.split('/')
        paths = paths[1:]
        i = 0
        while i < len(paths)-1:
            if paths[i] not in node.children:
                return False
            node = node.children[paths[i]]
            i+=1
        if paths[i] in node.children: 
            return False
        else:
            node.children[paths[i]] = Tree(value)
            
        return True

    def get(self, path: str) -> int:
        node = self.root
        paths = path.split('/')
        paths = paths[1:]
        for path in paths:
            if path not in node.children:
                return -1
            node = node.children[path]
        return node.val
        
        
# # Your FileSystem object will be instantiated and called as such:
# obj = FileSystem()
# param_1 = obj.createPath("/leet",1)
# param_1 = obj.createPath("/leet/code",2)
# param_2 = obj.get(path)
```