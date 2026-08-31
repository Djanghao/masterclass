# 【Video】Give me 6 minutes - HashMap - How we think about a solution

**Author:** niits
**Votes:** 27
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4312501/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4312501/)

---

# Intuition
`nums[i] - rev(nums[i])` is `nums[j] - rev(nums[j])`

---

# Solution Video

https://youtu.be/424EOdu4TeY

\u25A0 Timeline of the video

`0:04` Think about how we calculate the answer
`0:58` Demonstrate how it works
`3:58` Coding
`5:53` Time Complexity and Space Complexity
`6:11` Summary of the algorithm with my solution code

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,174
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach

## How we think about a solution

I thought this is easy math question. The description says

```
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
```
\u2193
```
nums[i] - rev(nums[i]) == nums[j] - rev(nums[j]) 
```

---

\u2B50\uFE0F Points

We can focus on `nums[i] - rev(nums[i])` and ignore `nums[j] - rev(nums[j])`, because `nums[i] - rev(nums[i])` is `nums[j] - rev(nums[j])`.

If we calculate `nums[i] - rev(nums[i])`, that means we calculate `nums[j] - rev(nums[j])`.

All we have to do is to calculate `nums[i] - rev(nums[i])` and keep how many combinations are the same number with `HashMap`.

---

Let's see one by one.

```
Input: nums = [42,11,1,97]
count = {}
```
`count` is `HashMap`.
```
Reverve 42

Calculate nums[i] - rev(nums[i])
= 42 - 24 = 18

Check count with 18, but no data

cur = 0 (= number of 18 so far)
res = 0 (= return value)
count = {18: 1} (= We have now one 18)
```
`18` should be equal to `nums[j] - rev(nums[j])`. We didn't calculate it yet but we already had the result of the calculation(= 18).

That's why we don't have to calculate twice if we keep `18` with `HashMap` or something. When we find `18` again with diffrent number combinations, the `18` this time will be considered as `nums[j] - rev(nums[j])`.

```
Reverve 11

Calculate nums[i] - rev(nums[i])
= 11 - 11 = 0

Check count with 0, but no data
cur = 0 (= number of 0 so far)
res = 0
count = {18: 1, 0: 1} (= We have now one 18 and one 0)
```
```
Reverve 1

Calculate nums[i] - rev(nums[i])
= 1 - 1 = 0

Check count with 0, we have 1 result
cur = 1 (= number of 0 so far)
res = 1 (= res + cur % 10^9 + 7)
count = {18: 1, 0: 2} (= We have now one 18 and two 0)
```
```
Reverve 97

Calculate nums[i] - rev(nums[i])
= 97 - 79 = 18

Check count with 18, we have 1 result
cur = 1 (= number of 18 so far)
res = 2 (= res + cur % 10^9 + 7)
count = {18: 2, 0: 2}
```
```
Output: 2
```

Easy!\uD83D\uDE04
Let's see a real algorithm!

I think this idea is almost the same as `Two Sum` that is the first question of leetcode.

Two Sum video
https://www.youtube.com/watch?v=agJo3i8t9K0

I recorded this video in the early days when I started my YouTube channel. Please overlook the quality.\uD83E\uDEE3

---

# Algorithm

1. **Initialize Variables:**
    ```python
    res = 0            # Variable to store the result
    count = {}         # Dictionary to store counts of differences
    mod = 10**9 + 7    # Modulus value for the result
    ```
   Here, `res` is the result that will be returned, `count` is a dictionary to store the counts of differences between each number and its reverse, and `mod` is the modulus value used to keep the result within a certain range.

2. **Iterate Through Input Numbers:**
    ```python
    for n in nums:
    ```
   The algorithm iterates through each number `n` in the input list `nums`.

3. **Reverse the Number:**
    ```python
    rev = int(str(n)[::-1])
    ```
   It reverses the number `n` by converting it to a string, using string slicing (`[::-1]`), and converting it back to an integer.

4. **Check Count Dictionary:**
    ```python
    cur = count.get(n - rev, 0)
    ```
   It checks the `count` dictionary to get the count of the current difference `n - rev`. If the key is not present, it defaults to 0.

5. **Update Result and Count Dictionary:**
    ```python
    res += cur
    count[n - rev] = 1 + cur
    ```
   It updates the result by adding the current count (`cur`). Then, it updates the `count` dictionary by incrementing the count for the current difference.

6. **Final Result:**
    ```python
    return res % mod
    ```
   The final result is returned after iterating through all the numbers in `nums`. The result is again taken modulo `mod` before being returned.

In summary, the algorithm counts the number of "nice pairs" in the given list of numbers. A nice pair is formed by a number and its reverse having the same difference. The algorithm uses a dictionary to keep track of counts for each difference and accumulates these counts to calculate the final result.


# Complexity
- Time complexity: $$O(n log n)$$
Reverse numbers $$O(log n)$$ * $$O(n)$$

- Space complexity: $$O(n)$$

```python []
class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        res = 0
        count = {}
        mod = 10**9 + 7
        
        for n in nums:
            rev = int(str(n)[::-1])
            cur = count.get(n - rev, 0)
            res += cur
            count[n - rev] = 1 + cur

        return res % mod
```
```javascript []
var countNicePairs = function(nums) {
    let res = 0;
    let count = {};

    function rev(num) {
        let reversedNum = 0;

        while (num > 0) {
            const digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = Math.floor(num / 10);
        }

        return reversedNum;
    }

    for (let n of nums) {
        const r = rev(n);
        cur = count[n - r] || 0;
        res += cur;
        count[n - r] = 1 + cur;
    }

    return res % (10**9 + 7);    
};
```
```java []
class Solution {
    public int countNicePairs(int[] nums) {
        int res = 0;
        int mod = (int) Math.pow(10, 9) + 7;
        Map<Integer, Integer> count = new HashMap<>();;

        for (int n : nums) {
            int rev = rev(n);
            int cur = count.getOrDefault(n - rev, 0);
            count.put(n - rev, cur + 1);
            res = (res + cur) % mod;
        }

        return res;        
    }

    private int rev(int num) {
        int reversedNum = 0;

        while (num > 0) {
            int digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = num / 10;
        }

        return reversedNum;
    }    
}
```
```C++ []
class Solution {
public:
    int countNicePairs(vector<int>& nums) {
        int res = 0;
        const int mod = 1e9 + 7;
        unordered_map<int, int> count;

        for (int n : nums) {
            int r = rev(n);
            int cur = count[n - r];
            count[n - r] = cur + 1;
            res = (res + cur) % mod;
        }

        return res;
    }

private:
    int rev(int num) {
        int reversedNum = 0;

        while (num > 0) {
            int digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num = num / 10;
        }

        return reversedNum;
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/diagonal-traverse-ii/solutions/4316572/video-give-me-9-minutes-how-we-think-about-a-solution/

video
https://youtu.be/4wkt4kGip64

\u25A0 Timeline of the video

`0:04` How we think about a solution
`1:08` How can you put numbers into queue with right order?
`2:34` Demonstrate how it works
`6:24` Summary of main idea
`6:47` Coding
`8:40` Time Complexity and Space Complexity
`8:57` Summary of the algorithm with my solution code


### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4308246/video-give-me-10-minutes-beats-98-how-we-think-about-a-solution/

video
https://youtu.be/GZWR5cWZ3pw

\u25A0 Timeline of the video

`0:05` Talk about time to pick up all garbages 
`1:44` Talk about time to travel to the next house
`5:37` Demonstrate how it works
`8:00` Coding
`11:12` Time Complexity and Space Complexity