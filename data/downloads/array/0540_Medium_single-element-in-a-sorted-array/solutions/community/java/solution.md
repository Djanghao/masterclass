# Java | C++ | Python3 | Easy explanation | O(logn) | O(1)

**Author:** logan138
**Votes:** 1183
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/627921/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/627921/)

---

```
EXPLANATION:-
Suppose array is [1, 1, 2, 2, 3, 3, 4, 5, 5]
we can observe that for each pair, 
first element takes even position and second element takes odd position
for example, 1 is appeared as a pair,
so it takes 0 and 1 positions. similarly for all the pairs also.

this pattern will be missed when single element is appeared in the array.

From these points, we can implement algorithm.
1. Take left and right pointers . 
    left points to start of list. right points to end of the list.
2. find mid.
    if mid is even, then it's duplicate should be in next index.
	or if mid is odd, then it's duplicate  should be in previous index.
	check these two conditions, 
	if any of the conditions is satisfied,
	then pattern is not missed, 
	so check in next half of the array. i.e, left = mid + 1
	if condition is not satisfied, then the pattern is missed.
	so, single number must be before mid.
	so, update end to mid.
3. At last return the nums[left]

Time: -  O(logN)
space:-  O(1)


IF YOU  HAVE ANY DOUBTS, FEEL FREE TO ASK
IF YOU UNDERSTAND, DON'T FORGET TO UPVOTE.
```
```
Java:-
class Solution {
    public int singleNonDuplicate(int[] nums) {
        int left = 0, right = nums.length-1;
        while(left < right){
            int mid = (left + right)/2;
            if( (mid % 2 == 0 && nums[mid] == nums[mid +1]) || (mid %2 == 1 && nums[mid] == nums[mid - 1]) )
                left = mid + 1;
            else
                right = mid;
        }
        return nums[left];
    }   
}

Python3:-
class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        left, right = 0, len(nums)-1
        while left < right:
            mid = int((left + right)/2)
            if (mid % 2 == 1 and nums[mid - 1] == nums[mid]) or (mid%2 == 0 and nums[mid] == nums[mid + 1]):
                left = mid + 1
            else:
                right = mid
        return nums[left]
		
C++:-
class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        while(left < right){
            int mid = (left + right)/2;
            if((mid % 2 == 0 && nums[mid] == nums[mid + 1]) || (mid % 2 == 1 && nums[mid] == nums[mid - 1]))
                left = mid + 1;
            else
                right = mid;
        }
        
        return nums[left];
    }
};
```


I have started a series on solid principles and design patterns. If anyone is interested, please check [it](https://medium.com/@bhanu150138/mastering-solid-principles-and-design-patterns-a-blog-series-for-writing-clean-scalable-code-aae3809310db) out.