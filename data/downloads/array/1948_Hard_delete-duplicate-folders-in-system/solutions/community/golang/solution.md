# Trie+ dfs+ serialization

**Author:** mohit0749
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/1758949/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/1758949/)

---

**Approach**

* Use `trieNode` to create the trie of folder structure.
* Then do dfs on trie and serialize subtrees as strings, then add nodes which has the same serialize string into a dictionary and increment it's count,
* Traverse the trie, if nodes has the same serialize(hash) string and count>1, then it's duplicated subtree, we delete those from trie.
* Traverse the whole trie again to get all the paths.



```
func deleteDuplicateFolder(paths [][]string) [][]string {
	trie := Trie{&trieNode{make(map[string]*trieNode), ""}, make(map[string]int)}
	for _, path := range paths {
		trie.Insert(path)
	}
	trie.Serialize()
	trie.DeleteDuplicate()
	return trie.Traverse()

}

type Trie struct {
	root *trieNode
	mp   map[string]int
}
type trieNode struct {
	child map[string]*trieNode
	hash  string
}

func newTrieNode() *trieNode {
	return &trieNode{make(map[string]*trieNode), ""}
}

func (t *Trie) DeleteDuplicate() {
	var dfs func(*trieNode)
	dfs = func(root *trieNode) {
		if len(root.child) == 0 {
			return
		}
		for k := range root.child {
			if v, ok := t.mp[root.child[k].hash]; ok && v > 1 {
				delete(root.child, k)
			} else {
				dfs(root.child[k])
			}
		}
	}
	dfs(t.root)
}

func (t *Trie) Insert(path []string) {
	root := t.root
	for _, p := range path {
		if root.child[p] == nil {
			root.child[p] = newTrieNode()
		}
		root = root.child[p]
	}
}

func (t Trie) Serialize() {
	var dfs func(*trieNode, string) string
	dfs = func(root *trieNode, n string) string {
		if len(root.child) == 0 {
			return n
		}
		hash := ""
		var children []string
		for k := range root.child {
			children = append(children, k)
		}
		sort.Strings(children)
		for _, k := range children {
            hash += fmt.Sprintf("(%s)",dfs(root.child[k], k))
		}
		root.hash = hash
		t.mp[hash]++
		fmt.Println("root: ", n, "=", root.hash)
		return n + "/" + hash
	}
	t.root.hash = dfs(t.root, "")
}

func (t Trie) Traverse() [][]string {
	paths := make([][]string, 0)
	var dfs func(root *trieNode, currPath []string)
	dfs = func(root *trieNode, currPath []string) {
		if len(root.child) == 0 {
			if len(currPath) > 0 {
				paths = append(paths, append([]string{}, currPath...))
			}
			return
		}
		if len(currPath) > 0 {
			paths = append(paths, append([]string{}, currPath...))
		}
		for k, _ := range root.child {
			dfs(root.child[k], append(currPath, k))
		}
	}

	dfs(t.root, []string{})
	return paths
}
```