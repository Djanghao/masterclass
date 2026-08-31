# ✅ Explained step by step | Beats 100% | ✅ Working 26.10.2024

**Author:** Piotr_Maminski
**Votes:** 75
**Link:** [https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/5968836/](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/5968836/)

---

```python3 []
class Solution:
    def treeQueries(self, root: Optional[TreeNode], queries: List[int]) -> List[int]:
        # Initialize arrays to store heights and node information
        heights = [0] * 50000  # Heights of leaf nodes
        d = [0] * 100001      # Depth of each node
        l = [0] * 100001      # Left index for each node
        r = [0] * 100001      # Right index for each node
        len_leaves = 0        # Counter for leaf nodes
        
        def search(p: TreeNode, h: int) -> None:
            nonlocal len_leaves
            d[p.val] = h  # Store current node's depth
            
            # If leaf node found
            if not p.left and not p.right:
                heights[len_leaves] = h    # Store leaf height
                l[p.val] = r[p.val] = len_leaves  # Both indices same for leaf
                len_leaves += 1
                return
            
            l[p.val] = len_leaves  # Store left index for current node
            
            # Recursively process left and right subtrees
            if p.left:
                search(p.left, h + 1)
            if p.right:
                search(p.right, h + 1)
                
            r[p.val] = len_leaves - 1  # Store right index for current node
        
        # Process the tree starting from root
        search(root, 0)
        
        n = len_leaves  # Total number of leaf nodes
        maxl = [0] * n  # Max heights from left
        maxr = [0] * n  # Max heights from right
        
        # Build prefix and suffix maximum arrays
        for i in range(1, n):
            maxl[i] = max(maxl[i-1], heights[i-1])  # Max height from left
            maxr[n-i-1] = max(maxr[n-i], heights[n-i])  # Max height from right
        
        ret = []  # Result list
        
        # Process each query
        for query in queries:
            # Find maximum height excluding current node's subtree
            maxxl = maxl[l[query]]  # Max height to the left
            maxxr = maxr[r[query]]  # Max height to the right
            # Result is max of (max left height, max right height, current depth-1)
            ret.append(max(max(maxxl, maxxr), d[query]-1))
        
        return ret
```
```cpp []
class Solution {
public:
    // Array to store the maximum height of the tree after removing each node
    int maxHeightAfterRemoval[100001];
    int currentMaxHeight = 0;

    vector<int> treeQueries(TreeNode* root, vector<int>& queries) {
        traverseLeftToRight(root, 0);
        currentMaxHeight = 0;  // Reset for the second traversal
        traverseRightToLeft(root, 0);

        // Process queries and build the result vector
        int queryCount = queries.size();
        vector<int> queryResults(queryCount);
        for (int i = 0; i < queryCount; i++) {
            queryResults[i] = maxHeightAfterRemoval[queries[i]];
        }

        return queryResults;
    }

private:
    // Left to right traversal
    void traverseLeftToRight(TreeNode* node, int currentHeight) {
        if (node == nullptr) return;

        // Store the maximum height if this node were removed
        maxHeightAfterRemoval[node->val] = currentMaxHeight;

        // Update the current maximum height
        currentMaxHeight = max(currentMaxHeight, currentHeight);

        // Traverse left subtree first, then right
        traverseLeftToRight(node->left, currentHeight + 1);
        traverseLeftToRight(node->right, currentHeight + 1);
    }

    // Right to left traversal
    void traverseRightToLeft(TreeNode* node, int currentHeight) {
        if (node == nullptr) return;

        // Update the maximum height if this node were removed
        maxHeightAfterRemoval[node->val] =
            max(maxHeightAfterRemoval[node->val], currentMaxHeight);

        // Update the current maximum height
        currentMaxHeight = max(currentHeight, currentMaxHeight);

        // Traverse right subtree first, then left
        traverseRightToLeft(node->right, currentHeight + 1);
        traverseRightToLeft(node->left, currentHeight + 1);
    }
};
```
```java []
class Solution {
    // Arrays to store information about the tree
    private int[] heights;  // Stores heights of leaf nodes in order of traversal
    private int[] d;        // Stores depth/height of each node by its value
    private int[] l;        // Stores left boundary index for each node value
    private int[] r;        // Stores right boundary index for each node value
    private int lenLeaves;  // Counts number of leaf nodes encountered
    
    public int[] treeQueries(TreeNode root, int[] queries) {
        // Initialize arrays with sufficient size
        heights = new int[50000];    // For storing leaf heights
        d = new int[100001];         // For storing node depths
        l = new int[100001];         // For storing left boundaries
        r = new int[100001];         // For storing right boundaries
        lenLeaves = 0;               // Initialize leaf counter
        
        // DFS to process the tree and fill arrays
        search(root, 0);
        
        int n = lenLeaves;
        // Arrays to store maximum heights from left and right
        int[] maxl = new int[n];     // Prefix maximums
        int[] maxr = new int[n];     // Suffix maximums
        
        // Build prefix maximum array (left to right)
        // At each position i, stores max height of all leaves to the left
        for (int i = 1; i < n; i++) {
            maxl[i] = Math.max(maxl[i-1], heights[i-1]);
        }
        
        // Build suffix maximum array (right to left)
        // At each position i, stores max height of all leaves to the right
        for (int i = n-2; i >= 0; i--) {
            maxr[i] = Math.max(maxr[i+1], heights[i+1]);
        }
        
        // Process each query
        int[] ret = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int query = queries[i];
            // Find maximum height outside the range of current node
            int maxxl = maxl[l[query]];          // Max height to the left
            int maxxr = maxr[r[query]];          // Max height to the right
            // Result is maximum of left max, right max, and parent height
            ret[i] = Math.max(Math.max(maxxl, maxxr), d[query]-1);
        }
        
        return ret;
    }
    
    // DFS to process the tree
    private void search(TreeNode p, int h) {
        d[p.val] = h;    // Store current node's height
        
        // If current node is a leaf
        if (p.left == null && p.right == null) {
            heights[lenLeaves] = h;   // Store leaf height
            l[p.val] = r[p.val] = lenLeaves;  // Both boundaries point to same index
            lenLeaves++;              // Increment leaf counter
            return;
        }
        
        l[p.val] = lenLeaves;        // Store left boundary
        
        // Recursively process left and right subtrees
        if (p.left != null) {
            search(p.left, h + 1);
        }
        if (p.right != null) {
            search(p.right, h + 1);
        }
        
        r[p.val] = lenLeaves - 1;    // Store right boundary
    }
}
```
```csharp []
public class Solution {
    // Array to store heights of leaf nodes
    private int[] heights;
    
    // Array to store depth of each node
    private int[] d;
    
    // Arrays to store left and right boundaries of subtrees in the leaf array
    private int[] l;
    private int[] r;
    
    // Counter for number of leaf nodes
    private int lenLeaves;
    
    public int[] TreeQueries(TreeNode root, int[] queries) {
        // Initialize arrays with sufficient size
        // heights stores leaf node heights
        heights = new int[50000];
        // d stores depth of each node (indexed by node value)
        d = new int[100001];
        // l,r store left and right boundaries of subtrees in leaf array
        l = new int[100001];
        r = new int[100001];
        lenLeaves = 0;
        
        // DFS to process the tree and fill arrays
        Search(root, 0);
        
        int n = lenLeaves;
        // Arrays to store maximum heights from left and right
        int[] maxl = new int[n];
        int[] maxr = new int[n];
        
        // Build prefix and suffix maximum arrays
        // maxl[i] stores maximum height from 0 to i-1
        // maxr[i] stores maximum height from i+1 to n-1
        for (int i = 1; i < n; i++) {
            maxl[i] = Math.Max(maxl[i-1], heights[i-1]);
            maxr[n-i-1] = Math.Max(maxr[n-i], heights[n-i]);
        }
        
        var ret = new List<int>();
        
        // Process each query
        foreach (int query in queries) {
            // Get maximum height to the left of current node's subtree
            int maxxl = maxl[l[query]];
            // Get maximum height to the right of current node's subtree
            int maxxr = maxr[r[query]];
            // Result is max of:
            // 1. Maximum height to the left of subtree
            // 2. Maximum height to the right of subtree
            // 3. Depth of current node - 1 (parent's depth)
            ret.Add(Math.Max(Math.Max(maxxl, maxxr), d[query]-1));
        }
        
        return ret.ToArray();
    }
    
    private void Search(TreeNode p, int h) {
        // Store current node's depth
        d[p.val] = h;
        
        // If leaf node, store its height and boundaries
        if (p.left == null && p.right == null) {
            heights[lenLeaves] = h;
            // For leaf nodes, left and right boundaries are same
            l[p.val] = r[p.val] = lenLeaves;
            lenLeaves++;
            return;
        }
        
        // Store left boundary of current subtree
        l[p.val] = lenLeaves;
        
        // Recursively process left and right children
        if (p.left != null) {
            Search(p.left, h + 1);
        }
        if (p.right != null) {
            Search(p.right, h + 1);
        }
        
        // Store right boundary of current subtree
        r[p.val] = lenLeaves - 1;
    }
}
```
```golang []
type Solution struct {
    maxHeightAfterRemoval [100001]int
    currentMaxHeight      int
}

func treeQueries(root *TreeNode, queries []int) []int {
    sol := &Solution{}
    
    // First traversal from left to right
    sol.traverseLeftToRight(root, 0)
    
    // Reset current max height for second traversal
    sol.currentMaxHeight = 0
    sol.traverseRightToLeft(root, 0)
    
    // Process queries and build result
    queryResults := make([]int, len(queries))
    for i, query := range queries {
        queryResults[i] = sol.maxHeightAfterRemoval[query]
    }
    
    return queryResults
}

func (s *Solution) traverseLeftToRight(node *TreeNode, currentHeight int) {
    if node == nil {
        return
    }
    
    // Store the maximum height if this node were removed
    s.maxHeightAfterRemoval[node.Val] = s.currentMaxHeight
    
    // Update current maximum height
    s.currentMaxHeight = max(s.currentMaxHeight, currentHeight)
    
    // Traverse left subtree first, then right
    s.traverseLeftToRight(node.Left, currentHeight + 1)
    s.traverseLeftToRight(node.Right, currentHeight + 1)
}

func (s *Solution) traverseRightToLeft(node *TreeNode, currentHeight int) {
    if node == nil {
        return
    }
    
    // Update maximum height if this node were removed
    s.maxHeightAfterRemoval[node.Val] = max(
        s.maxHeightAfterRemoval[node.Val],
        s.currentMaxHeight,
    )
    
    // Update current maximum height
    s.currentMaxHeight = max(currentHeight, s.currentMaxHeight)
    
    // Traverse right subtree first, then left
    s.traverseRightToLeft(node.Right, currentHeight + 1)
    s.traverseRightToLeft(node.Left, currentHeight + 1)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```swift []
