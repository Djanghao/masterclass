# Erlang solution with foldl and list comprehension

**Author:** tomassijan
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5569589/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5569589/)

---

# Complexity
- Time complexity: $$O(#Digits * max(#lettersPerNum))$$

# Code
```
-spec letter_combinations(Digits :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
letter_combinations(Digits) ->
    Res = lists:foldl(fun(Digit, Acc) -> 
        case Digit of
            <<"2">> -> 
                [<<Accbin/binary, Byte/binary>> || Byte <- [<<A>> || <<A:8>> <= <<"abc">>], Accbin <- Acc];
            <<"3">> -> 
                [<<Accbin/binary, Byte/binary>> || Byte <- [<<A>> || <<A:8>> <= <<"def">>], Accbin <- Acc];
            <<"4">> -> 
                [<<Accbin/binary, Byte/binary>> || Byte <- [<<A>> || <<A:8>> <= <<"ghi">>], Accbin <- Acc];
            <<"5">> -> 
                [<<Accbin/binary, Byte/binary>> || Byte <- [<<A>> || <<A:8>> <= <<"jkl">>], Accbin <- Acc];
            <<"6">> -> 
                [<<Accbin/binary, Byte/binary>> || Byte <- [<<A>> || <<A:8>> <= <<"mno">>], Accbin <- Acc];
            <<"7">> -> 
                [<<Accbin/binary, Byte/binary>> || Byte <- [<<A>> || <<A:8>> <= <<"pqrs">>], Accbin <- Acc];
            <<"8">> -> 
                [<<Accbin/binary, Byte/binary>> || Byte <- [<<A>> || <<A:8>> <= <<"tuv">>], Accbin <- Acc];
            <<"9">> -> 
                [<<Accbin/binary, Byte/binary>> || Byte <- [<<A>> || <<A:8>> <= <<"wxyz">>], Accbin <- Acc]
        end
    end, [<<>>], [<<B>> || <<B:8>> <= Digits]),
    case Res of
        [<<>>] -> [];
        _ -> Res
    end.
```