# [Python][Elixir] I'm afraid we're going to have to use...math!

**Author:** tiedyedvortex
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/2070111/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/2070111/)

---

Okay, so first off, let's recognize that this problem can be solved with a greedy algorithm. Intuitively, it makes sense that if we are adding a bunch of numbers to reach a sum, and we want as many terms in the sum as possible, then each term should be as small as possible. But let's prove it.

Imagine I give you that a sequence of numbers [2, 4, 6, ...k] (where k is an even number) sums to a target value T. Could you find a solution that contains more digits? No, of course not. If you added any number, you'd have to subtract something from an existing value, which would either create a duplicate value or take that value to be 0 or negative, which aren't allowed. 

Imagine instead that I give you a sequence of numbers [2, 4, 6, ...k, C] that sums to T, where k is an even number and C is some other even number where k+2 < C <= 2(k+2). Can you do any better than that? Well, you can't break C into k+2 and k+4 because it isn't big enough. And you can't split off any value of k or less without creatine a duplicate value in the range 2, 4, ...k. So you can't split C, and we've already identified that 2, 4, 6...k can't be split. Therefore while you could shift the terms around a bit (like going to k+2 and C-2 as the last two terms), but you can't end up with a longer list of sum terms. 

So we could do a greedy algorithm that subtracts 2, 4, 6, ... sequentially from targetSum until we end up with either 0 (in which case we're done) or we get a value which is too small to subtract from, at which point we backtrack by one. For example, with the number 16 we could greedily sum 2,4,6 to get 12, but then we're left with 4 to go and a minimum append of 8, so we instead back off to be [2,4,10] as our final answer. This works.

But we can do better. We can identify that our final answer is going to look like either: [2, 4, 6...k] or [2, 4, 6...k, C]. Using Gauss' formula, we can simplify this to k(k+2)/4 + C, and we know it equals T. 

This lets us set an upper bound on k; we know that k(k+2)/4 + C <= k(k+2)/4 <= k^2/ 4, so this means that k <= floor(sqrt(4T)) = 2*floor(sqrt(T)). Then we can evaluate c as T - k(k+2)/4, and check a few cases:

* Case 1: We hit T exactly, and we're done.
	* If our target sum is 12, our initial estimate of k is 6, which means our sum is 12, and we return [2, 4, 6].
* Case 2: we undershoot, and end up with a positive remainder. Since we chose the maximum possible value of k, that means our remainder c is an even number in the range 2...k and we have a duplicate. We resolve this by adding our remainder to the last term, and we're done. 
	* For example, our target sum is 8, we estimate k as 4. The sum of [2,4] is 6, leaving us a remainder of 2, so we reset it to be [2,6] and we're done.
* Case 3: we overshoot, and end up with a negative remainder. In this case we need to back out by two terms; one term would still leave us in the range 2...k-2, so we need to back out twice. 
	* For example, our target sum is 10, and we estimate k as 6. The sum of [2,4,6] is 12, leaving us a remainder of -2, so we need to reset to [2,10-2] = [2,8] and we're done.

One final check: if finalSum is odd, we throw an empty list.

Python:
```
class Solution:
    def maximumEvenSplit(self, finalSum: int) -> List[int]:
        if finalSum % 2 == 1:
            return []
        
        k = 2*math.floor(math.sqrt(finalSum))
        c = finalSum -  k * (k+2) // 4
        
        if c == 0:
            return list(range(2, k+2, 2))
        elif c>0:
            return list(range(2, k, 2)) + [c+k]
        else:
            return list(range(2, k-2, 2)) + [c+2*k-2]
```

Elixir:
```
defmodule Solution do
  @spec maximum_even_split(final_sum :: integer) :: [integer]
  def maximum_even_split(final_sum) when rem(final_sum, 2)==1, do: []
  def maximum_even_split(final_sum) do
    k = final_sum |> Kernel.**(0.5) |> Kernel.trunc |> Kernel.*(2)
    c = final_sum - (k*(k+2))/4
    cond do
        c == 0 -> Enum.to_list(2..k//2)
        c > 0 -> Enum.to_list(2..k-2//2) ++ [c+k]
        true -> Enum.to_list(2..k-4//2) ++ [c+2*k-2]
    end
  end
end
```