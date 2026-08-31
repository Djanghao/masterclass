# Official Solution

**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solution/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solution/)

---

[TOC]

## Solution

### Approach 1: Popping Unwanted Duplicates

**Intuition**

The input array is already sorted and hence, all the duplicates appear next to each other. The problem statement mentions that we are not allowed to use any additional space and we have to modify the array in-place. The easiest approach for in-place modifications would be to get rid of all the unwanted duplicates. For every number in the array, if we detect `> 2` duplicates, we simply remove them from the list of elements and we do this for all the elements in the array.

<center>
<img src="../Figures/80/img1.png" width="600"/>
</center>

**Algorithm**

1. The implementation is slightly tricky so to say since we will be removing elements from the array and iterating over it at the same time. So, we need to keep updating the array's indexes as and when we pop an element else we'll be accessing invalid indexes.
2. Say we have two variables, `i` which is the array pointer and `count` which keeps track of the count of a particular element in the array. Note that the minimum count would always be 1. 

    <center>
    <img src="../Figures/80/img2.png" width="600"/>
    </center>

3. We start with index `1` and process one element at a time in the array.
4. If we find that the current element is the *same* as the previous element i.e. `nums[i] == nums[i - 1]`, then we increment the `count`. If the value of `count > 2`, then we have encountered an unwanted duplicate element and we can remove it from the array. Since we know the index of this element, we can use the `del` or `pop` or `remove` operation (or whatever corresponding operation is supported in your language of choice) to delete the element at index `i` from the array. Since we popped an element, we decrement the index by 1 as well.

    <center>
    <img src="../Figures/80/img3.png" width="600"/>
    </center>


5. If we encounter that the current element is *not* the same as the previous element i.e. `nums[i] != nums[i - 1]`, then it means we have a new element at hand and so accordingly, we update `count = 1`.

    <center>
    <img src="../Figures/80/img4.png" width="600"/>
    </center>

6. Since we are removing all the unwanted duplicates from the original array, the final array that remains after process all the elements will only contain the valid elements and hence we simply return the length of this array.

<iframe src="https://leetcode.com/playground/Kzv7wJ3J/shared" frameBorder="0" width="100%" height="500" name="Kzv7wJ3J"></iframe>

**Complexity Analysis**

* Time Complexity: Let's see what the costly operations in our array are:
    - We have to iterate over all the elements in the array. Suppose that the original array contains `N` elements, the time taken here would be $$O(N)$$.
    - Next, for every unwanted duplicate element, we will have to perform a delete operation and deletions in arrays are also $$O(N)$$.
    - The worst case would be when all the elements in the array are the same. In that case, we would be performing $$N - 2$$ deletions thus giving us $$O(N^2)$$ complexity for deletions
    - Overall complexity = $$O(N) + O(N^2) \equiv O(N^2)$$.
* Space Complexity: $$O(1)$$ since we are modifying the array in-place. 
<br>
<br>

---
### Approach 2: Overwriting unwanted duplicates

**Intuition**

The second approach is really inspired by the fact that the problem statement asks us to return the *new length of the array* from the function. If all we had to do was *remove elements*, the function would not really ask us to return the updated length. However, in our scenario, this is really an indication that we don't need to actually remove elements from the array. Instead, we can do something better and simply overwrite the duplicate elements that are unwanted. 

> We won't be able to achieve this using a single pointer. We will be using a two-pointer approach where one pointer iterates over the original set of elements and another one that keeps track of the next "empty" location in the array or the next location that can be overwritten in the array.

**Algorithm**

1. We define two pointers, `i` and `j` for our algorithm. The pointer `i` iterates of the array processing one element at a time and `j` keeps track of the next location in the array where we can overwrite an element. 
2. We also keep a variable `count` which keeps track of the count of a particular element in the array. Note that the minimum count would always be 1. 
3. We start with index `1` and process one element at a time in the array.
4. If we find that the current element is the *same* as the previous element i.e. `nums[i] == nums[i - 1]`, then we increment the `count`. If the value of `count > 2`, then we have encountered an unwanted duplicate element. In this case, we simply move forward i.e. we increment `i` but not `j`.
5. However, if the count is `<= 2`, then we can move the element from index `i` to index `j`. 

    <center>
    <img src="../Figures/80/img5.png" width="600"/>
    </center>

6. If we encounter that the current element is *not* the same as the previous element i.e. `nums[i] != nums[i - 1]`, then it means we have a new element at hand and so accordingly, we update `count = 1` and also move this element to index `j`.

    <center>
    <img src="../Figures/80/img6.png" width="600"/>
    </center>

7. It goes without saying that whenever we copy a new element to `nums[j]`, we have to update the value of `j` as well since `j` always points to the location where the next element can be copied to in the array.

    <center>
    <img src="../Figures/80/img7.png" width="600"/>
    </center>

<iframe src="https://leetcode.com/playground/e46H9mYQ/shared" frameBorder="0" width="100%" height="500" name="e46H9mYQ"></iframe>
        
**Complexity Analysis**

* Time Complexity: $$O(N)$$ since we process each element exactly once.
* Space Complexity: $$O(1)$$.
<br>
<br>