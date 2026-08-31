# Python easy solution with detail explanation (modified binary search)

**Author:** Abeni
**Votes:** 128
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/1568523/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/1568523/)

---

##### Idea : the trick is to use modified binary search
We keep searching until low bound greater than upper bound
* First we need to take care of edge cases 
	* If the letter is out of boundary (above the last letter or below the first letter)
		* return the first letter 
* If the letter is in the boundary of the list 
	* Apply the binary search with only one change
		* **when updating the bottom boundary check if the target is greater than or equal to the mid value** ( In binary search we only check if it is greater than )
			* The reason is : since we are asked to return the value above the target value we want to keep track of the value one step above the low value 
	* when the low > high 
		* we return the letters[low]

```
class Solution(object):
    def nextGreatestLetter(self, letters, target):
        """
        :type letters: List[str]
        :type target: str
        :rtype: str
        """
        
        # if the number is out of bound
        if target >= letters[-1] or target < letters[0]:
            return letters[0]
        
        low = 0
        high = len(letters)-1
        while low <= high:
            mid = (high+low)//2
            
            if  target >= letters[mid]: # in binary search this would be only greater than
                low = mid+1
            
            if target < letters[mid]:
                high = mid-1
                
        return letters[low]
```

##### I hope you've found this helpful
##### Please upvote and encourage me to on my quest to document all leetcode problems \uD83D\uDC4D
##### PS: Search for Abeni tag in the discussion, if I have solved it, You will find a detial explanation there\uD83D\uDCBB