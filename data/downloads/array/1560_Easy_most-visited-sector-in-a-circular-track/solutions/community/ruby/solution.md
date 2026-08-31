# Ruby 3-line solution with detailed explanation (56ms, no extra space)

**Author:** ykurmangaliyev
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/879358/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/879358/)

---

# Solution
```
rounds[0] > rounds[-1] ?
    (1..rounds[-1]).to_a + (rounds[0]..n).to_a :
    (rounds[0]..rounds[-1]).to_a
```

# Explanation
There are two observations which make this problem much simpler:
1. There are only two numbers which matter: the first one (starting sector) and the last one (finishing sector). All other values can be ignored, because we will visit all sectors on the path anyway.
2. The number of loops which we make does not matter too. If we make an extra **full** loop, then it will not affect the answer, because we will visit each sector exactly once.

## Case 1. Starting sector <= finishing sector
Now, let's imagine that we have 6 sectors, start at sector 3 and end at sector 5 (remember, all full loops do not matter). 

It will look like this:
```
first loop:   ..3456
last loop:    12345.
most visits:    ^^^
```

Here, you can see that the most visited sectors are all sectors between 3 and 5, because we visit them on the first loop after we start and visit them once again on the last loop before we finish. 

So, in this case the answer is `[start..finish]`.

Note, that it also handles the case when we finish and start at the same sector (e.g. 4):
```
first loop:   ...456
last loop:    1234..
most visits:     ^
```

## Case 2. Starting sector > finishing sector
The only exception from this rule is when we start at a sector with **higher** index than the finishing sector, for example we start at 5 and finish at 2:
```
first loop:   ....56
last loop:    12....
most visits:  ^^  ^^   
```

In this case, the answer would still be all sectors between the starting (5) and finishing section (2), but it now crosses the loop boundary (5 -> 6 -> 1 -> 2), so it needs an extra step to get this. 

The answer can be obtained by concatenating two arrays: `[start..n]` and `[1..finish]`. We need the answer to be in the ascending order, so in order to avoid sorting, let's just swap them and return `[1..finish] + [start..n]`.