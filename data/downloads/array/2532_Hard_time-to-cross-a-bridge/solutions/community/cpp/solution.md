# Priority Queue Simulation | Organized & Easy to Understand

**Author:** lukewu28
**Votes:** 19
**Link:** [https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3016806/](https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3016806/)

---


# Approach
Maintain 4 priority queues:
left - min efficiency on left
right - min efficiency on right
up - workers picking up boxes on right sorted by increasing time of completion
down - workers putting down boxes on left sorted by increasing time of completion
# Complexity
- Time complexity:
$$O(NlogN)$$ 
- Space complexity:
$$O(N)$$

# Code
```
class Solution {
public:
    int findCrossingTime(int n, int k, vector<vector<int>>& time) {
        priority_queue<pair<int, int>> left, right;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> up, down;
        for(int i = 0; i <  time.size(); i++) left.push({time[i][0] + time[i][2], i});
        int t = 0;
        while(n > 0){
            if(!right.empty()){
                auto x = right.top();
                right.pop();
                t += time[x.second][2];
                down.push({t + time[x.second][3], x.second});
            }
            else if(!left.empty()){
                auto x = left.top();
                left.pop();
                t += time[x.second][0];
                n--;                
                up.push({t + time[x.second][1], x.second});
            } else { 
                if(up.empty()){
                    t= down.top().first;
                }   
                else if(down.empty()){
                    t = up.top().first;
                }
                else{
                    auto x = up.top(), y = down.top();
                    t = min(x.first, y.first);
                }
            }
            while(!up.empty() && up.top().first <= t) {
                auto x = up.top();
                up.pop();
                int i = x.second;
                right.push({time[i][0] + time[i][2], i});
            }
            while(!down.empty() && down.top().first <= t) {
                auto x = down.top();
                down.pop();
                int i = x.second;
                left.push({time[i][0] + time[i][2], i});
            }
        }
        while(!right.empty()){
            auto x = right.top();
            right.pop();
            
            t += time[x.second][2];
            while(!up.empty() && up.top().first <= t) {
                auto x = up.top();
                up.pop();
                int i = x.second;
                right.push({time[i][0] + time[i][2], i});
            }
        }
        while(!up.empty()){
            auto x = up.top();
            up.pop();
            t = max(t, x.first);
            int u = x.second;
            t += time[u][2];
        }
        return t;
    }
};
```