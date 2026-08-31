# C++ Simple, Short and Clean Solution

**Author:** YehudisK
**Votes:** 3
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/1339130/](https://leetcode.com/problems/random-flip-matrix/solutions/1339130/)

---

```
class Solution {
public:
    Solution(int n_rows, int n_cols) {
        rows = n_rows, cols = n_cols;
    }
    
    vector<int> flip() {
        int random = rand() % (rows*cols);
        
        while (flipped.count(random)) {
            random++;
            random %= (rows*cols);
        }
        
        flipped.insert(random);
        return {random / cols, random % cols};
    }
    
    void reset() {
        flipped = {};
    }
    
private:
    int rows, cols;
    unordered_set<int> flipped;
};
```
**Like it? please upvote!**