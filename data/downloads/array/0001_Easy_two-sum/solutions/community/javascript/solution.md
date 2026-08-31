# 【Video】 Step by Step Easy Solution

**Author:** niits
**Votes:** 1014
**Link:** [https://leetcode.com/problems/two-sum/solutions/5139921/](https://leetcode.com/problems/two-sum/solutions/5139921/)

---

# Intuition
Use HashMap to keep numbers and their indices we found.

# Solution Video

https://youtu.be/MlgFhWvxuJk

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 7,157
Thank you for your support!

---

# Approach

If you check all possible pairs, we need two loops which is $$O(n^2)$$. 

```
Input: nums = [2,7,11,15], target = 9
```
All possible pairs are

```
[2,2][2,7][2,11][2,15] = 4
[7,2][7,7][7,11][7,15] = 4
[11,2][11,7][11,11][11,15] = 4
[15,2][15,7][15,11][15,15] = 4

total 16 pairs
```
And then, we need to find the right pair among them. They are including invalid pairs but at least we need to iterate input array `16` times which is `4^2`. `4` is the length of input array.

Looping `16` times is not a big deal. But what if we have `100` or `1000` numbers as an input array. Do we loop `10000` or `1000000` times?

That's why if we can improve the time complexity to $$O(n)$$, we will loop `100` or `1000` at most. It's much much much better right? 

## How can we improve the time complexity?

My answer is to use a memory to keep results of something my solution code has done.

---

\u2B50\uFE0F Points

Use a memory to keep data for something to improve time complexity.

---

In this case, `HashMap` is good data structure.

### What is data we should keep with HashMap?

Let's take a look at input array and target number.

```
Input: nums = [2,7,11,15], target = 9
```
In this case, if we subtract current number in input array from target number, we can get a number we need to create the target number.

For example,
```
9 - 2 = 7
```
`7` is a number we need when current number is `2`. So if we have `7` and index number of `7`, we can create `9` with the current(= `2`) number and `7`.

From this example, what we should keep in `HashMap` is


---

\u2B50\uFE0F Points

Keep numbers(elements) as keys and index numbers as values in the input array.

---

Let's iterate through one by one.
```
Input: nums = [2,7,11,15], target = 9
```
Let's call the `HashMap` `pair_idx`.
```
[2,7,11,15], target = 9
\u3000\u3000\u2191

pair_idx = {} 
```
We found `2`. we need `7` to create `9`, so check if we have `7` in `pair_idx`. But now `pair_idx` is empty, so just add current number and its index to `pair_idx`.

```
pair_idx = {2: 0} 

2 is current number
0 is index of 2
```
Then move next.
```
[2,7,11,15], target = 9
\u3000\u3000  \u2191

pair_idx = {2: 0}
```
We found `7`, so we need `2`. Check if we have `2` in `pair_idx`. And yes we have `2`.

```
return [0,1] or [1,0]
```
The description says "You can return the answer in any order".

We already found the answer but if we continue that
```
pair_idx = {2: 0, 7: 1}
[2,7,11,15], target = 9
\u3000\u3000     \u2191

We need 9 - 11 = -2 but no -2 in pair_idx, so
pair_idx = {2: 0, 7: 1, 11: 2}
```
```
pair_idx = {2: 0, 7: 1, 11: 2}
[2,7,11,15], target = 9
\u3000\u3000        \u2191

We need 9 - 15 = -6 but no -6 in pair_idx, so
pair_idx = {2: 0, 7: 1, 11: 2, 15: 3}
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!


---

https://youtu.be/pCc4kR-TdYs


---

# Complexity
- Time complexity: $$O(n)$$
`n` is number of elements in input array.

- Space complexity: $$O(n)$$
`n` is number of elements in input array. In the worst case, we put all numbers in `pair_idx`.

```python []
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pair_idx = {}

        for i, num in enumerate(nums):
            if target - num in pair_idx:
                return [i, pair_idx[target - num]]
            pair_idx[num] = i
```
```javascript []
var twoSum = function(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIdx) {
            return [i, pairIdx[target - num]];
        }
        pairIdx[num] = i;
    }    
};
```
```java []
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> pairIdx = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            if (pairIdx.containsKey(target - num)) {
                return new int[] { i, pairIdx.get(target - num) };
            }
            pairIdx.put(num, i);
        }

        return new int[] {};        
    }
}
```
```C++ []
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> pairIdx;

        for (int i = 0; i < nums.size(); ++i) {
            int num = nums[i];
            if (pairIdx.find(target - num) != pairIdx.end()) {
                return {i, pairIdx[target - num]};
            }
            pairIdx[num] = i;
        }

        return {};        
    }
};
```

## Step by step algorithm

1. **Initializing a Dictionary:**
```python
pair_idx = {}
```
   - We initialize an empty dictionary called `pair_idx`. This dictionary will be used to store the indices of numbers encountered during the iteration.

2. **Iterating Through the List:**
```python
for i, num in enumerate(nums):
```
   - We use the `enumerate()` function to iterate through the `nums` list along with their indices. 
   - At each iteration, `i` represents the index of the current number, and `num` represents the actual value.

3. **Checking for Complementary Pair:**
```python
if target - num in pair_idx:
```
   - We check if the difference `target - num` exists as a key in the `pair_idx` dictionary.
   - If it exists, it means that we have found a pair of numbers whose sum equals the target.

4. **Returning the Result:**
```python
return [i, pair_idx[target - num]]
```
   - If we find the complementary pair, we return a list containing the indices of the current number `i` and the index of the complementary number stored in the `pair_idx` dictionary.

5. **Storing Number Indices:**
```python
pair_idx[num] = i
```
   - If the complementary pair is not found, we store the current number `num` along with its index `i` in the `pair_idx` dictionary.
   - This allows us to later look up whether the complementary number exists in the list.

In summary, this algorithm efficiently finds a pair of numbers in the `nums` list whose sum equals the `target` value. It does so by using a dictionary to store the indices of numbers encountered so far and checking for the existence of complementary numbers during the iteration.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F Related question #167 - Two Sum \u2161

video
https://youtu.be/fj5ruWT6B5U
