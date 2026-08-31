# A fast and concise python solution, 40ms, binary search

**Author:** cmc
**Votes:** 116
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/15378/](https://leetcode.com/problems/search-insert-position/solutions/15378/)

---

For input without duplicates:

    def searchInsert(self, nums, target):
        l , r = 0, len(nums)-1
        while l <= r:
            mid=(l+r)/2
            if nums[mid]== target:
                return mid
            if nums[mid] < target:
                l = mid+1
            else:
                r = mid-1
        return l


----------
For input with duplicates, we only need a little bit modification:


    def searchInsert(self, nums, target): # works even if there are duplicates. 
        l , r = 0, len(nums)-1
        while l <= r:
            mid=(l+r)/2
            if nums[mid] < target:
                l = mid+1
            else:
                if nums[mid]== target and nums[mid-1]!=target:
                    return mid
                else:
                    r = mid-1
        return l



This is a very simple binary search. (Surprisingly, all the binary search solutions I found here are much longer than mine.)<br>  The first solution only works when there is no duplicate. In this case, we return `mid` whenever `nums[mid]==target`. The second solution deals with the case where duplicates are allowed.<br> Note that it would exit the `while` loop ONLY when `target` is not in `nums`. When this happens, the if and else statement in the last loop will also adjust `l` so we simply return l at the end.<br>
 

    examples:
    nums=[1,3,5,7,9,11,13,15,17]
    (1) target 12, last loop: (l,r)= (5, 5) ; end of loop (l,r)= (6, 5), answer = 6
    (2) target 14, last loop: (l,r)= (7, 8) ; end of loop (l,r)= (7, 6), answer = 7