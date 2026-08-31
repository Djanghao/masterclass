# Javascript/Typescript Trie Simple Solution (100% faster than the rest)

**Author:** gourav_gunjan
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/1977814/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/1977814/)

---

Based on solution by @GeorgeChryso, added sorting while creating hash to work with scenario when sub folders are arranged in unsorted manner. (like a folder x can have c,d subfolders, and when we create hash for marking these items for deletion, if other folder has d,c folder name, it would not work)

```
class PathTrieNode {
  val = '';
  children = new Map<string, PathTrieNode>();
  hash = '';
  // Parent pointer is important when we are trying to delete nodes.
  parent: PathTrieNode | undefined;
}

class PathTrie {
  private root = new PathTrieNode();
  private hashMemMap = new Map<string, PathTrieNode[]>();
  
  /**
  * Builds Trie tree for each path passed in Test Case
  */
  build(path: string[]): void {
      let node = this.root;
      for (let pathVal of path) {
          if (!node.children.has(pathVal)) {
              const childNode = new PathTrieNode();
              childNode.parent = node;
              childNode.val = pathVal;
              node.children.set(childNode.val, childNode);
              node = childNode;
          } else {
              node = node.children.get(pathVal);
          }
      }
  }

  /**
  * Creates hash for a node based on it's sub folders
  *  Note that sorting for subfolder is important.
  */
  createHash(node = this.root): string {
      if (node.children.size === 0) {
          // leaf node
          return node.val;
      }
      let hash = [];
      for (let child of node.children.values()) {
          hash.push(this.createHash(child));
      }
      hash = hash.sort();
      node.hash = hash.join('~');
      if (!this.hashMemMap.has(node.hash)) {
          this.hashMemMap.set(node.hash, [])
      }
      this.hashMemMap.get(node.hash).push(node);
      return node.val + '[' + node.hash + ']';
  }
  
  /**
  * Deletes similar folders as map would contain more than one entries for those.
  * For deleting a node, we go its parent, and delete parent's connection to child.
  */
  removeDuplicates(node = this.root): void {
      if (this.hashMemMap.has(node.hash) && this.hashMemMap.get(node.hash).length > 1) {
          for (let deleteNode of this.hashMemMap.get(node.hash)) {
              deleteNode.parent.children.delete(deleteNode.val);
          }
      }
      for (let child of node.children.values()) {
          this.removeDuplicates(child);
      }
  }
  
  /**
  * Stack is used to track folder structure (dfs kind of thing)
  * Res contains actual items.
  */
  toArray(node = this.root, stack = [], res = []): string[][] {
      if (node.val !== '') {
          stack.push(node.val);
          res.push([...stack]);
      }
      for (let child of node.children.values()) {
          this.toArray(child, stack, res);
      }
      stack.pop();
      return res;
  }
  
}

function deleteDuplicateFolder(paths: string[][]): string[][] {
  const pathTrie = new PathTrie();
  for (let path of paths) {
      pathTrie.build(path);
  }
  pathTrie.createHash();
  pathTrie.removeDuplicates();
  return pathTrie.toArray();
};

```