# Finally, I understand it and so can you.

**Author:** bismeet
**Votes:** 120
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/915047/](https://leetcode.com/problems/find-k-closest-elements/solutions/915047/)

---

This problem took binary search to a whole new level for me. I will try to explain the way I came to understand this problem.

We need to return k elements that are closest to x. The input array is sorted in ascending order. So, we will try to find the starting point of these k elements i.e. the first element in this list of k elements which will make it easier to return the k elements. Let's call this first element of the output list low.

We will initially create a boundary of size k . Why size k? Because the starting point of the boundary will give us the k elements we need.

So initially our low bound will be  0. The upper bound will be length of array - k. Why?

Suppose our array is 1 2 3 4 5 and k=2 . Then in our final output start of  the window must lie between 0 and 4 . If it lies at 5, we cannot pick k elements. So, it makes sense for our upper bound to be len(arr) - k.

Now, we want to do a binary search in order to optimise or find the correct start boundary.

The following are the cases :

1. x<=arr[mid].
2. x>=arr[mid+k]
3. arr[mid] < x < arr[mid+k]

I will be explaining alll these cases.

Consider what are the boundaries for our element x.

left.....mid....mid+k...........right

1. x<=arr[mid].
There are k+1 elements between mid and mid+k,inclusive. if x<=arr[mid], then mid+k element won't be part of our output since the array is sorted and x will be further away from mid+k element. So, in order to change the start of the boundary, our boundary can't start from mid+1 anymore (because we won't be able to include k elements.) Thus, we realise that the boundary for k elements  needs to either start at mid or before it. Thus, high moves to mid(not mid-1) because mid is a valid value for the k element starting window.

2.x>=arr[mid+k]
Quite similar to the case above,if x is not less than or equal to mid, that is x is greater than mid, then the boundary for start of our answer lies after mid(excluding mid), thus low moves to mid+1.

3. arr[mid] < x < arr[mid+k]

If both of the earlier condtions are not satisified, then we consider the distance of x from both the mid and mid+k . If x is closer to mid,similar to the 1st case, move it away from mid+k and move high to mid. else move low to mid+1.

Python Code:

```
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        
        low = 0
        
        high = len(arr) - k
        
        while low < high:
            
            mid = low + (high-low)//2
            
            if x<=arr[mid]:
                
                high=mid
                
            elif arr[mid+k]<=x:
                
                low = mid+1
                
            else:
                
                middist = abs(x-arr[mid])
                
                midkdist = abs(x-arr[mid+k])
                
                if middist <= midkdist:
                    
                    high=mid
                    
                else:
                    
                    low=mid+1
            
                    
        return arr[low:low+k]
```




