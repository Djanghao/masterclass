# Traverse from Right to Left. Clear and Concise.

**Author:** ashishtiwari3
**Votes:** 1
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/4215188/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/4215188/)

---

# Intuition
The intuition lies in the problem description. It says "A building has an ocean view if all the buildings to its right have a smaller height". So you can start from the ocean and go inwards to the land and find if the building height is less than what you have seen before.

# Approach
The end of the heights vector is the ocean. You can start from the ocean and go inwards towards the land which will be the start of the heights vector. Every time you see a building that is taller than any of the building that you have seen, you know that it will have an ocean view so you insert that index into your ans and also update the maximum height of the building that you have seen.

The return will be the reverse of the ans vector because the return should be the list of indices sorted in increasing order. But as we are going from a higher index to a lower index in our for loop, the ans is sorted in descending order, and therefore we have to reverse it.

# Complexity
- Time complexity:
O(n) : n is the total length of the heights.

- Space complexity:
O(1) : no additional space is required.

# Code
```
class Solution {
public:
    vector<int> findBuildings(vector<int>& heights) {
        int max_so_far = -1;
        vector<int> ans;

        for(int index = heights.size()-1;index>=0;--index){
            int curr_height = heights[index];

            if(curr_height > max_so_far){
                ans.push_back(index);
                max_so_far = curr_height;
            }
        }

        std::reverse(ans.begin(),ans.end());
        return ans;
    }
};
```