class Solution {
    private var maxHeightAfterRemoval = Array(repeating: 0, count: 100001)
    private var currentMaxHeight = 0
    
    func treeQueries(_ root: TreeNode?, _ queries: [Int]) -> [Int] {
        traverseLeftToRight(root, 0)
        currentMaxHeight = 0  // Reset for second traversal
        traverseRightToLeft(root, 0)
        
        // Process queries and build result array
        return queries.map { maxHeightAfterRemoval[$0] }
    }
    
    private func traverseLeftToRight(_ node: TreeNode?, _ currentHeight: Int) {
        guard let node = node else { return }
        
        // Store maximum height if this node were removed
        maxHeightAfterRemoval[node.val] = currentMaxHeight
        
        // Update current maximum height
        currentMaxHeight = max(currentMaxHeight, currentHeight)
        
        // Traverse left subtree first, then right
        traverseLeftToRight(node.left, currentHeight + 1)
        traverseLeftToRight(node.right, currentHeight + 1)
    }
    
    private func traverseRightToLeft(_ node: TreeNode?, _ currentHeight: Int) {
        guard let node = node else { return }
        
        // Update maximum height if this node were removed
        maxHeightAfterRemoval[node.val] = max(
            maxHeightAfterRemoval[node.val],
            currentMaxHeight
        )
        
        // Update current maximum height
        currentMaxHeight = max(currentHeight, currentMaxHeight)
        
        // Traverse right subtree first, then left
        traverseRightToLeft(node.right, currentHeight + 1)
        traverseRightToLeft(node.left, currentHeight + 1)
    }
}
```
```javascript [JS]
// JavaScript


