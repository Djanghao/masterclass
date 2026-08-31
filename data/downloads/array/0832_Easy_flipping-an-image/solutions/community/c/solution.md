# C++ Short and Simple In-Place Solution

**Author:** YehudisK
**Votes:** 44
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/930378/](https://leetcode.com/problems/flipping-an-image/solutions/930378/)

---

```
class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
        for (int i=0; i<A.size(); i++) {
            reverse(A[i].begin(), A[i].end());
            for (int j=0; j<A[i].size(); j++) {
                A[i][j] ^= 0x1;
            }
        }
        return A;
    }
};
```
**Like it? please upvote...**