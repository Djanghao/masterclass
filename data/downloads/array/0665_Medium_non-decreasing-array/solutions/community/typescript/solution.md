# Greedy explained

**Author:** eugbyte
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/5086924/](https://leetcode.com/problems/non-decreasing-array/solutions/5086924/)

---

# Intuition
* Intutively, once a descending slope is detected, one might be tempted to make the latest element as small as poosible so that in next iterations the possibility of future descending slopes decreases.
* However, there is an edge case of say `[4, 5, 3]`, where doing so leads to a new violation, e.g. `[4, 3, 3]`.
* When making the choice, we are bound by the previous element.
# Approach
* 2 choices to remedy descending slope "\":
    * Either decrease current num to make a straight line "\u2014", 
    * or increase next num to make it an ascending slope "/".
* `[4, 5, 3]` - either make 5 drop to 4, or 3 increase to 5
* `[5, 3, 3]` - either make 5 drop to 3, or increase 3 at index 1 to * We are bound by the previous element at i - 1.
* We keep a count of the number of times we modify the array. If the count > 1, return false.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```

function checkPossibility(nums: number[]): boolean {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count += 1;
            
            if (i > 0 && nums[i - 1] > nums[i + 1]) {
                // we are bound by the previous number to not introduce a new violation, e.g. [4, *5*, 3], i = 1
                // increase next number to make ascending slope "/"
                nums[i + 1] = nums[i];
            } else {
                // decrease current number to make a straight line "\u2014"
                nums[i] = nums[i + 1];
            }
        }
    }

    // console.log({ nums, count });
    return count <= 1;
};
```