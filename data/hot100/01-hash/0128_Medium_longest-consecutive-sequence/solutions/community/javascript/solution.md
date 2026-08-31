# 【Video】Check n - 1

**Author:** niits
**Votes:** 260
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/5418430/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/5418430/)

---

# Intuition
Check if current number is a start number of consecutive sequence

# Solution Video

https://youtu.be/PRVmb_7u6fo

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 5,745
Thank you for your support!

---

# Approach
```
Input: nums = [100,4,200,1,3,2]
```

To understand this question easily, let's sort all numbers.

```
1,2,3,4.......100........200
```
We should return `4` because there are 4 consecutive sequence from `1` to `4`.

---


Question

How can you know you can start from `1`?


---

Thinking time...




...\uD83D\uDE05





...\uD83D\uDE29




...\uFF01\uD83D\uDE03


---

\u2B50\uFE0F Points

My strategy is to check `n - 1`.

For example, if `n` is `4`, `n - 1` is `3`. **We have `3` in the input array. That's why `4` is not start number of consecutive sequence.** 

The same reason will apply to `2` and `3`.

For `1`, `n - 1` is `0`. **We don't have `0` in the input array. That's why we know that `1` is start number of consecutive sequence.**

---

Let's see one by one.

```
Input: nums = [100,4,200,1,3,2]

longest = 0 (= longest consecutive sequence)
```
We found `100` and `n - 1` is `99`, so `100` is a start number.

```
longest = 1
```
After that, we add `1` to `100` which is `101`. We don' have `101` in the input array.

Next, we found `4`. `n - 1` is `3`, we have `3` in the input array, so skip `4`.

Next, we found `200` `n - 1` is `199` which is a start number. But we don't have `201` when we add `1` to `200`.
```
longest = 1
```

Next, we found `1` which is a start number.

Add `1` to `1` which is `2`. We have `2`, so longest is now `2`.
Add `1` to `2` which is `3`. We have `3`, so longest is now `3`.
Add `1` to `3` which is `4`. We have `4`, so longest is now `4`.
Add `1` to `4` which is `5`. We don't have `5`, so longest is now `4`.
```
longest = 4
```

Let me skip explanation of `2` and `3`. We will skip them because we have `1` and `2` in the input array.

```
return 4
```

Easy!\uD83D\uDE06
Let's see solution codes and step by step algorithm!

---

https://youtu.be/bU_dXCOWHls


---

# Complexity
This is based on Python. Other language might be different.

- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        longest = 0

        for n in nums:
            if n - 1 not in num_set:
                length = 1

                while n + length in num_set:
                    length += 1
                
                longest = max(longest, length)
        
        return longest
```
```javascript []
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of nums) {
        if (!numSet.has(n - 1)) {
            let length = 1;

            while (numSet.has(n + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;    
};
```
```java []
class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }

        int longest = 0;

        for (int num : nums) {
            if (!numSet.contains(num - 1)) {
                int length = 1;

                while (numSet.contains(num + length)) {
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;        
    }
}
```
```C++ []
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int longest = 0;

        for (int num : nums) {
            if (numSet.find(num - 1) == numSet.end()) {
                int length = 1;

                while (numSet.find(num + length) != numSet.end()) {
                    length++;
                }

                longest = max(longest, length);
            }
        }

        return longest;
    }
};
```

# Step by Step Algorithm

1. **Convert List to Set**:
   ```python
   num_set = set(nums)
   ```
   - Convert the list `nums` to a set `num_set` to allow O(1) time complexity for checking the presence of elements. This step ensures that we can quickly determine if a number is part of the sequence.

2. **Initialize the Longest Sequence Length**:
   ```python
   longest = 0
   ```
   - Initialize a variable `longest` to keep track of the length of the longest consecutive sequence found so far. Set it to 0 initially.

3. **Iterate Through Each Number in the List**:
   ```python
   for n in nums:
   ```
   - Iterate through each number `n` in the list `nums`.

4. **Check if Current Number is the Start of a Sequence**:
   ```python
   if n - 1 not in num_set:
   ```
   - For each number `n`, check if `n - 1` is not in `num_set`. This check determines if `n` is the start of a new sequence. If `n - 1` is not present, it means `n` is the smallest number in the current sequence.

5. **Initialize Length of Current Sequence**:
   ```python
   length = 1
   ```
   - If `n` is the start of a new sequence, initialize a variable `length` to 1. This variable will keep track of the length of the current sequence starting with `n`.

6. **Extend the Current Sequence**:
   ```python
   while n + length in num_set:
       length += 1
   ```
   - Use a `while` loop to extend the current sequence. While `n + length` is present in `num_set`, increment `length`. This loop continues until the next consecutive number is not found in the set, indicating the end of the current sequence.

7. **Update the Longest Sequence Length**:
   ```python
   longest = max(longest, length)
   ```
   - After determining the length of the current sequence, update `longest` by taking the maximum of `longest` and `length`. This ensures that `longest` always holds the length of the longest consecutive sequence found so far.

8. **Return the Result**:
   ```python
   return longest
   ```
   - After iterating through all numbers in the list, return `longest`, which now holds the length of the longest consecutive sequence.




---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F Related Video

#3 Longest Substring Without Repeating Characters

https://youtu.be/n4zCTMh03_M