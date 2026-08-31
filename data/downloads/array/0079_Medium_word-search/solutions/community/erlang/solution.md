# Erlang dfs + some speedup hacks

**Author:** aozeritsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-search/solutions/1506065/](https://leetcode.com/problems/word-search/solutions/1506065/)

---

To solve performance on some test-cases (like: [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]]
"AAAAAAAAAAAABAA") I calculate string prefix and suffix length and deside how to iterate string (backward or forward).

```
-spec exist(Board :: [[char()]], Word :: unicode:unicode_binary()) -> boolean().

dfs_children(A,Cand,V,N,M,Next) ->
    lists:any(
        fun({I,J}) ->
            NextCh=array:get(I*M+J,A),
            V1=gb_sets:insert({I,J}, V),
            dfs(A,{NextCh,{I,J}},V1,N,M,Next)
        end, Cand).

dfs(_,_,_,_,_,[]) -> true;
dfs(A,{Ch,{I,J}},V,N,M,[Ch|[]]) -> true;
dfs(A,{Ch,{I,J}},V,N,M,[Ch|Next]) ->
    Cand=lists:filter(
        fun({I,J}) -> 
            Visited=gb_sets:is_element({I,J},V),
            (not Visited) 
             and (I>=0) 
             and (I<N) 
             and (J>=0) 
             and (J<M)
        end, [{I-1,J},{I,J-1},{I+1,J},{I,J+1}]),
    dfs_children(A,Cand,V,N,M,Next);
dfs(_,W,_,_,_,_) -> 
    false.

prefix_len([A,A|Next],Acc) -> prefix_len([A|Next],1+Acc);
prefix_len(_,Acc) -> Acc.

exist(Board, Word) ->
    A=array:from_list(lists:flatten(Board)),
    N=length(Board),
    [First|_]=Board,
    M=length(First),
    Cand=[{I,J} || I <- lists:seq(0,N-1), J <- lists:seq(0,M-1)],
    V=gb_sets:empty(),
    List=binary_to_list(Word),
    ListRev=lists:reverse(List),
    PrefixLen=prefix_len(List,1),
    SuffixLen=prefix_len(ListRev,1),
    Next = if PrefixLen < SuffixLen -> List;
              true -> ListRev
           end,
    dfs_children(A,Cand,V,N,M,Next).
```