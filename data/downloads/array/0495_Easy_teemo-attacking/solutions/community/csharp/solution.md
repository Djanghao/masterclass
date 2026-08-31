# Simplest way to solve Find Poisoned Duration Problem

**Author:** patel_jaimin
**Votes:** 1
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/5771199/](https://leetcode.com/problems/teemo-attacking/solutions/5771199/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves calculating the total duration of a poison effect, considering overlapping poison durations. We can approach this by iterating through the attack times and updating the end time of the poison effect accordingly.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize variables:
    - Set `out` to `duration` to represent the initial poisoned duration.
    - Set `endTime` to track the end time of the current poison effect.
2. Iterate through attack times:
    - For each attack time:
        - If the current attack time is greater than or equal to `endTime`, it means the current attack doesn't overlap with the previous poison effect. So, update endTime and add `duration` to `out`.
        - If the attack overlaps, calculate the overlap duration and add it to out. Then, update endTime with the end time of the current attack.
3. Return the result: Return `out`, which represents the total poisoned duration.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Dart []
class Solution {
  int findPoisonedDuration(List<int> timeSeries, int duration) {
    int out = duration;
  for (int i = 1; i < timeSeries.length; i++) {
    out += min(timeSeries[i] - timeSeries[i - 1], duration);
  }
  return out;
}

int min(int a, int b) {
  return a < b ? a : b;
}
}
```
```c []
int findPoisonedDuration(int* timeSeries, int timeSeriesSize, int duration) {
    int out = duration;
    for (int i = 1; i < timeSeriesSize; i++) {
        out += min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    return out;
}
int min(int a, int b) {
    return a < b ? a : b;
}
```
```cpp []
class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        int size = timeSeries.size();
        int out = duration;
        for (int i = 1; i < size; i++) {
            out += min(timeSeries[i] - timeSeries[i - 1], duration);
        }
        return out;
    }
};
```
```C# []
public class Solution {
    public int FindPoisonedDuration(int[] timeSeries, int dur) {
        int size = timeSeries.Length;
        int ans = dur;

        for (int i = 1; i < size; i++) {
            ans += Math.Min(timeSeries[i] - timeSeries[i - 1], dur);
        }

        return ans;
    }
}
```
```java []
class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        int size = timeSeries.length;
        int out = duration;
        for (int i = 1; i < size; i++) {
            out += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
        }
        return out;
    }
}
```
```javascript []
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    const size = timeSeries.length;
    let out = duration;
    for (let i = 1; i < size; i++) {
        out += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    return out;
};
```
```typescript []
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    const size = timeSeries.length;
    let out = duration;
    for (let i = 1; i < size; i++) {
        out += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    return out;
};
```
```Go []
func findPoisonedDuration(timeSeries []int, duration int) int {
    size := len(timeSeries)
    out := duration
    for i := 1; i < size; i++ {
        out += min(timeSeries[i]-timeSeries[i-1], duration)
    }
    return out
}
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
```python []
class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        size = len(timeSeries)
        out = duration
        for i in range(1, size):
            out += min(timeSeries[i] - timeSeries[i - 1], duration)
        return out
```