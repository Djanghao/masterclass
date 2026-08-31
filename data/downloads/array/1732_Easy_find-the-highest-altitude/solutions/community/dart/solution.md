# Simplest way to solve and beats 100%

**Author:** patel_jaimin
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/4990229/](https://leetcode.com/problems/find-the-highest-altitude/solutions/4990229/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to find the largest altitude after applying a series of altitude gains. The altitude is represented as an integer, and at each step, a gain or loss in altitude is provided in an array. Our task is to compute the highest altitude reached after applying all the gains in order.

At first glance, the problem seems like a simple prefix sum problem, where each element in the array indicates a change (either positive or negative) to the current altitude. The key insight is that we don't need to track all altitudes \u2014 just the current altitude and the maximum value we've encountered.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Prefix Sum Concept:

    - Start at an initial altitude of 0.
    - As we iterate through the array of `gain`, we maintain a `prefixSum`, which keeps track of the current altitude after applying the gains in order.
    - For each altitude change (i.e., each element in the `gain` array), update the `prefixSum` by adding the value of that element.
2. Tracking Maximum Altitude:

    - As we update the `prefixSum` at each step, we need to keep track of the maximum altitude we've reached so far.
    - At the end of the loop, the largest value encountered in `prefixSum` is the highest altitude.
3. Result:

    - After iterating through the entire `gain` array, we simply return the largest altitude value we've encountered.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
int largestAltitude(int* gain, int gainSize) {
    int max = 0;
    int prefixSum = 0;

    for (int i = 0; i < gainSize; i++) {
        prefixSum += gain[i];
        if (prefixSum > max) {
            max = prefixSum;
        }
    }

    return max;
}
```
```cpp []
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int ans=0;
        if(gain[0]>ans){
            ans=gain[0];
        }
        for(int i=1;i<gain.size();i++){
            gain[i]=gain[i-1]+gain[i];
            if(gain[i]>ans){
                ans=gain[i];
            }
        }
        return ans;
    }
};
```
```csharp []
public class Solution {
    public int LargestAltitude(int[] gain) {
        int max = 0;
        int prefixSum = 0;

        foreach (int g in gain) {
            prefixSum += g;
            max = Math.Max(prefixSum, max);
        }

        return max;
    }
}
```
```javascript []
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let prefixSum = 0;
    gain.forEach((g) => {
        prefixSum += g;
        max = Math.max(prefixSum, max);
    });

    return max;
};
```
```typescript []
function largestAltitude(gain: number[]): number {
    let max = 0;
    let prefixSum = 0;
    gain.forEach((g) => {
        prefixSum += g;
        max = Math.max(prefixSum, max);
    });

    return max;
};
```
```java []
class Solution {
    public int largestAltitude(int[] gain) {
        int ans=0;
        if(gain[0]>ans){
            ans=gain[0];
        }
        for(int i=1;i<gain.length;i++){
            gain[i]=gain[i-1]+gain[i];
            if(gain[i]>ans){
                ans=gain[i];
            }
        }
        return ans;
    }
}
```
```python []
class Solution(object):
    def largestAltitude(self, gain):
        """
        :type gain: List[int]
        :rtype: int
        """
        max_altitude = 0
        prefix_sum = 0

        for g in gain:
            prefix_sum += g
            max_altitude = max(max_altitude, prefix_sum)

        return max_altitude
```
```python3 []
class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        max_altitude = 0
        prefix_sum = 0

        for g in gain:
            prefix_sum += g
            max_altitude = max(max_altitude, prefix_sum)

        return max_altitude
```
```Dart []
class Solution {
  int largestAltitude(List<int> gain) {
    int max = 0;
    int prefixSum = 0;

    for (int g in gain) {
        prefixSum += g;
        max = (prefixSum > max) ? prefixSum : max;
    }

    return max;
  }
}
```
```Go []
func largestAltitude(gain []int) int {
    max := 0
    prefixSum := 0

    for _, g := range gain {
        prefixSum += g
        if prefixSum > max {
            max = prefixSum
        }
    }

    return max
}
```

![WhatsApp Image 2024-11-20 at 1.42.14 PM.jpeg](./images/0.jpeg)
