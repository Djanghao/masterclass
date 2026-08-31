# [Python3] O(n) time. Keep swapping "0" with number equal to the index of "0"

**Author:** yuanzhi247012
**Votes:** 8
**Link:** [https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/2769404/](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/2769404/)

---

In the end, zero can only be in the front or in the back.
Let's only look at case that final zero is in the front. In this case, final nums should look like this [**0**,1,2,3,...], all number should equal to its index. Final positon of number "1" should be at index "1", final positon of number "2" should be at index "2", ...
If zero is at index 3, then we swap zero with the number "3". After swap, the number "3" goes to index "3", which is its final position, and "zero" goes to a new position that could be anywhere. We then go to the new "zero" again, and swap it with the number equal to the index of zero. Keep doing so until finish.

We can keep doing so as long as zero doesn't go to index "0". If after swap, "zero" happen to be on index "0", then we cannot continue swapping zero anymore. In this case, we should scan the whole nums, find the first number that isn't in its final position, swap it with zero. After such swap, zero is **not** at index "0", and we can continue swapping zero the above way.

After finish, we do the same thing all over again for the case that zero's final position is in the back, not in the front, like nums==[1,2,3,..., **0**]. We do the same thing, just that this time all numbers should equal to its index+1. Final position of number "1" should be at index "2", final position of number "2" should be at index "3", ...

Time complexity: O(n)

**Python3**
```
    def sortArray(self, nums: List[int]) -> int:
        def process(nums,final_zero_idx):
            res = 0
            idxs = {v:i for i,v in enumerate(nums)}
            process_idx = 1 if final_zero_idx==0 else 0
            def swap_zero_to(i):
                nonlocal res
                num = nums[i]
                zero_idx = idxs[0]
                nums[zero_idx],nums[i]=nums[i],nums[zero_idx]
                idxs[num],idxs[0]=zero_idx,i
                res+=1
            offset = 0 if final_zero_idx==0 else 1
            while True:
                num = idxs[0]+offset # the number to swap with zero
                if idxs[0] != final_zero_idx: 
                    swap_zero_to(idxs[num])
                else: # cannot swap zero if zero is at final_zero_idx
                    # swap the first number that isn't on its final position
                    while process_idx<len(nums) and nums[process_idx]==process_idx+offset:
                        process_idx+=1
                    if process_idx==len(nums)-offset:
                        return res
                    swap_zero_to(idxs[nums[process_idx]])
            return res
        return min(process(nums[:],0),process(nums[:],len(nums)-1))
```