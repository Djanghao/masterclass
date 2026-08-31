# ⏳ [VIDEO] O(m log k) Maximizing Computer Run Time with Binary Search

**Author:** vanAmsen
**Votes:** 32
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3821393/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3821393/)

---

# Intuition
When I first read this problem, I realized that it's not just about using each battery to its full capacity before moving on to the next. The goal here is to maximize the running time of all computers, and a simple linear approach would not achieve that. The challenge here lies in striking a balance between using batteries that have the most power and ensuring that no energy is wasted.

## Video Explenation & Live Coding
https://youtu.be/_qFXyY5vBIY

# Approach
The approach I took for this problem is to find a balance between using batteries that have the most power and ensuring that no energy is wasted. I employed a binary search strategy to locate the maximum possible running time.

Initially, I set 1 as the left boundary and the total power of all batteries divided by 'n' as the right boundary. This is because 1 is the minimum time a computer can run (given the constraints that battery power is at least 1) and `sum(batteries) / n` is the maximum time all computers can run if we could distribute the power of all batteries evenly among the computers.

In the binary search, I set a target running time and checked if we could reach this target with the available batteries. This check is done using the line of code `if sum(min(battery, target) for battery in batteries) >= target * n:`. 

The expression `min(battery, target) for battery in batteries` calculates how much of each battery's power we can use to achieve the target running time. If a battery's power is more than the target, we can only use power equal to the target from it. If a battery's power is less than the target, we can use all of its power. The sum of these amounts is the total power we can use to achieve the target running time.

If this total power is greater than or equal to `target * n` (the total power needed to run all `n` computers for `target` time), it means we can achieve the target running time with the available batteries, so I update the left boundary to the target.

If we couldn't achieve the target running time (i.e., the total power is less than `target * n`), I update the right boundary to one less than the target. I continue this process until the left and right boundaries meet, at which point we've found the maximum possible running time.

# Complexity
- Time complexity: The time complexity for this problem is \\(O(m  log k)\\), where \\(m\\) is the length of the input array batteries and \\(k\\) is the maximum power of one battery.

- Space complexity: The space complexity for this problem is \\(O(1)\\). During the binary search, we only need to record the boundaries of the searching space and the power extra, and the accumulative sum of extra, which only takes constant space.

# Code
```Python []
class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:
        left, right = 1, sum(batteries) // n 
        while left < right: 
            target = right - (right - left) // 2 
            if sum(min(battery, target) for battery in batteries) >= target * n: 
                left = target 
            else: 
                right = target - 1 
        return left 
```
``` C++ []
class Solution {
public:
    long long maxRunTime(int n, std::vector<int>& batteries) {
        std::sort(batteries.begin(), batteries.end());
        long long left = 1, right = std::accumulate(batteries.begin(), batteries.end(), 0LL) / n;
        while (left < right) {
            long long target = right - (right - left) / 2;
            long long total = std::accumulate(batteries.begin(), batteries.end(), 0LL, [&target](long long a, int b) { return a + std::min(static_cast<long long>(b), target); });
            if (total >= target * n) {
                left = target;
            } else {
                right = target - 1;
            }
        }
        return left;
    }
};
```
``` Java []
public class Solution {
    public long maxRunTime(int n, int[] batteries) {
        Arrays.sort(batteries);
        long left = 1, right = (long)Arrays.stream(batteries).asLongStream().sum() / n;
        while (left < right) {
            long target = right - (right - left) / 2;
            long total = Arrays.stream(batteries).asLongStream().map(battery -> Math.min(battery, target)).sum();
            if (total >= target * n) {
                left = target;
            } else {
                right = target - 1;
            }
        }
        return left;
    }
}
```
``` C# []
public class Solution {
    public long MaxRunTime(int n, int[] batteries) {
        Array.Sort(batteries);
        long left = 1, right = (long)batteries.Sum(b => (long)b) / n;
        while (left < right) {
            long target = right - (right - left) / 2;
            long total = batteries.Sum(battery => Math.Min((long)battery, target));
            if (total >= target * n) {
                left = target;
            } else {
                right = target - 1;
            }
        }
        return left;
    }
}
```
``` JavaScript []
/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
            batteries.sort((a, b) => a - b);
        let left = 1, right = Math.floor(batteries.reduce((a, b) => a + b) / n);
        while (left < right) {
            let target = right - Math.floor((right - left) / 2);
            let total = batteries.reduce((a, b) => a + Math.min(b, target), 0);
            if (total >= target * n) {
                left = target;
            } else {
                right = target - 1;
            }
        }
        return left;
};
```              
## Video Python & JavaScript

https://youtu.be/10BC-5zKrb0   
https://youtu.be/xnkXF1Yed94   
