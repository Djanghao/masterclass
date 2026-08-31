# Python3 O(N)

**Author:** signifying
**Votes:** 40
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/1210686/](https://leetcode.com/problems/maximum-population-year/solutions/1210686/)

---

### Steps
1. For each log, update an array which stores the population changes in each year. The first index corresponds to the year 1950, and the last to the year 2050. 
1. Then, iterate through the years while updating the running sum, max population and year of that max population.
1. Return that year.

```
class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        # the timespan 1950-2050 covers 101 years
		delta = [0] * 101

		# to make explicit the conversion from the year (1950 + i) to the ith index
        conversionDiff = 1950 
		
        for l in logs:
			# the log's first entry, birth, increases the population by 1
            delta[l[0] - conversionDiff] += 1 
			
			# the log's second entry, death, decreases the population by 1
            delta[l[1] - conversionDiff] -= 1
        
        runningSum = 0
        maxPop = 0
        year = 1950
		
		# find the year with the greatest population
        for i, d in enumerate(delta):
            runningSum += d
			
			# since we want the first year this population was reached, only update if strictly greater than the previous maximum population
            if runningSum > maxPop:
                maxPop = runningSum
                year = conversionDiff + i
				
        return year
```

This idea works because we have a limited number of years (101) to track. If this number were higher, we could instead sort then iterate, for an O(nlogn) complexity with O(n) memory solution.