# Erlang Hash Table Solution | Time O(n), Space O(n)

**Author:** ivvasyk
**Votes:** 0
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/5983948/](https://leetcode.com/problems/contains-duplicate/solutions/5983948/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can utilize hashmap to have lookups and writes in constant time.

# Approach
<!-- Describe your approach to solving the problem. -->
Although we need to express the algorithm using recursion, the logic behind it is similar to the imperative solution.

Let's utilize features that Erlang gives us, namely:
- pattern matching
- tail recursion

We'll leave the pre-defined function in place. It has arity of 1. This function will call another tail recursive function (read: function with an accumulator) with arity of 2:
```
% #{} is a hashmap that is an accumulator (of elements) in this case
contains_duplicate(Nums, #{}).
```

Now, let's define `contains_duplicate/2` using pattern matching:
- If `Nums` is empty, it means there's no duplicate in the list. We don't really care about the hashmap here. Return `false`:
```
contains_duplicate([], _) -> 
  false;
```
- In all other cases we need to check whether the head of the list is present in the hashmap as a key. 
- - If it is, then we have a duplicate and return `true`. 
- - Otherwise, we continue traversing the list for the remained part of the list and passing the updated hashmap down the recursion.
```
% [H|T] -- we also pattern match on the input list
contains_duplicate([H|T], Seen) ->
    case maps:is_key(H,Seen) of
        true -> true;
        false -> contains_duplicate(T, maps:put(H, true, Seen))
    end.
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```erlang []
% Time O(n)
% Space O(n)
-spec contains_duplicate(Nums :: [integer()]) -> boolean().
contains_duplicate(Nums) ->
  contains_duplicate(Nums, #{}).

contains_duplicate([], _) -> 
  false;
contains_duplicate([H|T], Seen) ->
    case maps:is_key(H,Seen) of
        true -> true;
        false -> contains_duplicate(T, maps:put(H, true, Seen))
    end.
```