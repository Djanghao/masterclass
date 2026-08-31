# Python O(mnlogm). Sort among single digit instead of entire suffix for each rank

**Author:** WangQiuc
**Votes:** 12
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/2292577/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/2292577/)

---

Intuitively, we should build a table to record the ranking of all the suffixes. `d[i]` indicates the ranking for all `number[n-i:]`. `d[i][j]` will be the answer for a query `(i,j+1)`
`d[0]` should be `{0,1,2,...,n}` as "between equal number, the one with the lower index is smaller"
For `d[1]`, we only rank among the last digit of all numbers. If any two digits are equal, we derive the 2nd ranking priority from `d[0]`.

Then you will find, for `d[i]`, we don't have to actually sort among `number[n-i:]`. Instead we can first rank the `n-i`th digit for all numbers. If any two digits are equal, we use a 2nd ranking priority from `d[i-1]`.

e.g. `A = ["915","908","340","307"]`, `d[0] = [0,1,2,3]`
To build `d[1]`, we rank among the last digits, which is `{5,8,0,7}`. All digits are unique so `d[1] = [2,0,3,1]`
To build `d[2]`, we first rank among the 2nd last digit, which is `{1,0,4,0}`. We noticed `i1` and `i3` are same, so we need the 2nd pririoty from `d[1]`. Since `i3` stands before `i1` in `d[1]` (3 in `d[1]`**[2]** while 1 in `d[1]`**[3]**), so we rank `i3` before `i1` and `d[2] = [3,1,0,2]`. Back to actual suffix, we rank `07` before `08` as we first check their first digits which are equal, then we check their previous ranking where `7` ranks higher than `8`.
Finally, to build `d[3]`, first we rank among the digits `{9,9,3,3}`. Then we check the previous ranking, which is ranking among `{15,08,40,07}` which is stored in `d[2]`. And it gives us `d[3] = [3,2,1,0]`. As we first rank `(i2,i3) < (i0,i1)`. Then rank `i3 < i2` due to `i3 < i2` in `d[2]` and same for ranking `i1 < i0`.

In such way, we only need to sort `m` single digit number for each ranking. To build table `d`, it takes `O(mnlogm)`.
And each query takes a constant time.
```
def smallestTrimmedNumbers(A, Q): 
    m, n = len(A[0]), len(A)
    d = [list(range(n))]
    for i in range(m-1,-1,-1):
        prev_rk = {x:j for j,x in enumerate(d[-1])}
        d.append(sorted(range(n), key=lambda x:(A[x][i],prev_rk[x])))
    return [d[t][k-1] for k,t in Q]
```