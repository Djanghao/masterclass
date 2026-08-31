# 【Video】Use two pointers + Coding Exercise

**Author:** niits
**Votes:** 818
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/5540670/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/5540670/)

---

# Intuition
Use two pointers.

# Solution Video

https://youtu.be/_uwQgr5GlTM

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,837
Thank you for your support!

---

# Approach

We will remove all duplicate numbers and shift each unique number to the left of the array.

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
```

My strategy uses two pointers: one pointer to the current number and another pointer to the place where the replacement should occur.

```
nums = [0,0,1,1,1,2,2,3,3,4]
i = 1
j = 1
```
---

\u2B50\uFE0F Points

Why `i` and `j` start from index `1`?

**The first element is always unique:**  
Since the array is sorted, the first element `nums[0]` is always unique. Therefore, there is no need to compare the first element with any other elements.

---

## Let's see how it works.

**First Iteration (`j = 1`):**
```
nums[j] = 0
nums[i - 1] = 0

Since nums[j] == nums[i - 1], we do nothing and
move to the next `j`. `i` remains 1.

nums = [0,0,1,1,1,2,2,3,3,4]
          i j
```

---

\u2B50\uFE0F Points

- Why do you need to compare with `i - 1`?

Bascially, We compare `i` number and `j` number with `nums[j] == nums[i - 1]` condition. 

At index `1`, we want to put `1` in the end. The above case is fine if you compare with `nums[j] == nums[i]`, because both numbers at index `1` and `2` are the same. we can use `0` at index `1` for comparison.

But what if we have different number at index `1` and use `nums[j] == nums[i]`? In this case, `1` may disappear.

For instance
```
nums = [0,1,2,2,3,3,4]
          i
          j
\u2193

Check `nums[j] == nums[i]`
`i` number and `j` number are the same. Move `j` to next.

nums = [0,1,2,2,3,3,4]
          i\u3000j

Check `nums[j] == nums[i]`
Both number are different. Update `i` number with `j` number.
nums = [0,2,2,2,3,3,4] \u2192 That will be wrong answer.

```

Let's see `i - 1`.

```
nums = [0,1,2,2,3,3,4]
          i
          j
\u2193

Check `nums[j] == nums[i - 1]`
update `i` number with `j` number \u2192 [0,1,2,2,3,3,4](nothing changed)
Move `i` and `j` to next.

nums = [0,1,2,2,3,3,4]
            i          \u3000
            j

Check `nums[j] == nums[i - 1]`
Both number are different. Update `i` number with `j` number.

nums = [0,1,2,2,3,3,4]
              i          \u3000
              j

Looks good so far.
```


---

Let's go back to main point. 

**Second Iteration (`j = 2`):**
```
nums = [0,0,1,1,1,2,2,3,3,4]
          i j

nums[j] = 1
nums[i - 1] = 0

Since `nums[j] != nums[i - 1]`, we set `nums[i] = nums[j]`.
Increment `i` to 2 and `j` to 3

nums = [0,1,1,1,1,2,2,3,3,4]
            i j 
```

**Third Iteration (`j = 3`):**
```
nums = [0,1,1,1,1,2,2,3,3,4]
            i j 

nums[j] = 1
nums[i - 1] = 1

Since `nums[j] == nums[i - 1]`, we do nothing
and move to the next `j`.

`i` remains 2.

nums = [0,1,1,1,1,2,2,3,3,4]
            i   j 
```

**Fourth Iteration (`j = 4`):**
```
nums = [0,1,1,1,1,2,2,3,3,4]
            i   j 

nums[j] = 1
nums[i - 1] = 1

Since `nums[j] == nums[i - 1]`, we do nothing
and move `j` to the next.

`i` remains 2.

nums = [0,1,1,1,1,2,2,3,3,4]
            i     j 
```
**Fifth Iteration (`j = 5`):**
```

nums = [0,1,1,1,1,2,2,3,3,4]
            i     j 

nums[j] = 2
nums[i - 1] = 1

