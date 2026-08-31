# C++ || BFS (Using Queue) || Clean Code || NO DP 🔥🔥✔️

**Author:** 77jj
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/2121320/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/2121320/)

---

```
// This is The Basic BFS Question i have Solved.
// Basically What I did Is Gone All to its Neighbour Using loop i.e. All the Thee Operations as stated in question And Correspondingly Pushing in queue.
// If i found in set then i wont't proceed because calculation for that particular is already being made.
// Also if val < 0 || val > 1000 then also I won't Proceed Becuase it is stated in question.
class Solution {
public:
    int minimumOperations(vector<int>& nums, int start, int goal) {
       int n = nums.size();
        queue<int>q;
        q.push(start);
        set<int>output;
        int lvl = -1;
        while(!q.empty())
        {
            int sz  = q.size();
            lvl++;
            while(sz--)
            {
                int val = q.front();
                q.pop();
                if(val==goal)
                {
                    return lvl;
                }
                if(val <0 || val> 1000)
                {
                    continue;
                }
                if(output.find(val)!=output.end())
                {
                    continue;
                }
                output.insert(val);
                for(int i = 0 ; i < n ; i++)
                {
                    int h = val + nums[i];
                    q.push(h);
                    int g = val - nums[i];
                    q.push(g);
                    int k = val^nums[i];
                    q.push(k);
                }
            }
        }
        return -1;
    }
};
```
**Please Upvote If you Like the Solution and Explanantion...\u2714\uFE0F\uD83D\uDD25\uD83D\uDE0A\uD83D\uDC4D**