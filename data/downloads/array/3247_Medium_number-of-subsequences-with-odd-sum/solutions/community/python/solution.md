# 🚩1-liner + detailed explanation ^^

**Author:** andrii_khlevniuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/5621241/](https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/5621241/)

---

**Solution:**
**time: `O(N)`; space: `O(1)`**
```
def subsequenceCount(self, nums):
	return 0 if all(n%2==0 for n in nums) else pow(2, len(nums)-1, 1000000007)
```

**Explanation**

There are `2\u02C6N` subsequences (if you count empty subsequence) created from the elements of array `nums`. 
> If there's at least **one odd number**, then half of the subsequences have even sum and half of them have odd sum (empty subsequence having sum equal to `0`).

Example:
```
nums    = [1, 2, 3];
subseq. = [[ ], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]];   // 8
odd     = [[1], [3], [1,2], [2,3]];     // 4
even    = [[ ], [2], [1,3], [1,2,3]];   // 4
```
**Proof.**
1. Suppose that the total array sum is **odd** (like in `[1,2,4]`). An odd number can only be expressed as a sum of one odd and one even number. So if subsequence is odd than it's *complimentary subsequnce* is even. Thus there is 1-to-1 correspondence    between even and odd subsequences and the number of odd subsequences is equal to the number of even subsequences.

For example: 
```      
nums    = [1, 2, 4];
subseq. = [[ ], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]];

odd     = [[1],  [1,2], [1,4], [1,2,4]];
            |      |     |       |
even    = [[2,4], [4],  [2],  [2,4]];
```
2. Suppose now that the total array sum is **even** (like in `[1,2,3]`) and it has at least one odd element `x`(like for ex. `x=3` in `[1,2,3]`). Let's pretend there is no `x` in the array. Than the total sum of the array without `x` is `even - odd = odd` again so as we have proved the number of odd subsequences is equal to the number of even subsequences in it. 
Let's now "return" `x` to the array.  Every `odd subsequence with x` is just an `even subsequence without x` with `x` attached to it and likewise every  `even subsequence with x` is just an `odd subsequence without x` with `x` attached to it. So if there is equal number of odd and even subsequences **without** x than there is an equal number of even and odd subsequences **with** `x`. Thus the total number of odd subseqences (with or without `x`) is equal to the total number of even subseqences (with or without `x`).

For example:
```      
nums    = [1, 2, 3];
nums without 3 = [1,2]
---------------------------------
odd without 3   = [[1], [1,2]];
                    |     |
even without 3  = [[2],  [ ]];
---------------------------------
odd  with 3  = [[2,3],  [3]];        // {odd without 3} + 3
                  |       |
even with 3  = [[1,3],  [1,2,3]];    // {even without 3} + 3
---------------------------------
odd  = [[1], [1,2], [2,3],  [3]]     // {odd without 3} + {odd with 3}
         |     |      |      |
even = [[2],  [ ],  [1,3], [1,2,3]]  // {even without 3} + {even with 3}
```