Since `nums[j] != nums[i - 1]`, we set `nums[i] = nums[j]`.
Increment `i` to 3 and `j` to 6

nums = [0,1,2,1,1,2,2,3,3,4]
              i     j
```

**Sixth Iteration (`j = 6`):**
```

nums = [0,1,2,1,1,2,2,3,3,4]
              i     j

nums[j] = 2
nums[i - 1] = 2

Since `nums[j] == nums[i - 1]`, we do nothing and
move `j` to the next. `i` remains 3.

nums = [0,1,2,1,1,2,2,3,3,4]
              i       j
```

**Seventh Iteration (`j = 7`):**
```

nums = [0,1,2,1,1,2,2,3,3,4]
              i       j

nums[j] = 3
nums[i - 1] = 2

Since `nums[j] != nums[i - 1]`, we set `nums[i] = nums[j]`.
Increment `i` to 4 and `j` to 8

nums = [0,1,2,3,1,2,2,3,3,4]
                i       j
```

**Eighth Iteration (`j = 8`):**
```
nums = [0,1,2,3,1,2,2,3,3,4]
                i       j

nums[j] = 3
nums[i - 1] = 3

Since `nums[j] == nums[i - 1]`, we do nothing and
move to the next `j`. `i` remains 4.

nums = [0,1,2,3,1,2,2,3,3,4]
                i         j
```
**Ninth Iteration (`j = 9`):**
``` 
nums = [0,1,2,3,1,2,2,3,3,4]
                i         j

nums[j] = 4
nums[i - 1] = 3

Since `nums[j] != nums[i - 1]`, we set `nums[i] = nums[j]`.
Increment `i` to 5 and `j` to 10

nums = [0,1,2,3,4,2,2,3,3,4]
                  i         j

```

`j` is now out of bounds. All we have to do is to return `i`.

```
return 5
```

Easy!\uD83D\uDE04
Let's see real solution codes!

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
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 1

        for j in range(1, len(nums)):
            if nums[j] != nums[i - 1]:
                nums[i] = nums[j]
                i += 1
        
        return i
```
```javascript []
var removeDuplicates = function(nums) {
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;    
};
```
```java []
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        int i = 1;

        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i - 1]) {
                nums[i] = nums[j];
                i++;
            }
        }

        return i;        
    }
}
```
```C++ []
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) return 0;

        int i = 1;

        for (int j = 1; j < nums.size(); j++) {
            if (nums[j] != nums[i - 1]) {
                nums[i] = nums[j];
                i++;
            }
        }

        return i;        
    }
};
```

# Step by Step Algorithm

### Initialize `i`
```python
i = 1
```
We initialize the variable `i` to `1`. This pointer `i` will be used to place the next unique element found in the array. Since the first element is always unique, we start `i` from `1`.

### Loop Through the Array
```python
for j in range(1, len(nums)):
```
This `for` loop starts with `j` set to `1` and iterates through the array until the end. The pointer `j` is used to traverse the array and check for duplicates.

### Condition to Check for Unique Elements
```python
if nums[j] != nums[i - 1]:
```
Inside the loop, we check if the current element `nums[j]` is different from the previous unique element `nums[i - 1]`. If they are different, it means `nums[j]` is a unique element.

### Place the Unique Element and Increment `i`
```python
nums[i] = nums[j]
i += 1
```
If the condition `nums[j] != nums[i - 1]` is true, we set `nums[i]` to `nums[j]`, placing the unique element at the `i`-th position. We then increment `i` by `1` to prepare for the next unique element.

### Return the Count of Unique Elements
```python
return i
```
After the loop completes, we return `i`. This value represents the number of unique elements in the array. The first `i` elements of the array `nums` will contain the unique elements.

---

# Coding Exercise

What if you initialize `i` with `0`? How do you modify the code?

```python []
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0

        for j in range(1, len(nums)):
            if nums[j] != nums[i]:
                i += 1
                nums[i] = nums[j]
        
        return i + 1
```

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F #724 - Remove Duplicates from Sorted List

https://youtu.be/uyd5vc0TZmA
