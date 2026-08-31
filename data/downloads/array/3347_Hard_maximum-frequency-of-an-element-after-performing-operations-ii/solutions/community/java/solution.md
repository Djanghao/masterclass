# [Python3/C++/Java] Sweep Line - Detail Explanation

**Author:** dolong2110
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solutions/6047202/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-ii/solutions/6047202/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Each point we will have the range `[point - k, point + k]` that it can affects
- The question asking about the point which can have the most affected.
- the range of points we should check should be from `[min_point - k, max_point + k]`.
- For every point in this range we find the points with the most affected
- It sounds like most accumulate points in range, so it is sweep line
- for each point in the line, it can be affected by 2 kind of point:
    - the point at this location itself
    - other points`p` which the current point is in range `[p - k, p + k]`
- Thus, it is a bit tricky than usual sweep line.
- More Sweep Line Problem can be found [here](https://leetcode.com/problem-list/ms0edv4m/)

# Approach
<!-- Describe your approach to solving the problem. -->
**1. Data Structures**:

- `points_cover`: A Counter (dictionary-like object) to store the net change in the number of "covering intervals" at each point on the number line.
- `cnt_points`: A Counter to store the frequency of each number in the input array nums.
`points`: A set to store all unique numbers in nums as well as the endpoints of the intervals defined by `k`.

**2. Building the Sweep Line**:

- The code iterates through each `num` in `nums`.
    - It increments the count of `num` in `cnt_points`.
    - For each `num`, it creates a "covering interval" of `[num - k, num + k]`.
    - To represent this interval on the sweep line:
        - It increments `points_cover` at `num - k` (start of the interval).
        - It decrements points_cover at `num + k + 1` (end of the interval + 1). This is because the interval is inclusive of `num + k`.
        - It adds `num`, `num - k`, and `num + k + 1` to the `points` set.

**3. Sweeping the Line**:

- The code sorts the `points` in ascending order.
- It iterates through the sorted points:
    - `points_cover_this_point` tracks the cumulative sum of `points_cover` up to the current point. This essentially tells us how many intervals are "active" or "covering" the current `point`.
    - For each point, it calculates the maximum frequency achievable at that point. This is done by taking the original count of the `point` `cnt_points[point]` and adding the minimum of the number of active intervals covering this point minus the original count of the point `points_cover_this_point - cnt_points[point]` . This represents how many times we can increment the point using the available operations within the k constraint - The total allowed operations (numOperations).
    - It updates the `res` (result) to store the maximum frequency found so far.

**4. Return Result**:

- The code returns the res, which holds the maximum frequency achieved after the sweep line process.

In essence, the sweep line approach helps to efficiently determine how many numbers can be incremented to a certain value while staying within the `k` constraint and the limit of `numOperations`. By processing the points in sorted order, it keeps track of the active intervals and calculates the maximum frequency at each point.

**Example**:

Let's say nums = [1, 4, 8, 13], k = 5, and numOperations = 2.

- The code will create intervals like [1-5, 1+5], [4-5, 4+5], etc.
- The points set will contain {-4, 1, 6, -1, 4, 9, 3, 8, 13, 18}.
- During the sweep, at point 4, it will find that it's covered by two intervals ([1-5, 1+5] and [4-5, 4+5]).
- It can use the numOperations to increment the frequency of 4 by 2 (within the constraint of k).
- This approach efficiently finds the maximum frequency achievable after the allowed operations.

# Complexity
- Time complexity: $$O(NlogN)$$ - `N` number of possible points
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxFrequency(self, nums: List[int], k: int, numOperations: int) -> int:
        points_cover = collections.Counter()
        cnt_points = collections.Counter()
        points = set()
        for num in nums:
            cnt_points[num] += 1
            points_cover[num - k] += 1
            points_cover[num + k + 1] -= 1
            points.update({num, num - k, num + k + 1})
        res = points_cover_this_point = 0
        for point in sorted(points):
            points_cover_this_point += points_cover[point]
            res = max(res, cnt_points[point] + 
                        min(points_cover_this_point - cnt_points[point], numOperations))
        return res
```
``` C++ []
class Solution {
public:
    int maxFrequency(vector<int>& nums, int k, int numOperations) {
        unordered_map<int, int> points_cover;
        unordered_map<int, int> cnt_points;
        set<int> points;

        for (int num : nums) {
            cnt_points[num]++;
            points_cover[num - k]++;
            points_cover[num + k + 1]--;
            points.insert(num);
            points.insert(num - k);
            points.insert(num + k + 1);
        }

        int res = 0;
        int points_cover_this_point = 0;

        for (int point : points) {
            points_cover_this_point += points_cover[point];
            res = max(res, cnt_points[point] + 
                        min(points_cover_this_point - cnt_points[point], numOperations));
        }

        return res;
    }
};
```
``` java []
class Solution {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        Map<Integer, Integer> pointsCover = new HashMap<>();
        Map<Integer, Integer> cntPoints = new HashMap<>();
        Set<Integer> points = new TreeSet<>(); // TreeSet to keep points sorted

        for (int num : nums) {
            cntPoints.put(num, cntPoints.getOrDefault(num, 0) + 1);
            pointsCover.put(num - k, pointsCover.getOrDefault(num - k, 0) + 1);
            pointsCover.put(num + k + 1, pointsCover.getOrDefault(num + k + 1, 0) - 1);
            points.add(num);
            points.add(num - k);
            points.add(num + k + 1);
        }

        int res = 0;
        int pointsCoverThisPoint = 0;

        for (int point : points) {
            pointsCoverThisPoint += pointsCover.getOrDefault(point, 0);
            res = Math.max(res, cntPoints.getOrDefault(point, 0) + 
                        Math.min(pointsCoverThisPoint - cntPoints.getOrDefault(point, 0), numOperations));
        }

        return res;
    }
}
```