// Function to process tree queries that finds max height excluding certain nodes
var treeQueries = function(root, queries) {
    // Array to store heights of leaf nodes
    const heights = new Array(50000).fill(0);
    
    // Array to store depth of each node (indexed by node value)
    const d = new Array(100001).fill(0);
    
    // Arrays to store left and right boundaries for each node's subtree
    const l = new Array(100001).fill(0);
    const r = new Array(100001).fill(0);
    
    // Counter for number of leaf nodes
    let len = 0;
    
    // DFS function to process the tree
    function search(p, h) {
        // Store current node's depth
        d[p.val] = h;
        
        // If current node is a leaf node
        if (!p.left && !p.right) {
            heights[len] = h;  // Store its height
            l[p.val] = r[p.val] = len;  // Set left and right boundaries
            len++;  // Increment leaf counter
            return;
        }
        
        // Store left boundary for current node
        l[p.val] = len;
        
        // Recursively process left and right children
        if (p.left) search(p.left, h + 1);
        if (p.right) search(p.right, h + 1);
        
        // Store right boundary for current node
        r[p.val] = len - 1;
    }
    
    // Start DFS from root
    search(root, 0);
    
    const n = len;
    // Arrays to store maximum heights from left and right
    const maxl = new Array(n).fill(0);
    const maxr = new Array(n).fill(0);
    
    // Build prefix and suffix maximum arrays
    for (let i = 1; i < n; i++) {
        maxl[i] = Math.max(maxl[i-1], heights[i-1]);  // Left to right max
        maxr[n-i-1] = Math.max(maxr[n-i], heights[n-i]);  // Right to left max
    }
    
    // Array to store results
    const ret = [];
    const k = queries.length;
    
    // Process each query
    for (let i = 0; i < k; i++) {
        // Find maximum height excluding current node's subtree
        const maxxl = maxl[l[queries[i]]];  // Max height to the left
        const maxxr = maxr[r[queries[i]]];  // Max height to the right
        // Result is max of left max, right max, and node's depth-1
        ret.push(Math.max(Math.max(maxxl, maxxr), d[queries[i]] - 1));
    }
    
    return ret;
};
```
```typescript [TS]
// TypeScript


