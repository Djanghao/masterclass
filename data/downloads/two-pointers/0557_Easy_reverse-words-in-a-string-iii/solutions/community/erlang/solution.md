# Erlang

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/3735520/](https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/3735520/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec reverse_words(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
reverse_words(S) ->
  do(S, <<>>, <<>>).

concat(A, <<>>) ->
    A;
concat(<<>>, B) ->
    B;
concat(A, B) ->
    <<B/binary, " ", A/binary>>.


do(<<>>, W, All) ->
   concat(W, All);
do(<<" ", S/binary>>, W, All) ->
    do(S, <<>>, concat(W, All));
do(<<E, S/binary>>, W, All) ->
    do(S, <<E, W/binary>>, All).


```