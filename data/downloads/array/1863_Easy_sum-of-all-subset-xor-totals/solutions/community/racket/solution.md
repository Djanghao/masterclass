# [C++/Racket] Recursion / Bit Manipulation with Proof

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5182203/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/5182203/)

---

# Approach 1 - Recursion

## Intuition / Approach

We just simply recursively consider all the cases and sum up all the results.

## Complexity
- Time complexity:
$O(2^n)$

- Space complexity:
$O(n)$ (Also need to consider the recursion stack, basically a DFS)

## Code
```cpp []
#include <span>
char c = [](){ios::sync_with_stdio(false); cin.tie(NULL); return 'c';}();
class Solution {
    int recur(span<int> nums, int acc) {
        if (nums.empty()) return acc;
        return recur(nums.subspan(1), acc) + recur(nums.subspan(1), acc ^ nums.front());
    }
public:
    int subsetXORSum(vector<int>& nums) {
        return recur(nums, 0);
    }
};
```
``` racket []
(define/contract (subset-xor-sum nums)
  (-> (listof exact-integer?) exact-integer?)
    (let recur ([nums nums][acc 0])
        (if (empty? nums) acc
            (+ (recur (rest nums) acc)
               (recur (rest nums) (bitwise-xor acc (first nums)))))))
```


# Approach 2 - Bit Manipulation 

## Intuition
Let $n$ be the number of elements in the set `nums`.

We know every number appears $2^{n - 1}$ times among all the subsets.
This fact can be obtained by separating the elements in the power set into containing the specified number or not.

We want to show that if a bit is present in any of the bits in the set `nums`, then there will be exactly $2^{n - 1}$ elements to be summed up (the result of XOR) which contain that bit.

### Proof

Suppose the specified bit is only present in 1 element. Then, only the subsets that use the number have the bit set. That is, exactly $2^{n - 1}$ elements (the result of XOR).

Suppose the specified bit is only present in 2 elements. Let's call them, $a$ and $b$. Then, $2^{n - 2}$ of the subsets contains only $a$, and $2^{n - 2}$ of the subsets contains only $b$. These are all the possibilities. (Can't have both $a$ and $b$). In total, that is still $2^{n - 1}$ elements.

Now, to show this is true for all $m$, we use induction. Suppose the claim is true for $m$. Consider a set `num` with the bit present in $m + 1$ elements.

The set can be partitioned into two sets with size $2^{n - 1}$ which contains the *new* element or not (remember, the *new* element contains the bit by our hypothesis).

If we exclude the *new* element, it is equivalent to the problem where the size of the set `nums` is 1 smaller. there are $2^{n - 2}$ elements that is without the *new* element and contains the bit. (Rigorously speaking, that is the subsets that do not choose the *new* element and contain the bit, it is true by hypothesis)

Then, if we include the *new* elements, then we are looking for the same subproblem (size is 1 smaller), but this time we want those subsets without the bit. Thankfully, there are still $2^{n - 2}$ such elements.

In total, that is still $2^{n - 1}$ elements.

## Approach

Having proven the above, we just need to find out which bits are present in the set `nums`, multiply the bit by $2^{n - 1}$ and sum up the results.

## Complexity
- Time complexity:
$O(n)$

- Space complexity:
$O(1)$

## Code
```cpp []
char c = [](){ios::sync_with_stdio(false); cin.tie(NULL); return 'c';}();
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        int n = 0;
        for (int i : nums) n |= i;
        return n << (nums.size() - 1);
    }
};
```
``` racket []
(define/contract (subset-xor-sum nums)
  (-> (listof exact-integer?) exact-integer?)
  (arithmetic-shift (apply bitwise-ior nums) (sub1 (length nums))))
```
