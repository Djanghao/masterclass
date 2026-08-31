# [Python] One-Liner using Prefix-Sum with explanation

**Author:** C0R3
**Votes:** 57
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/585576/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/585576/)

---

We need to find a start value that needs to be big enough so that for any number in the input array the sum of the start value and all further numbers up to that number is at least one. To find such a number we need to sum up all the numbers and at each step check if the current prefix sum is a new minimum. Our start value needs to make up for that minimum prefix sum and we also need to add one so we are at least at 1 (```start_value = -min_prefix_sum + 1```).

Here is the calculation using the sample input:
```
num                 -3   2  -3   4   2
prefix sum          -3  -1  -4   0   2
min prefix sum      -3  -3  -4  -4  -4
min start value      4   4   5   5   5
```

**Implementation**
The implementation is straight forward. We just have to iterate over the input and add the current number to the prefix sum. Then we can calculate the minimum start value with that.

Time complexity: ```O(n)```
Space complexity: ```O(1)```
```python
class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        prefix_sum = 0
        min_start_value = 1
        
        for num in nums:
            prefix_sum += num
            min_start_value = max(min_start_value, 1 - prefix_sum)
        
        return min_start_value
```

**One-Liner**
The [accumulate](https://docs.python.org/3/library/itertools.html#itertools.accumulate) function from python's itertools returns an iterator over the prefix sums and helps us to create a nice one-liner.
```python
class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        return 1 - min(accumulate(nums, initial=0))
```
