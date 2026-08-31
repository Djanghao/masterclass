# Two Python solutions, trie or purely dictionary

**Author:** Charlesl0129
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-file-system/solutions/1447025/](https://leetcode.com/problems/design-file-system/solutions/1447025/)

---

**Trie-based solution:**
```Python
from collections import defaultdict
class TrieNode:
    def __init__(self):
        self.children = defaultdict(TrieNode)
        self.isWord = False
        self.value = 0
        
class Trie:
    def __init__(self):
        self.root = TrieNode()
        
    def insert(self, path, value):
        cur_node = self.root
        directories = path.split('/')[1:]
        for d in directories[:-1]:
            if d not in cur_node.children:
                return False
            cur_node = cur_node.children[d]            
        cur_node = cur_node.children[directories[-1]]
        if not cur_node.isWord:
            cur_node.isWord = True
            cur_node.value = value
            return True
        return False
            
    def search(self, path):
        cur_node = self.root
        directories = path.split('/')[1:]
        for d in directories:
            if d not in cur_node.children:
                return -1
            cur_node = cur_node.children[d]
        if cur_node.isWord:
            return cur_node.value
        return -1
    
class FileSystem:
    def __init__(self):
        self.trie = Trie()
        
    def createPath(self, path: str, value: int) -> bool:
        return self.trie.insert(path, value)

    def get(self, path: str) -> int:
        return self.trie.search(path)
       
# Your FileSystem object will be instantiated and called as such:
# obj = FileSystem()
# param_1 = obj.createPath(path,value)
# param_2 = obj.get(path)
```

**Dictionary-based solution:**
```Python
from collections import defaultdict
class FileSystem(object):
    def __init__(self):
        self.path2value = defaultdict(int)
        self.path2value[''] = -1

    def createPath(self, path, value):
        dirs = path.split('/')
        parent = '/'.join(dirs[:-1])
        if path in self.path2value or parent not in self.path2value:
            return False
        self.path2value[path] = value
        return True

    def get(self, path):
        if path in self.path2value:
            return self.path2value[path]
        return -1
        


# Your FileSystem object will be instantiated and called as such:
# obj = FileSystem()
# param_1 = obj.createPath(path,value)
# param_2 = obj.get(path)
```