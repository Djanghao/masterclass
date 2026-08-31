# [Java/Python] Brute force to optimal | Line Sweep

**Author:** devabhixda
**Votes:** 16
**Link:** [https://leetcode.com/problems/zero-array-transformation-i/solutions/6055578/](https://leetcode.com/problems/zero-array-transformation-i/solutions/6055578/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The very first thought when we see such type of problem is to use a brute force solution that essentially decrements all the indices in the range of given query and checking if all of them became zero at the end. 

The brute force looks like:

```java []
class Solution {
    public boolean isZeroArray(int[] nums, int[][] queries) {
        Map<Integer, Integer> hm = new HashMap<>();
        for(int[] q : queries) {
            for(int i=q[0];i<=q[1];i++) {
                hm.put(i, hm.getOrDefault(i, 0) + 1);
            }
        }
        for(int i=0;i<nums.length;i++) {
            if(!hm.containsKey(i)) {
                if(nums[i] > 0)
                    return false;
            } else if(hm.get(i) < nums[i]) {
                return false;
            }
        }
        return true;
    }
}
```
Now the problem with this approach is that we need to go through each element in the range of given query and in worst case it might be the range from 1 to n itself! This leaves us with a time complexity of O(q * n) which is gonna give us TLE due to the problem constraints.

Now our goal becomes to bring this complexity down so that we could get through the last set of cases that gave us TLE with the brute force.

# Approach
<!-- Describe your approach to solving the problem. -->
We try to identify the bottlenecks in our solution, one thing you might observe is that we are running a nested for loop for each element in the given query range and we can try to improve on that. That is when we can try to relate this problem to a familiar pattern of line sweep.

```
Line Sweep (or Sweep Line) is an algorithmic technique where we sweep an imaginary line (x or y axis) and solve various problem.
There would be an event (entry or event) and based on that we update the information and then return result.
```
Ref: https://leetcode.com/discuss/study-guide/2166045/line-sweep-algorithms

Each of our query is essentially sweeping up this imaginary line and trying to decrement the value as it goes, which is nothing but our original array!

***Simplified idea:***

We leverage the idea of range updates with the prefix sum technique. Instead of directly modifying large segments of the nums array multiple times, we record changes at the boundaries and later apply those changes cumulatively.

***Building the solution:***
1. **Marking Events:** For each query [i, j], we mark the start of the increment at index i (freq[i]++), and we mark the end of the increment at index j + 1 (freq[j + 1]--).
    This is similar to marking "events" in the line sweep algorithm, where the effect starts at i and ends after j.

2.  **Sweeping Over the Line (or Array):** Once all the queries are processed, we iterate through the array and compute the cumulative effect (curFreq) from the frequency array freq. At each step, we accumulate the frequency from previous operations and check if the result meets the condition (i.e., whether curFreq >= nums[i]).

# Complexity
- Time complexity: $$O(q)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public boolean isZeroArray(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] freq = new int[n];
        
        for(int[] q : queries) {
            freq[q[0]]++;
            if(q[1] + 1 < n) {
                freq[q[1] + 1]--
            }
        }
        
        int curFreq = 0;
        for(int i = 0; i < n; i++) {
            curFreq += freq[i];
            if(curFreq < nums[i]) {
                return false;
            }
        }
        return true;
    }
}
```
``` python []
class Solution:
    def isZeroArray(self, nums, queries):
        n = len(nums)
        freq = [0] * n
        
        for q in queries:
            freq[q[0]] += 1
            if q[1] + 1 < n:
                freq[q[1] + 1] -= 1
        
        curFreq = 0
        for i in range(n):
            curFreq += freq[i]
            if curFreq < nums[i]:
                return False
        
        return True

```
