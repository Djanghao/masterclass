# [Rust] Segment tree

**Author:** KurosuHa
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/2131575/](https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/2131575/)

---

```rust
use std::{
    cell::RefCell,
    cmp::Ordering,
    collections::{BTreeMap, BinaryHeap, HashMap, VecDeque},
    rc::Rc,
};


/// Member Node of the SegmentTree
#[derive(Debug)]
struct Node {
    /// the left bound of the Node in the Segment Tree
    left_index: usize,
    /// the right bound of the Node in the Segment Tree
    right_index: usize,
    /// length of the longest substring of one repeating character between [left_index, right_index]
    longest_substring_len: usize,
    /// leftmost char of the segment
    left_char: char,
    /// rightmost char of the segment
    right_char: char,
    /// length of the substring of one repeating character that start at the left_index
    left_char_rep_len: usize,
    /// length of the substring of one repeating character that end at the right_index
    right_char_rep_len: usize,
    /// left subnode
    left_node: Option<Rc<RefCell<Node>>>,
    /// right subnode
    right_node: Option<Rc<RefCell<Node>>>,
}

impl Node {
    fn construct(characters: &Vec<char>, left_index: usize, right_index: usize) -> Node {
        if left_index == right_index {
            Node {
                left_index,
                right_index,
                longest_substring_len: 1,
                left_char: characters[left_index],
                right_char: characters[right_index],
                left_char_rep_len: 1,
                right_char_rep_len: 1,
                left_node: None,
                right_node: None,
            }
        } else {
            let mut mid_index = (left_index + right_index) / 2;
            let left_node = Rc::new(RefCell::new(Node::construct(
                characters, left_index, mid_index,
            )));
            let right_node = Rc::new(RefCell::new(Node::construct(
                characters,
                mid_index + 1,
                right_index,
            )));
            Self::merge(left_node, right_node)
        }
    }

    fn merge(left_node: Rc<RefCell<Node>>, right_node: Rc<RefCell<Node>>) -> Node {
        let mut longest_substring_len = std::cmp::max(
            left_node.borrow().longest_substring_len,
            right_node.borrow().longest_substring_len,
        );
        let merge_len = if left_node.borrow().right_char == right_node.borrow().left_char {
            left_node.borrow().right_char_rep_len + right_node.borrow().left_char_rep_len
        } else {
            0
        };
        longest_substring_len = std::cmp::max(longest_substring_len, merge_len);

        let left_char_rep_len = if left_node.borrow().right_index - left_node.borrow().left_index + 1
            == left_node.borrow().left_char_rep_len
            && left_node.borrow().right_char == right_node.borrow().left_char
        {
            left_node.borrow().left_char_rep_len + right_node.borrow().left_char_rep_len
        } else {
            left_node.borrow().left_char_rep_len
        };

        let right_char_rep_len = if right_node.borrow().right_index - right_node.borrow().left_index + 1
            == right_node.borrow().right_char_rep_len
            && left_node.borrow().right_char == right_node.borrow().left_char
        {
            right_node.borrow().right_char_rep_len + left_node.borrow().right_char_rep_len
        } else {
            right_node.borrow().right_char_rep_len
        };

        Node {
            left_index: left_node.borrow().left_index,
            right_index: right_node.borrow().right_index,
            longest_substring_len,
            left_char: left_node.borrow().left_char,
            right_char: right_node.borrow().right_char,
            left_char_rep_len,
            right_char_rep_len,
            left_node: Some(left_node.clone()),
            right_node: Some(right_node.clone()),
        }
    }

    fn update(&mut self, index: usize, character: char) {
        if self.left_index == self.right_index {
            self.left_char = character;
            self.right_char = character;
        } else {
            let l_node = self.left_node.clone().unwrap().clone();
            let r_node = self.right_node.clone().unwrap().clone();
            if index <= l_node.borrow().right_index {
                l_node.borrow_mut().update(index, character)
            } else {
                r_node.borrow_mut().update(index, character)
            }

            *self = Node::merge(l_node, r_node)
        }
    }
}

#[derive(Debug)]
struct SegmentTree {
    node: Node,
}

impl SegmentTree {
    fn construct(characters: &Vec<char>) -> SegmentTree {
        SegmentTree {
            node: Node::construct(characters, 0, characters.len() - 1)
        }
    }

    fn update(&mut self, index: usize, character: char) {
        self.node.update(index, character)
    }

    fn longest_repeating(&self) -> usize {
        self.node.longest_substring_len
    }
}


impl Solution {
    pub fn longest_repeating(
        s: String,
        query_characters: String,
        query_indices: Vec<i32>,
    ) -> Vec<i32> {
        let characters: Vec<char> = s.chars().collect();
        let query_characters: Vec<char> = query_characters.chars().collect();
        let mut res = vec![0; query_characters.len()];
        let mut segment_tree = SegmentTree::construct(&characters);

        for query_index in 0..query_characters.len() {
            segment_tree.update(
                query_indices[query_index] as usize,
                query_characters[query_index],
            );
            res[query_index] = segment_tree.longest_repeating() as i32;
        }

        res
    }
}

```