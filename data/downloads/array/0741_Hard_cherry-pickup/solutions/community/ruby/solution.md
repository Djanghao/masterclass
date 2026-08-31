# Beats 100% Ruby solution for Time and Space

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/4289276/](https://leetcode.com/problems/cherry-pickup/solutions/4289276/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Consider 2 players starting from 0,0 and let them explore routes.
They can go in 4 directions: [horizontal, horizontal], [horizontal, vertical], [vertical, horizontal], [vertical, vertical]. Count the number of cherries on each of their routes.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n ^ 3)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n ^ 4)


# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def cherry_pickup(grid)
    @grid = grid
    @n = grid.length
    @dp = Array.new(@n) { Array.new(@n) { Array.new(@n) { Array.new(@n) } } }

    [0, dfs(0, 0, 0, 0)].max
end

def dfs(r1, c1, r2, c2)
    if r1 >= @n || r2 >= @n || c1 >= @n || c2 >= @n || @grid[r1][c1] == -1 || @grid[r2][c2] == -1
        return -999999
    end

    # if both players each the desination
    # since its n * n matrix, both players will reach at destination at the same time. Hence checking for either works here.
    if r1 == @n - 1 && c1 == @n - 1
        return @grid[r1][c1]
    end

    return @dp[r1][c1][r2][c2] if @dp[r1][c1][r2][c2]

    cherries = 0
    if r1 == r2 && c1 == c2 # if both the players are at same spot
        cherries += @grid[r1][c1] # cherry can be picked only once
    else
        cherries += @grid[r1][c1] + @grid[r2][c2]
    end

    dir1 = dfs(r1, c1 + 1, r2, c2 + 1) # hh
    dir2 = dfs(r1, c1 + 1, r2 + 1, c2) # hv
    dir3 = dfs(r1 + 1, c1, r2, c2 + 1) # vh
    dir4 = dfs(r1 + 1, c1, r2 + 1, c2) # vv

    cherries += [dir1, dir2, dir3, dir4].max
    @dp[r1][c1][r2][c2] = cherries
    @dp[r1][c1][r2][c2]
end
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n ^ 3)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n ^ 3)

# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def cherry_pickup(grid)
    @grid = grid
    @n = grid.length
    @dp = Array.new(@n) { Array.new(@n) { Array.new(@n) } }

    [0, dfs(0, 0, 0)].max
end

def dfs(r1, c1, r2)
    c2 = r1 + c1 - r2 # r1 + c1 = r2 + c2

    if r1 >= @n || r2 >= @n || c1 >= @n || c2 >= @n || @grid[r1][c1] == -1 || @grid[r2][c2] == -1
        return -999999
    end

    # if both players each the desination
    # since its n * n matrix, both players will reach at destination at the same time. Hence checking for either works here.
    if r1 == @n - 1 && c1 == @n - 1
        return @grid[r1][c1]
    end

    return @dp[r1][c1][r2] if @dp[r1][c1][r2]

    cherries = 0
    if r1 == r2 && c1 == c2 # if both the players are at same spot
        cherries += @grid[r1][c1] # cherry can be picked only once
    else
        cherries += @grid[r1][c1] + @grid[r2][c2]
    end

    dir1 = dfs(r1, c1 + 1, r2) # hh
    dir2 = dfs(r1, c1 + 1, r2 + 1) # hv
    dir3 = dfs(r1 + 1, c1, r2) # vh
    dir4 = dfs(r1 + 1, c1, r2 + 1) # vv

    cherries += [dir1, dir2, dir3, dir4].max
    @dp[r1][c1][r2] = cherries
    @dp[r1][c1][r2]
end
```