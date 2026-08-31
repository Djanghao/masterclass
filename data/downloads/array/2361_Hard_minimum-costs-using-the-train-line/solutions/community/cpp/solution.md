# C++ Solution using Djisktra's 😅 (Using DP is better 🫠)

**Author:** bigtechcoder7
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3852952/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3852952/)

---



# Code
```
typedef long long ll;

class Solution {
public:
    vector<long long> minimumCosts(vector<int>& regular, vector<int>& express, int expressCost) {
        int n = regular.size();
        vector<ll> keysRegular(n+1, LLONG_MAX);
        vector<ll> keysExpress(n+1, LLONG_MAX);
        vector<bool> sptSetRegular(n+1, false);
        vector<bool> sptSetExpress(n+1, false);
        vector<ll> ans(n);

        priority_queue<pair<ll,pair<ll,char>>, vector<pair<ll,pair<ll,char>>>, 
            greater<pair<ll,pair<ll,char>>>> pq;
        
        pq.push({0, {0, 'R'}});
        
        while(!pq.empty()) {
            auto curr = pq.top();
            pq.pop();
            char lane = curr.second.second;
            int node = curr.second.first;
            ll cost = curr.first;

            if((lane == 'R' && sptSetRegular[node]) || (lane == 'E' && sptSetExpress[node])) 
                continue;

            if(lane == 'R') {
                sptSetRegular[node] = true;
                if(node+1 < n+1 && !sptSetRegular[node+1] && cost+(ll)regular[node] < keysRegular[node+1]) {
                    keysRegular[node+1] = cost + regular[node];
                    pq.push({keysRegular[node+1], {node+1, 'R'}});
                }
                if(node+1 < n+1 && !sptSetExpress[node+1] && cost+(ll)express[node]+(ll)expressCost < keysExpress[node+1]) {
                    keysExpress[node+1] = cost + express[node] + expressCost;
                    pq.push({keysExpress[node+1], {node+1, 'E'}});
                }
                
            } else {
                sptSetExpress[node] = true;
                if(node+1 < n+1 && !sptSetExpress[node+1] && cost+(ll)express[node] < keysExpress[node+1]) {
                    keysExpress[node+1] = cost + express[node];
                    pq.push({keysExpress[node+1], {node+1, 'E'}});
                }
                if(node+1 < n+1 && !sptSetRegular[node+1] && cost+(ll)regular[node] < keysRegular[node+1]) {
                    keysRegular[node+1] = cost + regular[node];
                    pq.push({keysRegular[node+1], {node+1, 'R'}});
                }
            }
        }

        for(int i = 0; i < n; i++) {
            ans[i] = min(keysExpress[i+1], keysRegular[i+1]);
        }

        return ans;
    }
};
```