# ✅ Easy to understand C++ || Subtract then Sort || Greedy | O(nlog(n))

**Author:** codernishchay
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2061907/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2061907/)

---

```
Time : O(nlog(n))
Space : O(n) 

if we modify the given vector then space will be O(1)

int maximumBags(vector<int>& capacity, vector<int>& rocks, int additionalRocks) {
         vector<int> vv ; 
         for(int i = 0 ; i < capacity.size(); i ++ ) {
              vv.push_back(capacity[i] - rocks[i]); 
         }
         sort(vv.begin(), vv.end()); 
         int  cnt = 0 ; 
         for(auto a : vv ) {
              if(a == 0) {
                   cnt ++ ; 
              }else if(additionalRocks - a >= 0){
                  cnt ++; 
                  additionalRocks -= a ; 
              }
         }
        return cnt ; 
}
```
please upvote if like : >