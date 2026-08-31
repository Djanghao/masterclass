# Python 3 | Intuitive | Brute Force + Optimal

**Author:** ndus
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/1907012/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/1907012/)

---

# Approach
Goals: return the single element of triangular sum

![image](./images/0.png)


We can see from the image that we will sum up the first cell and the second cell. Then, since it's triangular, the length of the top row is greater (+1) than the next row. 

## Brute Force

```python
class Solution:
  def triangularSum(self, nums: List[int]) -> int:
    n = len(nums)

    if n == 0: return 0
    if n == 1: return nums[0]

    prev = list(nums)
    while n > 1:
      cur = [0]*(n-1)
      for i in range(1, len(prev)):
        cur[i-1] = (prev[i] + prev[i-1]) % 10
      prev = cur
      n -= 1
    return cur[n//2]
```

## Optimal

```python
class Solution:
  def triangularSum(self, nums: List[int]) -> int:
    n = len(nums)
    while n > 0:
      for i in range(n-1):
        nums[i] = (nums[i] + nums[i+1]) % 10
      n -= 1
    return nums[0]
```