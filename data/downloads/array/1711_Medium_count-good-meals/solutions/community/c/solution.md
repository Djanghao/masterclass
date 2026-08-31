# Easy C++ Count Good Meals

**Author:** RajawatBanna
**Votes:** 51
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/999249/](https://leetcode.com/problems/count-good-meals/solutions/999249/)

---

```
class Solution {
public:
    int countPairs(vector<int>& a) {
        unordered_map<int,int> lks;
        long long ans=0;
        for(int x : a){
            for(int i=1;i<=(1<<22);i*=2){
                if(lks.count(i-x)) ans+=lks[i-x];
            }
            lks[x]+=1;
        }
        return ans % (int)(1e9 + 7);
    }
};
```

# Quick Explanation
```
Step 1. Create an Unordered Map
Step 2. Initialise the ans=0
Step 3. Loop through Each Element in the vector
Step 4. For Each Element loot through pow(2,1) to pow(2,22) 
Step 5. Find For the element pow(2,i) - x  in the map . If found then make add the frequency.
Step 6. Every time add the element of the vector into the map
Step7 . Return the ans with modulo
```