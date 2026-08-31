# [C/C++/Java/Python] Recursive and iterative solutions. Doesn't create Frankenstein trees

**Author:** ChrisTrompf
**Votes:** 359
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/167402/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/167402/)

---

# TL;DR
Details at the end.
## **cpp**
### **Recursive**
```cpp
  TreeNode* clone(TreeNode* root) {
    TreeNode* new_root = new TreeNode(0);
    new_root->left = (root->left) ? clone(root->left) : nullptr;
    new_root->right = (root->right) ? clone(root->right) : nullptr; 
    return new_root;
  } 

  vector<TreeNode*> allPossibleFBT(int N) {
    std::vector<TreeNode*> ret;
    if (1 == N) {
      ret.emplace_back(new TreeNode(0));
    } else if (N % 2) {
      for (int i = 2; i <= N; i += 2) {
        auto left = allPossibleFBT(i - 1);
        auto right = allPossibleFBT(N - i);
        for (int l_idx = 0; l_idx < left.size(); ++l_idx) {
          for (int r_idx = 0; r_idx < right.size(); ++r_idx) {
            ret.emplace_back(new TreeNode(0));

            // If we're using the last right branch, then this will be the last time this left branch is used and can hence
            // be shallow copied, otherwise the tree will have to be cloned
            ret.back()->left = (r_idx == right.size() - 1) ? left[l_idx] : clone(left[l_idx]);

            // If we're using the last left branch, then this will be the last time this right branch is used and can hence
            // be shallow copied, otherwise the tree will have to be cloned
            ret.back()->right = (l_idx == left.size() - 1) ? right[r_idx] : clone(right[r_idx]);
          }
        }
      }
    }
    return ret;
  }
```
### **Iterative with cache**
```cpp
  TreeNode* clone(TreeNode* root) {
    TreeNode* new_root = new TreeNode(0);
    new_root->left = (root->left) ? clone(root->left) : nullptr;
    new_root->right = (root->right) ? clone(root->right) : nullptr; 
    return new_root;
  } 

  vector<TreeNode*> allPossibleFBT(int N) {
    if (0 == N % 2) {
      return std::vector<TreeNode*>{};
    } else if (1 == N) {
      return std::vector<TreeNode*>{1, new TreeNode{0}};
    }

    // For each level, holds all the patterns for all the full BST
    std::vector<std::vector<TreeNode>> patterns;
    patterns.emplace_back();
    patterns.back().emplace_back(0);

    // Build up a pattern for all the balanaced trees using n - 2 nodes. Note that the patterns are 
    // deliberately linked together for efficency. It is not safe to return this, a full clone of
    // each pattern will be required
    for (int root = 1; root < N / 2; ++root) {
      patterns.emplace_back();
      for (int left_size = 0; left_size < root; ++left_size) {
        for (auto& left : patterns[left_size]) {
          for (auto& right : patterns[root - left_size - 1]) {
            patterns.back().emplace_back(0);
            patterns.back().back().left = &left;
            patterns.back().back().right = &right;
          }
        }
      }
    }

    // Final level should actually create a tree that can be returned from the patterns generate above
    std::vector<TreeNode*> ret;
    for (int root = 0; root < N / 2; ++root) {
      for (auto& left : patterns[root]) {
        for (auto& right : patterns[N / 2 - root - 1]) {
          ret.emplace_back(new TreeNode(0));
          ret.back()->left = clone(&left);
          ret.back()->right = clone(&right);
        }
      }
    }

    return ret;
  }
```
## **Python**
### **Recursive**
```python
  def clone(self, tree: TreeNode) -> TreeNode:
    if not tree:
      return None
    new_tree = TreeNode(0)
    new_tree.left = self.clone(tree.left)
    new_tree.right = self.clone(tree.right)
    return new_tree
  
  def allPossibleFBT(self, N: int) -> List[TreeNode]:
    if N % 2 == 0:
      return []
    elif N == 1:
      return [TreeNode(0)]
    ret = []
    for i in range(2, N + 1, 2):
      left_branch = self.allPossibleFBT(i - 1)
      right_branch = self.allPossibleFBT(N - i)
      for left_count, left in enumerate(left_branch, 1):
        for right_count, right in enumerate(right_branch, 1):
          tree = TreeNode(0)
          
          # If we're using the last right branch, then this will be the last time this left branch is used and can hence
          # be shallow copied, otherwise the tree will have to be cloned
          tree.left = self.clone(left) if right_count < len(right_branch) else left
          
          # If we're using the last left branch, then this will be the last time this right branch is used and can hence
          # be shallow copied, otherwise the tree will have to be cloned
          tree.right = self.clone(right) if left_count < len(left_branch) else right
          
          ret.append(tree)
    return ret
```	
### **Iterative**
```python
  def clone(self, tree: TreeNode) -> TreeNode:
    if not tree:
      return None
    new_tree = TreeNode(0)
    new_tree.left = self.clone(tree.left)
    new_tree.right = self.clone(tree.right)
    return new_tree
  
  def allPossibleFBT(self, N: int) -> List[TreeNode]:
    if N % 2 == 0:
      return []
    if N == 1:
      return [TreeNode(0)]
    
    # Build up a cache of a all possible FBT for the N - 2 levels
    # these levels will be linked together as a graph and should not
    # be returned
    cache = [[TreeNode(0)]]
    for root in range(1, N // 2):
      cache.append([])
      for left_size in range(root):
        for left in cache[left_size]:
          for right in cache[root - left_size - 1]:
            new_tree = TreeNode(0)
            new_tree.left = left
            new_tree.right = right
            cache[-1].append(new_tree)
  
    # Cached values are linked together and must be cloned to be unlinked
    # trees before returning
    ret = []
    for root in range(N // 2):
      for left in cache[root]:
        for right in cache[N // 2 - root - 1]:
          new_tree = TreeNode(0)
          new_tree.left = self.clone(left)
          new_tree.right = self.clone(right)
          ret.append(new_tree)
    return ret
```	
## **Java**
### **Recursive**
```java
  public TreeNode clone(TreeNode tree)  {
    if (null == tree)
    {
      return null;
    }
    
    TreeNode new_tree = new TreeNode(tree.val);
    new_tree.left = clone(tree.left);
    new_tree.right = clone(tree.right);
    return new_tree;
  }
  
  public List<TreeNode> allPossibleFBT(int N) {
    List<TreeNode> ret = new ArrayList<TreeNode>();
    if (1 == N) {
      ret.add(new TreeNode(0));
    } else if (N % 2 != 0) {
      for (int i = 2; i <= N; i += 2) {
        List<TreeNode> left_branch = allPossibleFBT(i - 1);
        List<TreeNode> right_branch = allPossibleFBT(N - i);
        for (Iterator<TreeNode> left_iter = left_branch.iterator(); left_iter.hasNext(); ) {
          TreeNode left = left_iter.next();
          for (Iterator<TreeNode> right_iter = right_branch.iterator(); right_iter.hasNext(); ) {
            TreeNode right = right_iter.next();
            
            TreeNode tree = new TreeNode(0);
            
            // If we're using the last right branch, then this will be the last time this left branch is used and can hence
            // be shallow copied, otherwise the tree will have to be cloned
            tree.left = right_iter.hasNext() ? clone(left) : left;
            
            // If we're using the last left branch, then this will be the last time this right branch is used and can hence
            // be shallow copied, otherwise the tree will have to be cloned
            tree.right = left_iter.hasNext() ? clone(right) : right;
            
            ret.add(tree);
          }
        }
      }
    }
    return ret;
  }
```
### **Iterative**
```java
  public TreeNode clone(TreeNode tree)  {
    if (null == tree)
    {
      return null;
    }
    
    TreeNode new_tree = new TreeNode(tree.val);
    new_tree.left = clone(tree.left);
    new_tree.right = clone(tree.right);
    return new_tree;
  }
  
  public List<TreeNode> allPossibleFBT(int N) {
    List<TreeNode> ret = new ArrayList<TreeNode>();
    if (N % 2 == 0) {
      return ret;
    } else if (1 == N) {
      ret.add(new TreeNode(0));
      return ret;
    }
    
    // Build up a cache of a all possible FBT for the N - 2 levels
    // these levels will be linked together as a graph and should not
    // be returned
    List<List<TreeNode>> cache = new ArrayList<List<TreeNode>>();
    cache.add(new ArrayList<TreeNode>());
    cache.get(0).add(new TreeNode(0));
    for (int root = 1; root < N / 2; ++root) {
      List<TreeNode> new_root = new ArrayList<TreeNode>();
      for (int left_size = 0; left_size < root; ++left_size) {
        for (TreeNode left : cache.get(left_size)) {
          for (TreeNode right : cache.get(root - left_size - 1)) {
            TreeNode new_tree = new TreeNode(0);
            new_tree.left = left;
            new_tree.right = right;
            new_root.add(new_tree);
          }
        }
      }
      cache.add(new_root);
    }
    
    // Cached values are linked together and must be cloned to be unlinked
    // trees before returning
    for (int root = 0; root < N / 2; ++root) {
      for (TreeNode left : cache.get(root)) {
        for (TreeNode right : cache.get(N / 2 - root - 1)) {
          TreeNode new_tree = new TreeNode(0);
          new_tree.left = clone(left);
          new_tree.right = clone(right);
          ret.add(new_tree);
        }
      }
    }
        
    return ret;
  }
```  
## **c**
### **Iterative**
```c
struct Trees {
  int size;
  struct TreeNode* data;
};

void initialise_trees(struct Trees* trees, int number_trees) {
  trees->size = number_trees;
  trees->data = malloc(number_trees * sizeof(struct TreeNode));
}

void initialise_node(
    struct TreeNode* node,
    struct TreeNode* left,
    struct TreeNode* right) {
  node->val = 0;
  node->left = left;
  node->right = right;
}

/* Given the range [first, last) calculate the total number of FBT that can be made */
int calculate_number_trees(struct Trees* first, struct Trees* last) {
  int ret = 0;
  while (first < --last) {
    ret += (first++)->size * last->size * 2;
  }
  if (first == last) {
    ret += first->size * last->size;
  }
  return ret;
}

struct TreeNode* clone_tree(struct TreeNode* root) { 
  if (!root) {
    return NULL;
  }
    
  struct TreeNode* const ret = malloc(sizeof(struct TreeNode));
  ret->val = root->val;
  ret->left = clone_tree(root->left);
  ret->right = clone_tree(root->right);
  return ret;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
struct TreeNode** allPossibleFBT(int N, int* returnSize){
  if (N % 2 == 0)
  {
    *returnSize = 0;
    return NULL;
  } else if (N == 1) {
    *returnSize = 1;
    struct TreeNode** const ret = malloc(sizeof(struct TreeNode*));
    ret[0] = malloc(sizeof(struct TreeNode));
    initialise_node(ret[0], NULL, NULL);
    return ret;
  }

  /* Cache[n] will hold all the trees that can be made from n * 2 + 1 nodes */
  int number_cache = N / 2;
  struct Trees* const cache = malloc(number_cache * sizeof(struct Trees));
  struct Trees* left_branch;
  struct Trees* right_branch;
  initialise_trees(cache, 1);
  initialise_node(cache[0].data, NULL, NULL);

  /* Build up a cache of all posibilites of N - 2 nodes to build the final 
   * answer from */
  for (int root = 1; root < number_cache; ++root) {
    left_branch = &cache[0];
    right_branch = &cache[root];
    int number_trees = calculate_number_trees(left_branch, right_branch);
    initialise_trees(&cache[root], number_trees);
    
    struct TreeNode* curr = cache[root].data;
    while (cache != right_branch--) {
      for (int left = 0; left < left_branch->size; ++left) {
        for (int right = 0; right < right_branch->size; ++right) {
          initialise_node(curr++, &left_branch->data[left], &right_branch->data[right]);
        }
      }
      ++left_branch;
    }
  }
 
  /* Build the final answer by cloning the interconnected trees */
  left_branch = &cache[0];
  right_branch = &cache[number_cache];
  *returnSize = calculate_number_trees(left_branch, right_branch);
  struct TreeNode** const ret = malloc(*returnSize * sizeof(struct TreeNode*));
  struct TreeNode** curr = ret;
  
  while (cache != right_branch--) {
    for (int left = 0; left < left_branch->size; ++left) {
      for (int right = 0; right < right_branch->size; ++right) {
        *curr = malloc(sizeof(struct TreeNode));
        initialise_node(*(curr++), clone_tree(&left_branch->data[left]), clone_tree(&right_branch->data[right]));
      }
    }
    ++left_branch;
  }

  for (int i = 0; i < number_cache; ++i) {
    free(cache[i].data);
  }
  free(cache);
  
  return ret;
}
```

