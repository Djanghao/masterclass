# Explanation and code | Sorting + Trie | C++

**Author:** annashekhawat
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/988312/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/988312/)

---


1. I first sort the queries array on the number we need to do comparisons with, this time saving the original indices.
2. Then I sort the nums array. There's no need to save indices this time because they don't matter.
3. Then I iterate through the queries. At each step (query = (num, lim)), i add any number from the nums array to a trie if that number hasn't been added yet and it is less than or equal to the limit allowed for this query (indicated by the variable lim).
4. Each trie node contains two children - the child z is non-null if a zero bit exists at this position, and the child o is non-null if a one bit exists at this position. The root of the trie structure represents the 31st bit (i.e. the most significant bit in the 32 bit representation of any number). The direct children of the root node represent the 30th bit, and so on until the 0th bit.
5. Then for a query, we want to maximise the num's xor with any number that has already been inserted in the trie. For this we start by comparing the most significant bit (31st) and go downwards in the trie. At any step, if the num's bit is 0, then we first want to look for a one-bit in the trie. If it exists, great! Otherwise, we can compromise and rest assured that zero-bit must exist for this position. Similarly,  if the num's bit is 1, then we first look for zero-bit in the trie. This is a greedy way to get the maximum xor possible.

Time complexity:
Sorting: O(nlogn + mlogm)
Trie insertion and querying: O(n + m) because the trie's depth is fixed to 32.
Overall: O(nlogn + mlogm) dominated by the sorting step

```
struct Trie {
    Trie *z;
    Trie *o;
    Trie() {
        z = NULL;
        o = NULL;
    }
};

class Solution {
public:
    
    Trie* insert(Trie* node, int k, int num) {
        if(node == NULL) {
            node = new Trie();
        }
        if(k < 0) return node;
        if(((num >> k) & 1) == 1) {
            node -> o = insert(node->o, k - 1, num);
        }
        else {
            node -> z = insert(node->z, k - 1, num);
        }
        return node;
    }
    
    int getmax(Trie* node, int k, int num) {
        if(k < 0) return 0;
        int res = 0;
        bool bit = ((num >> k) & 1);
        if(bit == 1) {
            if(node->z) {
                res = pow(2, k) + getmax(node->z, k - 1, num);
            }
            else {
                res = getmax(node->o, k - 1, num);
            }
        }
        else {
            if(node->o) {
                res = pow(2, k) + getmax(node->o, k - 1, num);
            }
            else {
                res = getmax(node->z, k - 1, num);
            }
        }
        return res;
    }
    
    vector<int> maximizeXor(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        int m = queries.size();
        vector<int> ans(m, -1);
        vector<pair<pair<int, int>, int> > q;
        for(int i = 0; i < m; i++) {
            q.push_back({{queries[i][0], queries[i][1]}, i});
        }
        sort(q.begin(), q.end(), [](pair<pair<int, int>, int> a, pair<pair<int, int>, int> b) {
            return a.first.second < b.first.second;
        });
        
        sort(nums.begin(), nums.end());
        
        int j = 0;
        
        Trie *root = new Trie();
        
        for(int i = 0; i < m; i++) {
            pair<pair<int, int>, int> p = q[i];
            int num = p.first.first;
            int lim = p.first.second;
            int idx = p.second;
            
            while(j < n && nums[j] <= lim) {
                root = insert(root, 31, nums[j]);
                j++;
            }
            
            if(j > 0) {
                ans[idx] = getmax(root, 31, num);
            }
        }
        
        return ans;
    }
};
```