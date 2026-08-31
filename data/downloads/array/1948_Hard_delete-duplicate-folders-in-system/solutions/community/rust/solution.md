# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/3240409/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/3240409/)

---

# Code
```
use std::cell::RefCell;
use std::collections::BTreeMap;
use std::rc::Rc;

#[derive(Debug, Clone, PartialEq, Eq)]
struct Node {
    name: String,
    next: BTreeMap<String, Option<Rc<RefCell<Node>>>>,
    del: bool,
}

impl Node {
    fn new(name: String) -> Self {
        Self {
            name,
            next: BTreeMap::new(),
            del: false,
        }
    }
}

impl Solution {
    pub fn delete_duplicate_folder(paths: Vec<Vec<String>>) -> Vec<Vec<String>> {
        let mut ans = vec![];
        let root = Some(Rc::new(RefCell::new(Node::new("".to_string()))));
        for path in paths {
            Self::add_path(root.clone(), path);
        }
        let mut seen = BTreeMap::new();
        Self::dedupe(root.clone(), &mut seen);

        let mut path = vec![];
        for (_, next) in root.as_ref().unwrap().borrow().next.iter() {
            Self::get_path(next.clone(), &mut ans, &mut path);
        }

        ans
    }

    fn add_path(mut node: Option<Rc<RefCell<Node>>>, path: Vec<String>) {
        for s in path {
            if node.as_ref().unwrap().borrow().next.get(&s).is_none() {
                node.as_mut()
                    .unwrap()
                    .borrow_mut()
                    .next
                    .insert(s.clone(), Some(Rc::new(RefCell::new(Node::new(s.clone())))));
            }
            let tmp = node.as_ref().unwrap().borrow().next.get(&s).unwrap().clone();
            node = tmp;
        }
    }

    fn dedupe(mut node: Option<Rc<RefCell<Node>>>, seen: &mut BTreeMap<String, Option<Rc<RefCell<Node>>>>) -> String {
        let mut subfolder = String::new();
        for (_, next) in node.as_ref().unwrap().borrow().next.iter() {
            subfolder += &Self::dedupe(next.clone(), seen);
        }
        if !subfolder.is_empty() {
            if seen.contains_key(&subfolder) {
                seen.get_mut(&subfolder).unwrap().as_mut().unwrap().borrow_mut().del = true;
                node.as_mut().unwrap().borrow_mut().del = true;
            } else {
                seen.insert(subfolder.clone(), node.clone());
            }
        }
        format!("({}{})", node.as_ref().unwrap().borrow().name, subfolder)
    }

    fn get_path(node: Option<Rc<RefCell<Node>>>, ans: &mut Vec<Vec<String>>, path: &mut Vec<String>) {
        if node.as_ref().unwrap().borrow().del {
            return;
        }
        path.push(node.as_ref().unwrap().borrow().name.clone());
        ans.push(path.clone());
        for (_, next) in node.as_ref().unwrap().borrow().next.iter() {
            Self::get_path(next.clone(), ans, path);
        }
        path.pop();
    }
}

```