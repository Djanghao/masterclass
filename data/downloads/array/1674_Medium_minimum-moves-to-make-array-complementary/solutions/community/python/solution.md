# Sweep Algorithm | Explained [Python]

**Author:** xyz76
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/1650877/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/1650877/)

---

Let's start with a few observations:
1. Let's say x = target number (sum for each complimentary numbers) => We need to change complimentary values to achieve this target
2. The min target number achievable is 2 
	* 1 <= nums[i] <= limit <= 105
	* so either the nums[i] already equal to 1 each or we replace them by 1
3. The max target number achievable is 2 * limit
	* 	We replace both complimentary values by **limit**

Now the problem is to find an optimal target which would minimize total number of moves. For, each complimentary numbers 
1) we could either make 0 move and achieve the target = nums[i] + nums[n-1-i]
2) or, make one move and achieve a target range of [min(nums[i], nums[n-1-i]) + 1, max(nums[i], nums[n-1-i] + limit]
	* lower limit -> change max(nums[i], nums[n-1-i]) to 1 -> target would be min(nums[i], nums[n-1-i]) + 1
	* upper limit -> change min(nums[i], nums[n-1-i] to limit -> target would be max(nums[i], nums[n-1-i] + limit
3) Make two moves and achieve a target range of 
	*  [2, min(nums[i], nums[n-1-i]) + 1) 
	*  or, (max(nums[i], nums[n-1-i] + limit, 2*limit]

Let's say our array was [1,2,4,3] and limit = 4
 -> possible target sum would be 2 to 2* limit (2-8)
 -> first complimentary pair would be (1,3). And the number of moves to achieve the corresponding target  would be as follows

		num_moves:         1 1 0 1 1 1 2 
		target:            2 3 4 5 6 7 8 

 -> second complimentary pair would be (2,4) index = (1,2):

		num_moves:         2 1 1 1 0 1 1 
		target:            2 3 4 5 6 7 8 

As we can see we can make a minimum total moves = 1 by either achieving a target of 4 ( make a change in second complimentary pair) or a target of 6 (make a change in first complimentary pair)

So if we sum num_moves across all our targets, we can find the target with the min_total_moves. So, how to efficiently merge all the intervals?

We can derive the idea from Sweep Line Algorithm. (Have a look at the sweep line algorithm to understand the solution) 

Let's start by our worst case scenario of having to make two moves for each pair to achieve a target - we would have to make n moves in that case. We can maintain a overlap_arr which tries to reduce the number of moves according to our above observation.
1) For target in range [min(nums[i], nums[n-1-i]) + 1, nums[i] + nums[n-1-i]), we need only 1 move - since we assumed 2 moves for each pair, we can reduce overlap_arr[min(nums[i], nums[n-1-i]) + 1] by 1
2) For target == nums[i] + nums[n-1-i], our move would further reduce by 1 
3) For target = (nums[i] + nums[n-1-i], max(nums[i], nums[n-1-i]) + limit], we need to increase our moves by 1
4) and for target = (max(nums[i], nums[n-1-i]) + limit, 2*limit), we need to restore our initital assumption of two moves - increase again by 1

```
class Solution:  
    def minMoves(self, nums: List[int], limit: int) -> int:
        n = len(nums)
        overlay_arr = [0] * (2*limit+2)
        for i in range(n//2):
            left_boundary = min(nums[i], nums[n-1-i]) + 1
            no_move_value = nums[i] + nums[n-1-i]
            right_boundary = max(nums[i], nums[n-1-i]) + limit
            overlay_arr[left_boundary] -= 1
            overlay_arr[no_move_value] -= 1
            overlay_arr[no_move_value+1] += 1
            overlay_arr[right_boundary+1] += 1
        curr_moves = n   #initial assumption of two moves for each pair
        res = float("inf")
		# start Sweeping
        for i in range(2, 2*limit+1):
            curr_moves += overlay_arr[i]
            res = min(res, curr_moves)
        return res
```
