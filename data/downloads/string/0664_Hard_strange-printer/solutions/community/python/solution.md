# Rephrase the problem for a simpler recurrence: a detailed proof

**Author:** kcsquared
**Votes:** 35
**Link:** [https://leetcode.com/problems/strange-printer/solutions/1220646/](https://leetcode.com/problems/strange-printer/solutions/1220646/)

---

If you're anything like me, the explanations people have been giving for the popular DP formula are complex and nonintuitive. Their explanations go like: 

* Let ```dp(i, j)``` be the number of turns needed to print s on ```[i, j)```. 
* Assume the first printing step is to print ```s[i]``` over some interval ```[i, k] ```. 
* Then their formula is ```dp(i, j) == min(1 + dp(i + 1, j), dp(i, k) + dp(k + 1, j))```

The second part of that formula is **bad and needlessly confusing**: for some reason we either 
1. Pay the cost of '1' for printing ```s[i]``` and move on to ```dp(i + 1, j)```, 

2. Or we print ```s[i]``` for free all the way to ```s[k]```, don't move on to i + 1, but also somehow have ```s[k]``` already printed in future calls?

If you think you understand that formula, please ask yourself, **On which call to our dp function do we actually print ```s[i]```?** If we look at their explanation, we paint all of ```[i, k]``` at the same time, but the code and formula imply that only ```s[k]``` is painted, because we are repeatedly calling our dp function with a left endpoint of i. 

*If code and explanations contradict each other, and the code works in surprising ways, then it is impossible to extend the code to solve other problems.*

Now, most of the time when someone claims that other existing solutions are bad, they're usually mistaken. Since I genuinely want others to be able to learn from this problem too, **I'll try to prove why every upvoted solution is insufficient by giving out a genuine challenge:**

* Try to modify your code to also return the list of printer instructions (the sequence of intervals for where to print each character) that matches your minimum solution.

I would be quite pleasantly surprised if any of the posted solutions can be modified to return the actual solution, even with 100 extra lines of code. For the solutions whose formula subtracts 1 from the answer sometimes, implying a negative cost for printing, I honestly have zero idea how you would get the output of intervals. The code technically works, but the proof seems non-constructive.

Secondly, and most importantly, every top post has around 50% comments asking why the recursive formula given works, and few good answers. This makes the problem useless for learning or modifying to solve other problems. 
**The question that every comment section keeps repeating is:**

Why do we have ```dp(i, j) == min(1 + dp(i + 1, j), dp(i, k) + dp(k + 1, j))```

Instead of doing   `dp(i, j)  == min(1 + dp(i + 1, j), 1 + dp(i + 1, k) + dp(k + 1, j))`

The second recursion, if it worked, is clearly true, since it matches the explanation and the usual template for dp.
Fortunately, **your intuition is right! The second formula not only works, but works as fast as and simpler than the popular recursion.** The key is to 
1. Slightly reframe the question
2. Make the code match the explanation
3. Avoid hidden assumptions about our subproblems

Now, what's the hidden assumption being made? It's about what the current printed character is on our interval. The bad recurrence involving ```dp(i, k)``` has a hidden assumption that we've already painted the interval [i, k) with the character at ```s[k]```, but that we haven't paid the cost for that print yet. **This leads us to the new problem definition**:

* ```dp(i, j)``` is the number of turns needed to print s on the interval ```[i, j)```, given that all of ```[i, j)``` currently has ```s[j]``` printed over it.

From here, the formula is obvious, and can be extended to similar dp problems:
```
dp(i, j) = 0 if i >= j, else                   // if we have nothing to print
         = dp(i + 1, j) if s[i] == s[j], else  // if s[i] already has s[j] printed on it
		 
		 = min(1 + dp(i + 1, k) + dp(k + 1, j)) for (i <= k < j with s[i] == s[k]) otherwise.
		 
		 // Cost of 1 to print the interval [i, k] with s[k] == s[i],
		 // then the two subproblems: between i+1 and k, and after k,
		 // since indexes i and k are now correct (i may be equal to k)
```

To make the original problem be the answer to ```dp(0, len(s))```, we just need to append some dummy character, like '#' to s, so that we can assume our starting string to be replaced/active workspace is '#' repeated over the length of s.

Here's the code in python: `O(n^3)` and faster than 100% runtime.
```python
class Solution:
	def strangePrinter(self, s: str) -> int:
		# Our working string can be treated as initially equal to repeated '#'

		# Merge consecutive characters
		s = ''.join([c for i, c in enumerate(s)
					 if i == 0 or c != s[i - 1]])

		# Track index where each letter occurs next, for faster lookup
		next_occ_search = {}
		next_occurrence_of_letter = list(range(len(s)))
		for i, c in enumerate(s):
			if c in next_occ_search:
				next_occurrence_of_letter[next_occ_search[c]] = i
			next_occ_search[c] = i

		for v in next_occ_search.values():
			next_occurrence_of_letter[v] = 10**10

		# dp(left_ind, right_ind) is minimum steps to convert a string of
		# repeated s[right_ind] into s[left_ind:right_ind]
		# Note the python half open interval: [left_ind, right_ind)
		@functools.lru_cache(None)
		def dp(left_ind: int, right_ind: int) -> int:

			# Nothing to print
			if left_ind >= right_ind:
				return 0

			# s[left_ind] is already the desired character
			if s[right_ind] == s[left_ind]:
				return dp(left_ind + 1, right_ind)

			# If our pivot index is left_ind
			ans = 1 + dp(left_ind + 1, right_ind)

			pivot_index = next_occurrence_of_letter[left_ind]
			while pivot_index <= right_ind:
				ans = min(ans, 1 + dp(left_ind + 1, pivot_index)
						  + dp(pivot_index + 1, right_ind))
				pivot_index = next_occurrence_of_letter[pivot_index]

			return ans

		s += '#'
		return dp(0, len(s) - 1)
```

This post is partly inspired by [laiden's excellent proof](https://leetcode.com/problems/strange-printer/discuss/118769/Proof-of-O(n3)-algorithms), which comes the closest of any to this kind of formula. I highly recommend checking it out, especially for the reasoning for pivot_index, the rightmost index that isn't repainted after we print on ```[i, j)```, and why we can always print ```s[i]``` first. Reframing the question around the endpoint behavior makes this problem more clearly similar to problem [546](https://leetcode.com/problems/remove-boxes)

As always, feel free to ask any questions, make comments or post your modifications of the code and formula.
Edit: Changed binary search for next indices to a lookup array based on idea from @decomplexifier giving further speedup, from ~150 ms -> ~130 ms