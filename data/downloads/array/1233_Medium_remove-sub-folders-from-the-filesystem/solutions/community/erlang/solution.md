# Erlang | Trie

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5967439/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5967439/)

---

# Code
```erlang []
-spec iter(
  Curr :: unicode:unicode_binary(), 
  {Data :: [unicode:unicode_binary()], Result :: [unicode:unicode_binary()]}) -> {[unicode:unicode_binary()], [unicode:unicode_binary()]}.
iter(Curr, {Data, Result}) ->
  Last = lists:last(Result),
  CurrLen = byte_size(Curr),
  ParentLen = byte_size(Last),

  case (ParentLen >= CurrLen) orelse (not ((Last =:= binary:part(Curr, {0, ParentLen})) andalso (binary:at(Curr, ParentLen) =:= $/))) of
    true -> {Data, lists:append(Result, [Curr])};
    false -> {Data, Result}
  end.


-spec remove_subfolders(Folder :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
remove_subfolders(Folder) ->
  Data = lists:sort(Folder),
  [H | T] = Data,
  {_, Result} = lists:foldl(fun iter/2, {Data, [H]}, T),
  Result.

```