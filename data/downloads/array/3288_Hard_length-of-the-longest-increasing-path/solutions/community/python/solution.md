# Simple LIS + Binary Search | O(nlogn) | BEATS 100%

**Author:** zaid5496
**Votes:** 7
**Link:** [https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5787388/](https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5787388/)

---

# Intuition
**LIS variant**
(SIMILAR to [354. Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/description/))



# Approach
Sort the Coordinates:

The coordinates are sorted based on the x-coordinate in ascending order, and in case of ties, the y-coordinate in descending order.
This sorting helps in maintaining the order of x and makes it easier to compute the longest increasing subsequence in terms of y.
Split Around the Target Point (coordinates[k]):

After sorting, we find the index of coordinates[k] in the sorted list.
Split the sorted list into two parts:
left: Points that appear before coordinates[k] (all points with smaller x values).
right: Points that appear after coordinates[k] (all points with larger x values).
Dynamic Programming (LIS - Longest Increasing Subsequence):

For both the left and right sides, we compute the Longest Increasing Subsequence (LIS) in terms of the y-coordinate using a greedy + binary search approach.
Left Subsequence (l): Find the longest subsequence where both x and y values are smaller than coordinates[k].
Right Subsequence (r): Find the longest subsequence where both x and y values are larger than coordinates[k].
Merge the Results:

The total maximum path length is the sum of the two subsequences (l and r) and the point coordinates[k] itself, giving l + r + 1.

# Complexity
- Time complexity: O(n log n)

- Space complexity: O(n)
# Code
```python []
class Solution(object):
    def maxPathLength(self, coordinates, k):

        has = coordinates[k]
        coordinates.sort(key = lambda x:(x[0], -x[1]))
        current = coordinates.index(has)
        left = coordinates[:current]
        right = coordinates[current + 1:]

        def solve(nums):
            dp = []
            for _, val in nums:
                idx = bisect_left(dp, val)
                if idx == len(dp):
                    dp.append(val)
                else:
                    dp[idx] = val
            return len(dp)
        
        l = solve([(x, y) for x, y in left if x < has[0] and y < has[1]])
        r = solve([(x, y) for x, y in right if x > has[0] and y > has[1]])

        return l + r + 1



```
```C++ []
class Solution {
public:
    int maxPathLength(vector<vector<int>>& coordinates, int k) {
        vector<int> has = coordinates[k];
        
        sort(coordinates.begin(), coordinates.end(), [](const vector<int>& a, const vector<int>& b) {
            if (a[0] != b[0]) return a[0] < b[0];
            return a[1] > b[1];
        });
        
        int current;
        for (int i = 0; i < coordinates.size(); i++) {
            if (coordinates[i] == has) {
                current = i;
                break;
            }
        }

        vector<vector<int>> left(coordinates.begin(), coordinates.begin() + current);
        vector<vector<int>> right(coordinates.begin() + current + 1, coordinates.end());

        auto solve = [](const vector<vector<int>>& nums) {
            vector<int> dp;
            for (const auto& p : nums) {
                int val = p[1];
                auto it = lower_bound(dp.begin(), dp.end(), val);
                if (it == dp.end()) {
                    dp.push_back(val);
                } else {
                    *it = val;
                }
            }
            return dp.size();
        };
        int l = solve(filterSubset(left, has, true));  
        int r = solve(filterSubset(right, has, false)); 

        return l + r + 1;
    }

private:
    vector<vector<int>> filterSubset(const vector<vector<int>>& nums, const vector<int>& has, bool isLeft) {
        vector<vector<int>> result;
        for (const auto& coord : nums) {
            if (isLeft) {
                if (coord[0] < has[0] && coord[1] < has[1]) {
                    result.push_back(coord);
                }
            } else {
                if (coord[0] > has[0] && coord[1] > has[1]) {
                    result.push_back(coord);
                }
            }
        }
        return result;
    }
};
```
```Java []
public class Solution {
    public int maxPathLength(int[][] coordinates, int k) {
        int[] has = coordinates[k];
        
        List<int[]> coordsList = new ArrayList<>();
        for (int[] coord : coordinates) {
            coordsList.add(coord);
        }
        
        coordsList.sort((a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]);
            return Integer.compare(b[1], a[1]);
        });
        
        int current = -1;
        for (int i = 0; i < coordsList.size(); i++) {
            if (Arrays.equals(coordsList.get(i), has)) {
                current = i;
                break;
            }
        }
        
        List<int[]> left = coordsList.subList(0, current);
        List<int[]> right = coordsList.subList(current + 1, coordsList.size());
        
        int l = solve(filterSubset(left, has, true));  
        int r = solve(filterSubset(right, has, false)); 
        return l + r + 1;
    }

    private int solve(List<int[]> nums) {
        List<Integer> dp = new ArrayList<>();
        for (int[] p : nums) {
            int val = p[1];
            int idx = Collections.binarySearch(dp, val);
            if (idx < 0) {
                idx = -(idx + 1);
                if (idx == dp.size()) {
                    dp.add(val);
                } else {
                    dp.set(idx, val);
                }
            }
        }
        return dp.size();
    }

    private List<int[]> filterSubset(List<int[]> nums, int[] has, boolean isLeft) {
        List<int[]> result = new ArrayList<>();
        for (int[] coord : nums) {
            if (isLeft) {
                if (coord[0] < has[0] && coord[1] < has[1]) {
                    result.add(coord);
                }
            } else {
                if (coord[0] > has[0] && coord[1] > has[1]) {
                    result.add(coord);
                }
            }
        }
        return result;
    }
}
```

```