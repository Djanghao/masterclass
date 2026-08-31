# Python 3   ||   8 lines,  slices, w/ comments   ||   T/S: 82% / 34%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3576482/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3576482/)

---

```
class Solution:
    def differenceOfDistinctValues(self, grid: List[List[int]]) -> List[List[int]]:

        d = defaultdict(list)                      

        for i, j in product(range(len(grid)),        
                            range(len(grid[0]))):
            d[i-j].append((i,j))                        # <-- Construct dict of diagonals; i - j
                                                        #     remains constant on a '\\' diag. 
        for diag in d:
            arr = [grid[i][j] for i,j in d[diag]]       # <-- Construct an arr of the elements
                                                        #     on the diagonal.

            for idx, (i,j) in enumerate(d[diag]):       # <-- Overwrite each element in the diagonal.   
                grid[i][j] = abs(len(set(arr[:idx])) -  #     in the array with its score.
                                 len(set(arr[idx+1:])))
            
        return grid                                     # <-- Return the overwritten 'grid' as the
                                                        #     'answer' matrix.
```
[https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/submissions/1294920416/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/submissions/1294920416/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*) in which *N* ~ the count of elements in `grid` *len*(*grid*) x *len*(*grid*[0]).