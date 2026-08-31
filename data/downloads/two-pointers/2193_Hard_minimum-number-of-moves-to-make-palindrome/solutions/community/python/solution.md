# [Python] with proof for why move a from the form of a....a....  to a.......a works

**Author:** cathatino
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/1822915/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/1822915/)

---

# Proof
Provide with a not very solid but acceptable proof:

(1) let's convert the string to an array to 
example: `"abcab"` -> `["a", "b", "c", "a", "b"]`

(2) let's only consider to move `first element` to be Palindrome. In our example

it will be to move from the form of
`["a", ..., "a", ...]`
let's assume between first `"a"` and last `"a"` there are number of x elements and behind last `"a"` we have number of y elements
`"a", ..., "a", ...` = `"a", arr_with_length_x, "a", array_with_length_y`
`"a", arr_with_length_x, "a", array_with_length_y` -> `"a", arr_with_length_x, array_with_length_y, "a"`

As first `"a"` is at start of string so to move last `"a"` to the end of string, it takes y moves.

Let's consider to make another kinds of `Palindrome`, i.e. we move first `"a"` to index d (in the form of `[..., "a", ..., "a", ...]`)
`"a", arr_with_length_x, "a", array_with_length_y` -> `arr_with_length_d, "a", arr_with_length_x_minus_d, arr_with_length_y_minus_d, "a", arr_with_length_d`
then for first `"a"`, it takes `d` moves and relatively it takes `y-d` moves for last `"a"`, thus it is `d`+`y-d` = `y` moves in total

i.e. no difference on moves count if just want to make `"a"` Palindrome

(3) let's compare two kinds forms, which is better? 
**3.1.** `"a", arr_with_length_d, arr_with_length_x_minus_d, arr_with_length_y_minus_d, arr_with_length_d, "a"`
**3.2.**  `arr_with_length_d, "a", arr_with_length_x_minus_d, arr_with_length_y_minus_d, "a", arr_with_length_d`
It is obvious 3.1. is better (min moves) coz, from (2) we already proof to move `"a"`, 3.1. and 3.2. both takes `y` moves
And on form of **3.2.**, if to move element in `arr_with_length_d` out of itself , it will defintely pass by `"a"` and thus always requires one more extra moves than the **3.1.**

## Examples for (3)
Let's start with `axxayy`

### using 3.1. 
`axxayy` -> `axxyya` (2 moves)
then this equilvalent to move `xxyy`  to Palindrome

`xxyy` -> `xyyx` (2 moves)

### using 3.2.
`axxayy` -> `xxaayy` (same as 3.1. it is 2 moves as proof in (2))
Moving `xxaayy` -> `xyaayx` it takes:
`xxaayy` -> `xaayyx` (4moves) when moving x to last, x swap with `a` two times
`xaayyx` -> `xyaayx` (2moves) when moving y to index 1,y swaps with `a` two times

totally 6 moves = original 2 moves (same as in `3.1.`) + 4 moves (swaps with by `a` 4 times)
# Solution
Provide with a recursive solution using above greedy solution

```
class Solution(object):
    def minMovesToMakePalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """
        count, length_of_s = 0, len(s)
        if length_of_s <= 2:
            return count
        for i in reversed(range(length_of_s)):
            if s[i] != s[0]:
                continue
            if i == 0:
				# move to middle is a speical case which takes len(s)/2 moves then do recursive for remaining part
                count += len(s)/2 + self.minMovesToMakePalindrome(s[1:])  
            else:
			    # this move takes len(s)-1 - i (move from i to last index len(s)-1)and then do recursive for remaining part
                count += len(s)-1-i + self.minMovesToMakePalindrome(s[1:i]+s[i+1:])
            break
        return count
```