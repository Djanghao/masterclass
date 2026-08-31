# Ruby Solution with Modulo (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/reaching-points/solutions/3443827/](https://leetcode.com/problems/reaching-points/solutions/3443827/)

---

# Intuition
Go from target to starting numbers

# Approach
1. Check whether it's possible to subtract without going below the starting numbers.
2. If so, subtract the largest possible amount from whichever number is larger.  This amount is a multiple of tx or ty, so use modulo to subtract as much as possible instead of subtracting once at a time.
3. Repeat.
4. Check if you got to the right values.

Solution from JackieWDo translated into Ruby:
https://leetcode.com/problems/reaching-points/solutions/2848304/python3-impossible-not-to-understand-intuitive-method-with-detailed-explanation/


# Code
```
def reaching_points(sx, sy, tx, ty)
    while tx >= sx + ty || ty >= sy + tx # can still subtract
        if tx > ty
            tx = sx + (tx - sx) % ty # subtract as much as possible from tx
        else
            ty = sy + (ty - sy) % tx # subtract from ty
        end
    end

    tx == sx && ty == sy
end


```