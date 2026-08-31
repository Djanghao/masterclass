# Erlang solution with prefix sum

**Author:** giacomocavalieri
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3667075/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3667075/)

---

# Code
```
% Performs sorting in O(n log(n)) and a fixed number of O(n) steps
% so the overall time complexity is O(n log(n)).
min_cost(Nums, Costs) ->
  % Sort together nums and costs based on nums.
  NumsAndCosts = lists:sort(fun compare_first/2, lists:zip(Nums, Costs)),
  {SortedNumbers, SortedCosts} = lists:unzip(NumsAndCosts),
  [N0 | Ns] = SortedNumbers,
  % Compute the prefix costs list.
  PCs = scanl(SortedCosts, 0, fun(Acc, Cost) -> Acc + Cost end),
  % Compute the total cost to turn all numbers into the first number.
  TotalCost = total_cost(N0, tail(NumsAndCosts)),
  % Iterate over the remaining numbers.
  do(Ns, N0, PCs, lists:last(PCs), TotalCost, TotalCost).

% Compute the total cost of turning all the numbers in NumsAndCosts into
% the number From; the complexity is O(n) since it has to traverse the 
% NumsAndCosts list.
total_cost(From, NumsAndCosts) ->
  F = fun({Num, Cost}, TotalCost) -> TotalCost + (abs(From - Num) * Cost) end,
  lists:foldl(F, 0, NumsAndCosts).

% Performs a step for each number in the Ns list and each step only
% performs constant time oeprations, so time complexity is O(n).
% TCO makes sure that the stack doesn't blow up.
do([], _, _, _, _, Min) -> Min;
do([Ni | Ns], PrevN, [PC | PCs], LastPC, TotalCost, Min) ->
  Gap = Ni - PrevN,
  TotalCost1 = TotalCost + (PC * Gap),
  TotalCost2 = TotalCost1 - ((LastPC - PC) * Gap),
  NewMin = min(TotalCost2, Min),
  do(Ns, Ni, PCs, LastPC, TotalCost2, NewMin).


% Generic utility functions

% Tail of a list in O(1).
tail([]) -> [];
tail([_ | XS]) -> XS.

% Standard scanl in O(n) time complexity.
scanl(XS, Base, Fun) -> scanl(XS, Base, Fun, []).
scanl([], Base, Fun, Acc) -> lists:reverse(Acc);
scanl([X|XS], Base, Fun, Acc) ->
  NewBase = Fun(Base, X),
  scanl(XS, NewBase, Fun, [NewBase | Acc]).

% Compare the first elements of two tuples.
compare_first({X, _}, {Y, _}) -> X < Y.

```