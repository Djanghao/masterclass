# Python - One Liner | Beats 100% Time and Space | Multiple Solutions | Explanation

**Author:** domthedeveloper
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1923717/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1923717/)

---

**Idea**:
* Find the smallest element in the array.
* Build the *expected* sorted set.
* Iterate through the list, removing the element from the expected set.
* If we find an element that does not exist in the expected set, return `false`.
* If we have any elements left in the expected set, return false.
* Otherwise, return `true`.

**Solution**:
```
class Solution:
    def isConsecutive(self, nums):
        m = min(nums)
        expected = set(range(m, len(nums) + m))
        
        for n in nums:
            if n in expected: expected.remove(n)
            else: return False
        
        return len(expected) == 0
```

**Idea**:
* Find the smallest element in the array.
* Build the *expected* sorted set.
* Compare the array as a set to the the expected sorted set.

Since order does not matter with set logic, we arrive at the correct answer.

**Solution**:
```
class Solution:
    def isConsecutive(self, nums):
        m = min(nums)
        expected = set(range(m, len(nums) + m))
        return set(nums) == set(expected)
```

**One-Liner**:
```
class Solution:
    def isConsecutive(self, nums):
        return set(nums) == set(range(m := min(nums), len(nums) + m))
```

Note: Using the new [walrus operator](https://realpython.com/python-walrus-operator/), we can avoid computing the *min* function twice for our one-liner.

**Idea** (Improvement Credit: [WangQiuc](https://leetcode.com/WangQiuc)):
* We compare the difference between the largest number and the smallest number + 1 to the length.
* To ensure there are no duplicate integers, we compare the length of the array with the length of the set of the array.

These two properties give us our answer.

**Solution:**
```
class Solution:
    def isConsecutive(self, nums):
        small, large, length, set_length = min(nums), max(nums), len(nums), len(set(nums))
        return large-small+1 == length == set_length
```

**One-Liner**:
```
class Solution:
    def isConsecutive(self, nums):
        return max(nums)-min(nums)+1 == len(nums) == len(set(nums))
```