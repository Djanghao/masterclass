# [Python3] 1-line

**Author:** ye15
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/755814/](https://leetcode.com/problems/minimum-suffix-flips/solutions/755814/)

---

Algo: 

To abstract this problem in math terms, the purpose of it is to simply convert a string composed of `0`'s and `1`'s to all `0`'s using a predefined flip operation that flips everything from a given position to the end. As a result, at any step, one could focus on the left-most `1`. By fliping it, a desirable byproduct is that a continous chunk of `1`'s connecting to the left-most `1` is set to `0`. An undesirable side effect is that the next `0` will become the left-most `1`. In the next step, you would have to flip this `1`. 

It is not difficult to realize that this problem is to count the number of changes in the string. One caveat is the first character, for which one flip needs to be counted if it is `1`. To unify the operation, we could add a dummy `0` in front so that the string always starts with `0`. 

Using the example given by the problem, the above argument would suggest 3 as the answer as there are in total 3 changes while scanning `010111` (a dummy `0` is added in front) from left to right. 
`10111`
`01000` after 1st flip
`00111` after 2nd flip
`00000` after 3rd flip 

```
class Solution:
    def minFlips(self, target: str) -> int:
        return len(list(groupby("0" + target)))-1
```

Here, we leverage on `groupby` function of `itertools` module which groups the string for us though the only info we need is the number of groups minus one (`n` groups comes with `n-1` changes from group to group).

Furthermore, the below elegant solution is due to @awice. 
```
class Solution:
    def minFlips(self, target: str) -> int:
        ans = flip = 0
        for bulb in target: 
            if flip ^ int(bulb): 
                flip ^= 1
                ans += 1
        return ans
```

```
class Solution:
    def minFlips(self, target: str) -> int:
        ans, prev = 0,"0"
        for c in target: 
            if prev != c: ans += 1
            prev = c
        return ans 
```