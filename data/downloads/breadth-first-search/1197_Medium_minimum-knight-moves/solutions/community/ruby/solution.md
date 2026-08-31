# Ruby solution with memoization, explained (100%/50%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/4201342/](https://leetcode.com/problems/minimum-knight-moves/solutions/4201342/)

---

# Intuition
A knight has 8 possible moves.  Go through them recursively until you get to (0,0).
This is inefficient, so we employ a number of optimizations:
1. Memoization
2. Take the absolute value of x and y to reduce possibilities
3. Store special cases (Manhattan distance of 2)
4. Only consider moves that get you closer to (0,0)
5. If you're more than 6 spaces away from (0,0), only consider the most efficient option

# Approach
0. Create a memo, with 0 moves from (0,0).

1. Find the minimum moves with a helper function after taking the absolute value.

Helper function:
1. Return a value stored in memo.
2. Return 2 if you're 2 spaces away vertically/horizontally, or 1 away diagonally.
3. Return -infinity if either variable is negative.  (This is just to prevent us from choosing this option, so everything stays positive and we can access it in memo.)
4. If x and y are both bigger than 4, choose the option that decreases the bigger one by 2 and the smaller by 1.  (If they're equal and both above 5, use two moves to decrease each by three.)  Memoize and return early.
5. In any other case, consider the four moves that move 2 in the direction closer to (0,0), and 1 in either perpendicular direction.
6. Choose the lowest of the four options (adding one for the move), memoize, and return.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
@memo = {[0,0] => 0}

def min_knight_moves(x, y)
    min_moves(x.abs, y.abs)
end

def min_moves(x, y)
    return @memo[[x,y]] if @memo[[x,y]]
    return 2 if x.abs + y.abs == 2
    return Float::INFINITY if x < 0 || y < 0

    if x > y && y > 4
        return @memo[[x,y]] = min_moves(x-2,y-1) + 1
    elsif y > x && x > 4
        return @memo[[x,y]] = min_moves(x-1,y-2) + 1
    elsif x == y && x > 6
        return @memo[[x,y]] = min_moves(x-3,y-3) + 2
    end

    option1 = min_moves(x-1,y-2)
    option2 = min_moves(x-2,y-1)
    option3 = min_moves(x+1,y-2)
    option4 = min_moves(x-2,y+1)

    @memo[[x,y]] = [option1, option2, option3, option4].min + 1
end
```