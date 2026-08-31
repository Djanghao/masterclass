# Elegant 1 Pass | C++

**Author:** Benlegend
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-interval/solutions/3564371/](https://leetcode.com/problems/remove-interval/solutions/3564371/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    /*
    Observations:
    1. Note interval [a, b] represents [a,a+1,...,b-1], b is not excluded.
    2. Despite the last number is excluded, no special treatment is neceaasry
       to cut intervals. For example,
       [1,6] remove = [3,10] -> [1,3] the number 3 has been removed and excluded from result
       [8,13] remove = [5,10] -> [10,13] the number 10 is not removed and included in result
       [2,5] [3,5] [2,3] remove = [2,5] -> [] result is [] when interval is fully covered
    3. An interval might be cut the later half/the front half/or the middle half.
       We use 2 if statements to deal with all cases.

       O(n) time O(1) space
    */
    vector<vector<int>> removeInterval(vector<vector<int>>& intervals, vector<int>& toBeRemoved) {
        vector<vector<int>> ret;
        for (int i = 0; i < intervals.size(); i++) {
            int a, b;
            if (intervals[i][0] < toBeRemoved[0]) {
                a = intervals[i][0];
                b = min(intervals[i][1], toBeRemoved[0]);
                ret.push_back({a, b});
            }

            if (toBeRemoved[1] < intervals[i][1]) {
                a = max(intervals[i][0], toBeRemoved[1]);
                b = intervals[i][1];
                ret.push_back({a, b});
            }
        }

        return ret;
    }
};
```