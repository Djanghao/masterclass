# 【Video】2 solutions using HashMap - O(n) space and without HashMap - O(1) space

**Author:** niits
**Votes:** 476
**Link:** [https://leetcode.com/problems/majority-element/solutions/5845732/](https://leetcode.com/problems/majority-element/solutions/5845732/)

---

# Solution Video

https://youtu.be/sBuRjHqDTzY

I took a video about a year ago. If don't understand a part of the video, Please let me know or read this post.

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 9,177
Thank you for your support!

\u2B50\uFE0F I have a video for Majority Element \u2161.

https://youtu.be/KzJHu5sWLKE

---

# Approach

Question. What data should we have to solve this question?

It's obvious that we should have freqency of each number, right? But we cannot solve it with only freqency of each number.

Why?

Because we don't know current max frequency of number, so


---

\u2B50\uFE0F Points

We should keep 
- max frequency of specific number (Let's say majoirty)
- freqency of each number

To keep information above, we use `simple variable` for max frequency and `HashMap` for freqency of each number, because we need to keep relations between each number and frequency and we have multiple data, so HashMap is good data structure for this question.

---

Let' see one by one.
```
Input: nums = [2,2,1,1,1,2,2]

majority = 0
res = 0
```
First of all, we find `2` at index 0
```
[2,2,1,1,1,2,2]
 \u2191

HashMap = { 2: 1 }
```
Then compare `frequency of current number vs majority`.
```
1 vs 0
```
Current number wins, so update `majority` and `res`.
```
majority = 1 (= frequency of number 2 so far)
res = 2
```
Next, we find `2` again
```
[2,2,1,1,1,2,2]
   \u2191

HashMap = { 2: 2 }
```
Then compare `frequency of current number vs majority`.
```
2 vs 1
```
Current number wins, so update `majority` and `res`.
```
majority = 2 (= frequency of number 2 so far)
res = 2
``` 
Next, we find `1`
```
[2,2,1,1,1,2,2]
     \u2191

HashMap = { 2: 2, 1: 1 }
```
Then compare `frequency of current number vs majority`.
```
1 vs 2
```
Current number loses, so we don't update `majority` and `res`.
```
majority = 2
res = 2
``` 
Next, we find `1`
```
[2,2,1,1,1,2,2]
       \u2191

HashMap = { 2: 2, 1: 2 }
```
Then compare `frequency of current number vs majority`.
```
2 vs 2
```
Current number loses, so we don't update `majority` and `res`.
```
majority = 2
res = 2
``` 
Next, we find `1`
```
[2,2,1,1,1,2,2]
         \u2191

HashMap = { 2: 2, 1: 3 }
```
Then compare `frequency of current number vs majority`.
```
3 vs 2
```
Current number wins, so we update `majority` and `res`.
```
majority = 3
res = 1
```
Next, we find `2`
```
[2,2,1,1,1,2,2]
           \u2191

HashMap = { 2: 3, 1: 3 }
```
Then compare `frequency of current number vs majority`.
```
3 vs 3
```
Current number loses, so we don't update `majority` and `res`.
```
majority = 3
res = 1
``` 
Next, we find `2`
```
[2,2,1,1,1,2,2]
             \u2191

HashMap = { 2: 4, 1: 3 }
```
Then compare `frequency of current number vs majority`.
```
4 vs 3
```
Current number wins, so we update `majority` and `res`.
```
majority = 4
res = 2
``` 

```
return 2
```

Easy\uD83D\uDE06!
Let's see a real solution code and step by step algorithm!

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
    def majorityElement(self, nums: List[int]) -> int:
        hash = {}
        res = majority = 0
        
        for n in nums:
            hash[n] = 1 + hash.get(n, 0)
            if hash[n] > majority:
                res = n
                majority = hash[n]
        
        return res
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let res = 0;
    let majority = 0;

    for (let n of nums) {
        hash[n] = 1 + (hash[n] || 0);
        if (hash[n] > majority) {
            res = n;
            majority = hash[n];
        }
    }

    return res;    
};
```
```java []
class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer, Integer> hash = new HashMap<>();
        int res = 0;
        int majority = 0;

        for (int n : nums) {
            hash.put(n, 1 + hash.getOrDefault(n, 0));
            if (hash.get(n) > majority) {
                res = n;
                majority = hash.get(n);
            }
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unordered_map<int, int> hash;
        int res = 0;
        int majority = 0;

        for (int n : nums) {
            hash[n] = 1 + hash[n];
            if (hash[n] > majority) {
                res = n;
                majority = hash[n];
            }
        }

        return res;        
    }
};
```

## Step by step algorithm

### Initialization:
```python
hash = {}
res = majority = 0
```
Explanation:
- We initialize an empty hash table (`hash`) to store the frequency of each element encountered in the `nums` list.
- `res` and `majority` are initialized to `0`. 
- `res` will store the majority element, while `majority` will store its count.

### Iterating Through the List:
```python
for n in nums:
```
Explanation:
- The code iterates through each element `n` in the `nums` list.

### Updating Frequency in the Hash Table:
```python
hash[n] = 1 + hash.get(n, 0)
```
Explanation:
- For each element `n`, we update its frequency in the `hash` table.
- If `n` is not in the hash table, `hash.get(n, 0)` returns `0` (default value), and we add `1` to it.
- If `n` is already in the hash table, we increment its frequency by `1`.

### Finding the Majority Element:
```python
if hash[n] > majority:
    res = n
    majority = hash[n]
