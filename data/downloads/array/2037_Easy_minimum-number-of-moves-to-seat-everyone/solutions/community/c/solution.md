# C++ Simple and Clean Solution

**Author:** YehudisK
**Votes:** 45
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/1526110/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solutions/1526110/)

---

**Idea:**
We sort both arrays.
Then, greedily, we loop through them and match each student with the closest seat.

**Time Complexity:** O(nlogn)
**Space Complexity:** O(1)
```
class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {
        sort(seats.begin(), seats.end());
        sort(students.begin(), students.end());
        
        int res = 0;
        for (int i = 0; i < seats.size(); i++) res += abs(seats[i] - students[i]);
        
        return res;
    }
};
```
**Like it? please upvote!**