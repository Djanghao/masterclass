# [Rust] Binary Search Tree

**Author:** mortonjack
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/4899229/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/4899229/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can rearrange the equation to make it simpler:
`nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff`
`nums1[i] - nums2[i] <= nums1[j] - nums2[j] + diff`
`nums1[i] - nums2[i] - diff <= nums1[j] - nums2[j]`
Defining a new vector `nums` such that `nums[i] = nums1[i] - nums2[i]`, we get our final equation `nums[i] - diff <= nums[j]`

Now we need an operation which can support querying a range of indexes for values greather than or equal to a given value. If we recognise that these ranges aren't arbitrary, if we iterate from `i = 0` to `i = n-1` (left to right), we can just remove `nums1[i] - nums2[i]` from our data structure, and then when we make our query (and all future queries), we're effectively simulating the range `(i, n)`. Then we simply sum the queries for each index, in order.

# Approach
<!-- Describe your approach to solving the problem. -->
For this question, I decided to use a binary search tree. There's a few reasons I think this data structure is a good choice for the question.
1. **The initial size of the tree is known.** 
We don't need to make any sort of complicated self-balancing structure, we can just make the median of our vector slice at each point the subtree's root node to ensure balance.
2. **The height of the tree is bounded by $$O(\\log (n))$$.**
Since we never need to add any nodes, only remove them as we update our range, we don't mind if the tree becomes unbalanced because we still maintain the height bound.
3. **The structure of the tree doesn't need to be modified.**
To make things even easier, the way our query operation works ensures that deletion itself is unnecessary, although it might speed up computations in some scenarios.

# The Query Operation
In order to support our query, all we need to know is the number of nodes in any given subtree. In the simple case, `x > node.val` (where `x = nums[i] - diff`), we know that our equation `x <= nums[j]` will only hold true in the right subtree where `node.val = nums[j]` is larger. When the equation holds true for the root of a subtree, we know that it will also hold true for everything in the right subtree, and it might hold true for some of the left subtree, so we return `node.size - left.size + left.count`. The size of the right subtree is included in `node.size`, but we want to take out the size of the left subtree and replace it with the number of nodes in the left subtree that satisfy our equation.

Thus, we will need to keep track of each node's `size`, defined as the number of nodes in its left and right subtrees. My implementation actually removes duplicates from the tree and combines them all into one node, so if there are 5 occurences of the number 17, then the leaf node 17 will have a size of 5, even though it has no children. 

Before counting the nodes that satisfy our equation, we need to search for the node `nums[i]` and reduce its size by one. Doing this also reduces the size of all of its parent nodes by 1. So our query operation can be reduced to two steps, decrement & count. Note that the path for the decrement & count operations differ, so they can't be done in one pass.

