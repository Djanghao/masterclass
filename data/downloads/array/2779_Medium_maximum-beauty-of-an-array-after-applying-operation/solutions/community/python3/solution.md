# Python | Sweep Line Pattern

**Author:** Khosiyat
**Votes:** 34
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134225/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134225/)

---

[see the Successfully Accepted Submission](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/submissions/1475674593/?envType=daily-question&envId=2024-12-11)

# Code
```python3 []
class Solution:
    def maximumBeauty(self, nums: list[int], k: int) -> int:
        # Extend the range for each element in nums
        events = []
        for num in nums:
            events.append((num - k, 1))  # Start of range
            events.append((num + k + 1, -1))  # End of range (exclusive)

        # Sort events by value, and in case of tie, by type of event
        events.sort()

        # Use a sweep line approach to calculate the maximum overlap
        max_beauty = 0
        current_count = 0
        for value, effect in events:
            current_count += effect
            max_beauty = max(max_beauty, current_count)

        return max_beauty
```

## Approach:

### Range Expansion:

For each number in the array, determine the possible range it can be transformed into: 
\\([\	ext{nums}[i] - k, \	ext{nums}[i] + k]\\).

Represent these ranges as events:

- A starting event \\(+1\\) at \\(\	ext{nums}[i] - k\\).
- An ending event \\(-1\\) at \\(\	ext{nums}[i] + k + 1\\) (exclusive).

### Event Sorting:

Sort these events. Sorting ensures that we process the range endpoints in ascending order.

### Sweep Line:

- Traverse the sorted events, keeping track of the current count of overlapping ranges.
- Update the maximum count as we process each event.

### Result:

The maximum overlap during the traversal gives the longest subsequence of equal elements we can achieve.

### Complexity:

- **Time Complexity**: \\(O(n \\log n)\\), where \\(n\\) is the length of `nums` (for sorting the events).
- **Space Complexity**: \\(O(n)\\), for storing the events.



![image](./images/0.jpeg)
