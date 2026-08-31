# Two Pointers

**Author:** a-ma-n
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3232764/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3232764/)

---

## Why include the middle element in the 1st half
For the people confused why mid is in the first part:
We know that the condition: nums[firstElement]<=2*nums[secondElement] will hold true for all elements to the right of second element:
for example:
[1,2,3] => if 12<=2 (indices 0,1), which is true
it will also be true for 12<=3, (indices 0,2)

Thus we can say if we choose to include in the middle we cancel the possibility that:
nums[mid]<=nums[lastElement]

Now consider this possibility existed, we will never mark it as the middle element is a part of our second half.
But if we kept it as a part of our 1st half we will be able to make a pair of this with the last element:(mid,lastIndex)
Now what happened to the index for which mid satisfied the condition: i.e. nums[smallerIndex]*2<=nums[mid]; it can still be marked with indexes greater than mid;
say nums[smallerIndex]>*2<=nums[mid+1] (mid+1 is just for demonstration here, any index with a value greater than mid could be paired with the smaller index as they all are greater than the smaller index).

Hope I was properly able to explain the reason why we take 1st half as [0, mid] and 2nd half as (mid,lastIndex]

```
class Solution:
    def maxNumOfMarkedIndices(self, nums: List[int]) -> int:
        n=len(nums)
        i=0
        nums.sort()
        for j in range(n//2,n):
            i+= nums[j]>=nums[i]*2
        return i*2
```
Solution credits: @votrubac

**Example**:
```
If n= 5
N//2 or n-n//2
2 or 5-2=3

----v
0 1 2 3 4. [indexes of an array of length 5]
------^
separate as :
{0,1,2} and {3,4}
```