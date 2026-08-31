# Erlang: A Detailed Tutorial

**Author:** code_alone
**Votes:** 0
**Link:** [https://leetcode.com/problems/majority-element/solutions/5582375/](https://leetcode.com/problems/majority-element/solutions/5582375/)

---

## Intuition
To find the majority element efficiently, we can use the Boyer-Moore Voting Algorithm. This algorithm works in linear time and constant space. The idea is to maintain a candidate for the majority element and a count that indicates how many times this candidate is likely to be the majority.

## Approach
1. **Initialize**: Start with a Candi element and a Cnt, both initially set to `0`.
2. **Iterate through List**: Update the Candi and Cnt based on the current element.
   - If the Cnt is `0`, set the current element as the new candidate.
   - If the current element matches the Candi, increment the Cnt.
   - If it does not match, decrement the Cnt.
3. **Return Result**: The final Candi after processing all elements is the majority element.

## Complexity
- **Time Complexity**: 
  - $$O(n)$$, where `n` is the number of elements in the list. The list is traversed once.
- **Space Complexity**: 
  - $$O(1)$$, as only a few variables are used for counting and maintaining the candidate.

## Code
Here's the Erlang implementation of the `majority_element` function:

```erlang
-spec majority_element(Nums :: [integer()]) -> integer().
majority_element(Nums) ->
    element(1, lists:foldl(
        fun(Num, {Candi, Cnt}) -> 
            NewCandi = if Cnt == 0 -> Num; true -> Candi end,
            NewCnt = if NewCandi == Num -> Cnt + 1; true -> Cnt - 1 end,
            {NewCandi, NewCnt}
        end,
        {0, 0},
        Nums
    )).
```

## Explanation

- **Fold Function**: `lists:foldl/3` is used to traverse the list and update the candidate and count.
- **Candidate Update**:
    - If the counter `Cnt` is `0`, the current number `Num` becomes the new candidate (`NewCandi`).
    - If the current number matches the candidate (`NewCandi`), increment the counter (`NewCnt`).
    - Otherwise, decrement the counter.
- **Result Extraction**: After processing all elements, the candidate with the highest count is returned as the majority element. The `element/2` function is used to extract the first element of the tuple, which represents the candidate.

--- 
![image.png](./images/0.png)
