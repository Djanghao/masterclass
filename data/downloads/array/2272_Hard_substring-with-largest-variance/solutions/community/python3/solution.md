# "Weird Kadane" | Intuition + Solution Explained

**Author:** paradoxical
**Votes:** 122
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/2579146/](https://leetcode.com/problems/substring-with-largest-variance/solutions/2579146/)

---

> **Note you can find the finalised Python3 Code at the very bottom. This post describes how you can start from a standard Kadane's Algorithm and end up at the solution [@votrubac describes in his post](https://leetcode.com/problems/substring-with-largest-variance/discuss/2039178/weird-kadane).** @NeosDeus suggested I make this a stand-alone post as this was initially a comment on that solution.
>
>Furthermore [this idea also really helped understand how you can solve this using @votrubac's approach](https://leetcode.com/problems/substring-with-largest-variance/discuss/2491331/Insights-into-Votrubac-soln)

**The Solution**

We're trying to solve the problem by just taking two individual letters `a` and `b` from our allowed alphabet as per the question rules: "`s consists of lowercase English letters`", and solving the problem for `a` against `b`. We will also end up solving it for `b` against `a` due to the loop. The final solution is the max of all the possible letters in the string solved against each other.

Idea being, you're solving:
```python
max_variance = 0
unique = list(set(s))
for a in unique: #     see below
    for b in unique: # rules dictate these 2 loops would be no more than O(26*26)
      if a == b: continue
      a_against_b_var = solveOne(a, b, s) # <= you want to do this efficiently
      max_variance = max(a_against_b_var, max_variance)

return max_variance 
```

Now you want to solve one such problem `solveOne` efficiently. 

A naive solution for solving `a` against `b` and `b` against `a` simultaneously is a `O(N^2)` loop tracking the -1 and +1 as explained in the hint, and taking the abs value of `(countA - countB)`. 

But you can see that what you're really trying to do, is maximise the count of `a` against `b` and `b` against `a` for both cases. This is really just [#53](https://leetcode.com/problems/3sum) **Maximum Subarray**, which you can do in O(N) (so 2*O(N) for both `a` against `b` and `b` against `a`: much better than O(N^2)), with a twist:

You can only consider your current running subarray as a valid solution if you were considering at least one `b` (= one `-1`) inside the solution. Solutions composed of just `a` are not valid. So you must ensure that you have `b`s, but you must also minimise their "impact" on the running sum.

You start with a solution not considering these bonus rules. Just basic Kadane's algorithm for the `a`s against the `b`s:

```python 
def solveOne(a, b, string):
    max_var = 0
    var = 0
    
    for c in string:
        if c == a:
            var += 1
        elif c == b:
            var -= 1
        
        var = max(0, var)
        max_var = max(max_var, var)
    
    return max_var
```

Then you add the simple rule of "you must have a b in the considered substring"
```python
def solveOne(a, b, string):
    max_var = 0
    var = 0

    has_b = False
    
    for c in string:
        if c == a:
            var += 1
        elif c == b:
            has_b = True
            var -= 1

        var = max(0, var)
        if has_b:
            max_var = max(max_var, var)
    
    return max_var
```

Now for the more complex rules: 
Consider "baaaa". The correct solution is 3. The above algoritm would give us results: 
```
+----------+---+---+---+---+---+
| letter   | b | a | a | a | a |
+----------+---+---+---+---+---+
| variance | 0 | 1 | 2 | 3 | 4 |
+----------+---+---+---+---+---+
```
This is an issue, so we must ensure we track the `b` properly. So we can't be resetting to 0 immediately as you do in the typical Kadane algorithm.
Let's say we allow var to go to -1 (at least initially), so that seeing an `a` after a `b` will reset us back to 0 (which would be a correct result for the string "ba"). 

Now what did the `max(0, var)` in Kadane's algorithm really _mean_?
Well, we were discarding a subarray and restarting at/after the current array item because the subarray up until the discarded number was no longer "saveable"; we would not get the max possible sum by continuing to add numbers to that running sum. Restarting from 0 with the other/remaining half *could* still give us a better result.

Let's say we kept the -1 for the `b`s without resetting to 0, and consider:
```
+----------+----+---+---+---+---+
| letter   | b  | b | a | a | a |
+----------+----+---+---+---+---+
| variance | -1 | ? | ? | ? | ? |
+----------+----+---+---+---+---+
```

We're considering the subarray `"[b]baaa"` and start that off with a decrement. Do we want `"[bb]aaa"` to be considered in its entirety? 
Well, `bb` would not give us the max sum of `a`s if we kept both `b`s and kept going trying to look for `a`s, similar to going to a negative value in the original Kadane's algorithm. 

E.g. `"[bba]aa"` would give us -1, `"[bbaa]a"` would give us 0, but `"b[baa]a"` would give us 1. Removing the first of those "b"s obviously doesn't break the rule of "all substrings must have at least one b" and maximises the sum for `a`.

So we want to cut off/restart our subarray start each time we get to -1 in this implementation. Such that in the example we'd be considering:
`"[b]baaa"` -> `"[bb]aaa"`  becomes  `"b[b]aaa"` -> `"b[ba]aa"` -> `"b[baa]a"` -> `"b[baaa]"` (this gives us the max!)
```
+----------+----+----+---+---+---+
| letter   | b  | b  | a | a | a |
+----------+----+----+---+---+---+
| variance | -1 | -1 | 0 | 1 | 2 |
+----------+----+----+---+---+---+
```

To summarise up until now:
- if we have a positive var value and we see an `a` or a `b`, we just increment/decrement accordingly
- we only consider a var value towards our maximum from the point we've seen at least one `b` and that `b` is contained in our subarray
- -1 indicates the start of a new subarray, if we get a var value under -1, we reset var to -1 which means we restart the subarray from that point

What if we had some `a`s before we get another b like in `"baabbbaaaaa"
```
+----+---+---+---+---+---+---+---+---+---+---+
| b  | a | a | b | b | b | a | a | a | a | a |
+----+---+---+---+---+---+---+---+---+---+---+
| -1 | 0 | 1 | ? |   |   |   |   |   |   |   |
+----+---+---+---+---+---+---+---+---+---+---+
```
Well, observe that we wouldn't get the max value by considering `"[baab]bbbaaaaa"` (var = 0), rather `"b[aab]bbbaaaaa"` (var = 1) would be more optimal and continue following the rule of having to have at least one `b`. 
It's pretty easy to say that if we knew we had a `b` as our first subarray member, then when we see our next `b` assuming we had some `a`s, we benefit by simply shifting our subarray range to the right by one, which results in the var value remaining unchanged, but us having the ability to extend into a larger sum with subsequent characters. 

We can also know when we have such a `b` at the start of our range, because as we just saw it's whenever we restart the subarray: whenever we get to var <= -1.

Should this rule take priority over the subarray restart rule? Throwback to the previous example: `"[b]baaaa"` -> `"[bb]aaaa"` becomes `"b[b]aaaa"` which kind of a special case of this idea, but we'd like to be immediately aware that our first subarray member is `b` here so that we could apply the rule again later. 
So in general, the main reason to do a right shift is when we are considering a non -1 valued subarray (= not a single item that is a `b`) to preserve the running sum.

So we'd like to have:
`"[b]aabbbaaaaa"` (-1) -> `"[ba]abbbaaaaa"` (0) -> `"[baa]bbbaaaaa"` (1) -> `"[baab]bbaaaaa"` would be 0 but we shift right to get `"b[aab]bbaaaaa"` (1) -> `"b[aabb]baaaaa"` (0) -> `"b[aabbb]aaaaa"` (-1) leading to a reset starting with that last `b`: `"baabb[b]aaaaa"` (-1) -> `"baabb[ba]aaaa"` (0) -> `"baabb[baa]aaa"` (1) -> `"baabb[baaa]aa"` (2) -> `"baabb[baaaa]a"` (3) -> `"baabb[baaaaa]"` (4)
```
+----+---+---+---+---+----+---+---+---+---+---+
| b  | a | a | b | b | b  | a | a | a | a | a |
+----+---+---+---+---+----+---+---+---+---+---+
| -1 | 0 | 1 | 1 | 0 | -1 | 0 | 1 | 2 | 3 | 4 |
+----+---+---+---+---+----+---+---+---+---+---+
```

**Final Rules**

The rules we've found are, for any given char `c` being considered at any position in the string:
- if we have any var value and we see that the current `c` == `a` we can just increment. There's no special rules relating to incrementing
- if we see the current `c` == `b`:
> - if we see that we have a non -1 var value (indicating a current substring containing not just `b`s) and assuming we could "shift right by one" to save our current var value, then we will do so. We would need to track if we do actually have a `b` at the start of our current substring to be able to do so.
> - if for the new var value, `var - 1`, `(var - 1)` <= -1, we set it to -1 exactly and restart the substring from the current `b`. We now have a first `b` for the previous rule to use.
> - otherwise the var value is currently positive, and adding the b would set var to 0 (minimum), not ever below 0.


**Final Code**
This gets us to @votrubac's code, or here the python version of it:

```python
def solveOne(a, b, string):
    max_var = 0
    
    var = 0
    has_b = False
    first_b = False # first element of the currently considered subarray is b
    
    for c in string:
        if c == a:
            var += 1
        
        elif c == b:
            has_b = True
            
            if first_b and var >= 0: # "shift right" and save a 1 in the current sum to be able to properly maximise it
                # we can only do this when we know that we have a `b` at the start of our current subarray, and we'll only ever have a single b at the start
                # always followed by an a, due to the next rule
                first_b = False 
            elif (var - 1) < 0: # restart the subarray from this b (inclusive) onwards
                # this rule ensures we skip double-b's, every subarray will always end up being `ba....`, `[bb]a` would become `b[b]a` -> `b[ba]`
                first_b = True 
                var = -1
            else:
                var -= 1 # var will always be >= 0 in this case
        
        if has_b and var > max_var:
            max_var = var
    
    return max_var
``` 
