# Erlang version

**Author:** Yboviko
**Votes:** 0
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/4236739/](https://leetcode.com/problems/regular-expression-matching/solutions/4236739/)

---

```
%% Given an input string s and a pattern p, implement regular expression
%% matching with support for '.' and '*' where:
%% 
%%     '.' Matches any single character.
%%     '*' Matches zero or more of the preceding element.
%% 
%% The matching should cover the entire input string (not partial).

-spec is_match(S :: unicode:unicode_binary(), P :: unicode:unicode_binary()) -> boolean().
is_match(S, P) ->
    match(S, compile(P)).

compile(PatternStr) ->
    compile(PatternStr, []).

compile(<<>>, Acc) ->
    lists:reverse(Acc);
compile(<<Char, $*, Rest/binary>>, Acc) ->
    compile(Rest, [{star, Char}|Acc]);
compile(<<Char, Rest/binary>>, Acc) ->
    compile(Rest, [{single, Char}|Acc]).


match(<<>>, [])  -> true;
match(_,    [])  -> false;
match(<<>>, Pattern)  ->
    lists:all(fun F(E) -> {Type,_}=E, Type==star end, Pattern);
match(Text, Pattern) ->
    <<Char, Rest/binary>> = Text,
    [{MatchType, MatchChar}|PatternRest] = Pattern,
    case {MatchType, (Char==MatchChar) or (MatchChar==$.)} of
        {single, true } -> match(Rest, PatternRest);
        {single, false} -> false;
        {star,   true } -> case (match(Rest, Pattern)) of
                               true  -> true;
                               false -> match(Text, PatternRest)
                           end;
        {star,   false} -> match(Text, PatternRest)
    end.

```