# Complexity
- Time complexity: $$O(n \\log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code (Pointer Implementation)
```
struct Node {
    val: i32,
    size: i32,
    left: Option<Box<Node>>,
    right: Option<Box<Node>>,
}

struct BinarySearchTree {
    root: Option<Box<Node>>,
}

impl Node {
    pub fn new(nums: &Vec<(i32, i32)>, lo: usize, hi: usize) -> Option<Box<Node>> {
        if lo > hi {
            return None;
        }
        let half = lo + (hi-lo)/2;
        let (val, count) = *nums.get(half)?;
        let left = Self::new(nums, lo, half-1);
        let right = Self::new(nums, half+1, hi);
        let left_size = Self::size(left.as_ref());
        let right_size = Self::size(right.as_ref());
        let size = count + left_size + right_size; 
        Some(Box::new(Node { 
            val, 
            size, 
            left, 
            right,
        }))
    }

    fn size(node: Option<&Box<Node>>) -> i32 {
        node.map(|node| node.size).unwrap_or(0)
    }

    fn decrement(mut node: Option<&mut Box<Node>>, a: i32) {
        while let Some(curr_node) = node {
            let val = curr_node.val;
            curr_node.size -= 1;
            node = match a.cmp(&val) { 
                std::cmp::Ordering::Less => curr_node.left.as_mut(), 
                std::cmp::Ordering::Equal => None,
                std::cmp::Ordering::Greater => curr_node.right.as_mut(),
            };
        }
    }

    pub fn count(mut node: Option<&Box<Node>>, x: i32) -> i32 {
        let mut sum = 0;
        while let Some(curr_node) = node {
            if x > curr_node.val {
                node = curr_node.right.as_ref();
            } else {
                node = curr_node.left.as_ref();
                sum += curr_node.size - Self::size(node);
            }
        }
        sum
    }
}

impl BinarySearchTree {
    pub fn new(nums: &Vec<i32>) -> BinarySearchTree {
        let mut freq = std::collections::BTreeMap::new();
        nums.iter().for_each(|&x| *freq.entry(x).or_insert(0) += 1);
        let nums: Vec<(i32, i32)> = freq.into_iter().collect();
        BinarySearchTree { 
            root: Node::new(&nums, 0, nums.len()-1),
        }
    }

    pub fn query(&mut self, a: i32, diff: i32) -> i64 {
        Node::decrement(self.root.as_mut(), a);
        Node::count(self.root.as_ref(), a-diff) as i64
    }
}

impl Solution {
    pub fn number_of_pairs(nums1: Vec<i32>, nums2: Vec<i32>, diff: i32) -> i64 {
        let nums: Vec<i32> = nums1
            .into_iter()
            .zip(nums2.into_iter())
            .map(|(a, b)| a - b)
            .collect();
        let mut bst = BinarySearchTree::new(&nums);
        nums.into_iter().map(|x| bst.query(x, diff)).sum()
    }
}
```

# Code (Vector Implementation)
There's enough information here to construct a complete binary tree, but I'm just taking the easy option and storing the index of the left/right children of each node in the Node struct.
```
struct Node {
    val: i32,
    size: i32,
    left: usize,
    right: usize,
}

struct BinarySearchTree {
    contents: Vec<Node>,
    root: usize,
}

impl BinarySearchTree {
    pub fn new(nums: &Vec<i32>) -> BinarySearchTree {
        let mut freq = std::collections::BTreeMap::new();
        nums.iter().for_each(|&x| *freq.entry(x).or_insert(0) += 1);
        let nums: Vec<(i32, i32)> = freq.into_iter().collect();
        let mut tree = Vec::with_capacity(nums.len());
        let root = Self::initialise(&mut tree, &nums, 0, nums.len()-1);
        BinarySearchTree {
            contents: tree,
            root,
        }
    }

    pub fn query(&mut self, a: i32, diff: i32) -> i64 {
        self.decrement(a);
        self.count(a-diff) as i64
    }

    fn size(tree: &Vec<Node>, idx: usize) -> i32 {
        tree.get(idx).map(|node| node.size).unwrap_or(0)
    }

    fn decrement(&mut self, a: i32) {
        let mut idx = self.root;
        while let Some(node) = self.contents.get_mut(idx) {
            let val = node.val;
            node.size -= 1;
            idx = match a.cmp(&val) {
                std::cmp::Ordering::Less => node.left,
                std::cmp::Ordering::Equal => self.contents.len(),
                std::cmp::Ordering::Greater => node.right,
            }
        }
    }
    
    fn count(&self, x: i32) -> i32 {
        let mut sum = 0;
        let mut idx = self.root;
        while let Some(node) = self.contents.get(idx) {
            if x > node.val {
                idx = node.right;
            } else {
                idx = node.left;
                sum += node.size - Self::size(&self.contents, idx);
            }
        }
        sum
    }

    fn initialise(
        tree: &mut Vec<Node>, 
        nums: &Vec<(i32, i32)>, 
        lo: usize, 
        hi: usize
    ) -> usize {
        let half = lo + (hi-lo)/2;
        if lo > hi || half >= nums.len() {
            return nums.len();
        }
        let (val, count) = nums[half];
        let left = Self::initialise(&mut *tree, &*nums, lo, half-1);
        let right = Self::initialise(&mut *tree, &*nums, half+1, hi);
        let left_size = Self::size(&tree, left);
        let right_size = Self::size(&tree, right);
        let size = count + left_size + right_size; 
        let node = Node { 
            val, 
            size, 
            left, 
            right,
        };
        tree.push(node);
        tree.len()-1
    }
}

impl Solution {
    pub fn number_of_pairs(nums1: Vec<i32>, nums2: Vec<i32>, diff: i32) -> i64 {
        let nums: Vec<i32> = nums1
            .into_iter()
            .zip(nums2.into_iter())
            .map(|(a, b)| a - b)
            .collect();
        let mut bst = BinarySearchTree::new(&nums);
        nums.into_iter().map(|x| bst.query(x, diff)).sum()
    }
}
```