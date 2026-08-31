# Code + Login Explanation | Python

**Author:** morningstar317
**Votes:** 19
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/1006589/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/1006589/)

---

```
The solution to the question lies in finding the number of possible subsequence between 
start and end pointer.
```
Let the first pointer be at index ```0``` and  last pointer be at index ```n-1```.

Steps to follow:
1. Sort the array
2. Find the ```start and end ```index such that ```A[start] + A[end]  <= target``` 
3. Let's say we have the required start index ```i``` and end index ```j```.  
	a. For all the index starting from ```i+1``` to ```j```, we can choose either include it our set or ignore it
	b. Meaning for every index from ```i+1``` to ```j``` we have two options
	c. Therefore the total count of subsets would be ```2**(j-i)```
	
	
```
class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        
        left = 0
        right = len(nums)-1
        nums.sort()
        ans = 0
        while left <= right:
            val = nums[left] + nums[right]
            if val > target:
                right-=1
            else:
                ans += pow(2,right-left,10**9+7)
                left+=1
        return ans % (10**9 + 7)
		
	
	Upvote if this helps !
	
