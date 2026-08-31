# [Python] 100% Efficient solution, easy to understand with comments and explanation

**Author:** CaptainX
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/1108491/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/1108491/)

---

**Key Idea:** We need to keep assigning the remaining extra students to the class which can experience the greatest impact. 

Let see an example below, if we have following clasess - [[2,4], [3,9], [4,5], [2,10]], then the impact of assignment students to each class can be defined as,

```
# In simple terms it can be understood as follows,

currentRatio = passCount/totalCount
expectedRatioAfterUpdate = (passCount+1)/(totalCount+1)
impact = expectedRatioAfterUpdate - currentRatio
			
OR

# Formula to calculate impact of assigning a student to a class
impacts[i] = (classes[i][0]+1) / (classes[i][1]+1) - classes[i][0]/classes[i][1]
i.e.
impacts[0] -> (4+1)/(2+1)-4/2 
impacts[1] -> (3+1)/(9+1)-3/9 
.
.
etc.
```

And, once we assign a student to a class, then we need the class with "next" greatest impact. We know that heap is perfect candidate for scenarios in which you need to pick the least/greatest of all the collections at any point of time.

Hence, we can leverage that to fetch the greatest impacts in all the cases. 

**Note:** in below code we have negated (observe `-` sign ), because by default python heaps are min heaps. Hence, it's sort of a workaround to make our logic work :)

```
class Solution:
	def maxAverageRatio(self, classes: List[List[int]], extraStudents: int) -> float:
		
		n = len(classes)
		
		impacts = [0]*n
		minRatioIndex = 0
		
		# calculate and store impacts for each class in form of tuples -> (-impactValue, passCount, totalCount)
		for i in range(n):
			passCount = classes[i][0]
			totalCount = classes[i][1]
			
			# calculate the impact  for class i
			currentRatio = passCount/totalCount
			expectedRatioAfterUpdate = (passCount+1)/(totalCount+1)
			impact = expectedRatioAfterUpdate - currentRatio
			
			impacts[i] = (-impact, passCount, totalCount)  # note the - sign for impact
			
		heapq.heapify(impacts)
		
		while(extraStudents > 0):
			# pick the next class with greatest impact 
			_, passCount, totalCount = heapq.heappop(impacts)
			
			# assign a student to the class
			passCount+=1
			totalCount+=1
			
			# calculate the updated impact  for current class
			currentRatio = passCount/totalCount
			expectedRatioAfterUpdate = (passCount+1)/(totalCount+1)
			impact = expectedRatioAfterUpdate - currentRatio
			
			# insert updated impact back into the heap
			heapq.heappush(impacts, (-impact, passCount, totalCount))
			extraStudents -= 1
		
		result = 0
			
		# for all the updated classes calculate the total passRatio 
		for _, passCount, totalCount in impacts:
			result += passCount/totalCount
			
		# return the average pass ratio
		return result/n
```