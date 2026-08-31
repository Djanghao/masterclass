# Comprehensive Python Explanation, 4 methods

**Author:** bloomh
**Votes:** 396
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/2635285/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/2635285/)

---

**Intuition**
To solve this problem we need to create an array that will store the running sum up to that index. There are many ways to do this, starting from the most basic brute force to a neat single pass.

**Method 1: Pure Brute Force; Time: O(N^2), Space: O(N)**
```
def runningSum(self, nums: List[int]) -> List[int]:
	answer = [] #array to keep track of our answer
	for i in range(len(nums)): #iterate through all the elements in nums
		runningSum = 0 #this will keep track of the running sum up to index i
		for j in range(i+1): 
			runningSum += nums[j] #sum all the elements leading up to nums[i]
		answer.append(runningSum) #add the sum to our answer array
	return answer
```
The idea behind this method is that for every index i in nums, we will iterate from 0 to i and sum the elements in nums to get the running sum. The time complexity is O(N^2) since we need to iterate up to index i for every value of i between 0 and N. The space complexity is O(N) since our answer array has length N (where N is the length of nums).

 **Method 2: Brute Force with List Comprehension; Time: O(N^2), Space: O(N)**
 ```
 def runningSum(self, nums: List[int]) -> List[int]:
	return [sum(nums[:i+1]) for i in range(len(nums))]
```
This method works the same as Method 1 but is a neat one liner. ```sum(nums[:i+1])``` performs the same function as our nested for loop in method 1, finding the running sum up to that point. 

**Improving from Brute Force**
Both of these methods are accepted, but when we find a working solution, we should always ask if we can think of a better one. In this case, there is a way to complete the function in one pass, lowering the time complexity from O(N^2) to O(N).

**Method 3: One Pass; Time: O(N), Space: O(N)**
```
def runningSum(self, nums: List[int]) -> List[int]:
	runSum = [nums[0]] #our answer array starts with nums[0], which is the 0th running sum
	for i in range(1,len(nums)):
		runSum.append(runSum[i-1]+nums[i]) #the running sum up to index i is the sum of nums[i] and the running sum up to index i-1
	return runSum
```
The key insight here is that the running sum up to index i is the sum of nums[i] and the running sum up to index i-1. Here is a more detailled explanation:
We know that ```runningSum[i] = nums[0] + nums[1] + ... + nums[i-1] + nums[i]```. 
However, ```runningSum[i-1] = nums[0] + nums[1] + ... + nums[i-1]```, so we can rewrite the first expression to get that ```runningSum[i] = runningSum[i-1] + nums[i]```!

This code has a time complexity of O(N) since it only takes one pass, which will make the program run much faster when given a very large nums array. However, there is still a way to optimize the space we use.

**Method 4: One Pass, In-Place Solution; Time: O(N), Space: O(1)**
```
def runningSum(self, nums: List[int]) -> List[int]:
	for i in range(1,len(nums)):
		nums[i] = nums[i-1] + nums[i]
	return nums
```
This method uses the same insight as Method 3 but does it without using an extra array to store the result!. If we are currently at index i, we can assume ```nums[i-1], nums[i-2]... nums[0]``` have all been visited before and therefore contain the running sum up to that point. This means that ```nums[i-1]``` is actually the same as ```runSum[i-1]``` in the last method! By modifying nums in-place and not using an extra array, we cut down on any unnecessary extra space.


**Thanks for Reading!**
If this post has been helpful please consider upvoting! Also, if I made any mistakes or there are other optimizations, methods I didn't consider, etc. please let me know!


