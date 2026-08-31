# Super clear explanation, ACTUALLY! beats 99.8%

**Author:** taha-y-merghani
**Votes:** 97
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/4556097/](https://leetcode.com/problems/continuous-subarray-sum/solutions/4556097/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
After getting frustrated \uD83D\uDE2E\u200D\uD83D\uDCA8\uD83D\uDDEF\uFE0F\uD83D\uDCA2 and having found the available solutions insufficiently explained, I decided to write this post. Please upvote if you found it helpful \uD83D\uDE09

The goal of this post is not to provide a line by line commentery for the code because plenty of the solutions posted do just that. Instead, I aim to explain **why it is okay to keep one running remainder as opposed to trying out all sum possibilities then checking if the remainder is 0 at every element.**
 
The answer relies on properties of the modulus operator `%`. 
If you are trying to evaluate an expression like `x % k` notice that the modulus operator will always output an integer `q` where `0 <= q < k` 

But that's not the magic!

The magic happens when
1) You try to apply the modulus operator again. It will just produce the same q again. That is, `q%k = q` over and over and over.

2) You notice that `(q + `$$any$$ $$multiple of$$ $$k$$)`% k = q` again. 
For example, 
`100 % 7 = 2`
`(2 + 0) % 7 = 2 `
`(2 + 14) % 7 = 2` and so on

On the other hand, (q + other numbers)% k = __r__ where `r!=q` and `0 <= r < k`

For example
`(2 + 1) % 7 = 3`
`(2 + 2) % 7 = 4` and so on

3) You remember that there are at most $$k$$ different possible answers for anything % $$k$$, namely, from 0 to k-1 inclusive.

Sweet, right? 

4) You consider the process of adding a number to a remainder and then applying another remainder operation as a way of condensing all the cumulative additions up to and including that point.

This is to say that if you have an array of numbers [$$x1$$, $$x2$$, $$x3$$, ..., $$x_n$$]
 
if $$x_1$$ % $$k$$ = $$q$$ and $$x_2$$ % $$k$$ = $$r$$ when $$x_1$$ and $$x_2$$ are different numbers

and ($$x_1 +x_2$$) % $$k$$= $$p$$ <---------- (adding directly then %$$k$$)

$$p,q,$$ and $$r$$ are all remainders less than $$k$$

Then by the  __distributive property__ of the modulus

>  ($$x_1 +x_2$$) % $$k$$ =  ($$x_1$$ % $$k$$ +  $$x_2$$ % $$k$$ ) %$$k$$  

By substitution, we can find

($$q$$ + $$r$$) % $$k$$ = $$p$$ <-----------

constrasting that with **adding the new number $$x_2$$ directly to the previous running remainder $$q$$  then performing % $$k$$ again**
($$q$$ + $$x_2$$) % $$k$$= 

__distributive property__ again


($$q$$ + $$r$$) %  $$k$$ = $$p$$ <---------






In plain english, 

> It doesn't matter if you're adding the numbers themselves then perfomering modulus operation or adding the numbers to remainders from previous sums **if what you care about is the remainder operation again**.

but let us talk about `p` in more details.

Well, if $$p$$ is different from $$q$$ and $$r$$ then nothing interesting happens from point (2). They're all just remainders less than k. 

However, if $$p$$ is indeed equal to $$q$$ or $$r$$, you would have summed a multiple of k in between (i.e., crushed in the process of summing then remainder'ing then summing then remainder'ing) from what I said in (2). 

Let us use the example of `nums = [23,2,4,6,7] and k = 6`
`23 % 6 = 5` here $$x_1$$ = `23` and $$q$$ = `5`
$$x_1$$ % $$k$$ = $$q$$
`(5+2) % 6 = 1` when $$x_2$$ = `2` is added to $$q$$, with a result of $$p$$ = `1` 
($$q$$+$$x_2$$)% $$k$$ = $$p$$ <-------

this is equivalent to 
`(23+2)   %  6 = 1` 
($$x_1$$+$$x_2$$) % $$k$$ = $$p$$ <------

and following through at `nums[2]=4` we have `(1+4)%6 = 5`, which we have seen before at index 0. This signals that in between we have crushed a multiple of 6. The culprit was the subarray `[2,4]` and return True.

>This is the equivalence of the result of two proccesses: the remainder of addding 2 numbers is the same as the remainder of adding the second numbert to the remainder of the first number.

And if you sum then remainder process is performed *__consecutively__*, then that intermediate remainder of 0 (the sum that is a multiple of k) will have been a result from a contiguous subarray. 

One last thing, you must ensure that you have seen that remainder from 2 elements ago at least.
# Approach
<!-- Describe your approach to solving the problem. -->
There are at most k different remainders you care about storing. If you see one of them repeats after 2 steps, then you're done becuase in between those two apperances lies a **good subarray**. The way to do this, is to cache the remainders against their indices and ensure 0 edge case is satisfied when there is a lonely 0  as in `nums=[0] or nums=[...,0,...]`
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(k)$$
# Code
```
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        remainder_cache = {0:-1}
        remainder = 0
        for i in range(len(nums)):
            remainder += nums[i]
            remainder %=k
            if remainder not in remainder_cache:
                remainder_cache[remainder] = i
            elif i - remainder_cache[remainder] >=2:
                return True
        return False
        
```