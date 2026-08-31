# Erlang solution: Majority Element II using maps

**Author:** newraze
**Votes:** 0
**Link:** [https://leetcode.com/problems/majority-element-ii/solutions/4289874/](https://leetcode.com/problems/majority-element-ii/solutions/4289874/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(k+m)

# Code
```
-spec majority_element(Nums :: [integer()]) -> integer().
majority_element(Nums) ->
  Length = length(Nums),
  Occurrences = frequencies(Nums),
  find_keys(Occurrences, Length div 3).

frequencies(List) -> 
    frequencies(List, #{}).
frequencies([], Freq) ->
    maps:to_list(Freq);
frequencies([H|T], Freq) ->
    Incrementer = fun(Count) -> Count+1 end,
    NewFreq = maps:update_with(H, Incrementer, _Default=1, Freq),
    frequencies(T,NewFreq).

find_keys(List, Condition) ->
    find_keys(List, Condition, []).
find_keys([], _Condition, Result) -> lists:reverse(Result);
find_keys([H|T], Condition, Result) ->
    case H of
        {K, V} -> 
            case V > Condition of
                true -> 
                    find_keys(T,Condition,[K|Result]);
                _ -> 
                    find_keys(T, Condition, Result)
            end;
        _ -> find_keys(T, Condition)
    end.
```