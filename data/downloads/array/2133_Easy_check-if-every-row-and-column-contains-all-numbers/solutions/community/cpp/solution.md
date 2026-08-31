# C++ Detailed Explanation With Simple Solution

**Author:** gyt4x8ue7w6tf4y
**Votes:** 39
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1692104/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1692104/)

---

We will make 2 sets, s1 and s2.
We use the property of sets that they do not store duplicate elements.
Then we start traversing the 2D matrix, each time we check if we have the element in the sets or not, if we have it we return false as it is duplicate number. If it does not exist we continue and finally return true.

UPVOTE IF YOU UNDERSTOOD!!
```
class Solution {
public:
    bool checkValid(vector<vector<int>>& matrix) {
        int n=matrix.size();
        unordered_set<int> s1, s2;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(s1.find(matrix[i][j])!=s1.end())
                    return false;
                else
                    s1.insert(matrix[i][j]);
                if(s2.find(matrix[j][i])!=s2.end())
                    return false;
                else
                    s2.insert(matrix[j][i]);
            }
            s1.clear();
            s2.clear();
        }
        return true;
    }
};
```