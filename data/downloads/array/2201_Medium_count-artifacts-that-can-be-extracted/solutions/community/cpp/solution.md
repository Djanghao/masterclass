# C++ Boolean Array, well explained with comments

**Author:** kuliyalAman
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/1845189/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/1845189/)

---

***If you find it helpful, please do upvote <3***

```
class Solution
{
public:
    int digArtifacts(int n, vector<vector<int>> &artifacts, vector<vector<int>> &dig)
    {
        vector<vector<bool>> visited(n, vector<bool>(n, false)); // initialising N x N vector to FALSE
        int i = 0;
        for (int i = 0; i < dig.size(); i++) // using dig array to make all the positions that can be digged, as TRUE
        {
            int x = dig[i][0],
                y = dig[i][1];
            visited[x][y] = true;
        }
        int ans = 0;
        for (int i = 0; i < artifacts.size(); i++) // running through artifacts array
        {
            int x1 = artifacts[i][0],
                x2 = artifacts[i][2], // finding X and Y coordinate, based on top-left and bottom-right cell
                y1 = artifacts[i][1],
                y2 = artifacts[i][3];
            bool excavated = true;
            for (int x = x1; x <= x2; x++)
            {
                for (int y = y1; y <= y2; y++)
                {
                    if (!visited[x][y]) // if any part of the current subgrid can't be excavated, then set excavated as false
                    {
                        excavated = false;
                        break;
                    }
                }
            }
            if (excavated) // if every part of the subgrid can be excavated correctly then we can excavate the current artifact
                ans++;
        }
        return ans;
    }
};
```
***Any suggestions are welcome into the comment section
Thank you !!***