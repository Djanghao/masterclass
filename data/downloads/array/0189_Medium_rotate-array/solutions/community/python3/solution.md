# 【Video】Using remainder with 3 solutions

**Author:** niits
**Votes:** 528
**Link:** [https://leetcode.com/problems/rotate-array/solutions/5550096/](https://leetcode.com/problems/rotate-array/solutions/5550096/)

---

# Intuition
Using remainder

---

# Solution Video

https://youtu.be/fDRPdN0dlcs

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,902
Thank you for your support!

---

This question requires `in-place`, but I think it's good idea to have multiple solution for real interviews. Let me share 3 ways. Solution 3 meets `in-place` and $$O(1)$$ space.

# Solution 1

```
Input: nums = [1,2,3,4,5,6,7], k = 3
```
In this case, we rotate all numbers 3 times. In the end,
```
[1,2,3,4,5,6,7]
\u2193
[5,6,7,1,2,3,4]
```
What if `k = 9`?
```
[1,2,3,4,5,6,7]
\u2193
[6,7,1,2,3,4,5]
```

Do you have any idea to caluclate rotated position?

---

\u2B50\uFE0F Points

My idea is to use remainder. 

```
k = k % length of input array
```

For instance,

```
3 % 7 = 3
9 % 7 = 2
```

All we have to do is to rotate all numbers the remainder times.

If `k = 3`, remainder is `3`.

```
[1,2,3,4,5,6,7]
\u2193
[5,6,7,1,2,3,4]
```

If `k = 9`, remainder is `2`.
```
[1,2,3,4,5,6,7]
\u2193
[6,7,1,2,3,4,5]
```
---

We calculate rotated position with 
```
(current position + remainder) % length of input array
```
For example, If `k = 9`, rotated position should be

```
For 1(= index 0), (0 + 2) % 7 = 2
For 2(= index 1), (1 + 2) % 7 = 3
For 6(= index 5), (5 + 2) % 7 = 0
For 7(= index 6), (6 + 2) % 7 = 1
```

Let's see solution codes!

---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        n = len(nums)
        k = k % n
        rotated = [0] * n

        for i in range(n):
            rotated[(i + k) % n] = nums[i]
        
        for i in range(n):
            nums[i] = rotated[i]
```
```javascript []
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    const rotated = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }    
};
```
```java []
class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;
        int[] rotated = new int[n];

        for (int i = 0; i < n; i++) {
            rotated[(i + k) % n] = nums[i];
        }

        for (int i = 0; i < n; i++) {
            nums[i] = rotated[i];
        }        
    }
}
```
```C++ []
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;
        vector<int> rotated(n);

        for (int i = 0; i < n; i++) {
            rotated[(i + k) % n] = nums[i];
        }

        for (int i = 0; i < n; i++) {
            nums[i] = rotated[i];
        }        
    }
};
```

# Step by Step Algorithm

1. **Initialization**:
   - `n` is assigned the length of the array `nums`.
   - `k` is updated to `k % n` to handle cases where `k` is greater than `n`.
   ```python
   n = len(nums)
   k = k % n
   ```

2. **Create a New Array for Rotation**:
   - `rotated` is initialized as a new array of length `n` filled with zeros.
   ```python
   rotated = [0] * n
   ```

3. **Populate the Rotated Array**:
   - Loop through each element in the original array `nums`.
   - For each element at index `i`, place it in the `rotated` array at index `(i + k) % n`.
   ```python
   for i in range(n):
       rotated[(i + k) % n] = nums[i]
   ```

4. **Copy the Rotated Array Back to the Original Array**:
   - Loop through each element in the `rotated` array.
   - Copy each element back to the original array `nums`.
   ```python
   for i in range(n):
       nums[i] = rotated[i]
   ```

---

# Solution 2

We use remainder again.
```
Input: nums = [1,2,3,4,5,6,7], k = 9
```
We create two groups with rotated input array.

---

\u2B50\uFE0F Points

Create two groups before `k` and after `k`. `k` is remainder, so it's `2`, not `9`.

```
[1,2,3,4,5,6,7]
\u2193
[6,7,1,2,3,4,5] (= rotated array)

     k
[6,7,1,2,3,4,5]
 # # * * * * *

```
Let's think about where # group is coming and * is coming.
```
 * * * * * # #
[1,2,3,4,5,6,7]
```
Let's get together.
```
 * * * * * # #
[1,2,3,4,5,6,7]
[6,7,1,2,3,4,5]
 # # * * * * *
     k
```
All we have to do is just to swap the same group.

---

\u25FD\uFE0F Question

How can we express each group?

```
[6,7,1,2,3,4,5]
 # # * * * * *
     k

For #, nums[:k]
For *, nums[k:]
```
```
 * * * * * # #
[1,2,3,4,5,6,7]

For #, nums[-k:]
For *, nums[:-k]
```

solution should be
```
nums[:k], nums[k:] = nums[-k:], nums[:-k]
```

Let's see solution codes!

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```python []
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        k = k % len(nums)
        if k != 0:
            nums[:k], nums[k:] = nums[-k:], nums[:-k]
