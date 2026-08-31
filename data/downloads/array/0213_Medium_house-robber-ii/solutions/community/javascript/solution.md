# 【Video】Divide an input array into three cases.

**Author:** niits
**Votes:** 90
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/5534398/](https://leetcode.com/problems/house-robber-ii/solutions/5534398/)

---

# Intuition
It's easy when you divide an input array into three cases.

# Solution Video

https://youtu.be/XUFhrsAOqxw

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,800
Thank you for your support!

---

# Approach
This question is almost the same as House Robber I but the difference between House Robber II and House Robber I is that all houses are in a circle which means the first house is the neighbor of the last house.

---

\u2B50\uFE0F Points

In this case, if we rob money at index `0` house, we can't rob the last house because they are the neighbors. On the other hand if we rob the last house, we can't rob the first house.

---

It's though to manage two houses because there is distance between the first house and the last house.

To make the question easy, my strategy is to eliminate the first house or the last house, because we can't rob the first house and the last house at the same time, so possible cases should be

the first house `in` and the last house `out`
or 
the first house `out` and the last house `in`

```
Input: nums = [2,7,9,3,1]
```

---

\u2B50\uFE0F Points

In the first try, we calculate max money with `[2,7,9,3]`(= Eliminate the last house)
In the second try, we calculate max money with `[7,9,3,1]`(= Eliminate the first house)

One more case, what if we have only one house like `[2]`. In this case, if we elimite the last house `[2]` will be `[]` so we return `0`?

That is wrong right? we should return `2`. The same thing will happen when we elimite the first house. The case is just `nums[0]`

We will return one of these max values.

- max value coming from `[2,7,9,3]`
- max value coming from `[7,9,3,1]` 
- max value coming from `nums[0]`

---

## How it works

Let's think about `[2,7,9,3]`.

---
\u25FD\uFE0F Question

What numbers do we need to get max value?

---

Of course, we need max value so far. Let's say `max_rob`.

We can rob previous house if it is not a neighbor. For instance, we are now at index `2`(= `i`). In this case, we can rob index `0` house.

```
[2,7,9,3]
 \u2191   i
```
Let's say `prev_rob`.
We need current value. Let's say `cur_val`.

Let's iterate through the input array.
```
[2,7,9,3]
 i

prev_rob = 0
max_rob = 0
cur_val = 2
```
First of all, we calculate the max value, formula is 

```
temp = max(max_rob, prev_rob + cur_val)
= max(0, 0 + 2)
= 2
```
Then update `prev_rob` with `max_rob`(= `0`).
Then update `max_rob` with `temp`(= `2`).

```
[2,7,9,3]
   i

prev_rob = 0
max_rob = 2
cur_val = 7
```
We will repeat the same process.

```
temp = max(max_rob, prev_rob + cur_val)
= max(2, 0 + 7)
= 7

[2,7,9,3]
     i
prev_rob = 2
max_rob = 7
cur_val = 9

temp = max(max_rob, prev_rob + cur_val)
= max(7, 2 + 9)
= 11
----------------------------------------------
[2,7,9,3]
       i
prev_rob = 7
max_rob = 11
cur_val = 3

temp = max(max_rob, prev_rob + cur_val)
= max(11, 7 + 3)
= 11

[2,7,9,3]
         i
prev_rob = 11
max_rob = 11
cur_val = None
```
Finish. In the first try we will get `11` as a max value.

Let me skip explanation with `[7,9,3,1]`. I guess we will get `10` as a max value.(See my video)

The third case is just `nums[0]` which is `2`.

```
return max(11, 10, 2)
= 11
```

Easy!\uD83D\uDE04
Let's see real solution codes!

---

\u25FD\uFE0F Related Question - House Robber

https://youtu.be/CCuHIYK04jE

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```python []
class Solution:
    def rob(self, nums: List[int]) -> int:

        def get_max(nums):
            prev_rob = max_rob = 0

            for cur_val in nums:
                temp = max(max_rob, prev_rob + cur_val)
                prev_rob = max_rob
                max_rob = temp
            
            return max_rob
        
        return max(get_max(nums[:-1]), get_max(nums[1:]), nums[0])
```
```javascript []
var rob = function(nums) {
    const getMax = (nums) => {
        let prevRob = 0, maxRob = 0;

        for (let curVal of nums) {
            let temp = Math.max(maxRob, prevRob + curVal);
            prevRob = maxRob;
            maxRob = temp;
        }

        return maxRob;
    };

    if (nums.length === 1) return nums[0];
    return Math.max(getMax(nums.slice(0, -1)), getMax(nums.slice(1)), nums[0]);    
};
```
```java []
class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) return nums[0];
        return Math.max(getMax(nums, 0, nums.length - 2), getMax(nums, 1, nums.length - 1));        
    }

    private int getMax(int[] nums, int start, int end) {
        int prevRob = 0, maxRob = 0;

        for (int i = start; i <= end; i++) {
            int temp = Math.max(maxRob, prevRob + nums[i]);
            prevRob = maxRob;
            maxRob = temp;
        }

        return maxRob;
    }    
}
```
```C++ []
class Solution {
public:
    int rob(vector<int>& nums) {
        if (nums.size() == 1) return nums[0];
        return max(getMax(nums, 0, nums.size() - 2), getMax(nums, 1, nums.size() - 1));        
    }

private:
    int getMax(vector<int>& nums, int start, int end) {
        int prevRob = 0, maxRob = 0;

        for (int i = start; i <= end; ++i) {
            int temp = max(maxRob, prevRob + nums[i]);
            prevRob = maxRob;
            maxRob = temp;
        }

        return maxRob;
    }    
};
```

# Step by Step Algorithm

1. **Helper Function `get_max`:**
```python
    def get_max(nums):
        prev_rob = max_rob = 0
```
   - `get_max` is defined within the `rob` method. It takes a list `nums` as its parameter.
   - `prev_rob` and `max_rob` are initialized to 0. These variables are used to keep track of the maximum amount of money robbed up to the previous house (`prev_rob`) and the current house (`max_rob`).

2. **Iterate Through Houses:**
```python
    for cur_val in nums:
        temp = max(max_rob, prev_rob + cur_val)
        prev_rob = max_rob
        max_rob = temp
```
   - The function iterates over each value in `nums` using a for loop.
   - For each house (`cur_val`), it calculates `temp` as the maximum of `max_rob` (the amount robbed without robbing the current house) and `prev_rob + cur_val` (the amount robbed if the current house is robbed).
   - `prev_rob` is updated to the previous `max_rob`.
   - `max_rob` is updated to `temp`, which is the maximum amount robbed up to the current house.

3. **Return the Maximum Robbed Amount:**
```python
    return max_rob
``` 
   - After the loop completes, `max_rob` is returned, representing the maximum amount of money that can be robbed from the list `nums`.

4. **Main Logic to Handle Circular Array:**
```python
    return max(get_max(nums[:-1]), get_max(nums[1:]), nums[0])
```
   - The `rob` method returns the maximum value among three scenarios:
     - `get_max(nums[:-1])`: The maximum amount that can be robbed from the first house to the second-to-last house (ignoring the last house).
     - `get_max(nums[1:])`: The maximum amount that can be robbed from the second house to the last house (ignoring the first house).
     - `nums[0]`: The amount in the first house, which is a special case when there is only one house.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F My previous video
Top K Frequent Element - #347

https://youtu.be/KzpgnqoB43c