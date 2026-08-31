# Ex-Amazon explains a solution with a video, Python, JavaScript, Java and C++

**Author:** niits
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3819301/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3819301/)

---

# Intuition
Using Binary Search to find the minimum speed

---

# Solution Video
## *** Please upvote for this article. *** 

https://youtu.be/frpAeLiX1j0

# Subscribe to my channel from here. I have 231 videos as of July 26th
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

---

# Approach
This is based on Python code. Other languages might be different a bit.

1. The function `minSpeedOnTime` takes two parameters: `dist`, a list of integers representing the distances to be covered, and `hour`, a float representing the maximum allowed time to reach the destination.

2. Inside the `minSpeedOnTime` function, a nested function `can_reach_on_time` is defined, which takes a `speed` parameter and checks if it's possible to reach the destination office on time with that given speed.

3. In the `can_reach_on_time` function, the variable `total_time` is calculated. It represents the total time required to reach the destination office with the given `speed`. It is calculated by iterating through the distances in `dist[:-1]`, summing up the time required to cover each distance with the given `speed` (taking into account any potential rounding up using `//` operator), and then adding the time required to cover the last distance (`dist[-1]`) using the given `speed`.

4. The main function `minSpeedOnTime` then sets up the binary search to find the minimum speed needed to reach the destination office on time. The initial search space for the speed is between `1` and `10**7`.

5. The binary search loop runs until `left` is less than `right`.

6. In each iteration of the binary search loop, the middle value `mid` is calculated as `(left + right) // 2`.

7. The `can_reach_on_time` function is called with `mid` as an argument to check if it's possible to reach the office on time with the speed `mid`.

8. If it's possible to reach on time with the speed `mid`, the right boundary `right` is updated to `mid`, narrowing the search space to the left half.

9. If it's not possible to reach on time with the speed `mid`, the left boundary `left` is updated to `mid + 1`, narrowing the search space to the right half.

10. The binary search continues until `left` and `right` converge, and when that happens, the loop stops.

11. After the binary search loop, the function checks if it's possible to reach on time with the speed `left`. If so, the function returns the `left` value, which represents the minimum speed needed to reach the destination on time.

12. If it's not possible to reach on time with any speed within the given search space, the function returns `-1`.

In summary, this algorithm uses binary search to efficiently find the minimum speed needed to reach the destination office on time. The time complexity is `O(N * log M)`, where `N` is the size of the `dist` list and `M` is the upper bound of the possible speeds. The space complexity is `O(1)` as it only uses a constant amount of additional space.

# Complexity
- Time complexity: O(N * log M)

1. The `can_reach_on_time` function contains a loop that iterates through the elements of the `dist` list. The number of iterations in this loop is proportional to the size of the `dist` list, which is `O(N)`, where `N` is the length of the `dist` list.
2. The binary search loop runs until `left` and `right` converge. The maximum number of iterations in the binary search is `O(log M)`, where `M` is the upper bound of the possible speeds (`10**7` in this case) because we are dividing the search space in half at each step.
3. The function `can_reach_on_time` is called multiple times during the binary search. The number of calls to this function is proportional to the number of iterations in the binary search, which is `O(log M)`.

Therefore, the overall time complexity of the code is `O(N * log M)`, where `N` is the length of the `dist` list and `M` is the upper bound of the possible speeds.

- Space Complexity: O(1)

1. The only additional space used is for the can_reach_on_time function. The space used by this function is constant, as it does not depend on the size of the input.
2. The variables used in the binary search (e.g., left, right, mid) also consume constant space.

Thus, the overall space complexity of the code is O(1) (constant), which means the space used by the algorithm does not grow with the size of the input dist list.

```python []
class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:

        # check if it's possible to reach the office on time with a given speed
        def can_reach_on_time(speed):
            total_time = sum( ((d + speed - 1) // speed) for d in dist[:-1]) + dist[-1] / speed
            return total_time <= hour

        # binary search to find the minimum speed
        left, right = 1, 10**7
        while left < right:
            mid = (left + right) // 2
            if can_reach_on_time(mid):
                right = mid
            else:
                left = mid + 1
        
        if can_reach_on_time(left):
            return left
        else:
            return -1
```
```javascript []
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    function canReachOnTime(speed) {
        let total_time = dist.slice(0, -1).reduce((acc, d) => acc + Math.ceil(d / speed), 0) + dist[dist.length - 1] / speed;
        return total_time <= hour;
    }

    let left = 1, right = 10 ** 7;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canReachOnTime(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if (canReachOnTime(left)) {
        return left;
    } else {
        return -1;
    }    
};
```
```java []
class Solution {
    public int minSpeedOnTime(int[] dist, double hour) {
        int left = 1, right = 10_000_000;
        while (left < right) {
            int mid = (left + right) / 2;
            if (canReachOnTime(mid, dist, hour)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        if (canReachOnTime(left, dist, hour)) {
            return left;
        } else {
            return -1;
        }
    }

    // Check if it's possible to reach the office on time with a given speed
    boolean canReachOnTime(int speed, int[] dist, double hour) {
        double totalTime = 0.0;
        for (int i = 0; i < dist.length - 1; i++) {
            totalTime += Math.ceil((double) dist[i] / speed);
        }
        totalTime += dist[dist.length - 1] / (double) speed;
        return totalTime <= hour;
    }    
}
```
```C++ []
class Solution {
public:
    int minSpeedOnTime(vector<int>& dist, double hour) {
        // check if it's possible to reach the office on time with a given speed
        auto canReachOnTime = [&](int speed) -> bool {
            double total_time = std::accumulate(dist.begin(), dist.end() - 1, 0.0, [&](double acc, int d) { return acc + std::ceil((double) d / speed); }) + dist.back() / (double) speed;
            return total_time <= hour;
        };

        int left = 1, right = 10'000'000;
        while (left < right) {
            int mid = (left + right) / 2;
            if (canReachOnTime(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        if (canReachOnTime(left)) {
            return left;
        } else {
            return -1;
        }        
    }
};
```
