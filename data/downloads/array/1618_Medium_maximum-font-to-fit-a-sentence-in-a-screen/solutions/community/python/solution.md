# [Python]The most standard template for Binary Search

**Author:** surface09
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/1703273/](https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/1703273/)

---

```
class Solution:
    def maxFont(self, text: str, w: int, h: int, fonts: List[int], fontInfo : 'FontInfo') -> int:
        
        def check(fs):
            
            # check height
            if fontInfo.getHeight(fs) > h:
                return False
            
            # check total width
            summ = 0
            for c in text:
                summ += fontInfo.getWidth(fs, c)
                if summ > w:
                    return False
            
            return True

        
        # Binary Search
		# we need to consider which the range of the result is
        left = 0
        right = len(fonts) - 1
        
        # the benefit to write left + 1 < right is that, crossing border case will never happen
        while left + 1 < right:
            
            # standard writing to get mid
            # if you write mid = (left + right) // 2, when left and right are too big, this will cost too much
            mid = left + (right - left) // 2
            
            if check(fonts[mid]):
                left = mid
                
            # when we see a value that can not be obtained as our result, we can exclude it in the next time's binary search
            # the difference between writing mid + 1 and mid is that, whether this value will be considered as a result
            # For example, 1 3 5, we want to get 3, then after checking 5 and we confirm that 5 is not ok, then 
            # we can execute right = mid - 1 instead right = mid, more accurate.
            else:
                right = mid - 1
        
        # side effect of left + 1 < right.
		# That is, left and right all can be the result that we want to get
		# so we need to confirm them seperately, but this process is a template process
		# we just do this after every binary search without any thinking
		# But the benefit is too good, that is, crossing border will never happen
        if check(fonts[right]):
            return fonts[right]
        
        elif check(fonts[left]):
            return fonts[left]
        
        else:
            return -1
```