# Official Solution

**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solution/](https://leetcode.com/problems/increasing-triplet-subsequence/solution/)

---

[TOC]

## Solution

---

### Approach 1: Linear Scan

**Intuition**

The idea is to keep track of the first two numbers in increasing order and find the last number which will be bigger than the first two numbers. Here, the first and second smallest numbers can be updated with conditional checks while scanning `nums`.

```code    
first_num = second_num = some very big number
for n in nums:
    if n is smallest number:
        first_num = n
    else if n is second smallest number:
        second_num = n
    else n is bigger than both first_num and second_num:
        # We have found our triplet, return True

# After loop has terminated
# If we have reached this point, there is no increasing triplet, return False
```

Let's take a look at two cases where `nums` is sorted:
    
*  If `nums` is sorted in descending order, you will always end up in this first `if` block (and thus, repeatedly updating `first_num`). Finally, `False` will be returned after the loop has been terminated. 
* If `nums` is sorted in ascending order, you will first update `first_num` as soon as you see the first number in `nums` and when you encounter another number in `nums`, you will update the `second_nums` since this new number would be bigger than the value stored in `first_num`. After these two variables have been populated, all you need to look for is another number which is bigger than `first_num` and `second_num`. As soon as you find that number, the first `if` and the second `else if` blocks will be skipped, and you will end up in the last `else` block and `True` will be returned immediately.

This works not only for sorted cases described above but also for cases where the numbers are unsorted. First, find the smallest number and store it in `first_num`, and then find the second smallest number and store it in `second_num`. However, there is no guarantee that another number you encounter in `nums` will be greater than `first_num` and `second_num`. This new number can even be smaller than then `first_num` (in that case, you will have to update `first_num` with this new value) or `second_num` (in that case, you will have to update `second_num` with this new value). As long as you encounter those cases, you keep on updating your `first_num` and `second_num`. As soon as you encounter a number which is greater than **both** `first_num` and `second_num`, you have found your last number to complete the *increasing triplet subsequence*. At that point, you can immediately return `True`.

However, there is an important logic that is quite important to grasp. Let's take `nums` =  `[10,20,3,2,1,1,2,0,4]` for an example:

!?!../Documents/334_increasing_triplet_subsequence.json:1200,600!?!

In the above example, the point where you have reached `0` and subsequently updating `first_num = 0` can make you confused as you might think that this no longer is a subsequence (since `second_num = 2` comes before `first_num = 0`). Of course, since we have updated the `first_num`, if we want to return the actual subsequence, we might need to have another placeholder variable that will hold the previously recorded `first_num` before it is updated. However, for this problem, we are only looking for the *existence of* a valid increasing triplet subsequence, even though `first_num` and `second_num` are out of order, we don't need to worry about it.

To make this more illustrative, observe the following example.

`nums` = `[1,2,0,3] # should return True`

1. `first_num = 1`
2. `second_num = 2`
3. `first_num = 0`
4. `return True`

The increasing triplet subsequence is `1, 2, and 3`. Even though `first_num` is updated in `Line 3`, `second_num` is never updated again. However, you can tell that **there exists another number before `second_num` which is definitely BIGGER than the last updated `first_num` but SMALLER than `second_num`**. This is a very important observation. Therefore, you can safely say that there exists an increasing triplet subsequence as soon as you see a number which is bigger than the *last updated* `first_num` and `second_num` even though that last updated `first_num` is not one of the actual numbers of the increasing triplet subsequence. 

**Implementation**

<iframe src="https://leetcode.com/playground/hqHxuJxj/shared" frameBorder="0" width="100%" height="327" name="hqHxuJxj"></iframe>

**Complexity Analysis**

* Time complexity : $$O(N)$$ where $$N$$ is the size of `nums`. We are updating `first_num` and `second_num` as we are scanning `nums`.

* Space complexity : $$O(1)$$ since we are not consuming additional space other than variables for two numbers.