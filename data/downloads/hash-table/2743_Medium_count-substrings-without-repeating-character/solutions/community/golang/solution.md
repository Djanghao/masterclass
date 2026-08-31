# Simple Solution With Explanation

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/3669844/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/3669844/)

---

# Idea Behind the Solution:

The crux of this problem is to find all unique substrings in a given string, meaning the substrings with no repeating characters. The idea is to use a sliding window approach, which moves through the string, capturing all possible unique substrings. The count of these substrings is then kept in a running total.

***

# Approach Used in the Solution:

A dictionary is used to track the latest index of each character in the string. As we move our window through the string, we check if a character has been seen before. If it exists within our current window, we adjust the window to exclude the previous occurrence of the character. After every check, the window length is incremented, and the length of the current window is added to the total number of unique substrings. This process is repeated until the end of the string, and the running total is returned as the final result.

***

# How To Calculate Substrings

This solution calculates the number of substrings by using and idea that can be demonstrated with this example:

input: `abc`
output: `6`

* At the first letter `'a'` we have a subtstring of length 1, <ins>a</ins>bc
* At the second letter `'b'` we have a substring of length 1, a<ins>b</ins>c, and a substing of length 2, <ins>ab</ins>c
* At the third letter `'c'` we have a substring of length 1, ab<ins>c</ins>, a substing of length 2, a<ins>bc</ins>, and a substring of length 3, <ins>abc</ins>

Now we might see a pattern, when we are at index `1` we have `1` substring. When we are at index `2` we have `2` additional substrings. When we are at index `3` we have `3` additional substrings. In the end we have a total of `6` substrings, `1` from the first index, `2` from the second index, and `3` from the third index.

So the number of substrings at a certain index is the index it self (Note that this idea is a little different from the idea of the code because this example doesn't include the fact that we reset the start index of the substrings).

***

# Golang - Code

``` go
func numberOfSpecialSubstrings(s string) int {
    lettersIndex := map[byte] int {} // letter : index
    cnt := 0
    res := 0

    for i := 0; i < len(s); i++ {
        val, contains := lettersIndex[s[i]]

        if contains && val >= i - cnt {
            cnt = i - lettersIndex[s[i]] - 1
        }
        lettersIndex[s[i]] = i
        cnt++
        res += cnt
    }

    return res
}
```

If you like this solution, please upvote!