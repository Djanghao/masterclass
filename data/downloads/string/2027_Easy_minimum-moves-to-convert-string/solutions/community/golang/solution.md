# Golang solution with explanation and images

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1502120/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/1502120/)

---

The idea of this solution is if we are on a `'X'` we can move the index up by three and add one to `res`.

An example could be:

`input: s = "XXOXXXOOOXOXOXX"` *(I tried to capture as many edge cases as I could in this test case)*

We can start with our index `i = 0`

![](https://i.imgur.com/veKMehQ.png)

`s[i] == 'X'`, so we can skip the next two values (Skip the values at indexes `1` and `2` because according to the problem we have made `s[0] = 'O', s[1] = 'O', s[2] = 'O'`. We don't actually change the values because there is no need) and add one to `res`. So now `i = 3`, `res = 1`.

![](https://i.imgur.com/Kym8Qw1.png)

`s[i] == 'X'`, so we can do the same thing as the previous `3` values, and skip the next two values. Now we are at `i = 6`, `res = 2`

![](https://i.imgur.com/G0FoLNM.png)

`s[i], s[i + 1]`, and `s[i + 2]` are all `'O'`, so I am just going to skip them.

![](https://i.imgur.com/ViDnPbB.png)

`s[i] == 'X'`, so we can skip the next two values, and add one to `res`. `i == 12`, `res = 3`.

![](https://i.imgur.com/DU17fi0.png)

`s[i] == 'O'`, so `i++` and continue. `i = 13`, `res = 3`

![](https://i.imgur.com/iw6okPi.png)

`s[i] == 'X'`, so we can skip the next two values, `i = 15`, `res = 4`

But now `i >= len(s)`, so we can break the loop and return `res`. 

``` go
func minimumMoves(s string) int {
    res := 0
    
    for i := 0; i < len(s); i++ {
        if s[i] == 'X' {
            i += 2
            res++
        }
    }
    
    return res
}
```