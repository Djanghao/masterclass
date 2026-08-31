# C++ using priority queue

**Author:** vdas53073
**Votes:** 6
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/1409540/](https://leetcode.com/problems/stone-game-vi/solutions/1409540/)

---

```
    int stoneGameVI(vector<int>& aliceValues, vector<int>& bobValues) {
       priority_queue<pair<int,pair<int,int>>>pq;
        for(int i=0;i<aliceValues.size();i++){
            pq.push({bobValues[i]+aliceValues[i],{aliceValues[i],bobValues[i]}});
        }
        bool alice=true;
        int as=0,bs=0;
        while(!pq.empty()){
            if(alice){
                as+=pq.top().second.first;
                pq.pop();
                alice=false;
            }
            else{
                bs+=pq.top().second.second;
                pq.pop();
                alice=true;
            }
        }
        if(as>bs)
            return 1;
        else if(as<bs)
            return -1;
        return 0;
    }