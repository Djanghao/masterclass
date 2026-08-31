# Dynamic Programming. Super easy to understand. Python Solution.

**Author:** RamyaS
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/4243355/](https://leetcode.com/problems/largest-sum-of-averages/solutions/4243355/)

---

# Intuition
Recursively parition at each index and call the function with the next index i.e j ( We do this to find maximum average in each parition)

If we have only one more partition left, it means to calculate the average for the rest of the elements 

Why?

In each parition we divide the array into 2

**For K =3**

In first partition, k = 2
[9| 1 2 3 9]

After second partition, k= 1

[9 | 1 2 3 | **9**]

by then we would've  made three parititons.
 So we just have to calculate for the remaining portion which is the last 9 in this case


# Complexity
- Time complexity:
O(len(nums)^2)


# Code
```
class Solution:
    def largestSumOfAverages(self, nums: List[int], k: int) -> float:
        
        @functools.lru_cache(None)
        def dfs(i,k):

            if k == 1:
                return sum(nums[i:])/len(nums[i:]) #Calculate sum for the remaining elements

            maxAvg = 0

            for j in range(i+1, len(nums)): #Try paritioning at each index and calculate average

                avg = sum(nums[i:j])/len(nums[i:j])

                subarrayAvg = avg + dfs(j, k-1) #Call with the next index (j) after partition

                maxAvg = max(maxAvg, subarrayAvg)

            return maxAvg

        return dfs(0,k)
        

        
```