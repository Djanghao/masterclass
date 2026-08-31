# 🔥 HashSet Clean Solution ✅ python3

**Author:** Frederic-Chopin
**Votes:** 3
**Link:** [https://leetcode.com/problems/grid-illumination/solutions/5469464/](https://leetcode.com/problems/grid-illumination/solutions/5469464/)

---

# Solution
- Time: $$O(L + Q)$$, given $$L $$ lamps, and $$Q$$ queries. 
    - Turning on lights: $$O(L)$$
    - Query loop: $$O(8*Q) = O(Q)$$, each iteration checks $$8$$ directions. 
- Space: $$O(L)$$
```python3
class Solution:
    def gridIllumination(self, n: int, lamps: List[List[int]], queries: List[List[int]]) -> List[int]:
        rows = defaultdict(int)         # i: number of lamps illuminating row i
        cols = defaultdict(int)         # j: number of lamps illuminating column j
        pos_diag = defaultdict(int)     # i+j: number of lamps illuminating the positive diagonal
        neg_diag = defaultdict(int)     # i-j: number of lamps illuminating the negative diagonal
        lights = set()

        directions = []                 # 8 neighboring directions + current cell
        for di in range(-1, 2):
            for dj in range(-1, 2):
                directions.append([di, dj])

        # turn on all the lights
        for i, j in lamps:
            if (i, j) in lights:        # do not turn on the same light twice
                continue
            rows[i] += 1
            cols[j] += 1
            pos_diag[i+j] += 1
            neg_diag[i-j] += 1
            lights.add((i, j))
        
        result = []
        for i, j in queries:
            if rows[i] > 0 or cols[j] > 0 or pos_diag[i + j] > 0 or neg_diag[i - j] > 0:
                result.append(1)
            else:
                result.append(0)
            
            # Turn off the lamp at the query position and its adjacent positions
            for di, dj in directions:
                ni, nj = i + di, j + dj
                if (ni, nj) in lights:
                    lights.remove((ni, nj))
                    rows[ni] -= 1
                    cols[nj] -= 1
                    pos_diag[ni + nj] -= 1
                    neg_diag[ni - nj] -= 1

        return result
```