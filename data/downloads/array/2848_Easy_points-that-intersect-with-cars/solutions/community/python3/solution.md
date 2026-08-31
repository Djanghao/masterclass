# ✅97.51%🔥1 line code🔥Searching & Counting

**Author:** MrAke
**Votes:** 19
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4074462/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4074462/)

---

# Problem
##### You are given a list of intervals, where each interval represents a car's parking space on a number line. The intervals are represented as pairs [starti, endi], where starti is the starting point of the i-th car's parking space, and endi is the ending point. Your task is to find the number of integer points on the number line that are covered by at least one car's parking space.

##### For example, if you have the intervals [[3,6],[1,5],[4,7]], it means that there are three cars parked on the number line:

##### 1. Car 1 occupies the points from 3 to 6 (inclusive).
##### 2. Car 2 occupies the points from 1 to 5 (inclusive).
##### 3. Car 3 occupies the points from 4 to 7 (inclusive).

##### To solve this problem, you need to find the total number of distinct integer points that are covered by any of these cars' parking spaces. In the example given, the points from 1 to 7 (inclusive) are covered, so the answer is 7.


# Solution

#### The provided solution is implemented as a Python class with a method numberOfPoints. It uses a set to keep track of the distinct integer points that are covered by any of the car parking spaces.

#### Here's a step-by-step explanation of the solution:

#### 1. Initialize an empty set to store the distinct integer points.
#### 2.Iterate through each interval in the nums list using a nested loop:
- For each interval [starti, endi], iterate through the range of integer points from starti to endi (inclusive) using range(i[0], i[1] + 1).
- Add each integer point within this range to the set. Since the set stores only unique values, it ensures that duplicate points are not counted multiple times.

#### 3.Finally, return the length of the set, which represents the total number of distinct integer points that are covered by any of the car parking spaces.

# Code
```Python3 []
class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        return len(set(j for i in nums for j in range(i[0], i[1] + 1)))

```
```python []
class Solution:
    def numberOfPoints(self, nums: List[List[int]]) -> int:
        return len(set(j for i in nums for j in range(i[0], i[1] + 1)))

```
```C# []
public class Solution {
    public int NumberOfPoints(IList<IList<int>> nums) {
        return nums.SelectMany(range => Enumerable.Range(range[0], range[1] - range[0] + 1)).Distinct().Count();
    }
}
```
```C++ []
class Solution {
public:
    int numberOfPoints(std::vector<std::vector<int>>& nums) {
        std::set<int> points;

        for (const std::vector<int>& range : nums) {
            for (int i = range[0]; i <= range[1]; i++) {
                points.insert(i);
            }
        }

        return points.size();
    }
};

```
```C []
int numberOfPoints(int** nums, int numsSize, int* numsColSize) {
    int* points = (int*)malloc(sizeof(int) * 10000); // Assuming a maximum of 10000 distinct points.
    int pointsSize = 0;

    for (int i = 0; i < numsSize; i++) {
        for (int j = nums[i][0]; j <= nums[i][1]; j++) {
            int isDuplicate = 0;

            for (int k = 0; k < pointsSize; k++) {
                if (points[k] == j) {
                    isDuplicate = 1;
                    break;
                }
            }

            if (!isDuplicate) {
                points[pointsSize++] = j;
            }
        }
    }

    free(points);
    return pointsSize;
}

```
```Java []
public class Solution {
    public int numberOfPoints(List<List<Integer>> nums) {
        long count = nums.stream()
                .flatMapToInt(range -> IntStream.rangeClosed(range.get(0), range.get(1)))
                .distinct()
                .count();
        return (int) count; // Cast to int (may lose precision for large counts)
    }
}
```
```javascript []
var numberOfPoints = function(nums) {
    const pointSet = new Set();
    
    for (const [start, end] of nums) {
        for (let i = start; i <= end; i++) {
            pointSet.add(i);
        }
    }
    
    return pointSet.size;
};
```

