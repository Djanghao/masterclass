# rust - recursive Boxed structure with hashmap

**Author:** raffomartini
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-file-system/solutions/1978237/](https://leetcode.com/problems/design-file-system/solutions/1978237/)

---

I have opted for a recursive structure where every `Node` in the filesystem has a `HashMap` to collect all children.

```
use std::collections::HashMap;

#[derive(Debug)]
struct Node {
    path: String, // not strictly needed, but useful for debugging
    val: i32,
    children: Box<HashMap<String, Node>>, 
}

impl Node {
    fn new(path: &str, val: i32) -> Self {
        Self {
            path: String::from(path),
            val: val,
            children: Box::new(HashMap::new()),
        }
    }
    
    fn has_child(&self, path: &String) -> bool {
        self.children.contains_key(path)
    }
    
    fn insert(&mut self, path: &String, node: Node) {
        self.children.insert(String::from(path), node);
    }
}

#[derive(Debug)]
struct FileSystem {
    root: Node,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FileSystem {

    fn new() -> Self {
        Self {
            root: Node::new((&"/"), 0),
        }
    }
    
    fn _split(path: String) -> Vec<String> {
        path.split("/").filter(|s| *s != "").map(String::from).collect()
    }
    
    fn _exists_mut(&mut self, path: &[String]) -> Option<&mut Node> {
        let mut node = &mut self.root;
        for path in path {
            if let Some(child) = node.children.get_mut(path) {
                node = child;
            } else {
                return None
            }
        }
        Some(node)
    }
    
    fn _exists(&self, path: &[String]) -> Option<& Node> {
        let mut node = &self.root;
        for path in path {
            if let Some(child) = node.children.get(path) {
                node = child;
            } else {
                return None
            }
        }
        Some(node)
    }
    
    fn create_path(&mut self, path: String, value: i32) -> bool {
        let path = Self::_split(path);
        let parent = 
            if path.len() > 1 {
                self._exists_mut(&path[0..path.len()-1])
            } else {
                Some(&mut self.root)
            };
        if let Some(parent) = parent {
            let path = &path[path.len()-1];
            if parent.has_child(path) { // already there
                return false
            } else {
                let node = Node::new(path, value);
                parent.insert(&path, node);
                return true
            }
        }
        false
    }
    
    fn get(&self, path: String) -> i32 {
        let path = Self::_split(path);
        if let Some(node) = self._exists(&path){
            return node.val;
        }
        -1
    }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * let obj = FileSystem::new();
 * let ret_1: bool = obj.create_path(path, value);
 * let ret_2: i32 = obj.get(path);
 */
 ```