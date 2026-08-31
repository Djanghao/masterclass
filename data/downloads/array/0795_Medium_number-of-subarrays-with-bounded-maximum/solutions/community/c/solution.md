# JS, Python, Java, C++ | Easy Triangular Number Solution w/ Explanation

**Author:** sgallivan
**Votes:** 108
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/1278426/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/1278426/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The key to this problem is realizing that we're dealing with overlapping **triangular number** issues. Importantly, the total number of possible subarrays that are contained within any larger subarray is the **N**th triangular number, where **N** is the length of that larger subarray. 

So the **nums** array starts with the (**nums.length**)th triangular number total subarrays. We want to exclude any subarray that includes a number larger than **right**, however. The easiest way to do this is to consider numbers larger than **right** to be dividers, splitting **nums** into many subarrays. We can add the triangular number for each of these resulting subarrays together to be the total number of subarrays that exclude numbers higher than **right**.

To do this, we can iterate through **nums** and keep track of how many contiguous numbers are less than **right** (**mid**) and each point that **mid** increments, we can add **mid** to **ans**, representing the increase to the next triangular number. The value for **mid** will then reset whenever we see a number higher than **right**.

But this only does half of the problem, because we still have to also exclude any subarray that does not have any number at least **left** high. To do this, we can use a similar method as for **mid**. We can keep track of how many contiguous numbers are lower than **left** (**low**) and _decrease_ **ans** by that amount every time it increments, representing the next triangular number. Similar to **mid**, **low** will reset whenever we see a number at least **left** high.

Once we're done iterating, we can **return ans**.

Visual example:
![Visual 1](https://i.imgur.com/zr940xS.png)


 - _**Time Complexity: O(N)** where **N** is the length of **nums**_
 - _**Space Complexity: O(1)**_

---

#### ***Javascript Code:***

The best result for the code below is **72ms / 42.2MB** (beats 100% / 84%).
```javascript
var numSubarrayBoundedMax = function(nums, left, right) {
    let ans = 0, low = 0, mid = 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num > right) mid = 0
        else ans += ++mid
        if (num >= left) low = 0
        else ans -= ++low
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **316ms / 15.5MB** (beats 98% / 97%).
```python
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        ans, low, mid = 0, 0, 0
        for num in nums:
            if num > right: mid = 0
            else:
                mid += 1
                ans += mid
            if num >= left: low = 0
            else:
                low += 1
                ans -= low
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **2ms / 46.8MB** (beats 100% / 75%).
```java
class Solution {
    public int numSubarrayBoundedMax(int[] nums, int left, int right) {
        int ans = 0, low = 0, mid = 0;
        for (int num : nums) {
            if (num > right) mid = 0;
            else ans += ++mid;
            if (num >= left) low = 0;
            else ans -= ++low;
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **24ms / 32.4MB** (beats 99% / 86%).
```c++
class Solution {
public:
    int numSubarrayBoundedMax(vector<int>& nums, int left, int right) {
        int ans = 0, low = 0, mid = 0;
        for (auto num : nums) {
            if (num > right) mid = 0;
            else ans += ++mid;
            if (num >= left) low = 0;
            else ans -= ++low;
        }
        return ans;
    }
};
```