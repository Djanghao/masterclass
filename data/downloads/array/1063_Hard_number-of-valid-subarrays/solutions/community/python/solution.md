# [python] Stack solution

**Author:** littleLearner
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/455909/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/455909/)

---

Inspired by https://leetcode.com/problems/number-of-valid-subarrays/discuss/318895/Python-O(n)-stack

Main idea:
1. Brute force that iterates through i and j in Python is too slow. Use stack. 
2. We know that the number of subarrays that start at ind, and end somewhere before i is just i - ind.
3. As you store those elements, you append elements, and sometimes replace elements. Whenever you replace elements, the number of subarrays that start with that element can be given by i (The element that replaces) - ind (The element that's being replaced). Note that when you do the element popping, use a while loop to pop out everything that's bigger than it, rather than just popping one element.
4. When you are don with the stack, for every element in the stack, the number of subarrays that start from that element is its index to the end of nums, because the everything is valid given that the stack is monotonely increasing.
	
		class Solution(object):
		def validSubarrays(self, nums):
			"""
        :type nums: List[int]
        :rtype: int
        """        
		count = 0
        stack = []
        for i,v in enumerate(nums):
            while stack and v < nums[stack[-1]]:
                ind = stack.pop(-1)
                count += i - ind
            stack.append(i)
        for i in stack:
            count += len(nums) - i
                
            
            
        return count