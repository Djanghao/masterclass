# Erlang with mapfoldr std

**Author:** tomassijan
**Votes:** 0
**Link:** [https://leetcode.com/problems/plus-one/solutions/5571508/](https://leetcode.com/problems/plus-one/solutions/5571508/)

---

# Approach
Using a simple mapfoldr, this will start from the end of the Digits and go back returning for every call of Fun a tuple with the elem of the list plus the dozen of D+R

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
-spec plus_one(Digits :: [integer()]) -> [integer()].
plus_one(Digits) ->
    case lists:mapfoldr(fun(D, R) -> 
                            {(D+R) rem 10, (D+R) div 10} 
                        end, 1, Digits) 
    of
        {L, 0} -> L;
        {L, R} -> [R|L]
    end.
```