// Function that processes queries about maximum heights in a binary tree excluding specific nodes
function treeQueries(root: TreeNode | null, queries: number[]): number[] {
    // Arrays to store various tree-related information
    const heights: number[] = new Array(50000).fill(0);  // Stores heights of leaf nodes
    const d: number[] = new Array(100001).fill(0);       // Stores depth of each node
    const l: number[] = new Array(100001).fill(0);       // Stores left boundary index for each node
    const r: number[] = new Array(100001).fill(0);       // Stores right boundary index for each node
    let len: number = 0;                                 // Counter for leaf nodes
    
    // DFS function to process the tree
    function search(p: TreeNode, h: number): void {
        // Store current node's depth
        d[p.val] = h;
        
        // If current node is a leaf node
        if (!p.left && !p.right) {
            heights[len] = h;           // Store its height
            l[p.val] = r[p.val] = len;  // Set left and right boundaries to current index
            len++;                      // Increment leaf counter
            return;
        }
        
        // Store left boundary for current node
        l[p.val] = len;
        
        // Recursively process left and right subtrees
        if (p.left) search(p.left, h + 1);
        if (p.right) search(p.right, h + 1);
        
        // Store right boundary for current node
        r[p.val] = len - 1;
    }
    
    // Handle empty tree case
    if (!root) return [];
    search(root, 0);
    
    const n: number = len;
    // Arrays to store maximum heights from left and right
    const maxl: number[] = new Array(n).fill(0);
    const maxr: number[] = new Array(n).fill(0);
    
    // Compute maximum heights from left to right and right to left
    for (let i = 1; i < n; i++) {
        maxl[i] = Math.max(maxl[i-1], heights[i-1]);     // Left to right maximums
        maxr[n-i-1] = Math.max(maxr[n-i], heights[n-i]); // Right to left maximums
    }
    
    // Process queries
    const ret: number[] = [];
    const k: number = queries.length;
    
    for (let i = 0; i < k; i++) {
        // For each query, find maximum height possible when removing the queried node
        const maxxl: number = maxl[l[queries[i]]];        // Max height to the left
        const maxxr: number = maxr[r[queries[i]]];        // Max height to the right
        // Result is maximum of:
        // 1. Maximum height to the left of node
        // 2. Maximum height to the right of node
        // 3. Node's depth minus 1 (representing parent's path)
        ret.push(Math.max(Math.max(maxxl, maxxr), d[queries[i]] - 1));
    }
    
    return ret;
}
```
```rust []
use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn tree_queries(root: Option<Rc<RefCell<TreeNode>>>, queries: Vec<i32>) -> Vec<i32> {
        // Initialize storage vectors
        let mut heights = vec![0; 50000];  // Stores heights of leaf nodes
        let mut len = 0;                   // Tracks number of leaf nodes
        let mut d = vec![0; 100001];       // Stores depth of each node
        let mut l = vec![0; 100001];       // Stores left boundary index for each node
        let mut r = vec![0; 100001];       // Stores right boundary index for each node

        // Depth-First Search implementation
        fn search(
            node: Option<Rc<RefCell<TreeNode>>>,
            h: i32,                        // Current height in tree
            heights: &mut Vec<i32>,        // Mutable reference to heights vector
            len: &mut usize,               // Mutable reference to length counter
            d: &mut Vec<i32>,              // Mutable reference to depths vector
            l: &mut Vec<i32>,              // Mutable reference to left boundaries
            r: &mut Vec<i32>,              // Mutable reference to right boundaries
        ) {
            if let Some(n) = node {
                let node = n.borrow();
                let val = node.val as usize;
                d[val] = h;                // Record current node's depth

                // Handle leaf node case
                if node.left.is_none() && node.right.is_none() {
                    heights[*len] = h;      // Store leaf height
                    l[val] = *len as i32;   // Set left boundary
                    r[val] = *len as i32;   // Set right boundary
                    *len += 1;              // Increment leaf counter
                    return;
                }

                l[val] = *len as i32;      // Set left boundary for internal node

                // Recursively process left and right subtrees
                search(node.left.clone(), h + 1, heights, len, d, l, r);
                search(node.right.clone(), h + 1, heights, len, d, l, r);

                r[val] = (*len - 1) as i32; // Set right boundary for internal node
            }
        }

        // Process the tree starting from root
        search(
            root,
            0,
            &mut heights,
            &mut len,
            &mut d,
            &mut l,
            &mut r,
        );

        let n = len;
        // Arrays to store maximum heights from left and right
        let mut maxl = vec![0; n];
        let mut maxr = vec![0; n];

        // Build prefix (left) and suffix (right) maximum arrays
        for i in 1..n {
            maxl[i] = maxl[i - 1].max(heights[i - 1]);    // Maximum height from left
            maxr[n - i - 1] = maxr[n - i].max(heights[n - i]); // Maximum height from right
        }

        // Process each query and build result vector
        queries
            .iter()
            .map(|&q| {
                let q = q as usize;
                let maxxl = maxl[l[q] as usize];          // Max height to the left
                let maxxr = maxr[r[q] as usize];          // Max height to the right
                maxxl.max(maxxr).max(d[q] - 1)            // Take maximum of left, right, and depth-1
            })
            .collect()                                     // Collect results into vector
    }
}
```
```ruby []
def tree_queries(root, queries)
    # Initialize arrays to store tree information
    # @heights: stores heights of leaf nodes
    # @len: tracks number of leaf nodes
    # @d: stores depth of each node
    # @l, @r: store left and right indices for each node's subtree range
    @heights = Array.new(50000, 0)
    @len = 0
    @d = Array.new(100001, 0)
    @l = Array.new(100001, 0)
    @r = Array.new(100001, 0)
    
    # Process the tree using DFS
    search(root, 0)
    
    n = @len  # Total number of leaf nodes
    # Arrays to store maximum heights from left and right perspectives
    maxl = Array.new(n, 0)
    maxr = Array.new(n, 0)
    
    # Build prefix and suffix maximum arrays
    (1...n).each do |i|
        # maxl[i] stores the maximum height of leaves to the left of index i
        maxl[i] = [maxl[i-1], @heights[i-1]].max
        # maxr[n-i-1] stores the maximum height of leaves to the right of index n-i-1
        maxr[n-i-1] = [maxr[n-i], @heights[n-i]].max
    end
    
    # Process each query
    ret = []
    queries.each do |query|
        # Find maximum height excluding current node's subtree
        maxxl = maxl[@l[query]]  # Max height to the left of subtree
        maxxr = maxr[@r[query]]  # Max height to the right of subtree
        # Result is maximum of: left max, right max, or depth-1
        ret.push([maxxl, maxxr, @d[query]-1].max)
    end
    
    ret
