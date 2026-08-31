# [Python] Math solution, Introduction to Combinatorics

**Author:** grawlixes
**Votes:** 113
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/918396/](https://leetcode.com/problems/kth-smallest-instructions/solutions/918396/)

---

*Feel free to skip to the solution below if you already understand combinatorics.*

**Introduction**
"Combinatorics" is basically the mathematical science of counting. In our case, as software engineers, it's usually about the efficient automation of that counting - and there's a lot of counting to be done here, for sure!

First of all, we know these things, regardless of the destination:
1. Since Bob has to walk from `(0, 0)` to `(r, c)`, he has to follow a total of `r + c` instructions.
2. `r` of those instructions will be downward (`"V"`) movements, and `c` of the instructions will be horizontal (`"H"`) movements.

So, we know that every set of instructions for Bob will be some string that is the combination of `"H"` and `"V"` with length `r + c`, exactly `r` characters will be `"V"`, and exactly `c` characters will be `"H"`.

**Combinatorics**
Now that we have that out of the way, let's analyze a hint that the problem gives us. The final constraint says this:
> `1 <= k <= nCr(row + column, row)`, where `nCr(a, b)` denotes `a` choose `b`.

`nCr(a, b)`, or "`a` choose `b`" as they put it, is the number of ways that you can select `b` elements from a set of `a` unique elements.  Let's consider `nCr(3, 2)` for example: that means we have 3 unique elements - `000`. Let `1` represent an element that we've selected: there are three ways to select exactly 2 elements, shown below:
- `011`
- `101`
- `110`
 
You don't need the formula for `nCr(a, b)` since your language most likely has it as a library, but here it is if you're interested (`!` is the [factorial](https://en.wikipedia.org/wiki/Factorial) function):
> `nCr(a, b) = (a!) / ((b!) * (a - b)!)`

**Solution**
`"H"` is lexicographically smaller than `"V"`. That means that, at index `i` of an arbitrary solution, placing an `"H"` at `i` will make the resulting instruction set lexicographically smaller than if we placed a `"V"` at that index instead.

Let's break this down in terms of what we've learned about Combinatorics. If we have `r + c` total elements and `r` of those elements are `"V"`, then we have `nCr(r + c, r)` possible instruction sets that Bob can walk. At each of his `r + c` total steps, we have two options:
- Walk right one column, which will leave us with the same number of `"V"`'s
- Walk down one row, which will decrease our number of `"V"`'s by 1 (remember that we only have `r` of these!)

**If we choose to walk down a row when we have N more steps and R possible rows left to walk down (including the current step), then we're cutting out the number of combinations of (N - 1) steps with R rows to walk down, because all of those combinations would result in a lexicographically smaller instruction set.**

So, for each step where we have N more possible steps (including the current step), calculate `nCr(N - 1, R)`. If k is less than or equal to this number, travel horizontally. Otherwise, subtract that number from k, decrease the number of vertical movements we're allowed to make, and then travel vertically.

```
def kthSmallestPath(self, destination: List[int], k: int) -> str:
        from math import comb
        r, c = destination
        
        ret = []
        remDown = r
        for i in range(r + c):
            remSteps = r + c - (i + 1)
            com = comb(remSteps, remDown)
            if com >= k:
                ret.append("H")
            else:
                remDown -= 1
                k -= com
                ret.append("V")
                
        return ''.join(ret)
```

Please leave a comment if you have any questions!