# Golang Solution with Explanation

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/1592079/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/1592079/)

---

The main idea of this solution is to find the number of columns. The solution comes together pretty quickly after that.

To explain my thinking to how I found the number of columns we have to take a matrix. We should know the number rows and columns in that matrix. For example:

`[a][d][g][ ]`
`[ ][b][e][h]`
`[ ][ ][c][f]`

We have a matrix with 3 rows and 4 columns, and 12 items. `3 * 4 = 12`, so if we are given a matrix of size 12 and 3 rows, we can do `12 / 3 = 4` to get the number of columns. Since we know that the number of values in the matrix can be shown using `len(encodedText)` and the problem gives us the number of rows, we can do `len(encodedText) / rows = cols`.

Then all we have to do is add all the letters in a particular order.

Note that `res` is not a `string` because that will output a TLE.

``` go
func decodeCiphertext(encodedText string, rows int) string {
    n := len(encodedText)
    cols := n / rows
    res := []string{}
    
    for i := 0; i < cols; i++ {
        for j := i; j < n; j += cols + 1 {
            res = append(res, string(encodedText[j]))
        }
    }
    
    return strings.TrimRight(strings.Join(res, ""), " ")
}
```