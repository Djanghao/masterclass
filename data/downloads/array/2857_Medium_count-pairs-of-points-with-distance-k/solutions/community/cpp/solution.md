# MAP || 🔥Target Combinations || C++ Commented Code ||

**Author:** JainWinn
**Votes:** 71
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4052098/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4052098/)

---



# Code 
Accepted during contest but Now giving TLE . Go below for accepted solution .
```
class Solution {
public:
    int countPairs(vector<vector<int>>& c, int k) {
        //map to keep track of used pairs
        map<pair<int,int>,int> mp;
        int n=c.size();
        int ans=0;
        for(int i=0 ; i<n ; i++){
            
            // finding all possible (x,y) which gives : 
            //c[i][0]^x+c[i][1]^y=k                   (0)
            //Consider above is true , then
            //if , c[i][0]^x=val                      (1)
            //then c[i][1]^y=k-val                    (2)
            
            //We can definitely find all possible values of val (0 to k inclusive) 
            //using a^b=c , then a^c=b
            //from  (1) , we have c[i][0]^val=x;
            //from  (2) , we have c[i][1]^(k-val)=y;
            //so we just need to traverse through all possible values of val to get pairs(x,y) satisfying  eq.(0) 
            
            for(int val=0 ; val<=k ; val++){
                //using a^b=c , then a^c=b
                
                int x=val^c[i][0];    
                int y=(k-val)^c[i][1];
                ans+=mp[make_pair(x,y)];
            }
            
            mp[make_pair(c[i][0],c[i][1])]++;
        }
        return ans;
    }
};
```


# Code : 
Accepted by Changing the way of Hashing
```
class Solution {
public:
    int countPairs(vector<vector<int>>& c, int k) {
        //map to keep track of used pairs
        unordered_map<long long,long long> mp;
        int n=c.size();
        int ans=0;
        for(int i=0 ; i<n ; i++){
            
            // finding all possible (x,y) which gives : 
            //c[i][0]^x+c[i][1]^y=k                   (0)
            //Consider above is true , then
            //if , c[i][0]^x=val                      (1)
            //then c[i][1]^y=k-val                    (2)
            
            //We can definitely find all possible values of val (0 to k inclusive) 
            //using a^b=c , then a^c=b
            //from  (1) , we have c[i][0]^val=x;
            //from  (2) , we have c[i][1]^(k-val)=y;
            //so we just need to traverse through all possible values of val to get pairs(x,y) satisfying  eq.(0) 
            
            for(int val=0 ; val<=k ; val++){
                //using a^b=c , then a^c=b
                
                long long x=val^c[i][0];    
                long long y=(k-val)^c[i][1];
                long long inner_key=x*1000001+y;
                if(mp.count(inner_key)){
                    ans+=mp[inner_key];
                }
            }
            
            long long outer_key=(long long)c[i][0]*(long long)1000001+(long long)c[i][1];
            mp[outer_key]++;
        }
        return ans;
    }
};
```