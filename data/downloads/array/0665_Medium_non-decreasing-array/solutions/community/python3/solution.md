# Python Easy Greedy w/ explanation - O(1) space

**Author:** constantine786
**Votes:** 68
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/2193030/](https://leetcode.com/problems/non-decreasing-array/solutions/2193030/)

---

The approach that we will be taking is **greedy**. From the problem statement, it's clear that we have to count the number of violations i.e. **nums[i-1]>nums[i]**.

> Input Array - **[1, 2, 4, 3]**
> 
In above case, we find one violation at index `3`. So this is a valid case, as we can make it non-decreasing by just modifying the violation which is 
> After fixing the violation - **[1, 2, 3, 3]**
> 

As you can see, I just did **nums[i-1]=nums[i]** to fix the violation. After fixing the violation, the array is non-decreasing.

Now let's pick an invalid case.
> Input Array - **[3, 4, 2, 3]**
> 
Here if you see, there is only one violation at index `2`. 
>  Fixed violation at index `2` - **[3, 2, 2, 3]**
> 
But after fixing the violation, the array is still not in non-decreasing order. Hence, it's an invalid case. So from this example we can observe that we need to take into account **nums[i-2]** as well.

Now let's take another example.
> Input array - **[3, 4, 2]**
> 
We find one violation at index `2`. Here instead of doing **nums[i-1]=nums[i]**, we do **nums[i]=nums[i-1]**.
> resultant array - **[3, 4, 4]**
> 

From the above details, we can observe the following:
1. We **need** the **count of violations** in the input array. If at any point **count > 1**, we return **False**
2. For any violation, we have to make an **additional check for nums[i-2]**. If **nums[i-2]>nums[i]**, we perform **nums[i]=nums[i-1]** to fix the violation.

Taking above things into consideration, below is my implemenation using greeedy.


```
class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        cnt_violations=0        
        for i in range(1, len(nums)):                       
            if nums[i]<nums[i-1]:
                if cnt_violations==1:
                    return False
                cnt_violations+=1
                if i>=2 and nums[i-2]>nums[i]:
                    nums[i]=nums[i-1]                       
        return True
```

**Time - O(n)**
**Space - O(1)**


___


***Please upvote if you find it useful***