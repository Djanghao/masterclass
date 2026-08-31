# Golang O(n) time solution with explanation

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/1161507/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/1161507/)

---

[1100. Find K-Length Substrings With No Repeated Characters](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/)

**The Idea Of This Solution:**

This solution aims to use a counter called `counter` to count the number of duplicates. Also, when `counter == 0`, the substring has no duplicates.

**How This Solution Works:**

* First, we make the variables `counter`, `res`, and `m`. `counter` is the duplicate counter, `res` is the resulting number of substrings that have unique characters, and `m` is a map that is used to find out whether a character is a duplicate.
* Then we loop from `0` to `K - 1`.
    * Inside that loop, we add one to `m[S[i]]` (We are adding one to the character counter).
    * After adding one to `m[S[i]]` we can check whether `m[S[i]] == 2` (We are checking whether there is a duplicate). If `m[S[i]] == 2` we have to add one to `counter` because `counter` counts the number of duplicates.
* After we have done the first `K` elements, we can check whether `counter == 0`. If so, we can add one to `res`. If `counter == 0`, we know that there are no duplicates.
* Then we can loop from `K` to `len(S)`.
    * Inside that loop, we remove the first element of the substring from `m`, and then we check whether `m[first letter of substring] == 1`. If so, we can subtract `1` from `counter` because when the frequency of a letter is `1`, we know that it is not a duplicate.
    * Next, we make the letter after the end of the substring the new end of the substring and add `1` to `m[S[i]]`. If `m[S[i]] == 2` we know that there is a duplicate so we add `1` to `counter`.
    * After adding and subtracting from `counter`, we can check whether `counter == 0`. We do this because if `counter == 0`, there are no duplicates. So if `counter == 0` we can add `1` to `res`.

**The Code:**

``` go
func numKLenSubstrNoRepeats(S string, K int) int {
    if K > len(S) {
        return 0
    }
    counter, res, m := 0, 0, make(map[uint8]int)

    for i := 0; i < K; i++ {
        m[S[i]]++
        if m[S[i]] == 2 { counter++ }
    }
    if counter == 0 { res++ }

    for i := K; i < len(S); i++ {
        m[S[i-K]]--

        if m[S[i-K]] == 1 { counter-- }

        m[S[i]]++

        if m[S[i]] == 2 { counter++ }

        if counter == 0 {res++ }
    }
    return res
}
```

**If You Don't Like The Top Solutions Format:**

``` go
func numKLenSubstrNoRepeats(S string, K int) int {
    if K > len(S) {
        return 0
    }
    counter, res, m := 0, 0, make(map[uint8]int)

    for i := 0; i < K; i++ {
        m[S[i]]++
        if m[S[i]] == 2 {
            counter++
        }
    }
    if counter == 0 {
        res++
    }

    for i := K; i < len(S); i++ {
        m[S[i-K]]--

        if m[S[i-K]] == 1 {
            counter--
        }

        m[S[i]]++

        if m[S[i]] == 2 {
            counter++
        }

        if counter == 0 {
            res++
        }
    }
    return res
}
```