```
```javascript []
var rotate = function(nums, k) {
    k = k % nums.length;
    if (k !== 0) {
        let temp = nums.slice(-k).concat(nums.slice(0, -k));
        for (let i = 0; i < nums.length; i++) {
            nums[i] = temp[i];
        }
    }    
};
```
```java []
class Solution {
    public void rotate(int[] nums, int k) {
        k = k % nums.length;
        if (k != 0) {
            int[] temp = new int[nums.length];
            System.arraycopy(nums, nums.length - k, temp, 0, k);
            System.arraycopy(nums, 0, temp, k, nums.length - k);
            System.arraycopy(temp, 0, nums, 0, nums.length);
        }
    }
}
```
```C++ []
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;
        if (k != 0) {
            vector<int> temp(nums.end() - k, nums.end());
            temp.insert(temp.end(), nums.begin(), nums.end() - k);
            copy(temp.begin(), temp.end(), nums.begin());
        }        
    }
};
```

# Step by Step Algorithm

1. **Calculate Effective Rotations**:
   - The array's length is `n = len(nums)`.
   - The number of rotations `k` is updated to `k % n` to handle cases where `k` is greater than `n`. This ensures that rotating the array `n` times results in the same array, so any extra rotations beyond `n` can be ignored.
   ```python
   k = k % len(nums)
   ```

2. **Check if Rotation is Needed**:
   - If `k` is `0`, the array does not need to be rotated, and the function can exit early. This is an optimization step to avoid unnecessary operations.
   ```python
   if k != 0:
   ```

3. **Perform the Rotation**:
   - If `k` is not `0`, proceed to rotate the array.
   - The rotation is performed in two parts:
     - `nums[:k]` will hold the last `k` elements of the original array.
     - `nums[k:]` will hold the first `n-k` elements of the original array.
   - Using slicing, the array is reassembled such that the last `k` elements come first, followed by the first `n-k` elements.
   ```python
   nums[:k], nums[k:] = nums[-k:], nums[:-k]
   ```

---

# Solution 3

Again, we use remainder.
```
Input: nums = [1,2,3,4,5,6,7], k = 9
```
To explain the algorithm first, it performs three reverse operations.

First of all, we reverse all numbers.
```
[1,2,3,4,5,6,7]
\u2193
[7,6,5,4,3,2,1]
```
Then, we create two groups like solution 2. `Before k` and `After k`.
```
     k
[7,6,5,4,3,2,1]
 # # * * * * *

k is remainder
```
Then, reverse all numbers in each group.
```
     k
[7,6,5,4,3,2,1]
 # # * * * * *
\u2193
     k
[6,7,1,2,3,4,5]
 # # * * * * *
```
`[6,7,1,2,3,4,5]` is actually answer.

To summarize the algorithm, we use 3 reverse operation.

```
reverse(0, last index) \u2192 whole array
reverse(0, k - 1) \u2192 before k
reverse(k, last index) \u2192 after k
```

Let's see solution codes!


---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```python []
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        k %= len(nums)

        def reverse(left, right):
            while left < right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1

        reverse(0, len(nums) - 1)
        reverse(0, k - 1)
        reverse(k, len(nums) - 1)
```
```javascript []
var rotate = function(nums, k) {
    k %= nums.length;

    const reverse = (left, right) => {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    };

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);    
};
```
```java []
class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;

        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }

    private void reverse(int[] nums, int left, int right) {
        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }    
}
```
```C++ []
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        k %= nums.size();

        reverse(nums, 0, nums.size() - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.size() - 1);
    }

private:
    void reverse(vector<int>& nums, int left, int right) {
        while (left < right) {
            swap(nums[left], nums[right]);
            left++;
            right--;
        }
    }    
};
```

# Step by Step Algorithm

1. **Calculate Effective Rotations**:
   - The length of the array is `n = len(nums)`.
   - The number of rotations `k` is updated to `k % n` to handle cases where `k` is greater than `n`. This ensures that rotating the array `n` times results in the same array, so any extra rotations beyond `n` can be ignored.
   ```python
   k %= len(nums)
   ```

2. **Define the Reverse Function**:
   - A helper function `reverse` is defined to reverse the elements of the array between indices `left` and `right`.
   - Within this function, a while loop swaps elements from the start (`left`) and end (`right`) of the specified segment, moving towards the center until `left` is no longer less than `right`.
   ```python
   def reverse(left, right):
       while left < right:
           nums[left], nums[right] = nums[right], nums[left]
           left += 1
           right -= 1
   ```

3. **Reverse the Entire Array**:
   - The entire array is reversed from index `0` to `len(nums) - 1`.
   - This step places the elements that need to be rotated to the front.
   ```python
   reverse(0, len(nums) - 1)
   ```

4. **Reverse the First `k` Elements**:
   - The first `k` elements of the reversed array are reversed back to their original order.
   - This places the rotated elements at the start of the array in their correct positions.
   ```python
   reverse(0, k - 1)
   ```

5. **Reverse the Remaining `n-k` Elements**:
   - The remaining elements from index `k` to `len(nums) - 1` are reversed back to their original order.
   - This places the rest of the elements in their correct positions.
   ```python
   reverse(k, len(nums) - 1)
   ```
---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F #48 - Rotate Image

https://youtu.be/R1xO_Ear-ww
