# Python, sorting, max overlapping segments algorithm

**Author:** blue_sky5
**Votes:** 93
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/1199494/](https://leetcode.com/problems/maximum-population-year/solutions/1199494/)

---

```
class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        dates = []
        for birth, death in logs:
            dates.append((birth, 1))
            dates.append((death, -1))
            
        dates.sort()

        population = max_population = max_year = 0
        for year, change in dates:
            population += change
            if population > max_population:
                max_population = population
                max_year = year
        
        return max_year
```