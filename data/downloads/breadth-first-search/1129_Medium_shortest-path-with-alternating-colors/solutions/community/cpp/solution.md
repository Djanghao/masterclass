# C++✅✅ | Faster🧭 than 80%🔥 | BFS Solution🆗 | Clean Code |

**Author:** mr_kamran
**Votes:** 77
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3169962/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3169962/)

---



# Code

# Please Do Upvote!!!!
##### Connect with me on Linkedin -> https://www.linkedin.com/in/md-kamran-55b98521a/

```

class Solution {
public:
    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& red_edges, vector<vector<int>>& blue_edges){

        vector<int> res(n, -1), v1(n, 0), v2(n, 0);
        vector<vector<pair<int, int>>> vp(n);
        queue<pair<int, int>> q;

        for(auto &it : red_edges) vp[it[0]].push_back({it[1], 1});
        for(auto &it : blue_edges) vp[it[0]].push_back({it[1], 2});

        res[0] = 0;
        v1[0] = 1;
        v2[0] = 1;
        int temp = 1;

        for(auto &it : vp[0])
        {
            q.push(it);
            if(res[it.first] == -1) res[it.first] = temp;
        }

        while(!q.empty())
        {
            int len = q.size();
            temp++;
            for(int i=0; i<len; ++i)
            {
                auto val = q.front();
                q.pop();
                if(val.second == 1) v1[val.first] = 1;
                else v2[val.first] = 1;

                for(auto &it : vp[val.first])
                {
                    if(val.second == 1 && (v2[it.first] || it.second==1)) continue;
                    if(val.second == 2 && (v1[it.first] || it.second==2)) continue;
                    q.push(it);                      
                    if(res[it.first] == -1) res[it.first] = temp;
                }
            }
        }
        return res;
    }
};


```
![b62ab1be-232a-438f-9524-7d8ca4dbd5fe_1675328166.1161866.png](./images/0.png)
