# Segment tree solution, just another idea, O(N*logN) Solution

**Author:** xiaohui5319
**Votes:** 187
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/28941/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/28941/)

---

Inspired by this solution:
http://www.geeksforgeeks.org/largest-rectangular-area-in-a-histogram-set-1/

Just wanna to provide another idea of how to solve this question in O(N*logN) theoretically, 40 ms solution:

    // Largest Rectangle in Histogram
    // Stack solution, O(NlogN) solution
    
    class SegTreeNode {
    public:
      int start;
      int end;
      int min;
      SegTreeNode *left;
      SegTreeNode *right;
      SegTreeNode(int start, int end) {
        this->start = start;
        this->end = end;
        left = right = NULL;
      }
    };
    
    class Solution {
    public:
      int largestRectangleArea(vector<int>& heights) {
        if (heights.size() == 0) return 0;
        // first build a segment tree
        SegTreeNode *root = buildSegmentTree(heights, 0, heights.size() - 1);
        // next calculate the maximum area recursively
        return calculateMax(heights, root, 0, heights.size() - 1);
      }
      
      int calculateMax(vector<int>& heights, SegTreeNode* root, int start, int end) {
        if (start > end) {
          return -1;
        }
        if (start == end) {
          return heights[start];
        }
        int minIndex = query(root, heights, start, end);
        int leftMax = calculateMax(heights, root, start, minIndex - 1);
        int rightMax = calculateMax(heights, root, minIndex + 1, end);
        int minMax = heights[minIndex] * (end - start + 1);
        return max( max(leftMax, rightMax), minMax );
      }
      
      SegTreeNode *buildSegmentTree(vector<int>& heights, int start, int end) {
        if (start > end) return NULL;
        SegTreeNode *root = new SegTreeNode(start, end);
        if (start == end) {
            root->min = start;
          return root;
        } else {
          int middle = (start + end) / 2;
          root->left = buildSegmentTree(heights, start, middle);
          root->right = buildSegmentTree(heights, middle + 1, end);
          root->min = heights[root->left->min] < heights[root->right->min] ? root->left->min : root->right->min;
          return root;
        }
      }
      
      int query(SegTreeNode *root, vector<int>& heights, int start, int end) {
        if (root == NULL || end < root->start || start > root->end) return -1;
        if (start <= root->start && end >= root->end) {
          return root->min;
        }
        int leftMin = query(root->left, heights, start, end);
        int rightMin = query(root->right, heights, start, end);
        if (leftMin == -1) return rightMin;
        if (rightMin == -1) return leftMin;
        return heights[leftMin] < heights[rightMin] ? leftMin : rightMin;
      }
    };