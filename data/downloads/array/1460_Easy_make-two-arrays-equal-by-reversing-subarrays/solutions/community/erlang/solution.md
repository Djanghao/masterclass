# Check if Two Lists Can Be Equal in Erlang: A Detailed Tutorial

**Author:** code_alone
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5582209/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5582209/)

---

## Problem Statement
Given two lists of integers `Target` and `Arr`, determine if the lists can be made equal by sorting both lists and comparing them.

## Intuition
The problem requires us to check if two lists contain the same elements, regardless of their order. If we sort both lists and compare them, we can determine if they are equal. Sorting the lists ensures that all identical elements are aligned in the same order, making it easy to compare.

## Approach
1. **Sort the Lists**: Sort both `Target` and `Arr` using Erlang's `lists:sort/1` function.
2. **Compare the Sorted Lists**: Use the `=:=` operator to check if the sorted lists are equal.

## Complexity
- **Time Complexity**: $$O(n \\log n)$$, where `n` is the number of elements in the lists. Sorting each list takes $$O(n \\log n)$$ time.
- **Space Complexity**: $$O(n)$$, where `n` is the number of elements in the lists. This is due to the space required to store the sorted lists.

## Code
Here's the Erlang implementation of the `can_be_equal` function:

```erlang
-spec can_be_equal(Target :: [integer()], Arr :: [integer()]) -> boolean().
can_be_equal(Target, Arr) ->
    lists:sort(Target) =:= lists:sort(Arr).
