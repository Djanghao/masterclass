# 99.7% Python 3 solution with 17 lines, no search, explained

**Author:** epistoteles
**Votes:** 89
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/1520004/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/1520004/)

---

The following solution yields a 99.64% runtime. For the explanation see below!

```
class Solution:
    def numSplits(self, s: str) -> int:
		# this is not neccessary, but speeds things up
        length = len(s)
        if length == 1:  # never splittable
            return 0
        elif length == 2:  # always splittable
            return 1
		
		# we are recording the first and last occurence of each included letter
        first = {}  # max size = 26
        last = {}  # max size = 26
		
        for index, character in enumerate(s):  # O(n)
            if character not in first:
                first[character] = index
            last[character] = index
			
		# we are concatenating the collected indices into a list and sort them
        indices = list(first.values()) + list(last.values())  # max length 26 + 26 = 52
        indices.sort()  # sorting is constant O(1) because of the length limit above
		
		# all possible splits will be in the middle of this list
        middle = len(indices)//2  # always an integer because indices has an even length
		
		# there are this many possible splits between the two 'median' numbers
        return indices[middle] - indices[middle-1]
```

Let's look at the example **"abacadcac"**. We record the first and last occurence of each letter:

```
first = {'a' : 0, 'b' : 1, 'c' : 3, 'd' : 5}
last = {'a' : 7, 'b' : 1, 'c' : 8, 'd' : 5}
```

These two dictionaries can also be visualized like this, with the numbers as small arrows pointing to the indices. Upper row = first, lower row = last.

```
a b   c   d
\u25BC \u25BC   \u25BC| |\u25BC
0 1 2 3|4|5 6 7 8
  \u25B2    | |\u25B2   \u25B2 \u25B2
  b       d   a c
```

The two lines represent all possible splits in which there are equally many arrows left of the split as right of the split (not discerning between upper and lower arrows).

In a sorted list the combined first and last indices look like this:

```
[0, 1, 1, 3, 5, 5, 7, 8]
```

The lines in the arrow example correspond to the middle of this list.
The two indices in the middle are `3` and `5`.
Hence, there are `5 - 3` possible ways to split between the 3rd and 5th index.

Thanks for upvoting if this was helpful!