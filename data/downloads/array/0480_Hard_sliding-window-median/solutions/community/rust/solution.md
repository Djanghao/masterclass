# [Rust] Just write a avl tree library

**Author:** yeetcoder4736
**Votes:** 5
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/737929/](https://leetcode.com/problems/sliding-window-median/solutions/737929/)

---

since rust doesn't have multiset like C++, I created it myself. The code is long, but works :) and beats 100% time and memory.

```
#![allow(dead_code)]

#[derive(Debug)]
struct MultiSetNode<T> {
    /// The value being stored.
    value: T,
    /// The number of times this value is stored.
    count: usize,

    /// The left and right subtrees.
    left: Option<Box<MultiSetNode<T>>>,
    right: Option<Box<MultiSetNode<T>>>,

    /// The size of this subtree.
    size: usize,
    /// The height of this subtree.
    height: usize,
}

#[derive(Clone, Copy, Debug)]
enum Rotation {
    Clockwise,
    Anticlockwise,
}

#[derive(Clone, Copy, Debug)]
enum Child {
    Left,
    Right,
}

impl Child {
    pub fn opposite(&self) -> Child {
        match self {
            Child::Left => Child::Right,
            Child::Right => Child::Left,
        }
    }
}

impl<T> MultiSetNode<T>
where
    T: std::cmp::PartialOrd + std::fmt::Debug,
{
    pub fn new(value: T) -> MultiSetNode<T> {
        MultiSetNode {
            value,
            count: 1,
            left: None,
            right: None,
            size: 1,
            height: 1,
        }
    }

    fn get_child(&mut self, child: Child) -> &mut Option<Box<MultiSetNode<T>>> {
        match child {
            Child::Left => &mut self.left,
            Child::Right => &mut self.right,
        }
    }

    fn swap_values(x: &mut MultiSetNode<T>, y: &mut MultiSetNode<T>) {
        std::mem::swap(&mut x.value, &mut y.value);
        std::mem::swap(&mut x.count, &mut y.count);
    }

    // Rotates the subtree by `rotation`.
    // If `rotation` is Rotation::Anticlockwise, then the tree after rotation becomes:
    //        A                               C
    //    B      C        ==>              A     G
    //          F  G                     B   F
    //
    // If `rotation` is Rotation::Clockwise, then the tree after rotation becomes:
    //        A                               B
    //    B      C        ==>              D      A
    //  D   E                                    E  C
    fn rotate(&mut self, rotation: Rotation) {
        // If anti-clockwise, the procedure is exactly the same, except left and right children are swapped.
        let (l_child, r_child) = match rotation {
            Rotation::Clockwise => (Child::Left, Child::Right),
            Rotation::Anticlockwise => (Child::Right, Child::Left),
        };

        // 1) Detach the left subtree from root.
        //             A(self)
        //    B           C
        //  D   E
        let mut detached_left_opt = None;
        std::mem::swap(self.get_child(l_child), &mut detached_left_opt);
        let mut detached_left = match detached_left_opt {
            None => return, // If no left subtree, return early.
            Some(detached_left) => detached_left,
        };

        // 2) Swap the children of `detached_left`.
        //             A(self)
        //    B           C
        //  E   D
        std::mem::swap(&mut detached_left.left, &mut detached_left.right);

        // 3) Swap the values and counts of root (`self`) and `detached_left`.
        //             B(self)
        //    A           C
        //  E   D
        MultiSetNode::swap_values(self, &mut detached_left);

        // 4) Swap the right children of the root and `detached_left`.
        //             B(self)
        //    A           D
        //  E   C
        std::mem::swap(self.get_child(r_child), detached_left.get_child(r_child));

        // 5) Swap the children of root.
        //             B(self)
        //    A       D
        //  E   C
        std::mem::swap(&mut self.left, &mut self.right);

        // 6) Set root's right child to `detached_left`.
        //              B(self)
        //           D      A
        //                E   C
        *self.get_child(r_child) = Some(detached_left);
    }

    fn child_heights(&self) -> (usize, usize) {
        (
            self.left.as_ref().map(|node| node.height).unwrap_or(0),
            self.right.as_ref().map(|node| node.height).unwrap_or(0),
        )
    }

    pub fn balance(&mut self) {
        let (l_height, r_height) = self.child_heights();

        if l_height > r_height + 1 {
            // Safe unwrap as `l_height` >= 1.
            let left = self.left.as_mut().unwrap();
            let (ll_height, lr_height) = left.child_heights();
            // Make sure left-left subtree is at least as tall as left-right subtree.
            if ll_height < lr_height {
                left.rotate(Rotation::Anticlockwise);
            }
            self.rotate(Rotation::Clockwise);
        } else if r_height > l_height + 1 {
            // Safe unwrap as `r_height` >= 1.
            let right = self.right.as_mut().unwrap();
            let (rl_height, rr_height) = right.child_heights();
            // Make sure right-right subtree is at least as tall as right-left subtree.
            if rr_height < rl_height {
                right.rotate(Rotation::Clockwise);
            }
            self.rotate(Rotation::Anticlockwise);
        }

        // Re-calculate meta info after rotations.
        if let Some(left) = &mut self.left {
            left.update_meta();
        }
        if let Some(right) = &mut self.right {
            right.update_meta();
        }
        self.update_meta();
    }

    fn update_meta(&mut self) {
        // Size is `self.count` + left size + right size.
        self.size = self.count
            + self.left.as_ref().map(|node| node.size).unwrap_or(0)
            + self.right.as_ref().map(|node| node.size).unwrap_or(0);

        // Height is 1 + max(left height, right height).
        let (l_height, r_height) = self.child_heights();
        self.height = 1 + std::cmp::max(l_height, r_height);
    }

    fn fix(&mut self) {
        self.update_meta();
        self.balance();
    }

    fn insert(opt_node: &mut Option<Box<MultiSetNode<T>>>, value: T) {
        let node = match opt_node {
            None => {
                *opt_node = Some(Box::new(MultiSetNode::new(value)));
                return;
            }
            Some(node) => node,
        };

        if value < node.value {
            MultiSetNode::insert(&mut node.left, value)
        } else if value > node.value {
            MultiSetNode::insert(&mut node.right, value)
        } else {
            node.count += 1;
        }

        node.fix();
    }

    fn remove_node(opt_node: &mut Option<Box<MultiSetNode<T>>>) {
        let node = match opt_node {
            None => return,
            Some(node) => node,
        };

        let child = match (node.left.as_mut(), node.right.as_mut()) {
            (Some(_), Some(right)) => {
                if let Some(_) = right.left.as_mut() {
                    let mut parent = right;
                    while parent.left.as_mut().unwrap().left.as_mut().is_some() {
                        parent = parent.left.as_mut().unwrap();
                    }
                    let to_swap = parent.left.as_mut().unwrap();
                    std::mem::swap(&mut node.value, &mut to_swap.value);
                    std::mem::swap(&mut node.count, &mut to_swap.count);

                    let mut to_swap_right = None;
                    std::mem::swap(&mut to_swap_right, &mut to_swap.right);
                    parent.left = to_swap_right;

                    fn fix_left<T>(x_opt: &mut Option<Box<MultiSetNode<T>>>)
                    where
                        T: std::cmp::PartialOrd + std::fmt::Debug,
                    {
                        if let Some(x) = x_opt {
                            fix_left(&mut x.left);
                            x.fix();
                        }
                    }
                    fix_left(&mut node.right);

                    node.fix();
                    return;
                } else {
                    Child::Right
                }
            }
            (None, None) | (None, Some(_)) => Child::Right,
            (Some(_), None) => Child::Left,
        };

        let mut detached_child = None;
        std::mem::swap(node.get_child(child), &mut detached_child);

        let otherchild = child.opposite();
        let mut detached_otherchild = None;
        std::mem::swap(node.get_child(otherchild), &mut detached_otherchild);

        if let Some(detached_child_node) = detached_child.as_mut() {
            *detached_child_node.get_child(otherchild) = detached_otherchild;
            detached_child_node.fix();
        }

        *opt_node = detached_child;
    }

    fn remove(opt_node: &mut Option<Box<MultiSetNode<T>>>, value: T) {
        let node = match opt_node {
            None => return,
            Some(node) => node,
        };

        if value < node.value {
            MultiSetNode::remove(&mut node.left, value)
        } else if value > node.value {
            MultiSetNode::remove(&mut node.right, value)
        } else {
            node.count -= 1;
            if node.count == 0 {
                return MultiSetNode::remove_node(opt_node);
            }
        };

        node.fix();
    }

    /// Returns the count of the given key.
    pub fn get(opt_node: &Option<Box<MultiSetNode<T>>>, value: T) -> usize {
        let node = match &opt_node {
            None => return 0,
            Some(node) => node,
        };

        if value < node.value {
            MultiSetNode::get(&node.left, value)
        } else if value > node.value {
            MultiSetNode::get(&node.right, value)
        } else {
            node.count
        }
    }

    pub fn len(&self) -> usize {
        self.size
    }

    fn fmt_with_indents(
        opt_node: &Option<Box<MultiSetNode<T>>>,
        f: &mut std::fmt::Formatter<'_>,
        level: usize,
        child: Option<Child>,
    ) -> std::fmt::Result {
        if let Some(node) = opt_node {
            let indent = (0..level).map(|_| "  ").collect::<String>();

            let _ = write!(
                f,
                "{}child={:?},val={:?},size={},count={},height={}\
",
                indent, child, node.value, node.size, node.count, node.height
            );
            let _ = MultiSetNode::fmt_with_indents(&node.left, f, level + 1, Some(Child::Left));
            MultiSetNode::fmt_with_indents(&node.right, f, level + 1, Some(Child::Right))
        } else {
            write!(f, "",)
        }
    }

    pub fn nth_node<'a>(
        opt_node: &'a mut Option<Box<MultiSetNode<T>>>,
        n: usize,
    ) -> Option<&'a mut Box<MultiSetNode<T>>> {
        let node = match opt_node {
            None => return None,
            Some(node) => node,
        };

        let left_size = node.left.as_ref().map(|node| node.size).unwrap_or(0);
        if n < left_size {
            MultiSetNode::nth_node(&mut node.left, n)
        } else if n < left_size + node.count {
            Some(node)
        } else {
            MultiSetNode::nth_node(&mut node.right, n - left_size - node.count)
        }
    }

    pub fn nth_item(&self, n: usize) -> &T {
        let left_size = self.left.as_ref().map(|node| node.size).unwrap_or(0);
        if n < left_size {
            MultiSetNode::nth_item(self.left.as_ref().unwrap(), n)
        } else if n < left_size + self.count {
            &self.value
        } else {
            MultiSetNode::nth_item(self.right.as_ref().unwrap(), n - left_size - self.count)
        }
    }
}

#[derive(Debug)]
pub struct MultiSet<T> {
    root: Option<Box<MultiSetNode<T>>>,
}

impl<T> MultiSet<T>
where
    T: std::cmp::PartialOrd + std::fmt::Debug,
{
    pub fn new() -> MultiSet<T> {
        MultiSet { root: None }
    }

    pub fn len(&self) -> usize {
        match &self.root {
            None => 0,
            Some(node) => node.len(),
        }
    }

    /// Inserts `value`. Duplicates are allowed.
    pub fn insert(&mut self, value: T) {
        MultiSetNode::insert(&mut self.root, value);
    }

    /// Returns true if `value` was successfully removed.
    pub fn remove(&mut self, value: T) {
        MultiSetNode::remove(&mut self.root, value);
    }

    pub fn get(&self, value: T) -> usize {
        MultiSetNode::get(&self.root, value)
    }

    /// Gets the nth item in the MultiSet where n in `[0, len())`. Panics if `n` not in this range.
    pub fn nth_item(&self, n: usize) -> &T {
        if n >= self.len() {
            panic!("Item out of bounds!");
        }

        MultiSetNode::nth_item(self.root.as_ref().unwrap(), n)
    }
}

impl<T> std::fmt::Display for MultiSet<T>
where
    T: std::cmp::PartialOrd + std::fmt::Debug,
{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        MultiSetNode::fmt_with_indents(&self.root, f, 0, None)
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use std::collections::HashMap;

    // Checks constraints and returns (size and height).
    fn check<T>(
        opt_node: &Option<Box<MultiSetNode<T>>>,
        min_val_opt: Option<&T>,
        max_val_opt: Option<&T>,
    ) -> (usize, usize)
    where
        T: std::cmp::PartialOrd + std::fmt::Debug,
    {
        let node = match opt_node {
            None => return (0, 0),
            Some(node) => node,
        };
        if let Some(min_val) = min_val_opt {
            assert!(min_val < &node.value);
        }
        if let Some(max_val) = max_val_opt {
            assert!(&node.value < max_val);
        }

        let (l_size, l_height) = check(&node.left, min_val_opt, Some(&node.value));
        let (r_size, r_height) = check(&node.right, Some(&node.value), max_val_opt);
        assert_eq!(node.size, node.count + l_size + r_size);
        assert_eq!(node.height, 1 + std::cmp::max(l_height, r_height));
        // Max height difference between left and right subtrees is 1.
        assert!((l_height as i64 - r_height as i64).abs() <= 1);

        (node.size, node.height)
    }

    fn insert_<T>(m: &mut MultiSet<T>, value: T)
    where
        T: std::cmp::PartialOrd + std::fmt::Debug,
    {
        let old_len = m.len();
        m.insert(value);
        assert_eq!(m.len(), old_len + 1);
        check(&m.root, None, None);
    }

    fn remove_<T>(m: &mut MultiSet<T>, value: T)
    where
        T: std::cmp::PartialOrd + std::fmt::Debug + Copy + std::fmt::Display,
    {
        let old_len = m.len();
        m.remove(value);
        assert_eq!(m.len(), old_len - 1);
        check(&m.root, None, None);
    }

    #[test]
    fn test_multiset_remove_some_some() {
        let mut m = MultiSet::new();
        insert_(&mut m, 11);
        insert_(&mut m, 10);
        insert_(&mut m, 8);
        insert_(&mut m, 9);
        insert_(&mut m, 7);
        insert_(&mut m, 6);
        remove_(&mut m, 11);

        remove_(&mut m, 8);
    }

    #[test]
    fn test_multiset_insert() {
        let mut m = MultiSet::new();
        insert_(&mut m, 10);
        insert_(&mut m, 10);
        insert_(&mut m, 10);
        assert_eq!(m.get(10), 3);

        insert_(&mut m, 11);
        assert_eq!(m.get(11), 1);

        insert_(&mut m, 12);
        insert_(&mut m, 13);
        insert_(&mut m, 14);
        insert_(&mut m, 15);
        insert_(&mut m, 16);
        assert_eq!(m.get(16), 1);
        assert_eq!(m.len(), 9);
    }

    #[test]
    fn test_multiset_remove() {
        let mut m = MultiSet::new();
        let items = vec![11, 99, 7, 8, 12, 10, 10];
        for item in &items {
            insert_(&mut m, *item);
        }
        assert_eq!(m.len(), items.len());

        remove_(&mut m, 10);
        assert_eq!(m.get(10), 1);
        assert_eq!(m.len(), items.len() - 1);
        remove_(&mut m, 10);
        assert_eq!(m.get(10), 0);
        assert_eq!(m.len(), items.len() - 2);

        assert_eq!(m.get(11), 1);
        assert_eq!(m.get(12), 1);
    }

    #[test]
    fn test_multiset_sequential() {
        let mut m = MultiSet::new();
        let mut items = vec![];
        for i in 1..100 {
            for j in 1..i + 1 {
                items.push((i * j + 2 * j + 12) % 25);
            }
        }
        let mut d = HashMap::new();
        for (i, item) in items.iter().enumerate() {
            *d.entry(*item).or_insert(0) += 1;
            insert_(&mut m, *item);
            assert_eq!(m.len(), i + 1);

            assert_eq!(m.get(*item), d[item]);
        }

        let num_removes = items.len() / 2;
        for i in 0..num_removes {
            let removed_item = items.remove(i);
            remove_(&mut m, removed_item);
            *d.get_mut(&removed_item).unwrap() -= 1;

            assert_eq!(m.get(removed_item), d[&removed_item]);
        }

        items.sort();
        for (i, item) in items.iter().enumerate() {
            assert_eq!(m.get(*item), d[item]);
            assert_eq!(m.nth_item(i), item);
        }
    }
}


pub fn median_sliding_window(nums: Vec<i32>, k: i32) -> Vec<f64> {
    assert!(k > 0);
    let k = std::cmp::min(k as usize, nums.len());

    fn get_median(m: &MultiSet<i32>) -> f64 {
        let first_item = *m.nth_item((m.len() - 1) / 2) as f64;
        if m.len() % 2 != 0 {
            return first_item;
        }

        let second_item = *m.nth_item(m.len() / 2) as f64;
        (first_item + second_item) / 2.0
    }

    let mut map = MultiSet::new();
    let mut medians = vec![];

    for num in nums[0..k].iter() {
        map.insert(*num);
    }
    medians.push(get_median(&map));

    for (num_remove, num_add) in nums.iter().zip(nums[k..].iter()) {
        map.remove(*num_remove);
        map.insert(*num_add);
        medians.push(get_median(&map));
    }

    medians
}



impl Solution {
    pub fn median_sliding_window(nums: Vec<i32>, k: i32) -> Vec<f64> {
        median_sliding_window(nums, k)
    }
}
```