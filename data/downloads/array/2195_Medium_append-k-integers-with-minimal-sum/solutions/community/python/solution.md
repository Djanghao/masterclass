# Python Solution using AP Sum Explained

**Author:** anCoderr
**Votes:** 8
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1823649/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/1823649/)

---

**Idea Used:**
Here we use the idea of adding the sum of values that exist b/w all consecutive values until we expire all k given to us. 

**Steps:**

1. Sort the numbers and add 0 to the start and 2000000001 to the end of the list.
2. Now go through all the n values of nums
3. For each iteration select ith value as start and i+1th value as end
4. In the current iteration we will be adding values b/w start and end as long as k does'nt expire
5. If start == end then continue
6. Now we sill be using the values start+1, start+2 ... end -2, end-1. We would not use the values start and end themselves.
7. We know that sum of consecutive integers is given by the AP formula with `d = 1`
8. Add this sum to the result and remove the number of integers used from k

**Why I added 0 and 2000000001:**
Since the +ve integers start from 1, and it is not certain that the list might start from 1. We should manually take care of the smallest elements to add so as to minimize the possible sum. So I added 0 to allow it to blend in with the algorithm perfectly.
The reason I added 2000000001 is to prevent ourselves from running out of +ve numbers even when all k havent expired

**Formula for sum in AP (arithmetic progression)**
The sum of given AP `a, a+d, a+2d, a+3d ... a+(i-1)d ... a+(n-1)d` is:
`S = n/2[2a + (n \u2212 1) \xD7 d]` where a is the first term and n is the total number of terms in AP
*In our case since we will be dealing with consecutive numbers `d = 1`*

```
class Solution:
    def minimalKSum(self, nums: List[int], k: int) -> int:
        nums.sort()
        res = 0
        nums.insert(0, 0)
        nums.append(2000000001)
        n = len(nums)
        for i in range(n-1):
            start = nums[i] # This is the lowerbound for current iteration
            end = nums[i+1] # This is the higherbound for current iteration
            if start == end:
                continue
            a = start + 1 # Starting value is lowerbound + 1
            n = min(end - start - 1, k) # Since the total number possible b/w start and end might be more than the k numbers left, so always choose the minimum.
            v = (n*(2*a + n - 1))//2 # n/2[2a + (n-1)d] with d = 1
            res += v # Add the sum of elements selected into res
            k -= n # n number of k's expired, thus k decrements
        return res
```