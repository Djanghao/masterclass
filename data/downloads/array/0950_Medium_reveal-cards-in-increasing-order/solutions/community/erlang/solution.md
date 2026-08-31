# Erlang Solution | beats 100% because no one else has written one :)

**Author:** EGTB724
**Votes:** 0
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5003633/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5003633/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Wrote this in Erlang because I hate myself.

# Approach
<!-- Describe your approach to solving the problem. -->
Look at example 1 from bottom to top and the pattern becomes clear pretty quickly. Sort the deck in descending order and then build a new list. Iterate over the list, for each element add it to the front of the new list while shifting the tail to the right. Return finished list.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
-spec deck_revealed_increasing(Deck :: [integer()]) -> [integer()].
deck_revealed_increasing(Deck) ->
    % Sort the list in ascending order
    SortedDeck = lists:sort(Deck),

    % Reverse the list
    ReversedDeck = lists:reverse(SortedDeck),

    % Build the deck and return result
    Ans = build_deck(ReversedDeck),
    Ans.

% build_deck/1
build_deck(List) -> build_deck(List, []).

% build_deck/2
build_deck([], Acc) -> Acc;
build_deck([Head | Tail], Acc) -> build_deck(Tail, [Head | shift_right(Acc)]).

% shit_right/1
shift_right([]) -> [];
shift_right(List) ->
    Last = lists:last(List),
    Sublist = lists:sublist(List, length(List) - 1),
    [Last | Sublist].
```