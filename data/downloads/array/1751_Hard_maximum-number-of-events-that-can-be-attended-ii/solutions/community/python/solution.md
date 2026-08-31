# Fast Solution without binary search | Very Easy Explanation| C++| Java| Python

**Author:** shivam-727
**Votes:** 47
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766471/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766471/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we can see there are 2 choices we  attend the meeting or we do not attend the meeting if the meeting interval do not overlap or not in the previous meeting range  and if the previous meeting end is greater than or equal to start we have only one option we cant attend the meeting. 

For detailed explanation you can refer to my youtube channel (Hindi Language)
https://youtu.be/fig222WmiIY
 or link in my profile.Here,you can find any solution in playlists monthwise from June 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes.
or
search \uD83D\uDC49 `Maximum Number of Events That Can Be Attended II by Let's Code Together` on youtube

# Approach
<!-- Describe your approach to solving the problem. -->

1. The `maxValue` function is the entry point of the solution. It takes a vector of events and the value of k as input. The events are sorted in ascending order based on their start time.

2. The variable `n` is assigned the total number of events.

3. The `dp` vector is resized to have `n` rows and `k + 1` columns. It is used for memoization, where `dp[i][j]` represents the maximum value that can be achieved by considering events from index `i` onwards with `j` remaining slots.

4. The `solve` function is a recursive helper function that calculates the maximum value by considering different combinations of events.

5. The base cases of the recursion are as follows:
   - If we have considered all events (` i== events.size()`), we return 0.
   - If we have used up all available slots (`k == 0`), we return 0.
   - If the current event's start time is less than or equal to the previous event's end time (`events[i][0] <= end`), we skip this event and move to the next one.

6. If the maximum value for the current state (`dp[i][k]`) has already been calculated, we return it.

7. Otherwise, we calculate the maximum value by considering two possibilities:
   - Attend the current event and recursively solve for the remaining events with `k-1` slots, updating the end time to the end time of the current event.
   - Skip the current event and recursively solve for the remaining events with `k` slots, keeping the end time unchanged.

8. We take the maximum of the above two possibilities and store it in `choices`. Finally, we update `dp[i][k]` with the calculated result and return `choices`.

This approach effectively explores all possible combinations of events while considering the constraints of the problem, and it uses memoization to avoid redundant calculations. The overall result is the maximum value that can be achieved by attending the events.

Note :-For those who are not understanding code `
 if( events[i][0] <= end ) return solve( events, i + 1 , k , end )` here \uD83D\uDC49 solve function ensures that we only consider valid events that can be attended after the previous event ends. This is accomplished by checking if prev_ending_time is smaller than the start time of the next event. If it is not, we skip the calculation of solve (i+ 1, k+1, events[i][1]) and only consider the option of skipping the current event.

# Complexity
- Time complexity:$$O(n*k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n*k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
vector<vector<int>>dp;
//dp[n][k+1]
    int maxValue(vector<vector<int>>& events, int k) {
        sort(events.begin() , events.end());
        int n = events.size();
        dp.resize( n, vector<int>( k + 1, -1));
        return solve(events , 0 , k , 0);
    }
    int solve(vector<vector<int>>& events,int i, int k,int end){
        if(i==events.size()) return 0;

        if( k==0 ) return 0;

        if( events[i][0] <= end ) return solve( events, i + 1 , k , end );

        if( dp[i][k] != -1) return dp[i][k];

        int choices= max ( events[i][2] + solve(events, i + 1, k - 1 , events[i][1] ),  solve(events , i + 1 , k , end ) );
        return dp[i][k] = choices;
    }
};
```


![images.jpeg](./images/0.jpeg)
