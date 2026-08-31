# Binary Search with explanation

**Author:** bora_marian
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5826559/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5826559/)

---

# Intuition
The minimum distance between values in the resulting sequence is influenced by the values that are adjacent to each other in the sorted array.

Let's consider $$ start = [2, 7, 8, 10] $$ and $$d = 3 => $$intervals:$$ [[2, 5], [7, 10], [8, 11], [10, 13]]$$. The gap of possible values between adjacent positions \uD835\uDC56 and \uD835\uDC56\u22121 is important for determining the minimum difference diff.

We can check if it is possible to achieve a difference of 
diff=3 by choosing the minimum values that satisfy the condition:
- start[i\u22121]+diff lies within the interval [start[i],start[i]+d], or
- if start[i\u22121]+diff < start[i], we choose start[i].
# Approach
We propose different values for diff in the interval [0, max(start) + d] using binary search

# Complexity
- Time complexity: O(N log(INT_MAX))
- Space complexity: O(1)

\uD83D\uDCAA\uD83D\uDE80Keep leetcoding! Keep improving!
```cpp []
class Solution {
public:
    int maxPossibleScore(vector<int>& start, int d) {
        sort(start.begin(), start.end());
        int l = 0, r = start[start.size() -1] + d;
        while(l < r) {
            int mid = l + (r - l + 1) / 2;
            if (checkMaxDiff(start, d, mid)) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        return l;
    }

    bool checkMaxDiff(vector<int>& vals, int d, int diff) {
        long last = vals[0];   
        for (int i = 1; i < vals.size(); i++) {
            if (last + (long)diff > vals[i] + d)
                return false;
            if (vals[i] > last + (long)diff)
                last = vals[i];
            else
                last = last + diff;
        }
        return true;
    }
};
```

# Code
```csharp []
public class Solution 
{
    public int MaxPossibleScore(int[] start, int d) 
    {
        Array.Sort(start);
        int l = 0, r = start[start.Length -1] + d;
        while(l < r) 
        {
            int mid = l + (r - l + 1) / 2;
            if (CheckMaxDiff(start, d, mid)) 
            {
                l = mid;
            }
            else 
            {
                r = mid - 1;
            }
        }
        return l;
    }
    private bool CheckMaxDiff(int[] vals, int d, int diff) 
    {
        long last = vals[0];    
        for (int i = 1; i < vals.Length; i++) 
        {
            if (last + (long)diff > vals[i] + d)
                return false;
            if (vals[i] > last + (long)diff)
                last = vals[i];
            else
                last = last + diff;
        }
        return true;
    }
}
```