# C++ simple solution

**Author:** CodingMission
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2812363/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2812363/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If we are able to get number of swaps required for elements in each level, we can solve it with bfs

# Approach
<!-- Describe your approach to solving the problem. -->
Get elements of each element in array. 
sort the array, put value and index of the sorted value in a map.
For each element in array, check if it's in the correct place, if not swap with correct index value, increase count.
return count

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int minSwaps(vector<int> arr) {
        vector<int> copy = arr;
        sort(copy.begin(), copy.end());
        unordered_map<int, int> mp;
        for (int i = 0; i < arr.size(); i++) mp[copy[i]] = i; 
        int count = 0;
        for (int i = 0; i < arr.size(); i++) {
            while (mp[arr[i]] != i) {
                swap(arr[i], arr[mp[arr[i]]]);
                count++;
            }
        }
        return count;
    }

    vector<int> getArray(vector<TreeNode*> arr) {
        vector<int> res;
        for (int i = 0; i < arr.size(); i++) {
            res.push_back(arr[i] -> val);
        }
        return res;
    }
    int minimumOperations(TreeNode* root) {
        vector<TreeNode*> currentLevel, nextLevel;
        nextLevel.push_back(root);
        int count = 0;
        while (nextLevel.size() > 0) {
            swap(currentLevel, nextLevel);
            nextLevel.clear();

            count += minSwaps(getArray(currentLevel));
            for (int i = 0; i < currentLevel.size(); i++) {
                if (currentLevel[i]->left) nextLevel.push_back(currentLevel[i]->left);
                if (currentLevel[i]->right) nextLevel.push_back(currentLevel[i]->right);
            }
        }
        return count;
    }
};
```