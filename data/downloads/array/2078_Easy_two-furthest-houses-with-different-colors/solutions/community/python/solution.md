# 90% O(n) - Fast & Easy 2-pointer / Greedy

**Author:** bwlee13
**Votes:** 6
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/1908014/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/1908014/)

---

Easiest way to do a scan like this is with two pointers. Fix a left pointer, and while they're equal, move the right pointer from the end, inward until they arent. Then, take the distance by index. However, that will only solve the example cases. To correctly solve an edge case (where Greedy comes in to play), do the same thing but from the other end. Fix the right pointer at the end and move the left pointer by one every time. Since you're making two separate passes, time complexity isn't compounding so it is just O(n). No extra space, either O(1). 
![image](./images/0.png)

```
class Solution:
    def maxDistance(self, colors: List[int]) -> int:
		#first pass
        l, r = 0, len(colors)-1
        dist = 0
        
        while r > l:
            if colors[r] != colors[l]:
                dist = r-l
				#slight performance increase, break out if you find it 
				#because it can't get bigger than this
                break 
            r -= 1
			
        #second pass, backwards
        l, r = 0, len(colors)-1
        while r > l:
            if colors[r] != colors[l]:
                dist = max(dist, r-l)
                break
            l += 1
        
        return dist
	
	