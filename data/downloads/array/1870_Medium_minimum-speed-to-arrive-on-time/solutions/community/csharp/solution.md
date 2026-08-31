# 🚂 [VIDEO] Beats 95% 🚀 All Aboard the Coding Express: Finding the Minimum Speed with Binary Search

**Author:** vanAmsen
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3820207/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3820207/)

---

# Intuition
Upon reading this problem, it quickly becomes clear that there's a time constraint on the total journey to the office. This hints towards optimizing the speed of travel. Since we need to find the minimum speed, it seems like a good fit for a binary search algorithm, where we iteratively refine our search for the optimal speed.

https://youtu.be/a3VgSDzD-B0

# Approach
Our approach to solving this problem is to use a binary search algorithm to find the minimum speed. We start by checking whether it's possible to reach the office in the given time. If it's not possible, we return -1 immediately.

Next, we perform a binary search from 1 to the maximum of the maximum distance and the last distance divided by the remaining time after each train ride takes 1 hour. We define a helper function, `canArriveOnTime`, that checks if we can arrive at the office on time with a given speed. This function calculates the total time taken by adding up the time each train takes to reach the destination. If we can arrive on time with the mid speed, we update the right bound to mid, otherwise, we update the left bound to mid + 1. We repeat this process until we find the minimum speed.

# Complexity
- Time complexity: The time complexity of this solution is \\(O(n \\log m)\\), where \\(n\\) is the number of train rides and \\(m\\) is the maximum distance. This is because for each possible speed, we check if we can arrive on time, which requires iterating over all the train rides.

- Space complexity: The space complexity is \\(O(1)\\), as we only use a constant amount of space to store the speed, distances, and time.

This code effectively solves the problem using the power of binary search and some mathematical calculations, demonstrating the flexibility and usefulness of these techniques in solving complex problems.

# Code
```Python []
class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        def canArriveOnTime(speed): 
            return sum(math.ceil(d / speed) for d in dist[:-1]) + dist[-1] / speed <= hour 

        n = len(dist) 
        if n - 1 > hour or hour - n + 1 <= 0: 
            return -1 

        left, right = 1, max(max(dist), math.ceil(dist[-1] / (hour - n + 1))) 
        while left < right: 
            mid = (left + right) // 2 
            if canArriveOnTime(mid): 
                right = mid 
            else: 
                left = mid + 1 

        return left 
```
``` C++ []
class Solution {
public:
    int minSpeedOnTime(vector<int>& dist, double hour) {
        int n = dist.size();
        if(n - 1 > hour || hour - n + 1 <= 0) return -1;
        int left = 1, right = max(*max_element(dist.begin(), dist.end()), (int)ceil(dist[n - 1] / (hour - n + 1)));
        while(left < right) {
            int mid = left + (right - left) / 2;
            double total_time = 0;
            for(int i = 0; i < n - 1; i++) total_time += ceil((double)dist[i] / mid);
            total_time += (double)dist[n - 1] / mid;
            if(total_time <= hour) right = mid;
            else left = mid + 1;
        }
        return left;
    }
};
```
``` C# []
public class Solution {
    public int MinSpeedOnTime(int[] dist, double hour) {
        int n = dist.Length;
        if(n - 1 > hour || hour - n + 1 <= 0) return -1;
        int left = 1, right = Math.Max(dist.Max(), (int)Math.Ceiling(dist[n - 1] / (hour - n + 1)));
        while(left < right) {
            int mid = left + (right - left) / 2;
            double total_time = 0;
            for(int i = 0; i < n - 1; i++) total_time += Math.Ceiling((double)dist[i] / mid);
            total_time += (double)dist[n - 1] / mid;
            if(total_time <= hour) right = mid;
            else left = mid + 1;
        }
        return left;
    }
}
```
``` Java []
class Solution {
    public int minSpeedOnTime(int[] dist, double hour) {
        int n = dist.length;
        if(n - 1 > hour || hour - n + 1 <= 0) return -1;
        int left = 1, right = Math.max(Arrays.stream(dist).max().getAsInt(), (int)Math.ceil(dist[n - 1] / (hour - n + 1)));
        while(left < right) {
            int mid = left + (right - left) / 2;
            double total_time = 0;
            for(int i = 0; i < n - 1; i++) total_time += Math.ceil((double)dist[i] / mid);
            total_time += (double)dist[n - 1] / mid;
            if(total_time <= hour) right = mid;
            else left = mid + 1;
        }
        return left;
    }
}
```
``` JavaScript []
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    const canArriveOnTime = (speed) => {
        return dist.slice(0, -1).reduce((total, d) => total + Math.ceil(d / speed), 0) + dist[dist.length - 1] / speed <= hour;
    };

    let n = dist.length;
    if (n - 1 > hour || hour - n + 1 <= 0) {
        return -1;
    }

    let left = 1, right = Math.max(...dist, Math.ceil(dist[dist.length - 1] / (hour - n + 1)));
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canArriveOnTime(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
```