# Beats 100% || self Explanatory

**Author:** Divvvv
**Votes:** 5
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/5482308/](https://leetcode.com/problems/rabbits-in-forest/solutions/5482308/)

---

* If a rabbit says 0, it indicates it sees no other rabbits of its color, hence it.second (count of such answers) rabbits are added directly to ans.
* If the count of rabbits giving an answer is less than the group size indicated by that answer, the group size is added to ans.
* If the count of rabbits giving an answer matches the group size exactly, it.second is added to ans.
* If the count of rabbits giving an answer exceeds the group size, the number of groups needed is calculated and their total size is added to ans.



# Code
```
class Solution {
public:
    int numRabbits(vector<int>& answers) {
        unordered_map<int, int> mp; 
        // Map to store the count of each answer
        
        // Count the occurrences of each answer
        for (auto it : answers) {
            mp[it]++;
        }
        
        int ans=0;
        
        // Calculate the minimum number of rabbits needed
        for (auto it : mp) {
            if (it.first==0) {
                // If the answer is 0, each rabbit is alone
                ans+=it.second;
            }
            if (it.second<(it.first+1) && it.first!=0) {
                // If the number of rabbits giving the 
                //answer is less than the group size
                ans+=(it.first+1);
            }
            if ((it.first+1==it.second) && it.first!=0) {
                // If the number of rabbits giving 
                //the answer exactly matches the group size
                ans += it.second;
            }
            if (it.second>(it.first + 1) && it.first!=0) {
                // If the number of rabbits giving 
                //the answer exceeds the group size
                int groups=(it.second+it.first)/(it.first+1); 
                ans+=groups*(it.first+1);
            }
        }

        return ans;
    }
};

```