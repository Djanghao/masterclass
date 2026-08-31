# [C++] || Code for Beginners || Easy understanding Code || SET+BINARY SEARCH+HEAP

**Author:** Decode_Apocalypse
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/2545310/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/2545310/)

---

```
class Solution {
public:
    vector<int> busiestServers(int k, vector<int>& arrival, vector<int>& load) {
        vector<int> serverUsed(k,0);
        priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> lockedServer;
        set<int> serverAvail;
        for(int i=0;i<k;i++){
            serverAvail.insert(i);
        }
        for(int i=0;i<arrival.size();i++){
            while(!lockedServer.empty() && lockedServer.top().first<=arrival[i]){  // every server that has deadline before this arrival
                serverAvail.insert(lockedServer.top().second);
                lockedServer.pop();
            }
            if(serverAvail.empty()){  // if no server available, whoops, this current task skipped
                continue;
            }
            auto serverAssigned=serverAvail.lower_bound(i%k);  // get as per condition the server 
            if(serverAssigned==serverAvail.end()){
                serverAssigned=serverAvail.begin();
            }
            lockedServer.push({arrival[i]+load[i],*serverAssigned});
            serverUsed[*serverAssigned]++;
            serverAvail.erase(*serverAssigned);
        }
        
        int mxUsage=*max_element(serverUsed.begin(),serverUsed.end());
        vector<int> res;
        for(int i=0;i<k;i++){
            if(serverUsed[i]==mxUsage){
                res.push_back(i);
            }
        }
        return res;
    }
};
```