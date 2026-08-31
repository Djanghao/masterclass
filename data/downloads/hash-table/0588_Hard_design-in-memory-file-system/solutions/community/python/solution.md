# python3 most simple Trie solution

**Author:** GyohoGo
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-in-memory-file-system/solutions/642551/](https://leetcode.com/problems/design-in-memory-file-system/solutions/642551/)

---


It works in python3, but not in python. I have no idea why

```
class FileSystem(object):

    def __init__(self):
        self.trie = {}

    def ls(self, path):
        """
        :type path: str
        :rtype: List[str]
        """
        if len(path) == 1: 
            return sorted(self.trie.keys())
        path = path.split('/')
        node = self.trie
        for p in path[1:]:
            node = node.setdefault(p, {})
        if type(node) == str:
            return [path[-1]]
        return sorted(node.keys())
        

    def mkdir(self, path):
        """
        :type path: str
        :rtype: None
        """
        path = path.split('/')
        node = self.trie
        for p in path[1:]:
            node = node.setdefault(p, {})
        

    def addContentToFile(self, filePath, content):
        """
        :type filePath: str
        :type content: str
        :rtype: None
        """
        path = filePath.split('/')
        f = path[-1]
        node = self.trie
        for p in path[1:-1]:
            node = node.setdefault(p, {})
        if f not in node:
            node[f] = content
        else:
            node[f] += content
        

    def readContentFromFile(self, filePath):
        """
        :type filePath: str
        :rtype: str
        """
        path = filePath.split('/')
        f = path[-1]
        node = self.trie
        for p in path[1:-1]:
            node = node.setdefault(p, {})
        
        return node[f]
