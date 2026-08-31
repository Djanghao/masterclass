# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/3178658/](https://leetcode.com/problems/throne-inheritance/solutions/3178658/)

---

# Code
```
use std::collections::HashMap;

struct ThroneInheritance {
    king: String,
    dead: HashMap<String, bool>,
    children: HashMap<String, Vec<String>>,
}

impl ThroneInheritance {
    fn new(king_name: String) -> Self {
        Self {
            king: king_name,
            dead: HashMap::new(),
            children: HashMap::new(),
        }
    }

    fn birth(&mut self, parent_name: String, child_name: String) {
        self.children
            .entry(parent_name)
            .or_insert_with(Vec::new)
            .push(child_name);
    }

    fn death(&mut self, name: String) {
        self.dead.insert(name, true);
    }

    fn get_inheritance_order(&self) -> Vec<String> {
        let mut order = Vec::new();
        self.dfs(&self.king, &mut order);
        order
    }

    fn dfs(&self, name: &str, order: &mut Vec<String>) {
        if !self.dead.contains_key(name) {
            order.push(name.to_string());
        }
        if let Some(children) = self.children.get(name) {
            for child in children {
                self.dfs(child, order);
            }
        }
    }
}

```