# BFS Approach : CPP:- 0 MS, Time & Space: O(N)

**Author:** KonohaCoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/1449026/](https://leetcode.com/problems/path-sum-iv/solutions/1449026/)

---

As most of the people have used **DFS** approach. Here is my **BFS** approach. 

**Basic math used:**
To get hundred's place: nums[i]/100
To get ten's place: (nums[i]%100)/10
To get unit's place: nums[i]%10


```
class Solution {
public:
    int pathSum(vector<int>& nums) {
        queue<pair<int, pair<int, int>>> Q; /* {nums[0], {index_in_array, sum_till_that_node} } */
        int res = 0;
        
        Q.push({nums[0], {0, nums[0]%10}});
        nums[0] = -1;
        
        while(!Q.empty()){
            int sz = Q.size();

            for(int i = 0; i < sz; ++i){
                auto curr = Q.front(); 
                Q.pop();
                int curr_nums = curr.first, index = curr.second.first, curr_sum = curr.second.second;
                int node_val = curr_nums%10, level = curr_nums/100, position = (curr_nums%100)/10;
                
                vector<int> valid_pos = {position*2 - 1, position*2}; /* if position is 1, then it can only have 2*position -1 and 2*position children in next level */
				
                int count = 0; /* at most only 2 children can be taken by a parent */
				
                for(int j = index + 1; j < nums.size() && count != 2; ++j){
                    if(nums[j] == -1) continue;
                    if(nums[j]/100 - 1 == level){
                        if((nums[j]%100)/10 == valid_pos[0]){
                            count++;
                            Q.push({nums[j], {j, curr_sum + (nums[j]%10)} });
                            nums[j] = -1; /* mark nodes as visited */
                        }
                        else if((nums[j]%100)/10 == valid_pos[1]){
                            count++;
                            Q.push({nums[j], {j, curr_sum + (nums[j]%10)} });
                            nums[j] = -1; /* mark nodes as visited */
                        }
                    }
                }
                if(count == 0) res += curr_sum; /* if no children, then it is a leaf node. Add the sum into res */
            }
        }
        
        return res;
    }
};
```

Time and space complexity: O(N) where N is the size of the nums.