end

# DFS helper method to process the tree structure
def search(p, h)
    @d[p.val] = h  # Store current node's depth
    
    # If leaf node found
    if !p.left && !p.right
        @heights[@len] = h  # Store leaf height
        @l[p.val] = @r[p.val] = @len  # Mark leaf node range
        @len += 1
        return
    end
    
    @l[p.val] = @len  # Store left boundary of current subtree
    
    # Recursively process left and right children
    search(p.left, h + 1) if p.left
    search(p.right, h + 1) if p.right
    
    @r[p.val] = @len - 1  # Store right boundary of current subtree
end
```
### Without comments
```python3 []
class Solution:
    def treeQueries(self, root: Optional[TreeNode], queries: List[int]) -> List[int]:
        heights = [0] * 50000
        d = [0] * 100001
        l = [0] * 100001
        r = [0] * 100001
        len_leaves = 0
        
        def search(p: TreeNode, h: int) -> None:
            nonlocal len_leaves
            d[p.val] = h
            
            if not p.left and not p.right:
                heights[len_leaves] = h
                l[p.val] = r[p.val] = len_leaves
                len_leaves += 1
                return
            
            l[p.val] = len_leaves
            
            if p.left:
                search(p.left, h + 1)
            if p.right:
                search(p.right, h + 1)
                
            r[p.val] = len_leaves - 1
        
        search(root, 0)
        
        n = len_leaves
        maxl = [0] * n
        maxr = [0] * n
        
        for i in range(1, n):
            maxl[i] = max(maxl[i-1], heights[i-1])
            maxr[n-i-1] = max(maxr[n-i], heights[n-i])
        
        ret = []
        
        for query in queries:
            maxxl = maxl[l[query]]
            maxxr = maxr[r[query]]
            ret.append(max(max(maxxl, maxxr), d[query]-1))
        
        return ret
```
```cpp []
class Solution {
public:
    int maxHeightAfterRemoval[100001];
    int currentMaxHeight = 0;

