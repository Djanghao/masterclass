# [Python] Binary Search (detailed explanation)

**Author:** ianlai
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1978008/](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1978008/)

---

### Idea

- `Point (px, py)` should be counted when `px <= length and py <= height`
- We can start with a simpler question -> If the point is not 2D, and it's just a 1D integer, how can we solve this?

### Simpler question (1D)
- Question: 
	- Given a list of point `xi` and a list of rectangle's length `li`. For each point, how many rectangles contain it?
- Brute Force: 
	- We can travese each point and compare with each rectangle.
```Python
res = []
for xi in points:
	count = 0 
	for li in rectangles: 
		if li >= xi:
			count +=1
	res.append(count)

# Time Complexity: O(P * R)  #assume P points and R rectangles 
```
- Better approach: 
	- We know the Brute Force is not efficient enough because it check all rectangles for each points again and again. 
	- Instead, we can do some preprocessing in advance to make the rectangle's states easier to be reused before starting traversing points. 
	- The common *preprocessing* are like building map, creating prefix sum, sorting, etc. Here, a simple sorting helps because then we can use a binary search to find the first index which's rectangle is larger than the point.

```Python
rectangles.sort()   
res = []
for xi in points:
	idx = bisect.bisect_left(rectangles, xi)  #index of first rectangle which is >= xi 
	res.append(len(rectangles) - idx)
	
# Time Complexity: O(RlogR + PlogR)  #Sorting: RlogR  /  Binary search in rectangle for P times: PlogR 
```

### Back to the original question (2D)
- Similar to the 1D question, if either the height or weight is static, we can use the same approach `sorting + binary search` to solve. 
- After checking the constraint, we noticed one important fact - the height is limited !
```
1 <= li, xj <= 10^9
1 <= hi, yj <= 100
```
- Then the story becomes easy. It's almost the same as the 1D question. We just need to find the possible heights first, then do the binary search for each possible heights, and sum them up. 

```
class Solution:
    def countRectangles(self, rectangles: List[List[int]], points: List[List[int]]) -> List[int]:
        maxH = 101 
        hToL = [[] for _ in range(maxH)]
        
		# Create the 100 list (0 is not used) 
        for l, h in rectangles:
            hToL[h].append(l)
			
        # Sort the 100 list
        for h in range(1, maxH):
            hToL[h].sort()
        
		res = []
        for px, py in points:
            count = 0
            # Only search the height (y) which equals to or greater than given py 
            for h in range(py, maxH):
                if len(hToL[h]) == 0:
                    continue
                # Find the first index of length (x) which equals to or greater than given px in the sorted array
                idx = bisect.bisect_left(hToL[h], px) 
                count += len(hToL[h]) - idx
            res.append(count)
        return res

# Time Complexity: O(100*RlogR + P*100*logR) = O(RlogR + PlogR)  //if we consider 100 is a constant
# Space Complexity: O(R)
```

Practicing leetcode problem is tough and lonely (at least for me).
I hope this solution helps you a bit :) 

