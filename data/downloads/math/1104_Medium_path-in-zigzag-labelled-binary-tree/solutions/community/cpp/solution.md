# C++ Solution with Explanation || Beats 100% ✔✔

**Author:** mamatva004
**Votes:** 6
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/3263448/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/3263448/)

---

# Approach
1. Simply find the parent of a label as we find the parent of a node in complete binary tree (label/2).
2. Since upper level is in reverse order relative to the current level, therefore correct parent will be different. For example - if parent is 7 in complete binary tree, correct binary tree will be 4 in this case. If parent is 5 then correct parent will be 6.
3. For finding the correct parent of a node we need to subtract incorrect parent from the sum of minimum and maximum value of the previous level (4+7-(14/2)=4).
4. Minimum value in the previous level = 2^(current_height - 1).
5. Maximum value in the previous level = 2^(current_height)-1.
6. Therefore correct parent will be 2^(current_height - 1) + 2^(current_height)-1 + (label/2)
7. Repeat these steps untill we reach the root node.

# Complexity
- Time complexity:
  O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
  O(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> pathInZigZagTree(int label) {
        int height =log2(label);
        vector<int> ans;
        ans.push_back(label);
        while(height){
            int left=pow(2,height-1);
            int right=pow(2,height)-1;
            label=left+right-(label/2);
            ans.push_back(label);
            height--;
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
```