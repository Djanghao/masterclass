# O(1) Determine if Two Events Have Conflict Solution in C++

**Author:** The_Kunal_Singh
**Votes:** 4
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/3522061/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/3522061/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Time Comparison
# 1. Approach
<!-- Describe your approach to solving the problem. -->
*Using String comparison*
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
public:
    bool haveConflict(vector<string>& event1, vector<string>& event2) {
        if(event1[0]<=event2[0] && event2[0]<=event1[1] || event2[0]<=event1[0] && event1[0]<=event2[1])
            return true;
        return false;
    }
};
```
# 2. Approach
<!-- Describe your approach to solving the problem. -->
*Converting time into integers and then comparing*
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
public:
    bool haveConflict(vector<string>& event1, vector<string>& event2) {
        int event1_starting_time, event2_starting_time, event1_ending_time, event2_ending_time;
        
        event1_starting_time = (int(event1[0][0])*10 + int(event1[0][1]))*60 + (int(event1[0][3])*10 + int(event1[0][4]));
        event2_starting_time = (int(event2[0][0])*10 + int(event2[0][1]))*60 + (int(event2[0][3])*10 + int(event2[0][4]));
        event1_ending_time = (int(event1[1][0])*10 + int(event1[1][1]))*60 + (int(event1[1][3])*10 + int(event1[1][4]));
        event2_ending_time = (int(event2[1][0])*10 + int(event2[1][1]))*60 + (int(event2[1][3])*10 + int(event2[1][4]));
        if(event1_starting_time<=event2_starting_time && event2_starting_time<=event1_ending_time ||
           event2_starting_time<=event1_starting_time && event1_starting_time<=event2_ending_time)
        {
            return true;
        }
        return false;
    }
};
```
![upvote new.jpg](./images/0.jpeg)
