# Erlang solution with pattern matching

**Author:** shamis657
**Votes:** 0
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/6117642/](https://leetcode.com/problems/roman-to-integer/solutions/6117642/)

---

# Intuition
patterm matchting, more readable

# Approach
Using erlang pattern matching

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```erlang []
-spec roman_to_int(S :: unicode:unicode_binary()) -> integer().
roman_to_int(S) ->
  convert(S, 0).

convert(<<>>, Acc)-> Acc;
convert(<<"MMM", Rest/binary>>, Acc) ->
    convert(Rest, 3000 + Acc);
convert(<<"MM", Rest/binary>>, Acc) ->
    convert(Rest, 2000 + Acc);
convert(<<"M", Rest/binary>>, Acc) ->
    convert(Rest, 1000 + Acc);
convert(<<"CM", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 900);
convert(<<"DCCC", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 800);
convert(<<"DCC", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 700);
convert(<<"DC", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 600);
convert(<<"D", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 500);
convert(<<"CD", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 400);
convert(<<"CCC", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 300);
convert(<<"CC", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 200);
convert(<<"C", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 100);
convert(<<"XC", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 90);
convert(<<"LXXX", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 80);
convert(<<"LXX", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 70);
convert(<<"LX", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 60);
convert(<<"L", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 50);
convert(<<"XL", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 40);
convert(<<"XXX", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 30);
convert(<<"XX", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 20);
convert(<<"X", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 10);
convert(<<"IX", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 9);
convert(<<"VIII", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 8);
convert(<<"VII", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 7);
convert(<<"VI", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 6);
convert(<<"V", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 5);
convert(<<"IV", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 4);
convert(<<"III", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 3);
convert(<<"II", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 2);
convert(<<"I", Rest/binary>>, Acc) ->
    convert(Rest, Acc + 1).
```