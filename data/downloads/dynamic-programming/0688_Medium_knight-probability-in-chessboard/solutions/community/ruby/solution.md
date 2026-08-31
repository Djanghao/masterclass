# Ruby solution with memoization

**Author:** dtkalla
**Votes:** 2
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3566070/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3566070/)

---

# Intuition
Use memoization -- there's a limited number of possibilities.

# Approach
1. Create a memo and store n as a class variable.
2. Create an array of dirs corresponding the the knight's possible moves.
3. Find the probability with a helper function

Helper function:
1. Return 0 if it's off the board, 1 if it's on the board and out of moves, and the memoized value if it exists
2. Look at the 8 possibile knight moves and find the probability of each, then add those together.
3. Divide the answer by 8.0 (there are eight knight moves, and 8.0 makes it a float), memoize, and return.

# Complexity
- Time complexity:
$$O(n^2 * k)$$

- Space complexity:
$$O(n^2 * k)$$

# Code
```
def knight_probability(n, k, row, column)
    @memo = {}
    @n = n
    @dirs = [[1,2],[2,1],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]]
    prob(row,column,k)
end

def prob(i,j,k)
    return 0 unless (0...@n).cover?(i) && (0...@n).cover?(j)
    return 1 if k == 0
    return @memo[[i,j,k]] if @memo[[i,j,k]]

    total = 0
    @dirs.each { |dir| total += prob(i+dir[0],j+dir[1],k-1) }

    @memo[[i,j,k]] = total / 8.0
end
```