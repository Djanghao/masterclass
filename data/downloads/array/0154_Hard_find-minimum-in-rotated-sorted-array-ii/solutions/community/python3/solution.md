# Python Binary Search ( Compare to 153)

**Author:** gyh75520
**Votes:** 26
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/373747/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/373747/)

---

The problem 154 is harder than 153. 

At first , we need to solve 153 ( no duplicate exists in the array )

153.Find Minimum in Rotated Sorted Array:

These problems give no clear target , we can use ```nums[r]``` as judgement condition  
It is very easy to find\uFF1A
>if nums[mid] > nums[r]: # [3,4,5,1,2]
>l = mid+1 # min exist on the right side of the middle value

>if nums[mid] < nums[r]: # [1,2,3,4,5] ,[4,5,1,2,3]
>r = mid # min exist on the left side of the middle value ( inclue middle value)

>if nums[mid] == nums[r]: # Invalid

Combining these conditions\uFF1A
```python
# 153. Find Minimum in Rotated Sorted Array
def findMin(self, nums: List[int]) -> int:
    l, r = 0, len(nums)-1
    while l < r:
        mid = (l+r)//2
        if nums[mid] > nums[r]:
            l = mid+1
        else:
            r = mid
    return nums[l]
```

---------------------------------------

154.Find Minimum in Rotated Sorted Array II:

Same idea with 153

It is very easy to find\uFF1A
>if nums[mid] > nums[r]: # [3,4,5,1,2]
>l = mid+1 # min exists on the right side of the middle value

>if nums[mid] < nums[r]: # [1,2,3,4,5] ,[4,5,1,2,3]
>r = mid # min exists on the left side of the middle value ( inclue middle value)

Here are the different parts\uFF1A

```python
if nums[mid] == nums[r]: # valid
	if nums[mid] == nums[l]: # [10, 5, 10, 10, 10] or [10, 10, 10, 5, 10] 
		l = l+1 # or r = r-1 # min could be on either side\uFF0Cwe just narrow the interval
	elif nums[l] < nums[mid]:  # [1, 5, 10, 10, 10]  
		r = mid-1
	else:# [20, 5, 10, 10, 10]  or [20, 10, 10, 10, 10]
		r = mid
```

Combining these conditions\uFF1A
```python
	# 154. Find Minimum in Rotated Sorted Array II
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        while l < r:
            mid = (l+r)//2
			# condition for 154
            if nums[mid] == nums[r]:
                if nums[mid] == nums[l]:
                    l = l+1 # or r = r-1
                elif nums[l] < nums[mid] :  
	                r = mid-1
                else:
                    r = mid
			# same as 153
            elif nums[mid] > nums[r]:
                l = mid+1
            else:
                r = mid
        return nums[l]
```

We can combine the judgment conditions in the loop, and choose a larger interval when we combine

```python
	# 154. Find Minimum in Rotated Sorted Array II
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        while l < r:
            mid = (l+r)//2
            if nums[mid] == nums[r]:
                if nums[mid] == nums[l]:
                    l = l+1 # or r = r-1
                else:
                    r = mid
            elif nums[mid] > nums[r]:
                l = mid+1
            else:
                r = mid
        return nums[l]
```