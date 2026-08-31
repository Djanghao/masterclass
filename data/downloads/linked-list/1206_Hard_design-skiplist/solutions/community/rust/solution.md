# Rust using Rc and only right and down pointers. Idiomatic code with pretty printer

**Author:** yeetcoder4736
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/762661/](https://leetcode.com/problems/design-skiplist/solutions/762661/)

---

Each node only has value, right and down. I use a stack of nodes when traversing, so I can find the previous node of a target node.


I also implemented a pretty printer which was tougher than expected since each node only has right and down. I had to create a map from Node to upper node and then go row by row from the bottom-most row.

I use `.filter()` in some places. I would not like to use this, but currently rust doesn't allow for the syntax `if let Some(x) = y() && x.some_function()`, so I have to make do with `y().filter(...)`.



```
use std::cell::RefCell;
use std::collections::HashMap;
use std::rc::Rc;

type Link = Rc<RefCell<Node>>;
fn new_link(value: i32) -> Link {
    Rc::new(RefCell::new(Node::new(value)))
}

#[derive(Debug)]
struct Node {
    value: i32,
    right: Option<Link>,
    down: Option<Link>,
}

impl Node {
    pub fn new(value: i32) -> Node {
        Node {
            value,
            right: None,
            down: None,
        }
    }
}

struct Skiplist {
    start: Link,
}

impl Skiplist {
    fn new() -> Self {
        Skiplist {
            start: new_link(std::i32::MIN),
        }
    }

    fn find(&self, target: i32) -> Vec<Link> {
        let mut node_opt = Some(self.start.clone());
        let mut stack = vec![];

        while let Some(node) = node_opt {
            if node
                .borrow()
                .right
                .clone()
                .filter(|n| n.borrow().value <= target)
                .is_some()
            {
                node_opt = node.borrow().right.clone();
            } else {
                stack.push(node.clone());
                node_opt = node.borrow().down.clone();
            }
        }

        stack
    }

    fn search(&self, target: i32) -> bool {
        self.find(target)
            .last()
            .filter(|node| node.borrow().value == target)
            .is_some()
    }

    fn add(&mut self, num: i32) {
        let mut left_nodes = self.find(num);

        let mut node = new_link(num);
        // Safe unwrap because there must be at least one node in the Skiplist.
        let left_node = left_nodes.pop().unwrap();
        node.borrow_mut().right = left_node.borrow_mut().right.clone();
        left_node.borrow_mut().right = Some(node.clone());

        while rand::random() {
            let left_node = match left_nodes.pop() {
                Some(left_node) => left_node,
                None => {
                    let new_start = new_link(std::i32::MIN);
                    new_start.borrow_mut().down = Some(self.start.clone());
                    self.start = new_start;
                    self.start.clone()
                }
            };

            let new_node = new_link(num);
            new_node.borrow_mut().down = Some(node);
            new_node.borrow_mut().right = left_node.borrow_mut().right.clone();

            left_node.borrow_mut().right = Some(new_node.clone());

            node = new_node;
        }
    }

    fn erase(&self, num: i32) -> bool {
        let mut num_found = false;
        for node in self.find(num - 1) {
            let target_node_opt = node.borrow().right.clone();
            // println!("pre node {:?}", node.borrow().value);
            // println!("target_node_opt {:?}", target_node_opt);
            if let Some(target_node) = target_node_opt.filter(|n| n.borrow().value == num) {
                num_found = true;
                node.borrow_mut().right = target_node.borrow().right.clone();
                target_node.borrow_mut().right = None;
                target_node.borrow_mut().down = None;
            }
        }

        num_found
    }
}

impl std::fmt::Debug for Skiplist {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let mut bottom_row = vec![];
        {
            let mut cur = self.start.clone();
            let mut down = cur.borrow().down.clone();
            while let Some(down_rc) = down {
                cur = down_rc;
                down = cur.borrow().down.clone();
            }
            bottom_row.push(cur.clone());
            let mut right = cur.borrow().right.clone();
            while let Some(right_rc) = right {
                bottom_row.push(right_rc.clone());

                cur = right_rc;
                right = cur.borrow().right.clone();
            }
        }

        let mut upper = HashMap::new();
        {
            let mut worklist = vec![self.start.clone()];
            while let Some(node) = worklist.pop() {
                if let Some(down) = node.borrow().down.clone() {
                    if upper.insert(down.as_ptr(), node.clone()).is_none() {
                        worklist.push(down);
                    }
                }
                if let Some(right) = node.borrow().right.clone() {
                    if !upper.contains_key(&right.as_ptr()) {
                        worklist.push(right);
                    }
                }
            }
        }

        let mut values = vec![];

        let mut cur_row: Vec<_> = bottom_row.iter().map(|node| Some(node)).collect();
        while cur_row.iter().any(Option::is_some) {
            let mut next_row = vec![];
            let mut row_values = vec![];
            for node in cur_row.iter() {
                match node {
                    Some(node) => {
                        row_values.push(Some(node.borrow().value));
                        next_row.push(upper.get(&node.as_ptr()).clone());
                    }
                    None => {
                        row_values.push(None);
                        next_row.push(None)
                    }
                }
            }

            values.push(row_values);
            std::mem::swap(&mut cur_row, &mut next_row);
        }

        writeln!(f, "Skiplist:")?;
        for row in values.iter().rev() {
            for value in row {
                if let Some(val) = value {
                    write!(f, "{:7}", val)?;
                } else {
                    write!(f, "       ")?;
                }
            }
            writeln!(f)?;
        }

        Ok(())
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_skiplist_simple() {
        let mut skiplist = Skiplist::new();
        skiplist.add(5);
        skiplist.add(6);
        skiplist.add(7);
        skiplist.add(7);

        assert!(skiplist.search(5));
        assert!(skiplist.search(6));
        assert!(skiplist.search(7));

        println!("{:?}", skiplist);
        assert!(skiplist.erase(5));
        assert!(!skiplist.search(5));

        // 7 was added twice so it needs to be removed twice for both to go away.
        assert!(skiplist.erase(7));
        assert!(skiplist.search(7));

        assert!(skiplist.erase(7));
        assert!(!skiplist.search(7));
        assert!(!skiplist.erase(7));
    }

    #[test]
    fn test_skiplist_complex() {
        let mut skiplist = Skiplist::new();

        skiplist.add(1);
        skiplist.add(2);
        skiplist.add(3);
        // 1, 2, 3 are only there. 0 is not there.
        assert!(!skiplist.search(0));

        skiplist.add(4);
        // 1, 2, 3, 4 are there. 1 is there.
        assert!(skiplist.search(1));

        // 0 is not there.
        assert!(!skiplist.erase(0));
        // 1 is there, and gets erased.
        assert!(skiplist.erase(1));
        // 1 is not there anymore.
        assert!(!skiplist.search(1));
    }

    #[test]
    fn test_skiplist_v_complex() {
        let mut skiplist = Skiplist::new();

        skiplist.add(1);
        skiplist.add(2);
        skiplist.add(3);
        skiplist.add(1);
        skiplist.add(2);
        skiplist.add(3);
        skiplist.add(1);
        skiplist.add(9);
        skiplist.add(988);
        skiplist.add(3);
        skiplist.add(1);
        skiplist.add(2);
        skiplist.add(3);
        println!("{:?}", skiplist);
    }
}

```
