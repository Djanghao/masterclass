# C++, Clean Backtracking, 0 ms, beats 100%, Easy-to-understand

**Author:** lllllll2
**Votes:** 40
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/842733/](https://leetcode.com/problems/combination-sum-iii/solutions/842733/)

---

**Explanation**
The key to this question is backtracking, that is, generate possible combinations and see which one fulfills the conditions.
We choose a number for 1,2..kth position in ascending order, and for each position, we only iterate through [current_number, 9].

**Code**
```
class Solution {
public:
    vector<vector<int>> ans;
    
    void f(vector<int>& cur, int cnum, int k, int n) {
        if(n < 0 || cur.size() > k) return;
        if(n == 0 && cur.size() == k) {
            ans.push_back(cur);
            return;
        }
        
        for(int i=cnum; i<=9; ++i) {
            cur.push_back(i);
            f(cur, i+1, k, n-i);
            cur.pop_back();
        }
    }
    
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<int> cur;
        f(cur, 1, k, n);
        return ans;
    }
};
```

If you have any doubts, feel free to comment. If you like the solution and the explanation, please **Upvote** to help others!
Have a great day!