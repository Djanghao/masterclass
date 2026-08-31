# 🔥Beats 100% | Most Easy Approach(Explained) 🔥

**Author:** kushsatyadev
**Votes:** 4
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/3635098/](https://leetcode.com/problems/escape-the-ghosts/solutions/3635098/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
- first calculate distance from origin to target

- simply iterate through all coordinates(ghost locations) and find their distance from given target point(where we want to reach to escape)

- if you find any point(ghost locations) whose distance is less than or equal to the distance of target from origin,in that case we can ghost will catch and we'll die so return 0

- outside the loop we can simply return 1 denoting we get saved from ghost because we don't find any ghost nearer to target than our location to target place

# Complexity
- Time complexity:
O(n)

- Space complexity:
 O(1)

# Code
```
class Solution {
public:
    bool escapeGhosts(vector<vector<int>>& ghosts, vector<int>& target) {
     int tx=target[0];
     int ty=target[1];
     int dt=abs(ty)+abs(tx);
     for(auto i:ghosts)
     {
         int d=abs(tx-i[0])+abs(ty-i[1]);
         if(d<=dt)
         {
             return 0;
         }
     }   
     return 1;
    }
};
```