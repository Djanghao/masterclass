# Top 100% Performance -> Erlang Binary Search Solution

**Author:** boshyxd
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search/solutions/4977510/](https://leetcode.com/problems/binary-search/solutions/4977510/)

---

# Intuition
The given problem asks to search for a target value in a sorted array. Since the array is sorted, we can utilize the binary search algorithm to efficiently find the target value. Binary search works by repeatedly dividing the search space in half until the target value is found or the search space is exhausted.
# Approach
The approach is to implement the binary search algorithm recursively. We start with the entire array as the search space and compare the middle element with the target value. If the middle element is equal to the target value, we have found the target and return its index. If the middle element is greater than the target value, we recursively search the left half of the array. If the middle element is less than the target value, we recursively search the right half of the array. We continue this process until the target value is found or the search space is exhausted.
# Complexity
- Time complexity:
O(log n)
- Space complexity:
O(log n)
# Code
```
-spec search(Nums :: [integer()], Target :: integer()) -> integer().
search(Nums, Target) ->
    search(Nums, Target, 0, length(Nums) - 1).

-spec search(Nums :: [integer()], Target :: integer(), Left :: integer(), Right :: integer()) -> integer().
search(Nums, Target, Left, Right) when Left =< Right ->
    Mid = Left + (Right - Left) div 2,
    case lists:nth(Mid + 1, Nums) of
        Target ->
            Mid;
        Value when Value < Target ->
            search(Nums, Target, Mid + 1, Right);
        Value when Value > Target ->
            search(Nums, Target, Left, Mid - 1)
    end;
search(_, _, _, _) ->
    -1.
```