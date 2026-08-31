# ️‍🔥 Counting & Greedy ✅ python3

**Author:** Frederic-Chopin
**Votes:** 51
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5581114/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5581114/)

---

# Idea
- 4 way symmetry
    - change to all 1s or all 0s, whichever costs less     
```
1 _ _ _ 0        1 _ _ _ 1  
_ _ _ _ _   ->   _ _ _ _ _  
1 _ _ _ 1        1 _ _ _ 1  
```
```
0 _ _ _ 0        0 _ _ _ 0  
_ _ _ _ _   ->   _ _ _ _ _  
0 _ _ _ 1        0 _ _ _ 0  
```
- 2 way symmetry, middle column & middle row, 
    - count the number of (1, 1), and (1, 0) pair 
        - if there's an **even** number of (1, 1) pair, 
            - we can simply change all (1, 0) pair to (0, 0) to achive symmetry. 
        - if there's an **odd** number of (1, 1) pair, 
            - if we have at least one (1, 0) pair, change one (1, 0) to (1, 1), and the rest to (0, 0)
            - if there's no (1, 0) pair, change one (1, 1) to (0, 0)
    - ignore (0, 0) pair
```
_ _ 1 _ _       _ _ _ _ _
_ _ _ _ _       _ _ 1 _ _
_ _ _ _ _       _ _ 0 _ _
_ _ 1 _ _       _ _ _ _ _
```
```
_ _ _ _ _       _ _ _ _ _
1 _ _ _ 1       _ 0 _ 0 _
_ _ _ _ _       _ _ _ _ _
```
- center cell
    - if it's 1, always change to 0 
```
_ _ _
_ 1 _
_ _ _
```
# Code with Comment
```python
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        res = 0                 # minimum changes required in 4 way symmetry
        single = 0              # number of (1, 0) pair in a 2 way symmetry
        double = 0              # number of (1, 1) pair in a 2 way symmetry

        # Process 4-way symmetry
        for i in range(m // 2):
            for j in range(n // 2):
                # Change to all 1s or all 0s
                ones = grid[i][j] + grid[i][n-1-j] + grid[m-1-i][j] + grid[m-1-i][n-1-j]
                res += min(ones, 4 - ones)

            # Process the middle column if it exists (2-way symmetry)
            if n % 2 == 1:
                ones = grid[i][n//2] + grid[m-1-i][n//2]
                single += (ones == 1)   # (1, 0)
                double += (ones == 2)   # (1, 1)
        
        # Process the middle row if it exists (2-way symmetry)
        if m % 2 == 1:
            for j in range(n // 2):
                ones = grid[m//2][j] + grid[m//2][n-1-j] 
                single += (ones == 1)   # (1, 0)
                double += (ones == 2)   # (1, 1)
            if n % 2 == 1:
                res += grid[m//2][n//2]     # Center cell needs to be 0 if it's 1

        # Adjust based on the number of (1, 1) pairs:
        # 1. If even, the total number of 1s is already a multiple of 4.
        #    We can change every (1, 0) pair to (0, 0) if there's any.
        # 2. If odd, but we have (1, 0) pairs, convert one (1, 0) to (1, 1).      
        if double % 2 == 0 or single > 0:     
            return res + single

        # 3. If the number of (1, 1) pairs is odd and there are no (1, 0) pairs,
        #    flip one (1, 1) pair to (0, 0).
        return res + 2
```
# Clean
```python
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        res = single = double = 0           

        for i in range(m // 2):
            for j in range(n // 2):
                ones = grid[i][j] + grid[i][n-1 -j] + grid[m-1-i][j] + grid[m-1-i][n-1-j]
                res += min(ones, 4 - ones)

            if n % 2 == 1:
                ones = grid[i][n//2] + grid[m-1-i][n//2]
                single += (ones == 1)
                double += (ones == 2)
        
        if m % 2 == 1:
            for j in range(n // 2):
                ones = grid[m//2][j] + grid[m//2][n-1-j] 
                single += (ones == 1)
                double += (ones == 2)
            if n % 2 == 1:
                res += grid[m//2][n//2]

        if double % 2 == 0 or single > 0:  
            return res + single
        return res + 2
```

