# 【Video】Step by Step explanation

**Author:** niits
**Votes:** 712
**Link:** [https://leetcode.com/problems/remove-element/solutions/5468263/](https://leetcode.com/problems/remove-element/solutions/5468263/)

---

# Intuition
Move current number if the number is not equal to `val`.

---

# Solution Video

https://youtu.be/GDOxAHN4RSE

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,451
Thank you for your support!

---

# Approach

When we find numbers which are not equal to `val`, move current number to `k` position.

```
Input: nums = [3,2,2,3], val = 3
```
Let's see how it works!
```
[3,2,2,3], val = 3
 k
 i
```
##### The first step
```
current number vs val
= 3 vs 3
```
We don't do anything.

```
[3,2,2,3], val = 3
 k i
```
##### The second step
```
current number vs val
= 2 vs 3
```
They are different number. Update the number at `k` with the current number and `k` and `i` move next
```
[2,2,2,3], val = 3
   k i
```
##### The third step
```
current number vs val
= 2 vs 3
```
We do the same thing of the second step. In the end
```
[2,2,2,3], val = 3
     k i
```
##### The fourth step

```
current number vs val
= 3 vs 3
```
We don't do anything. `i` moves next
```
[2,2,2,3], val = 3
     k   i
```
Finish. All we have to do is just to return `k`

```
return 2
```

Easy!\uD83D\uDE03
Let's see solution codes!


---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0

        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
        
        return k
```
```javascript []
var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;    
};
```
```java []
class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;        
    }
}
```
```C++ []
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int k = 0;

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;        
    }
};
```

# Step by Step Algorithm

```python
k = 0
```

1. **Initialize `k`**:
   - A variable `k` is initialized to `0`.
   - `k` will be used to keep track of the position in the list where the next element that is not equal to `val` should be placed.

```python
for i in range(len(nums)):
```

2. **Loop through the List**:
   - A `for` loop is used to iterate through each index `i` of the list `nums`.
   - `range(len(nums))` generates a sequence of indices from `0` to `len(nums) - 1`.

```python
if nums[i] != val:
```

3. **Check if the Current Element is not Equal to `val`**:
   - Inside the loop, an `if` statement checks if the current element `nums[i]` is not equal to `val`.
   - If the condition is true, it means the element should be kept in the list.

```python
nums[k] = nums[i]
```

4. **Place the Element in the Correct Position**:
   - If the current element `nums[i]` is not equal to `val`, it is assigned to the position `k` in the list.
   - This effectively moves the element to the next available position for elements that are not `val`.

```python
k += 1
```

5. **Increment `k`**:
   - After placing the element in the correct position, `k` is incremented by `1`.
   - This prepares `k` to point to the next position for the next element that is not equal to `val`.

```python
return k
```

6. **Return the Count of Elements not Equal to `val`**:
   - After the loop completes, the function returns the value of `k`.
   - `k` represents the number of elements in the list that are not equal to `val`.

### Summary
- The function iterates through the list, checking each element.
- If an element is not equal to the specified value (`val`), it is moved to the front of the list, and `k` is incremented.
- The function finally returns `k`, which is the count of elements that are not equal to `val`.

This algorithm modifies the list in-place and ensures that the first `k` elements of `nums` contain the elements that are not equal to `val`.

---

Thank you for reading my post.

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My other video
#15 - 3sum

https://youtu.be/9HDVSJn3obo
