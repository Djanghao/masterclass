# Official Solution

**Link:** [https://leetcode.com/problems/path-crossing/solution/](https://leetcode.com/problems/path-crossing/solution/)

---

[TOC]

## Solution

---

### Approach: Hash Set

**Intuition**

We can split the problem into two parts. First, how can we simulate the movement described by `path`. Second, how do we determine if there is a crossing?

Initially, we are at the coordinates `(0, 0)`. At each step, we walk in one of four directions:

- North: no change in `x` coordinate, `+1` to `y` coordinate.
- South: no change in `x` coordinate, `-1` to `y` coordinate.
- West: `-1` to `x` coordinate, no change in `y` coordinate.
- East: `+1` to `x` coordinate, no change in `y` coordinate.

We can map each direction instruction in `path` to a change in `(x, y)` coordinates with a hash map `moves`:

- `'N' : (0, 1)`
- `'S' : (0, -1)`
- `'W' : (-1, 0)`
- `'E' : (1, 0)`

Let's keep track of our current coordinates using two variables `x` and `y`. We can initialize both `x` and `y` to `0` and then iterate over `path`. At each character of `path`, we get the values `dx` and `dy` from `moves`, then apply the change in coordinates by performing `x += dx` and `y += dy`.

How do we determine if the path crosses itself at any point? Because each movement only changes our position by exactly `1` unit, there will be a crossing if and only if we visit the same coordinates twice. Thus, we can use a hash set `visited` that keeps track of coordinates we have already visited.

We will initialize `visited` with `(0, 0)` and for each movement in `path`, we will first apply the changes `(dx, dy)`, then check if the updated `(x, y)` is in `visited`. If it is, then we have visited this coordinate point before and there is a crossing at this point, so we return `true`. If not, we add `(x, y)` to `visited` and move on to the next character in `path`.

If we complete all instructions in `path` without finding a crossing, we can return `false` as there are no crossings.

**Algorithm**

1. Create a hash map `moves` that maps the characters `N, S, W, E` to the corresponding values from above.
2. Initialize a hash set `visited` with `(0, 0)`.
3. Initialize `x = 0` and `y = 0`.
4. For each `c` in `path`:
    - Get `(dx, dy)` from `moves[c]`.
    - Add `dx` to `x` and `dy` to `y`.
    - Check if `(x, y)` is in `visited`. If it is, return `true`.
    - Add `(x, y)` to `visited`.
5. Return `false`.

**Implementation**

> Note, in Java we use the `Pair` class and in C++ we convert our coordinates to strings for the purpose of hashing. In Python we can simply use tuples.
>
> We can't use `std::pair` in C++ because it doesn't natively support hashing. However, we can hash `string`, so we can express a pair of coordinates `(x, y)` as a string by separating the coordinates with a separator like a comma.

<iframe src="https://leetcode.com/playground/gqBCscLu/shared" frameBorder="0" width="100%" height="500" name="gqBCscLu"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `path`,

* Time complexity: $$O(n)$$

    We iterate over each character of `path` once, performing $$O(1)$$ work at each iteration.

* Space complexity: $$O(n)$$

    When there are no crossings, `visited` will grow to a length of $$n$$.
    
<br/>

---