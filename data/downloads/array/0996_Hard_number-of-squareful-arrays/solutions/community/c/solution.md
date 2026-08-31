# [C++] Simple permutation with backtrack, faster than 100%

**Author:** tianchunh97
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/768947/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/768947/)

---

Similar to problem 47 which generates all unique permutations, except that before pushing new element `A[i]` to temporary vector `curr`, you need to check if `curr[curr.size()-1] + A[i]` is squareful.
```
class Solution {
    int num = 0;
    bool squareful(int x) {
        int r = sqrt(x);
        return r * r == x;
    }
    void permute(vector<int> &curr, const vector<int> &A, vector<bool> &used) {
        if (curr.size() == A.size()) {
            num += 1;
            return;
        }
        for (int i = 0; i < A.size(); i++) {
            if ((i == 0 || used[i-1] || A[i]!=A[i-1]) && !used[i] && (curr.size()==0 || squareful(A[i]+curr[curr.size()-1]))) {
                curr.push_back(A[i]);
                used[i] = 1;
                permute(curr, A, used);
                used[i] = 0;
                curr.pop_back();
            }
        }
        return;
    }

public:
    int numSquarefulPerms(vector<int>& A) {
        vector<int> curr;
        vector<bool> used(A.size(), false);
        sort(A.begin(), A.end());
        permute(curr, A, used);
        return num;
    }
};
```