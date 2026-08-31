# Greedy || Merge Intervals

**Author:** fahad_Mubeen
**Votes:** 31
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5243315/](https://leetcode.com/problems/count-days-without-meetings/solutions/5243315/)

---

<!-- # Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach 
- Sort the meetings array based on the starting days of the meetings.
- Iterate through the sorted meetings array to calculate the count of available days.
- Handle the overlapping meetings by adjusting the ending day of the current meeting if needed. ([2,10][5,8]) --> [2,10]
- The count of available days is calculated by considering the gaps between consecutive meetings and the boundaries of the available days.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Code
```C++ []
bool cmp(vector<int> &a, vector<int> &b){
    return a[0] < b[0];
}
class Solution {
public:
    int countDays(int days, vector<vector<int>>& m) {
        int n = m.size();
        sort(m.begin(), m.end(), cmp); // custom comparator 
        int count = 0;
        count += abs(m[0][0] - 1);
        for(int i = 1; i < n; i++){
            if(m[i][0] <= m[i-1][1]){ // no space between intervals
                if(m[i][1] < m[i-1][1]) m[i][1] = m[i - 1][1]; // merge if intervals are overlapping
            }
            else{ // space exists between intervals, add that space to count 
                int dy = m[i][0] - m[i-1][1];
                count += dy - 1; 
            }
        }
        count += abs(m[n-1][1] - days);
        return count;
    }
};
```
```java []
class Solution {
    public int countDays(int days, int[][] meetings) {
        Arrays.sort(meetings, (a, b) -> a[0] - b[0]);
        int count = 0;
        count += Math.abs(meetings[0][0] - 1);
        int n = meetings.length;
        for (int i = 1; i < n; i++) {
            if (meetings[i][0] <= meetings[i - 1][1]) {
                if (meetings[i][1] < meetings[i - 1][1]) {
                    meetings[i][1] = meetings[i - 1][1];
                }
            } else {
                int dy = meetings[i][0] - meetings[i - 1][1];
                count += dy - 1;
            }
        }
        count += Math.abs(meetings[n - 1][1] - days);
        return count;
    }
}
```
```Python3 []
class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        meetings.sort(key=lambda x: x[0])
        count = abs(meetings[0][0] - 1)
        n = len(meetings)
        for i in range(1, n):
            if meetings[i][0] <= meetings[i - 1][1]:
                if meetings[i][1] < meetings[i - 1][1]:
                    meetings[i][1] = meetings[i - 1][1]
            else:
                dy = meetings[i][0] - meetings[i - 1][1]
                count += dy - 1
        count += abs(meetings[n - 1][1] - days)
        return count

```
# Similar Questions
- Leetcode 56
- Leetcode 57
- Leetcode 986