# Simple O(n)

**Author:** zsq007
**Votes:** 1
**Link:** [https://leetcode.com/problems/depth-of-bst-given-insertion-order/solutions/5090610/](https://leetcode.com/problems/depth-of-bst-given-insertion-order/solutions/5090610/)

---

# Intuition & Approach
Inserting the nodes **in reverse**, we use `left` and `right` to track the boundaries of the subtrees/segments that have been inserted. The `height` of the current node `o` is the max of its neighboring subtrees, which are stored in nodes `o-1` and `o+1`. After each insertion, we update the boundary and height info at the leftmost and rightmost nodes of the current subtree.

Note that `left` and `right` are initialized with `left[i-1] = right[i+1] = i`, and the nodes are 1-indexed.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```python3 []
class Solution:
    def maxDepthBST(self, order: List[int]) -> int:
        n = len(order)+1
        left, right, height = list(range(1,n+2)), list(range(-1,n)), [0]*n

        for o in order[::-1]:
            l, r = left[o-1], right[o+1]
            left[r], right[l] = l, r
            height[l] = height[r] = max(height[l], height[r]) + 1
        return height[1]
```
```C++ []
class Solution {
public:
    int maxDepthBST(vector<int>& order) {
        int n = order.size() + 1;
        vector<int> left(n + 1), right(n + 1), height(n + 1, 0);

        for (int i = 1; i < n; i++) {
            left[i - 1] = right[i + 1] = i;
        }
        
        for (int i = order.size() - 1; i >= 0; i--) {
            int o = order[i], l = left[o - 1], r = right[o + 1];
            left[r] = l;
            right[l] = r;
            height[l] = height[r] = max(height[l], height[r]) + 1;
        }
        
        return height[1];
    }
};
```
```java []
class Solution {
    public int maxDepthBST(int[] order) {
        int n = order.length + 1;
        int[] left = new int[n + 1];
        int[] right = new int[n + 1];
        int[] height = new int[n];
        
        for (int i = 1; i < n; i++) {
            left[i - 1] = right[i + 1] = i;
        }
        
        for (int i = order.length - 1; i >= 0; i--) {
            int o = order[i], l = left[o-1], r = right[o+1];
            left[r] = l;
            right[l] = r;
            height[l] = height[r] = Math.max(height[l], height[r]) + 1;
        }
        
        return height[1];
    }
}
```