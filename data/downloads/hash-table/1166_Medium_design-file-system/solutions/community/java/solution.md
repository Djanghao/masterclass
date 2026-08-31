# Java Solution - SD/DS Interview acceptable

**Author:** vivek3ghosh
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-file-system/solutions/5744253/](https://leetcode.com/problems/design-file-system/solutions/5744253/)

---

# Intuition
Build a node capable of being used in a trie like datastructure.
Node should have node name, value and map of children stemming from node.

# Approach
Build a static system root, and add and traverse all paths from there. This is abstracted to the end user.
```
The following paths when saved :

/abc/def/ghj
/abc/def/hjk
/abc/kol/huj
/abc/kol/huj/tyu
/abc/kol/huj/yuf
/yui/fgh
```

```
Look something like this

--- sysroot
    --- yui
        --- fgh
    --- abc
        --- def
            --- ghj
            --- hjk
        --- kol
            --- huj
                --- tyu
                --- yuf

```


# Complexity
- Time complexity:
CreatePath : $$O(n)$$
Get : $$O(n)$$

Java 8+ substring, has $$O(n)$$ complexity.
Java indexOf also has $$O(m*n)$$ --> $$O(n)$$ complexity, where m is 1 (length of searched char)
Map lookup for child is $$O(1)$$

- Space complexity:
$$O(k)$$ --> where k is the number of nodes/divisions in file path.

# Code
```java []
class FileSystem {

    private FileNode systemRoot;

    public FileSystem() {
        systemRoot = new FileNode(FileNode.SYS_ROOT, 0);
    }
    
    public boolean createPath(String path, int value) {
        return path.length() > 1 ? createPath(systemRoot, path, value) : false;
    }
    
    public int get(String path) {
        FileNode node = get(systemRoot, path);
        return null != node ? node.value : -1;
    }

    private boolean createPath(FileNode node, String path, int value) {
        if (node == null) return false;
        int next = path.indexOf('/', 1);
        if (next != -1) return createPath(node.getChild(path.substring(1, next)), path.substring(next), value);
        else return node.addChild(path.substring(1), value);
    }

    private FileNode get(FileNode node, String path) {
        if (node == null) return null;
        int next = path.indexOf('/', 1);
        return next != -1 ?
                get(node.getChild(path.substring(1, next)), path.substring(next)) :
                node.getChild(path.substring(1));
    }

    private static class FileNode {
        private static final String SYS_ROOT = "/sysroot";
        private String name;
        private int value;
        private Map<String, FileNode> children;

        public FileNode(String path, int value) {
            this.name = path;
            this.value = value;
            this.children = new HashMap<>();
        }

        public boolean addChild(String path, int value) {
            return children.containsKey(path) ? false : addChild(new FileNode(path, value));
        }

        private boolean addChild(FileNode node) {
            this.children.put(node.name, node);
            return true;
        }
        
        public FileNode getChild(String name) {
            return this.children.getOrDefault(name, null);
        }
    }
}
```