    vector<int> treeQueries(TreeNode* root, vector<int>& queries) {
        traverseLeftToRight(root, 0);
        currentMaxHeight = 0;
        traverseRightToLeft(root, 0);

        int queryCount = queries.size();
        vector<int> queryResults(queryCount);
        for (int i = 0; i < queryCount; i++) {
            queryResults[i] = maxHeightAfterRemoval[queries[i]];
        }

        return queryResults;
    }

private:
    void traverseLeftToRight(TreeNode* node, int currentHeight) {
        if (node == nullptr) return;

        maxHeightAfterRemoval[node->val] = currentMaxHeight;
        currentMaxHeight = max(currentMaxHeight, currentHeight);

        traverseLeftToRight(node->left, currentHeight + 1);
        traverseLeftToRight(node->right, currentHeight + 1);
    }

    void traverseRightToLeft(TreeNode* node, int currentHeight) {
        if (node == nullptr) return;

        maxHeightAfterRemoval[node->val] = 
            max(maxHeightAfterRemoval[node->val], currentMaxHeight);
        currentMaxHeight = max(currentHeight, currentMaxHeight);

        traverseRightToLeft(node->right, currentHeight + 1);
        traverseRightToLeft(node->left, currentHeight + 1);
    }
};
```
```java []
class Solution {
    private int[] heights;
    private int[] d;
    private int[] l;
    private int[] r;
    private int lenLeaves;

    public int[] treeQueries(TreeNode root, int[] queries) {
        heights = new int[50000];
        d = new int[100001];
        l = new int[100001];
        r = new int[100001];
        lenLeaves = 0;

        search(root, 0);

        int n = lenLeaves;
        int[] maxl = new int[n];
        int[] maxr = new int[n];

        for (int i = 1; i < n; i++) {
            maxl[i] = Math.max(maxl[i-1], heights[i-1]);
        }

        for (int i = n-2; i >= 0; i--) {
            maxr[i] = Math.max(maxr[i+1], heights[i+1]);
        }

        int[] ret = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int query = queries[i];
            int maxxl = maxl[l[query]];
            int maxxr = maxr[r[query]];
            ret[i] = Math.max(Math.max(maxxl, maxxr), d[query]-1);
        }

        return ret;
    }

    private void search(TreeNode p, int h) {
        d[p.val] = h;

        if (p.left == null && p.right == null) {
            heights[lenLeaves] = h;
            l[p.val] = r[p.val] = lenLeaves;
            lenLeaves++;
            return;
        }

        l[p.val] = lenLeaves;

        if (p.left != null) {
            search(p.left, h + 1);
        }
        if (p.right != null) {
            search(p.right, h + 1);
        }

        r[p.val] = lenLeaves - 1;
    }
}
```
```csharp []
public class Solution {
    private int[] heights;
    private int[] d;
    private int[] l;
    private int[] r;
    private int lenLeaves;

    public int[] TreeQueries(TreeNode root, int[] queries) {
        heights = new int[50000];
        d = new int[100001];
        l = new int[100001];
        r = new int[100001];
        lenLeaves = 0;

        Search(root, 0);

        int n = lenLeaves;
        int[] maxl = new int[n];
        int[] maxr = new int[n];

        for (int i = 1; i < n; i++) {
            maxl[i] = Math.Max(maxl[i-1], heights[i-1]);
            maxr[n-i-1] = Math.Max(maxr[n-i], heights[n-i]);
        }

        var ret = new List<int>();

        foreach (int query in queries) {
            int maxxl = maxl[l[query]];
            int maxxr = maxr[r[query]];
            ret.Add(Math.Max(Math.Max(maxxl, maxxr), d[query]-1));
        }

        return ret.ToArray();
    }

    private void Search(TreeNode p, int h) {
        d[p.val] = h;

        if (p.left == null && p.right == null) {
            heights[lenLeaves] = h;
            l[p.val] = r[p.val] = lenLeaves;
            lenLeaves++;
            return;
        }

        l[p.val] = lenLeaves;

        if (p.left != null) {
            Search(p.left, h + 1);
        }
        if (p.right != null) {
            Search(p.right, h + 1);
        }

        r[p.val] = lenLeaves - 1;
    }
}
```
```golang []
type Solution struct {
    maxHeightAfterRemoval [100001]int
    currentMaxHeight      int
}

func treeQueries(root *TreeNode, queries []int) []int {
    sol := &Solution{}

    sol.traverseLeftToRight(root, 0)

    sol.currentMaxHeight = 0
    sol.traverseRightToLeft(root, 0)

    queryResults := make([]int, len(queries))
    for i, query := range queries {
        queryResults[i] = sol.maxHeightAfterRemoval[query]
    }

    return queryResults
}

func (s *Solution) traverseLeftToRight(node *TreeNode, currentHeight int) {
    if node == nil {
        return
    }

    s.maxHeightAfterRemoval[node.Val] = s.currentMaxHeight
    s.currentMaxHeight = max(s.currentMaxHeight, currentHeight)

    s.traverseLeftToRight(node.Left, currentHeight + 1)
    s.traverseLeftToRight(node.Right, currentHeight + 1)
}

