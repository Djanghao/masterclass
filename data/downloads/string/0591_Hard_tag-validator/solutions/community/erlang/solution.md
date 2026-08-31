# Functonal parser combinator in Erlang. Regex not needed!

**Author:** Yboviko
**Votes:** 0
**Link:** [https://leetcode.com/problems/tag-validator/solutions/1790327/](https://leetcode.com/problems/tag-validator/solutions/1790327/)

---

It just felt right not to use Regex on this one:
```erlang
-compile(export_all).

-spec is_valid(Code :: unicode:unicode_binary()) -> boolean().
is_valid(Code) ->
    case tag({ps, [], binary_to_list(Code), []}) of
        {ps, _, [], []} -> true;
        _               -> false
    end.


%%% Specification =============================================================

tag(S) ->
    all(S, [tag_open, tag_content, tag_close]).

tag_open(S) ->
    all(S, [left_angle_bracket, tag_open_name, tag_either_close]).

tag_close(S) ->
    all(S, [tag_close_open, tag_close_name, tag_either_close]).

tag_name(S) ->
    repeat_bounded(S, tag_name_char, 1, 9).

tag_content(S) ->
    repeat(S, tag_content_step).

tag_content_step(S) ->
    a_if_not_b(S, tag_content_allowed, tag_close).

tag_content_allowed(S) ->
    union(S, [tag, cdata, any_char_except_left_angle_bracket]).

any_char_except_left_angle_bracket(S) ->
    a_if_not_b(S, any_char, left_angle_bracket).

tag_open_name(S) ->
    case tag_name(S) of
        nomatch -> nomatch;
        {ps, Captured, Rest, TagStack} -> {ps, Captured, Rest, [Captured|TagStack]}
    end.

tag_close_name(S) ->
    case tag_name(S) of
        nomatch -> nomatch;
        {ps, _, _, []} ->
            nomatch;
        {ps, Captured, Rest, [Tag|TagStackT]} ->
            case Captured == Tag of
                true  -> {ps, Captured, Rest, TagStackT};
                false -> nomatch
            end
        end.

left_angle_bracket(S) ->
    char(S, $<).

tag_close_open(S) ->
    all_chars(S, "</").

tag_either_close(S) ->
    char(S, $>).

tag_name_char(S) ->
    any_given_char(S, "ABCDEFGHIJKLMNOPQRSTUVWXYZ").

cdata(S) ->
    all(S, [cdata_open, cdata_content, cdata_close]).

cdata_content_char(S) ->
    a_if_not_b(S, any_char, cdata_close).

cdata_content(S) ->
    repeat(S, cdata_content_char).

cdata_open(S) ->
    all_chars(S, "<![CDATA[").

cdata_close(S) ->
    all_chars(S, "]]>").


%%% Combinators ===============================================================

a_if_not_b(PState, ParserA, ParserB) ->
    case fun ?MODULE:ParserB/1(PState) of
        nomatch -> ?MODULE:ParserA(PState);
        _       -> nomatch
    end.

repeat(PState, Parser) ->
    repeat(PState, Parser, []).

repeat(PState, Parser, Acc) ->
    case fun ?MODULE:Parser/1(PState) of
        nomatch -> fuse(Acc, PState);
        PState2 -> repeat(PState2, Parser, [PState2|Acc])
    end.

repeat_bounded(PState, Parser, Min, Max) ->
    repeat_bounded(PState, Parser, Min, Max, []).

repeat_bounded(PState, _, _, Max, Acc) when length(Acc) == Max ->
    fuse(Acc, PState);
repeat_bounded(PState, Parser, Min, Max, Acc) ->
    case fun ?MODULE:Parser/1(PState) of
        nomatch -> case length(Acc) >= Min of
                       true  -> fuse(Acc, PState);
                       false -> nomatch
                   end;
        PState2 -> repeat_bounded(PState2, Parser, Min, Max, [PState2|Acc])
    end.

all(PState, ParserList) ->
    all(PState, ParserList, []).

all(PState, [], Acc) ->
    fuse(Acc, PState);
all(PState, [Parser|PT], Acc) ->
    case fun ?MODULE:Parser/1(PState) of
        nomatch -> nomatch;
        PState2 -> all(PState2, PT, [PState2|Acc])
    end.

union(_, []) ->
    nomatch;
union({ps, _, [], _}, _) ->
    nomatch;
union(PState, [P|PT]) ->
    case fun ?MODULE:P/1(PState) of
        nomatch -> union(PState, PT);
        PState2 -> PState2
    end.

fuse([], Default) ->
    Default;
fuse(MatchListInReverse, _) ->
    [{ps, _, StringRest, ParseState}|_] = MatchListInReverse,
    Fused = lists:flatten([Captured || {ps, Captured, _, _} <- lists:reverse(MatchListInReverse)]),
    {ps, Fused, StringRest, ParseState}.


%%% Character functions =======================================================

all_chars(PState, CharList) ->
    all_chars(PState, CharList, []).

all_chars(PState, [], Acc) ->
    fuse(Acc, PState);
all_chars(PState, [CH|CT], Acc) ->
    case char(PState, CH) of
        nomatch -> nomatch;
        PState2 -> all_chars(PState2, CT, [PState2|Acc])
    end.

any_given_char({ps, _, [], _}, _) ->
    nomatch;
any_given_char(_, []) ->
    nomatch;
any_given_char(PState, [Char|CT]) ->
    case char(PState, Char) of
        nomatch -> any_given_char(PState, CT);
        PState2 -> PState2
    end.

any_char({ps, _, [], _}) ->
    nomatch;
any_char({ps, _, [H|T], TagStack}) ->
    {ps, H, T, TagStack}.

char({ps, _, [], _}, _) ->
    nomatch;
char({ps, _, [SH|ST], TagStack}, Char) ->
    case SH == Char of
        true  -> {ps, Char, ST, TagStack};
        false -> nomatch
    end.
```