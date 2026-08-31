# 【Video】Looping the input array twice

**Author:** niits
**Votes:** 271
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/5833007/](https://leetcode.com/problems/product-of-array-except-self/solutions/5833007/)

---

# Intuition
Looping the input array twice.

---

# Solution Video

https://youtu.be/lGOUZo6rBVk

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 9,053
Thank you for your support!

---

# Approach

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```
In this case,

```
At index 0, 24 is consisted of 2 * 3 * 4
At index 1, 12 is consisted of 1 * 3 * 4 
At index 2, 8 is consisted of 1 * 2 * 4 
At index 3, 6 is consisted of 1 * 2 * 3
```
Let's think about `24`. To make `24`, we need index `1`, `2` and `3`. Seems like if we iterate through from the end, we can easily create `24`, **because the three numbers are next to each other without a skip.**

```
[1,2,3,4] (= start from index 3)
       \u2191
output = 4

[1,2,3,4] (= start from index 3)
     \u2191
output = 12

[1,2,3,4] (= start from index 3)
   \u2191
output = 24
```
Let's think about `12`. we need index `0`, `2` and `3`. In this case, seems like we can easily get index `0` from beginning and we can easily get index `2` and `3` from the end, **because the two numbers are next to each other without a skip.**

```
[1,2,3,4] (= start from index 0)
 \u2191
output = 1

[1,2,3,4] (= start from index 3)
       \u2191
output = 4

[1,2,3,4] (= start from index 3)
     \u2191
output = 12
```
We have the same reason for `8` and `6`.

```
[1,2,3,4] (= start from index 0)
 \u2191
output = 1

[1,2,3,4] (= start from index 0)
   \u2191
output = 2

[1,2,3,4] (= start from index 3)
       \u2191
output = 8
```
```
[1,2,3,4] (= start from index 0)
 \u2191
output = 1

[1,2,3,4] (= start from index 0)
   \u2191
output = 2

[1,2,3,4] (= start from index 0)
     \u2191
output = 6
```

---

\u2B50\uFE0F Points

Based on the example above, it seems that by looping twice, once from the left and once from the right, the calculation can be simplified. **The sum of the numbers to the left of an index can be calculated during the left-to-right loop, and the sum of the numbers to the right can be calculated during the right-to-left loop.** This way, it seems possible to perform the calculation without skipping over the current index.

---

Let's see how it works!

```
[1,2,3,4]

output = [1,1,1,1]
left = 1
```
We initialize `output` with `1` because `1` doesn't affect a result of multiplication. `left` is a total of multiplication on the left side.

First of all, multiply the `left` number to index `0`. (= `1 * 1`)
Then multiply index `0` to `left`(= `1 * 1`), **because at index `1`, index `0` is one of left numbers.** In the end,

```
nums = [1,2,3,4]
        \u2191
output = [1,1,1,1]
left = 1
```
Next, we multiply `left` to index `1`.(= `1 * 1`)
Then mulptiply index `1` in nums to `left` (= `2 * 1`) for the same reason above, In the end
```
nums = [1,2,3,4]
          \u2191
output = [1,1,1,1]
left = 2
```
Next, we multiply `left` to index `2`.(= `1 * 2`)
Then mulptiply index `2` in nums to `left` (= `2 * 3`) for the same reason above, In the end
```
nums = [1,2,3,4]
            \u2191
output = [1,1,2,1]
left = 6
```

Next, we multiply `left` to index `3`.(= `1 * 6`)
Then mulptiply index `3` in nums to `left` (= `6 * 4`) for the same reason above, In the end
```
nums = [1,2,3,4]
              \u2191
output = [1,1,2,6]
left = 24
```
Then Finish left-to-right loop. Let's think about what index number we use at each index.

```
output = [1,1,2,6]
            0 0 0
              1 1
                2
```
At index `3`, we successfully create `6` that is consisted of index `0`, `1` and `2`. It's one of outputs.

Let's start right-to-left loop. We will do the same thing from right to left.
```
nums = [1,2,3,4]
              \u2191
output = [1,1,2,6]
right = 1
```
First of all, multiply `right` to index `3`. Nothing will happen because right number is now `1`.

Then multiply index `3` in `nums` to `right`.

```
nums = [1,2,3,4]
              \u2191
output = [1,1,2,6]
right = 4
```
Next, first of all multiply `right` to index `2`.
```
nums = [1,2,3,4]
            \u2191
output = [1,1,8,6]
right = 4
```
Let's think about what index number we use for index `2`.

```
output = [1,1,2,6]
            0 0 0
              1 1
                2
```
`right number 4` is coming from index `3` and we multiplied `4` to index `2`. That means we use index `0`, `1` and `3` for index `2`. Looks good.

```
output = [1,1,8,6]
            0 0 0
              1 1
              3 2
```
Let's continue. Don't forget to multiply `3` to `right` which is now `12`.

At first, we multiply `right` to index `1` in `output`. Then multiply `2` in `nums` to `right`.  

```
nums = [1,2,3,4]
          \u2191
output = [1,12,8,6]
right = 12
```
Now, `12` is coming from index `2` and `3` in `nums`.

```
output = [1,12,8,6]
            0  0 0
            2  1 1
            3  3 2
```
Before we multiply the right number, don't forget to multiply index `1` in `nums` to the `right` number.

```
nums = [1,2,3,4]
        \u2191
output = [1,12,8,6]
right = 24
```

Then multiply `24` to index `0`.

```
nums = [1,2,3,4]
        \u2191
output = [24,12,8,6]
right = 24
```
Let's think about what index numbers we use for index `0`. `24` is consisted of index `1`, `2` and `3`. 
```
output = [24,12,8,6]
          1  0  0 0
          2  2  1 1
          3  3  3 2
```
We finish right-to-left loop.

```
output = [24,12,8,6]
          1  0  0 0
          2  2  1 1
          3  3  3 2

At index 0, we don't use index 0.
At index 1, we don't use index 1.
At index 2, we don't use index 2.
At index 3, we don't use index 3.
```
Looks good!
```
return [24,12,8,6] (= output)
```

---

https://youtu.be/bU_dXCOWHls

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        output = [1] * len(nums)
        
        left = 1
        for i in range(len(nums)):
            output[i] *= left
            left *= nums[i]
        
        right = 1
        for i in range(len(nums) - 1, -1, -1):
            output[i] *= right
            right *= nums[i]
    
        return output        
```
```javascript []
var productExceptSelf = function(nums) {
    const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;    
};
```
```java []
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] output = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            output[i] = 1;
        }

        int left = 1;
        for (int i = 0; i < nums.length; i++) {
            output[i] *= left;
            left *= nums[i];
        }

        int right = 1;
        for (int i = nums.length - 1; i >= 0; i--) {
            output[i] *= right;
            right *= nums[i];
        }

        return output;        
    }
}
```
```C++ []
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> output(nums.size(), 1);

        int left = 1;
        for (int i = 0; i < nums.size(); i++) {
            output[i] *= left;
            left *= nums[i];
        }

        int right = 1;
        for (int i = nums.size() - 1; i >= 0; i--) {
            output[i] *= right;
            right *= nums[i];
        }

        return output;        
    }
};
```
# Step by Step Algorithm

### 1. Initialize the `output` array
```python
output = [1] * len(nums)
```
- **Explanation**: The `output` array is initialized with 1's, and its length is the same as `nums`. This array will store the final product of all elements except the current one for each index. Initially, every element is set to 1, because we will multiply values into this array later.

### 2. Initialize the `left` variable
```python
left = 1
```
- **Explanation**: The `left` variable will store the product of all elements to the left of the current element during the left-to-right pass. It starts as 1, since there are no elements to the left of the first index.

### 3. Left-to-right loop (calculate left-side products)
```python
for i in range(len(nums)):
    output[i] *= left
    left *= nums[i]
```
- **Explanation**:
    - **`output[i] *= left`**: At each index `i`, the `output[i]` is multiplied by the current value of `left`, which holds the product of all elements to the left of index `i`. Initially, `left` is 1, so this step doesn't affect the first element of `output`, but as we move forward, it accumulates the product of the left-side elements.
    - **`left *= nums[i]`**: After updating `output[i]`, `left` is multiplied by `nums[i]` to include the current element in the left-side product for the next iteration. This ensures that `left` holds the product of all elements to the left of the next index.

### 4. Initialize the `right` variable
```python
right = 1
```
- **Explanation**: Similar to `left`, the `right` variable is initialized to store the product of all elements to the right of the current element during the right-to-left pass. It starts as 1 because there are no elements to the right of the last index.

### 5. Right-to-left loop (calculate right-side products)
```python
for i in range(len(nums) - 1, -1, -1):
    output[i] *= right
    right *= nums[i]
```
- **Explanation**:
    - **`output[i] *= right`**: At each index `i`, the `output[i]` is multiplied by the current value of `right`, which holds the product of all elements to the right of index `i`. This step combines the left-side product (calculated in the previous loop) and the right-side product into `output[i]`.
    - **`right *= nums[i]`**: After updating `output[i]`, `right` is multiplied by `nums[i]` to include the current element in the right-side product for the next iteration. This ensures that `right` holds the product of all elements to the right of the next index.

### 6. Return the `output` array
```python
return output
```
- **Explanation**: The final `output` array contains the product of all elements in `nums` except the one at each index. This array is returned as the result.


---

Thank you for reading my post.

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Similar Questions - #42 Trapping Rain Water

https://youtu.be/7yg_WJA35uo

### \u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!