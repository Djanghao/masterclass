# ✅ Explained - Simple and Clear Python Code✅

**Author:** moazmar
**Votes:** 19
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/3395804/](https://leetcode.com/problems/sum-of-distances/solutions/3395804/)

---

# Intuition
The problem asks to find the sum of absolute differences between the index of all elements with the same value in the input array. We can solve this by maintaining a dictionary of indices for each unique value in the input array and then iterate through the array to calculate the sum of absolute differences.


# Approach
1. Create a dictionary num_indices to store the index of each unique element in the input array nums.
2. Also, create a dictionary occ to store the number of occurrences of each unique element in the input array nums.
3. Iterate through nums, and for each element, update num_indices and occ.
4. Create an empty array arr of the same length as nums.
5. Iterate through nums again, and for each element, calculate the sum of absolute differences using the values from num_indices and occ, and store it in arr.
6. Finally, return the arr array.
# Complexity
- Time complexity:
O(n), where n is the length of the input array nums.
The first iteration to create the dictionaries num_indices and occ takes O(n) time. The second iteration to calculate the sum of absolute differences also takes O(n) time.
Overall, the time complexity is O(n).
- Space complexity:
O(n), where n is the length of the input array nums.
The space complexity is dominated by the two dictionaries num_indices and occ, which can have at most n unique elements.
Overall, the space complexity is O(n).
# Code
```
class Solution:
    def distance(self, nums: List[int]) -> List[int]:
        num_indices = dict()
        occ=dict()
        for i, num in enumerate(nums):
            if num not in num_indices:
                num_indices[num] = i
                occ[num]=1
            else:
                num_indices[num]=num_indices[num]+i
                occ[num]=occ[num]+1
        arr = [0] * len(nums)
        n=len(nums)
        for i in range(n):
            arr[i] = num_indices[nums[i]] - occ[nums[i]]*i     
            num_indices[nums[i]]=num_indices[nums[i]]-2*i
            occ[nums[i]]=occ[nums[i]]-2
            
        return arr
        
```