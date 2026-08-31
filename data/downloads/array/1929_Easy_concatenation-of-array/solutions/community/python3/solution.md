# ✅Detailed Explanation💯5 Different Ways to Solve in Python🔥Beginner Friendly🔥

**Author:** Saketh3011
**Votes:** 107
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/5186130/](https://leetcode.com/problems/concatenation-of-array/solutions/5186130/)

---



<details>
<summary><h2> 5 Methods Code Summary (Click to Expand)</h2></summary>

``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        result = []
        for num in nums:
            result.append(num)  # Add each element from nums
        for num in nums:
            result.append(num)  # Add each element again
        return result
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [0] * (2 * n)  # Create a new list of size 2n
        for i in range(n):
            result[i] = nums[i]      # Copy the first part
            result[i + n] = nums[i]  # Copy the second part
        return result
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        nums.extend(nums)  # Extend the list with itself
        return nums
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums  # Concatenate the list with itself
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums * 2  # Repeat the list twice
```

</details>

---

# \uD83C\uDFAF Problem Explanation:
We are given a `array` or in python we call it a `list`.
The goal is to concatenate/combine/add the list with itself, meaning if the input array is `[1, 2, 3]`, the output should be `[1, 2, 3, 1, 2, 3]`.

## \uD83D\uDD0D Methods To Solve This Problem:
This post covers five different methods to concatenate an array with itself in Python. Each method is explained in a beginner-friendly way.
1. Using Loop and Append Method
2. Using Loop and Changing Element Value
3. Using Extend Method
4. Using `+` Operator
5. Using `*` Operator



---

# Method 1: Using Loop and Append Method

In this method, we use a loop to add each element from the original list to a new list twice.

### \uD83E\uDDE0 Approach:
1. Start with an empty list called `result`.
2. Loop through the original list and append each element to `result`.
3. Loop through the original list again and append each element to `result`.
4. Return the `result` list.

### \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        result = []
        for num in nums:
            result.append(num)  # Add each element from nums
        for num in nums:
            result.append(num)  # Add each element again
        return result
```

---

# Method 2: Using Loop and Changing Element Value

In this method, we create a new list of the required size and use a loop to set each element.

### \uD83E\uDDE0 Approach:
1. Determine the length of the original list.
2. Create a new list called `result` with twice the length of the original list.
3. Use a loop to set each element in the new list:
   - First, copy elements from the original list.
   - Then, copy elements from the original list again, starting at the next index.
4. Return the `result` list.

### \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [0] * (2 * n)  # Create a new list of size 2n
        for i in range(n):
            result[i] = nums[i]      # Copy the first part
            result[i + n] = nums[i]  # Copy the second part
        return result
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [0] * (2 * n)  # Create a new list of size 2n
        for i, num in enumerate(nums):
            result[i] = num         # Copy the first part
            result[i + n] = num     # Copy the second part
        return result
```

> Above two methods are very beginner way to do. Next 3 are way easier and faster.

---

# Method 3: Using Extend Method

In this method, we use the `extend` method to add elements from the original list to itself.

### \uD83E\uDDE0 Approach:
1. Use the `extend` method to add elements from the original list to itself.
2. Return the modified list.

### \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        nums.extend(nums)  # Extend the list with itself
        return nums
```

---

# Method 4: Using `+` Operator

In this method, we use the `+` operator to concatenate the list with itself.

### \uD83E\uDDE0 Approach:
1. Use the `+` operator to concatenate the list with itself.
2. Return the new list.

### \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums  # Concatenate the list with itself
```

---

# Method 5: Using `*` Operator

In this method, we use the `*` operator to create a new list with the original list repeated twice.

### \uD83E\uDDE0 Approach:
1. Use the `*` operator to repeat the list twice.
2. Return the new list.

### \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums * 2  # Repeat the list twice
```

## \uD83D\uDCD2 Complexity:
- \u23F0 Time complexity: $$O(n)$$. In all the methods, we iterate through the list nums once, performing constant-time operations for each element.
- \uD83E\uDDFA Space complexity: $$O(n)$$, as they require additional space proportional to the size of the input list to hold the concatenated result.

---


# 5 Methods in one place

``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        result = []
        for num in nums:
            result.append(num)  # Add each element from nums
        for num in nums:
            result.append(num)  # Add each element again
        return result
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [0] * (2 * n)  # Create a new list of size 2n
        for i in range(n):
            result[i] = nums[i]      # Copy the first part
            result[i + n] = nums[i]  # Copy the second part
        return result
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        nums.extend(nums)  # Extend the list with itself
        return nums
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums  # Concatenate the list with itself
```
``` python []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums * 2  # Repeat the list twice
```

---
# Please consider giving an Upvote!
![upvote.png](./images/0.png)
