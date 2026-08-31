# 【Video】Simple Hash solution - Python, JavaScript, Java and C++

**Author:** niits
**Votes:** 21
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4781128/](https://leetcode.com/problems/split-the-array/solutions/4781128/)

---

# Intuition
We don't have to care about length of 2 arrays.

# Solution Video

https://youtu.be/YLZVibZ5RW8

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,916
Thank you for your support!

---

# Approach

In this problem, the task is to determine the conditions under which it's not possible to create two arrays satisfying the given conditions, rather than focusing on the lengths of the two arrays, as implied by the description's mention of an even length input array.

```
Input: nums = [1,1,2,2,3,4]
```
Based on the description, we can create 
```
nums1 = [1,2,3]
nums2 = [1,2,4]
```
Let's think about when frequency of numbers is `1`. In this case, we have one `3` and `4`. Since above example is true case, if freqency of numbers is `1`, we can create two arrays with the condition the description says.

How about frequency of numbers is `2`. We have two `1` and `2`. Seems like that is also fine.
```
Input: nums = [1,1,2,2,3,4,1,5]
```
I added new numbers, `1` and `5`.

Let's think about this case. we can create `[1,2,3]` and `[1,2,4]`. Let's add `5` at first. frequency of `5` is `1`, so we can put `5` into `nums1` or `nums2`. Let's put `5` into `nums1`

```
nums1 = [1,2,3,5]
nums2 = [1,2,4]
```
Let's try to put `1` into `nums2`
```
nums1 = [1,2,3,5]
nums2 = [1,2,4,1]
```
We break the condition the description says, because `1` in `nums2` is duplicate number.

How about swtiching `1` and `5`. It's the same result. `1` is duplicate number in `nums1`.

From this example,

---

\u2B50\uFE0F Points

If we have 3 same numbers or more, we should return `false`.

---

Easy!\uD83D\uDE06
Let's see solution codes and step by step algorithm!

---

\u2B50\uFE0F I recently created a video on how I've been using LeetCode to learn.

https://youtu.be/bU_dXCOWHls


---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        count = {}

        for n in nums:
            count[n] = 1 + count.get(n, 0)
        
        for val in count.values():
            if val > 2:
                return False
        
        return True
```
```javascript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let count = new Map();

    for (let n of nums) {
        count.set(n, (count.get(n) || 0) + 1);
    }
    
    for (let val of count.values()) {
        if (val > 2) {
            return false;
        }
    }
    
    return true;    
};
```
```java []
class Solution {
    public boolean isPossibleToSplit(int[] nums) {
        HashMap<Integer, Integer> count = new HashMap<>();

        for (int n : nums) {
            count.put(n, count.getOrDefault(n, 0) + 1);
        }
        
        for (int val : count.values()) {
            if (val > 2) {
                return false;
            }
        }
        
        return true;        
    }
}
```
```C++ []
class Solution {
public:
    bool isPossibleToSplit(vector<int>& nums) {
        unordered_map<int, int> count;

        for (int n : nums) {
            count[n]++;
        }
        
        for (auto& pair : count) {
            if (pair.second > 2) {
                return false;
            }
        }
        
        return true;        
    }
};
```

## Step by step algorithm

1. **Initialize a dictionary to count occurrences of each number:**

```python
count = {}
```

This dictionary will store the count of occurrences of each number in the `nums` array.

2. **Count occurrences of each number in the array:**

```python
for n in nums:
    count[n] = 1 + count.get(n, 0)
```

This loop iterates through each number `n` in the `nums` array. It updates the count of `n` in the `count` dictionary by 1, adding 1 to the existing count if `n` is already a key in the dictionary, or initializing the count to 1 if `n` is encountered for the first time.

3. **Check if any number appears more than twice:**

```python
for val in count.values():
    if val > 2:
        return False
```

This loop iterates through the values of the `count` dictionary, which represent the counts of each number in the `nums` array. If any count exceeds 2, it means that there are more than two occurrences of some number in the array. In such a case, the function returns `False`, indicating that it's not possible to split the array into two parts satisfying the conditions.

4. **Return `True` if no number appears more than twice:**

```python
return True
```

If the loop completes without finding any number appearing more than twice, it means that the `nums` array can be split into two parts where each part contains distinct elements and has equal lengths. Therefore, the function returns `True`.

This algorithm efficiently determines if it's possible to split the array according to the given conditions.

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F My previous video
https://youtu.be/0EHXLXz-Q5c
