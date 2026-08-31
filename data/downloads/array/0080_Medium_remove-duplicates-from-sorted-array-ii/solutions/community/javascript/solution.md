# 【Video】Using Two Pointers + Coding Exercise

**Author:** niits
**Votes:** 153
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/5792415/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/5792415/)

---

# Intuition
The point is how we can decide whether current number is valid or not.

# Solution Video

https://youtu.be/bGuWrXKmnSM

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 8,679
Thank you for your support!

---

# Approach
```
Input: nums = [1,1,1,2,2,3]
```
First of all, simply we don't have to care about the first two numbers because **each unique element appears at most twice**. Even if the first two numbers are `[0,1,,,]`, it meets the condition, so we can start from index `2`. Let's say `k`.

```
     i
[1,1,1,2,2,3]
     k
```
`i` is current index number.
`k` is the number to update next time

We can't put the same number `3` times in a row.

---

\u25FD\uFE0F Question

How can you decide current number(= `i`) is valid(= 1st or 2nd) or not(= 3rd or more).

---

My strategy is like this. If the number at `k - 2` is different from current number `i`, we should keep `i` number. In other word, it's time to update `k` number with `i` number.

Let's see how it works!

```
     i
[1,1,1,2,2,3]
     k
```
As I told you, we don't have to care about the first two numbers, so now `i` and `k` are at index `2`. Every time we compare current number(= `i`) with the number at `k - 2`.

Now current number and the number at `k - 2` the same, just move `i` to next. **That means we have the same number `3` time in a row.** That's why `k` will stay at the same index to update the number next time.

```
       i
[1,1,1,2,2,3]
     k
```
Current number is `2` the number at `k - 2` is `1`, they are different. It's time to update `k` number with current number, then move `k` to next.

```
         i
[1,1,2,2,2,3]
       k
```
Next, check current number and `k - 2`. They are different. 

Be careful, seems like current `i` number is invalid because you see three `2` but in the previous step, we moved `2` from index `3` to index `2`, so you still see `2` at index `3` but actually it was already moved.

We can imagine like this.
```
         i
[1,1,2,_,2,3]
      (2)
       k
```
Update `k` with `i`. Since update `2` with `2`, nothing will happen.

```
           i
[1,1,2,2,_,3]
        (2)
         k
```
Next, current number is different from `k - 2`, so current number is valid. Update `k` with `i`

```
             i
[1,1,2,2,3,_]
          (3)
           k
```
Then finish.

All we have to do is just return `k`.

```
return 5 (= k)
```

---

https://youtu.be/bU_dXCOWHls

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 2

        for i in range(2, len(nums)):
            if nums[i] != nums[k - 2]:
                nums[k] = nums[i]
                k += 1 

        return k
```
```javascript []
var removeDuplicates = function(nums) {
    let k = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;    
};
```
```java []
class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 2;

        for (int i = 2; i < nums.length; i++) {
            if (nums[i] != nums[k - 2]) {
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
    int removeDuplicates(vector<int>& nums) {
        int k = 2;

        if (nums.size() <= 2) return nums.size();
        
        for (int i = 2; i < nums.size(); i++) {
            if (nums[i] != nums[k - 2]) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;       
    }
};
```

# Step by Step Algorithm

### 1. **Initialize the `k` pointer**
```python
k = 2
```
- **Explanation**: We initialize `k` to 2 because the problem allows each unique element to appear at most **twice**. So the first two elements are automatically considered valid, and we will start modifying the array from index 2.

### 2. **Iterate through the array starting from index 2**
```python
for i in range(2, len(nums)):
```
- **Explanation**: This loop starts from index 2 and goes until the end of the array. We skip the first two elements because we know that the first two elements are allowed to be duplicates, and we don\u2019t need to process them.
- **Main Idea**: For each element starting from index 2, we check whether it\u2019s valid (i.e., if it's not a duplicate appearing more than twice) by comparing it with the element located at `k - 2`.

### 3. **Check if the current element is valid**
```python
if nums[i] != nums[k - 2]:
```
- **Explanation**: This condition checks if the current element (`nums[i]`) is different from the element located at `k - 2`. This means that we only allow an element to appear at most twice in the array. 
    - If `nums[i] == nums[k - 2]`, it means the element is appearing for the third time, so it\u2019s invalid.
    - If `nums[i] != nums[k - 2]`, the current element can be allowed in the result array.
- **Main Idea**: This check ensures that any element is only repeated up to two times.

### 4. **Modify the array in-place and update `k`**
```python
nums[k] = nums[i]
k += 1
```
- **Explanation**: If the current element is valid (i.e., it hasn\u2019t appeared more than twice), it is moved to the position `k`. Then, `k` is incremented to point to the next available position in the result array.
- **Main Idea**: The array is modified in-place, meaning we don't create a new array, but instead rearrange the elements of `nums` to reflect the result.

### 5. **Return the length of the modified array**
```python
return k
```
- **Explanation**: Finally, the value of `k` is returned. This represents the number of valid elements in the array after removing duplicates. The first `k` elements in the array will contain the result with at most two occurrences of each unique element.
- **Main Idea**: The function returns the length of the modified array, where each element appears no more than twice.

---

# Coding Exercise

Since it's good idea to have multiple solutions in real interview, let's solve the question in a differernt way even if it doesn't meet constraints.

We use `HashMap` and it has frequency of each number. If frequency of each number is less than or eaul to `2`, we keep current number.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$

```python []
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count = {}
        k = 0

        for num in nums:
            count[num] = count.get(num, 0) + 1
            if count[num] <= 2:
                nums[k] = num
                k += 1

        return k     
```
```javascript []
var removeDuplicates = function(nums) {
    let count = {};
    let k = 0;

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] <= 2) {
            nums[k] = num;
            k++;
        }
    }

    return k;    
};
```
```java []
class Solution {
    public int removeDuplicates(int[] nums) {
        Map<Integer, Integer> count = new HashMap<>();
        int k = 0;

        for (int num : nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
            if (count.get(num) <= 2) {
                nums[k] = num;
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
    int removeDuplicates(vector<int>& nums) {
        unordered_map<int, int> count;
        int k = 0;

        for (int num : nums) {
            count[num]++;
            if (count[num] <= 2) {
                nums[k] = num;
                k++;
            }
        }

        return k;      
    }
};
```

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F Related video - #26 Remove Duplicates from Sorted Array

https://youtu.be/_uwQgr5GlTM

