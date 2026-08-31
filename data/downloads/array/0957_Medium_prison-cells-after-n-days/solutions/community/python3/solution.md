# [Python3] Prison Cells After N days:  dictionary to store pattern

**Author:** zhanweiting
**Votes:** 34
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/347500/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/347500/)

---

* There must be a pattern in this problem. The length of the list is 8, and the first and last element of list will always be 0. So only 8-2= 6 items in the list will change. For each item, there are 2 possible values : 0 or  1. So the entile possible cell states will be less or equal to 2**6 = 64.

* \uD83E\uDD89  the repeatition or pattern or cyclicality may start at N = 0 or 1.
Fact: the first and last element of the list will always be 0.
If your input starts with 1 [1......] or ends with 1[......1], it couldn't be in the cyclicality.
So We can't assume the input is inside the cyclicality.


```
// Case 1:
0 [0, 1, 0, 1, 1, 0, 0, 1]
----------------------------------------
1 [0, 1, 1, 0, 0, 0, 0, 0]
2 [0, 0, 0, 0, 1, 1, 1, 0]
3 [0, 1, 1, 0, 0, 1, 0, 0]
4 [0, 0, 0, 0, 0, 1, 0, 0]
5 [0, 1, 1, 1, 0, 1, 0, 0]
6 [0, 0, 1, 0, 1, 1, 0, 0]
7 [0, 0, 1, 1, 0, 0, 0, 0]
8 [0, 0, 0, 0, 0, 1, 1, 0]
9 [0, 1, 1, 1, 0, 0, 0, 0]
10 [0, 0, 1, 0, 0, 1, 1, 0]
11 [0, 0, 1, 0, 0, 0, 0, 0]
12 [0, 0, 1, 0, 1, 1, 1, 0]
13 [0, 0, 1, 1, 0, 1, 0, 0]
14 [0, 0, 0, 0, 1, 1, 0, 0]
----------------------------------------
15 [0, 1, 1, 0, 0, 0, 0, 0]
16 [0, 0, 0, 0, 1, 1, 1, 0]
17 [0, 1, 1, 0, 0, 1, 0, 0]
18 [0, 0, 0, 0, 0, 1, 0, 0]
19 [0, 1, 1, 1, 0, 1, 0, 0]
20 [0, 0, 1, 0, 1, 1, 0, 0]
21 [0, 0, 1, 1, 0, 0, 0, 0]
22 [0, 0, 0, 0, 0, 1, 1, 0]
23 [0, 1, 1, 1, 0, 0, 0, 0]
24 [0, 0, 1, 0, 0, 1, 1, 0]
25 [0, 0, 1, 0, 0, 0, 0, 0]
26 [0, 0, 1, 0, 1, 1, 1, 0]
27 [0, 0, 1, 1, 0, 1, 0, 0]
28 [0, 0, 0, 0, 1, 1, 0, 0]
----------------------------------------
```
*  To calculate the next day prison states:
```
# the first and last cells will alwasy be zero according to the condition
def nextday(cells):
            next_day_cells = [0] *len(cells)
            for i in range(1,len(cells)-1):
                if cells[i-1] == cells[i+1]: 
                        next_day_cells[i] = 1
                else:
                        next_day_cells[i] = 0
            return tuple(next_day_cells)
   
```
*  From the results, we know that the length of the pattern will be 14. i.e. the length of pattern == 14.
```
Seen =
{(0, 1, 1, 0, 0, 0, 0, 0): 1,
(0, 0, 0, 0, 1, 1, 1, 0): 2,
(0, 1, 1, 0, 0, 1, 0, 0): 3,
(0, 0, 0, 0, 0, 1, 0, 0): 4,
(0, 1, 1, 1, 0, 1, 0, 0): 5, 
(0, 0, 1, 0, 1, 1, 0, 0): 6, 
(0, 0, 1, 1, 0, 0, 0, 0): 7,
(0, 0, 0, 0, 0, 1, 1, 0): 8, 
(0, 1, 1, 1, 0, 0, 0, 0): 9, 
(0, 0, 1, 0, 0, 1, 1, 0): 10, 
(0, 0, 1, 0, 0, 0, 0, 0): 11, 
(0, 0, 1, 0, 1, 1, 1, 0): 12,
(0, 0, 1, 1, 0, 1, 0, 0): 13, 
(0, 0, 0, 0, 1, 1, 0, 0): 14}
```

*  
*  Code 
	
```
class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        def nextday(cells):
            next_day_cells = [0] *len(cells)
            for i in range(1,len(cells)-1):
                if cells[i-1] == cells[i+1]: 
                        next_day_cells[i] = 1
                else:
                        next_day_cells[i] = 0
            return next_day_cells
        
        seen = {}
        while N > 0:
            c = tuple(cells)
            if c in seen:
                N %= seen[c] - N
            seen[c] = N

            if N >= 1:
                N -= 1
                cells = nextday(cells)

        return cells
```