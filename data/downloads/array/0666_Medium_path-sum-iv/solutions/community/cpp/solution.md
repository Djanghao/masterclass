# Simple Traversal | C++ | Beats 100% | O(n) ✅

**Author:** ironlogic2693
**Votes:** 3
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/4740873/](https://leetcode.com/problems/path-sum-iv/solutions/4740873/)

---

# Intuition
We can access the node in the tree based on the first 2 digits i.e. the level and the position of the node.

For a node "32" i.e. level = 3 and postition = 2
the left child of the node will be at level + 1 and position + 1, similarly the right child will be at level + 1 and position + 2;
left = 43 & right = 44.

# Approach
1. Create a hash map of the node index (first two digits) and the value (last digit).
2. Traverse and add sum to the answer once we visit a leaf node.
3. Base case: If the index is not present the map then return.
4. Left child = index + 10 * (lastDigitOfIndex + 1); as lastDigitOfIndex = position of the node at that level. Why `10 *`, because we want to increment the level i.e. the first digit of the index.
5. Right child = index + 10 * (lastDigitOfIndex + 2)
6. If both left and right are not present in the map then its a leaf node, hence add the current sum to the ans.
7. Traverse left and right.


# Complexity
- Time complexity:
        $$O(n)$$
- Space complexity:
        $$O(n)$$

# Code
```
class Solution {
public:
    int getIndex(int n){
        string s = to_string(n);
        return 10 * (s[0]-'0') + s[1]-'0';
    }

    void traverse(unordered_map<int, int>& mp, int &ans, int i, int sum){
        if(mp.find(i) == mp.end()) return;
        int pos = 10 + ((i%10) - 1);
        int l = i+pos;
        int r = i+pos+1;
        if(mp.find(l) == mp.end() && mp.find(r) == mp.end()){
            ans += (sum + mp[i]);
            return;
        }
        sum += mp[i];
        traverse(mp, ans, l, sum);
        traverse(mp, ans, r, sum);
    }

    int pathSum(vector<int>& nums) {
        unordered_map<int, int> mp;
        for(int i: nums){
            int ind = getIndex(i);
            mp[ind] = i % 10;
        }
        int ans = 0;
        traverse(mp, ans, 11, 0);
        return ans;
    }
};
```