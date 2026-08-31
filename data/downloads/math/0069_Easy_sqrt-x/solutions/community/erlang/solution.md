# Binary search for finding square root.

**Author:** newraze
**Votes:** 0
**Link:** [https://leetcode.com/problems/sqrtx/solutions/4424646/](https://leetcode.com/problems/sqrtx/solutions/4424646/)

---

# Intuition
- binary search algorithms instead of built-in functions
- each iteration divides number of left possible square roots by 2
- beats 100% of Erlang users in runtime and memory

# Complexity
- Time complexity:
O(log n)

- Space complexity:
O(1)

# Code
```
-spec my_sqrt(X :: integer()) -> integer().
my_sqrt(0) -> 0;
my_sqrt(1) -> 1;
my_sqrt(X) -> 
    check_root(1, X, X).

check_root(Lower, Upper, X) when Lower > Upper -> Upper;
check_root(Lower, Upper, X) ->
    Root = Lower + ((Upper - Lower) div 2),
    if
        Root*Root =< X ->
            check_root(Root + 1, Upper, X);
        Root*Root > X ->
            check_root(Lower, Root - 1, X)
    end.

    

```