func (s *Solution) traverseRightToLeft(node *TreeNode, currentHeight int) {
    if node == nil {
        return
    }

    s.maxHeightAfterRemoval[node.Val] = max(
        s.maxHeightAfterRemoval[node.Val],
        s.currentMaxHeight,
    )

    s.currentMaxHeight = max(currentHeight, s.currentMaxHeight)

    s.traverseRightToLeft(node.Right, currentHeight + 1)
    s.traverseRightToLeft(node.Left, currentHeight + 1)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```swift []
class Solution {
    private var maxHeightAfterRemoval = Array(repeating: 0, count: 100001)
    private var currentMaxHeight = 0
    
    func treeQueries(_ root: TreeNode?, _ queries: [Int]) -> [Int] {
        traverseLeftToRight(root, 0)
        currentMaxHeight = 0
        traverseRightToLeft(root, 0)
        
        return queries.map { maxHeightAfterRemoval[$0] }
    }
    
    private func traverseLeftToRight(_ node: TreeNode?, _ currentHeight: Int) {
        guard let node = node else { return }
        
        maxHeightAfterRemoval[node.val] = currentMaxHeight
        currentMaxHeight = max(currentMaxHeight, currentHeight)
        
        traverseLeftToRight(node.left, currentHeight + 1)
        traverseLeftToRight(node.right, currentHeight + 1)
    }
    
    private func traverseRightToLeft(_ node: TreeNode?, _ currentHeight: Int) {
        guard let node = node else { return }
        
        maxHeightAfterRemoval[node.val] = max(
            maxHeightAfterRemoval[node.val],
            currentMaxHeight
        )
        
        currentMaxHeight = max(currentHeight, currentMaxHeight)
        
        traverseRightToLeft(node.right, currentHeight + 1)
        traverseRightToLeft(node.left, currentHeight + 1)
    }
}
```
```javascript [JS]
// JavaScript


var treeQueries = function(root, queries) {
    const heights = new Array(50000).fill(0);
    const d = new Array(100001).fill(0);
    const l = new Array(100001).fill(0);
    const r = new Array(100001).fill(0);
    let len = 0;

    function search(p, h) {
        d[p.val] = h;

        if (!p.left && !p.right) {
            heights[len] = h;
            l[p.val] = r[p.val] = len;
            len++;
            return;
        }

        l[p.val] = len;

        if (p.left) search(p.left, h + 1);
        if (p.right) search(p.right, h + 1);

        r[p.val] = len - 1;
    }

    search(root, 0);

    const n = len;
    const maxl = new Array(n).fill(0);
    const maxr = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        maxl[i] = Math.max(maxl[i-1], heights[i-1]);
        maxr[n-i-1] = Math.max(maxr[n-i], heights[n-i]);
    }

    const ret = [];
    const k = queries.length;

    for (let i = 0; i < k; i++) {
        const maxxl = maxl[l[queries[i]]];
        const maxxr = maxr[r[queries[i]]];
        ret.push(Math.max(Math.max(maxxl, maxxr), d[queries[i]] - 1));
    }

    return ret;
};
```
```typescript [TS]
// TypeScript


function treeQueries(root: TreeNode | null, queries: number[]): number[] {
    const heights: number[] = new Array(50000).fill(0);
    const d: number[] = new Array(100001).fill(0);
    const l: number[] = new Array(100001).fill(0);
    const r: number[] = new Array(100001).fill(0);
    let len: number = 0;

    function search(p: TreeNode, h: number): void {
        d[p.val] = h;

        if (!p.left && !p.right) {
            heights[len] = h;
            l[p.val] = r[p.val] = len;
            len++;
            return;
        }

        l[p.val] = len;

        if (p.left) search(p.left, h + 1);
        if (p.right) search(p.right, h + 1);

        r[p.val] = len - 1;
    }

    if (!root) return [];
    search(root, 0);

    const n: number = len;
    const maxl: number[] = new Array(n).fill(0);
    const maxr: number[] = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        maxl[i] = Math.max(maxl[i-1], heights[i-1]);
        maxr[n-i-1] = Math.max(maxr[n-i], heights[n-i]);
    }

    const ret: number[] = [];
    const k: number = queries.length;

    for (let i = 0; i < k; i++) {
        const maxxl: number = maxl[l[queries[i]]];
        const maxxr: number = maxr[r[queries[i]]];
        ret.push(Math.max(Math.max(maxxl, maxxr), d[queries[i]] - 1));
    }

    return ret;
}
```
```rust []
use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn tree_queries(root: Option<Rc<RefCell<TreeNode>>>, queries: Vec<i32>) -> Vec<i32> {
        let mut heights = vec![0; 50000];
        let mut len = 0;
        let mut d = vec![0; 100001];
        let mut l = vec![0; 100001];
        let mut r = vec![0; 100001];

        fn search(
            node: Option<Rc<RefCell<TreeNode>>>,
            h: i32,
            heights: &mut Vec<i32>,
            len: &mut usize,
            d: &mut Vec<i32>,
            l: &mut Vec<i32>,
            r: &mut Vec<i32>,
        ) {
            if let Some(n) = node {
                let node = n.borrow();
                let val = node.val as usize;
                d[val] = h;

                if node.left.is_none() && node.right.is_none() {
                    heights[*len] = h;
                    l[val] = *len as i32;
                    r[val] = *len as i32;
                    *len += 1;
                    return;
                }

                l[val] = *len as i32;

                search(node.left.clone(), h + 1, heights, len, d, l, r);
                search(node.right.clone(), h + 1, heights, len, d, l, r);

                r[val] = (*len - 1) as i32;
            }
        }

        search(
            root,
            0,
            &mut heights,
            &mut len,
            &mut d,
            &mut l,
            &mut r,
        );

        let n = len;
        let mut maxl = vec![0; n];
        let mut maxr = vec![0; n];

        for i in 1..n {
            maxl[i] = maxl[i - 1].max(heights[i - 1]);
            maxr[n - i - 1] = maxr[n - i].max(heights[n - i]);
        }

        queries
            .iter()
            .map(|&q| {
                let q = q as usize;
                let maxxl = maxl[l[q] as usize];
                let maxxr = maxr[r[q] as usize];
                maxxl.max(maxxr).max(d[q] - 1)
            })
            .collect()
    }
}
```
```ruby []
def tree_queries(root, queries)
    @heights = Array.new(50000, 0)
    @len = 0
    @d = Array.new(100001, 0)
    @l = Array.new(100001, 0)
    @r = Array.new(100001, 0)
    
    search(root, 0)
    
    n = @len
    maxl = Array.new(n, 0)
    maxr = Array.new(n, 0)
    
    (1...n).each do |i|
        maxl[i] = [maxl[i-1], @heights[i-1]].max
        maxr[n-i-1] = [maxr[n-i], @heights[n-i]].max
    end
    
    ret = []
    queries.each do |query|
        maxxl = maxl[@l[query]]
        maxxr = maxr[@r[query]]
        ret.push([maxxl, maxxr, @d[query]-1].max)
    end
    
    ret
end

def search(p, h)
    @d[p.val] = h
    
    if !p.left && !p.right
        @heights[@len] = h
        @l[p.val] = @r[p.val] = @len
        @len += 1
        return
    end
    
    @l[p.val] = @len
    
    search(p.left, h + 1) if p.left
    search(p.right, h + 1) if p.right
    
    @r[p.val] = @len - 1
end


```

![image.png](./images/0.png)

### Complexity 
- Time complexity: O(n)

- Space complexity: O(n)


## Explained step by step

---

1. Data Structure Setup:
```
# Arrays initialization
heights = [0] * 50000  # Store leaf node heights
d = [0] * 100001       # Store depth of each node
l = [0] * 100001       # Store left boundary index
r = [0] * 100001       # Store right boundary index
len_leaves = 0         # Track number of leaf nodes

```

2. Tree Traversal Function:
```
def search(p: TreeNode, h: int):
    d[p.val] = h  # Record node depth
    
    # Handle leaf node
    if not p.left and not p.right:
        heights[len_leaves] = h
        l[p.val] = r[p.val] = len_leaves
        len_leaves += 1
        return
        
    l[p.val] = len_leaves  # Set left boundary
    
    # Traverse children
    if p.left: search(p.left, h + 1)
    if p.right: search(p.right, h + 1)
    
    r[p.val] = len_leaves - 1  # Set right boundary

```

3. Maximum Height Arrays Construction:
```
n = len_leaves
maxl = [0] * n  # Left-to-right maximum heights
maxr = [0] * n  # Right-to-left maximum heights


# Build prefix and suffix maximums
for i in range(1, n):
    maxl[i] = max(maxl[i-1], heights[i-1])
    maxr[n-i-1] = max(maxr[n-i], heights[n-i])
```

4. Query Processing:
```
ret = []
for query in queries:
    # Find max height excluding queried node's subtree
    maxxl = maxl[l[query]]  # Max height to left
    maxxr = maxr[r[query]]  # Max height to right
    ret.append(max(max(maxxl, maxxr), d[query]-1))

```
- The solution uses DFS to process the tree and record node information
- For each node, we track:
    - Its depth
    - Left and right boundaries of its subtree in the leaf sequence
    - Heights of leaf nodes
- We build prefix and suffix maximum arrays to quickly find maximum heights
- For each query:
    - We find maximum height outside the queried node's subtree
    - Compare with (depth-1) to get the final result



---

![image.png](./images/1.png)
![image.png](./images/2.png)
