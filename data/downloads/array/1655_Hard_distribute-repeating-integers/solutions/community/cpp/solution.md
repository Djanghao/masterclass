# Easy understandable C++ solution || Recursion and Backtracking

**Author:** bharathgowda29
**Votes:** 3
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/4390992/](https://leetcode.com/problems/distribute-repeating-integers/solutions/4390992/)

---



# Code
```
class Solution {
public:
    bool solve(vector<int>& counts, vector<int>& quantity, int customer){
        //base case
        if(customer >= quantity.size()){
            return true;
        }

        for(int i=0; i<counts.size(); i++){
            if(counts[i] >= quantity[customer]){
                counts[i] -= quantity[customer];
                if(solve(counts, quantity, customer+1)){
                    return true;
                }
                counts[i] += quantity[customer];
            }
        }

        return false;
    }


    bool canDistribute(vector<int>& nums, vector<int>& quantity) {

        unordered_map<int, int> mp;
        for(auto it : nums){
            mp[it]++;
        }

        vector<int> counts;
        for(auto it : mp){
            counts.push_back(it.second);
        }

        sort(quantity.rbegin(), quantity.rend());
        int customer = 0;
        return solve(counts, quantity, customer);
    }
};
```