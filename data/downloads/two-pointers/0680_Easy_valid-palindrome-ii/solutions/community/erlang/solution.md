# Erlang

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/3598095/](https://leetcode.com/problems/valid-palindrome-ii/solutions/3598095/)

---

# Intuition
Attempt in O(1)

# Approach
Two indexes solution, iterating through the binary. 

# Complexity
- Time complexity: 
$$O(n)$$ 
- Space complexity: 
$$O(1)$$

# Code
```

-spec valid_palindrome(S :: unicode:unicode_binary()) -> boolean().
valid_palindrome(S) ->
    case size(S) of 
        N when N < 3 ->
            true;
        N ->
            Min = 1,
            Max = N,
            do_with_drop(S, Min, Max)
    end.


do_with_drop(_, Min, Max)  when Min >= Max ->
    true;
do_with_drop(R, Min, Max) ->
    Init = Min -1,
    MidLen = Max - Min -1,
    case R of 
        <<_:Init/binary, A, _Middle:MidLen/binary, A, Rest/binary>> ->
            do_with_drop(R, Min+1, Max-1);
        _ -> 
            do_without_drop(R, Min+1, Max) or 
            do_without_drop(R, Min, Max-1)
    end.


do_without_drop(_, Min, Max)  when Max =< Min ->
    true;
do_without_drop(R, Min, Max) ->
    Init = Min -1,
    MidLen = Max - Min -1,
    case R of 
        <<_:Init/binary, A, _Middle:MidLen/binary, A, Rest/binary>> ->
            do_without_drop(R, Min+1, Max-1); 
        _ ->
            false
    end.



```