# [Python3, Java, C++] Dictionary/Map and Prefix Sum O(n)

**Author:** tojuna
**Votes:** 51
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/1647630/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/1647630/)

---

Dictionary/Hashmap is used to store all the occurences of a given number as {num: [indexes of occurences in arr]}

***Explanation for the use of prefix array***:
Prefix array `pre` is first used to fetch the sum of numbers uptil index i (for a given number arr[i]). We know that the numbers in the list are sorted thus these numbers will be smaller than i.

`v * (i + 1) - pre[i + 1]` finds the `\u2211 (l[i] - (numbers smaller than or equal to l[i] in list))`
Let's say for given list 1, 3, 5, 7, 9:
For example, we choose `i` = 3 or the number `l[i]` = 7.
To find abs difference for numbers smaller than equal to 7:
7 - 1 + 7 - 3 + 7 - 5 + 7 - 7
or
7 * 4 - (1 + 3 + 5 + 7)
or
7 * `(i + 1)` - `pre[i + 1]`

Similarly
`((pre[len(l)] - pre[i]) - v * (len(l) - (i)))` calculates abs difference between` l[i]` and numbers greater than `l[i]`

**Python3**:
```
def getDistances(self, arr: List[int]) -> List[int]:
    m, res = {}, [0] * len(arr)
    for i, v in enumerate(arr):
        if v not in m: m[v] = list()
        m[v].append(i)
    
    for x in m:
        l = m[x]
        pre = [0] * (len(l) + 1)
        for i in range(len(l)):
            pre[i + 1] = pre[i] + l[i]
        for i, v in enumerate(l):
            res[v] = (v * (i + 1) - pre[i + 1]) + ((pre[len(l)] - pre[i]) - v * (len(l) - (i)))
    return res
```

<iframe src="https://leetcode.com/playground/EYjsLmzB/shared" frameBorder="0" width="800" height="410"></iframe>