```
Explanation:
- After updating the frequency of `n`, we check if its frequency is greater than the current `majority`.
- If so, we update `res` to the current element `n` and `majority` to its frequency.
- This ensures that `res` always stores the element with the highest frequency encountered so far.

### Return the Majority Element:
```python
return res
```
Explanation:
- Once all elements in `nums` have been processed, we return the `res`, which contains the majority element.

This algorithm efficiently finds the majority element in the given list by using a hash table to store the frequency of each element encountered during the iteration.


---

# Solution 2 - O(1) space

We use the same idea of solution 1 above but actually, we don't have to use `HashMap`.

We use two variables `res` and `majority`.

---

\u2B50\uFE0F Points

`res` is return value.
`majority` is frequency of majority number(= `res`).

Every time current number is the same as `res`, we add `+1` to `majority`. If not, we add `-1` to `majority`.

When `majority` is `0`, it's time to change majority number(= `res`), because every time current number and `res` are different, we add `-1` to `majority`, so if `majority` is `0`, that means a current majority number(= `res`) is not the majority number anymore. That's why when `majority` is `0`, update `res` with current number.

---

If you understand solution 1, I hope we understand solution 2 very easily!

# Complexity

- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        res = majority = 0
        
        for n in nums:
            if majority == 0:
                res = n
            
            majority += 1 if n == res else -1
        
        return res
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0;
    let majority = 0;
    
    for (let n of nums) {
        if (majority === 0) {
            res = n;
        }
        
        majority += n === res ? 1 : -1;
    }
    
    return res;    
};
```
```java []
class Solution {
    public int majorityElement(int[] nums) {
        int res = 0;
        int majority = 0;
        
        for (int n : nums) {
            if (majority == 0) {
                res = n;
            }
            
            majority += n == res ? 1 : -1;
        }
        
        return res;        
    }
}
```
```C++ []
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int res = 0;
        int majority = 0;
        
        for (int n : nums) {
            if (majority == 0) {
                res = n;
            }
            
            majority += n == res ? 1 : -1;
        }
        
        return res;        
    }
};
```

## Step by step algorithm

### Initialization:
```python
res = majority = 0
```
Explanation:
- `res` and `majority` are initialized to `0`. 
- `res` will store the majority element, while `majority` will store its count.

### Iterating Through the List:
```python
for n in nums:
```
Explanation:
- The code iterates through each element `n` in the `nums` list.

### Updating Majority Element:
```python
if majority == 0:
    res = n
```
Explanation:
- If `majority` is `0`, it means we have encountered a new element which might be the majority element.
- So, we update `res` to the current element `n`.

### Updating Majority Count:
```python
majority += 1 if n == res else -1
```
Explanation:
- We update the `majority` count based on whether the current element `n` is equal to the current majority element `res`.
- If `n` is equal to `res`, we increment the `majority` count by `1`. Otherwise, we decrement it by `1`.

### Return the Majority Element:
```python
return res
```
Explanation:
- Once all elements in `nums` have been processed, we return the `res`, which contains the majority element.

This algorithm efficiently finds the majority element in the given list by using a constant amount of extra space and traversing the list only once. It employs the Boyer-Moore Majority Vote algorithm to achieve this.


---

\u2B50\uFE0F I have a video for Majority Element \u2161.

https://youtu.be/KzJHu5sWLKE

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F I solved the one of weekly content problems.

https://youtu.be/6lFX5qwcBn8

