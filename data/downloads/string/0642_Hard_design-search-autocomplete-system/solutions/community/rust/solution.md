# Rust solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/4090265/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/4090265/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
This is the port of official solution with Rust. Well, that was quite hard to convince borrow checker you're doing everything right.

# Code
```
use std::{cell::RefCell, collections::HashMap, rc::Rc};

struct TrieNode {
    children: HashMap<char, Rc<RefCell<TrieNode>>>,
    sentences: HashMap<String, i32>,
}

impl TrieNode {
    fn new() -> Self {
        Self {
            children: HashMap::new(),
            sentences: HashMap::new(),
        }
    }
}

struct AutocompleteSystem {
    root: Rc<RefCell<TrieNode>>,
    curr_node: Rc<RefCell<TrieNode>>,
    dead: Rc<RefCell<TrieNode>>,
    curr_sentence: String,
}

impl AutocompleteSystem {
    fn new(sentences: Vec<String>, times: Vec<i32>) -> Self {
        let root = Rc::new(RefCell::new(TrieNode::new()));
        let curr_node = root.clone();
        let dead = Rc::new(RefCell::new(TrieNode::new()));

        let mut ret = Self {
            root,
            curr_node,
            dead,
            curr_sentence: "".to_string(),
        };

        for (s, t) in sentences.into_iter().zip(times) {
            ret.add(s, t);
        }

        ret
    }

    fn input(&mut self, c: char) -> Vec<String> {
        if c == '#' {
            self.add(self.curr_sentence.clone(), 1);
            self.curr_sentence.clear();
            self.curr_node = self.root.clone();
            return vec![];
        }

        self.curr_sentence.push(c);
        if !self.curr_node.borrow().children.contains_key(&c) {
            self.curr_node = self.dead.clone();
            return vec![];
        }

        let next = self
            .curr_node
            .borrow_mut()
            .children
            .get(&c)
            .unwrap()
            .clone();

        self.curr_node = next;

        let mut sentences = self
            .curr_node
            .borrow()
            .sentences
            .keys()
            .clone()
            .map(|x| x.to_owned())
            .collect::<Vec<_>>();

        sentences.sort_by(|a, b| {
            let a_hot = *self.curr_node.borrow().sentences.get(a).unwrap();
            let b_hot = *self.curr_node.borrow().sentences.get(b).unwrap();
            if a_hot == b_hot {
                a.cmp(&b)
            } else {
                b_hot.cmp(&a_hot)
            }
        });

        let mut ans = vec![];
        for i in 0..3.min(sentences.len()) {
            ans.push(sentences[i].clone());
        }
        ans
    }

    fn add(&mut self, sentence: String, count: i32) {
        let mut node = self.root.clone();
        for ch in sentence.clone().chars() {
            node.borrow_mut()
                .children
                .entry(ch)
                .or_insert(Rc::new(RefCell::new(TrieNode::new())));
            let next = node.borrow_mut().children.get(&ch).unwrap().clone();
            node = next;
            *node
                .borrow_mut()
                .sentences
                .entry(sentence.clone())
                .or_insert(0) += count;
        }
    }
}

```