# **Details**
Similar to [unique binary search trees](https://leetcode.com/problems/unique-binary-search-trees-ii/discuss/167055/c++-recursive-and-iterative-solutions.-Beats-100-and-doesn't-create-Frankenstein-trees) I see a lot of peoples solutions either return a list of strange Frankenstein trees that are _connected_ to each other and sharing branches or just straight up leak memory all over the place.

Frankenstein trees are bad because you have this weird and I dare say unexpected list of trees that are actually linked to each other. The nightmare of deleting these trees is not something I would want to deal with.

Memory leaks are also obviously a bad thing.

My solutions deal with both of these problems in different ways, so I will describe that below and instead focus on the basic idea of my solution.

For starters a full BST must have an odd number of nodes. So any even _N_ is trivial empty return.

For the odd _N_ solution, I felt it is easier to imagine the nodes have actual values from 1 to _N_. To see why, consider the list of node values [1, 2, 3, 4, 5], if we pick a root node of _3_, then we can see things break down quickly. Because the left branch must be build from [1, 2] while the right must use [4, 5], but neither branch can be a full BST because there is an even number of nodes to use. If you follow this logic you can see that root node must be even, and further that each branch's root must also be even. Infact all internal nodes must be even, while all leaf nodes must be odd.

With this knowledge, we can see that all our example trees must either have _2_ or _4_ as the root node. Starting with _2_, that makes the left branch easy as there is only the _1_ node, while the right branch must use [3, 4, 5]. [3, 4, 5] is also easy since we know the _4_ must be the internal, right root, node. It follows that we can solve for _N_ if we know all the possible trees using from _1_ to _N - 2_ nodes. Hence the answer to _N_ can be built up by calculating the answers for all odd numbers less than _N_. We have something we can recurse on.

## Recursive solutions
Rather that build up from 1 to _N_, to recurse we build up an answer by working backwards from _N_ to 1. The problem is that for any root there could be multiple ways of filling out the left branch and multiple ways of filling out the right branch, with each selection being a new unique tree. For example, if _N_ is 11 and we've chosen the middle node as our root, there are 5 nodes to use on each branch. 5 nodes can form a full BST in two ways. We therefore have 2 possible left branches and 2 possible right branches or a total of 2 x 2 = 4 posibilites.

Each left branch posibility is used twice (one for each right branch choice), but we only have a single copy of it, so we can either doubly linked to it and end up with Frankenstein trees or clone it. The trick is that we don't want always clone it, because we will end up hanging copy that is never deallocated and hence memory leak. The solution is to clone for each use except the last one wheer we will actually use it.

## Iterative solutions
When doing an iterative solution, I used a cache to hold all the trees for each valid _N_ value up to our target _N_. Since the cache was internal I actually embraced the Frankenstein linking, creating a new root and linking the left and right branches to existing trees.

When it comes time to actually create the return, I cloned the patterns generated and stored in the cache. Thus the returned trees will not be linked together.

**If this helps, please don't forget to leave a thumbs up**

## Why is the clone required? ##

There seems to a bit of confusion as to why I consider the clone required to be a valid solution, even if Leetcode accepts solutions without the clone.

I wrote a simple cpp example to show why reusing branches results in unexpected results. It shows that modifying one of the returned trees has an unexpected result of modifying another tree. **The returned trees are not independent of each other.**

```cpp
// Return 2 TreeNode's with different values
std::vector<TreeNode*> get_leaves() {
  static int val = 1;
  return {new TreeNode(val++), new TreeNode(val++)};
}

std::vector<TreeNode*> get_trees() {
  auto left = get_leaves();
  auto right = get_leaves();
  std::vector<TreeNode*> ret;
  for (TreeNode* l : left) {
    for (TreeNode* r : right) {
      ret.emplace_back(new TreeNode(0, l, r));
    }
  }
  return ret;
}

int main()
{
  auto trees = get_trees();
  trees[0]->left->val = 100;   // Update just 1 node of one tree
  for (TreeNode* t : trees) {
    std::cout << "root->val=" << t->val << ", left->val=" << t->left->val << ", right->val=" << t->right->val << std::endl;
  }
  return 0;
}
```

The output of which will be;
```
root->val=0, left->val=100, right->val=3
root->val=0, left->val=100, right->val=4
root->val=0, left->val=2, right->val=3
root->val=0, left->val=2, right->val=4
```

This also shows that the 4 returned trees all share the exact same children, not just value, but actualy memory location. As an added bonus for c and c++, safely and correctly freeing the memory allocted in he array of trees is non trivial and could be a Leetcode question in itself.

**This is not what a caller of the fuction would expect**