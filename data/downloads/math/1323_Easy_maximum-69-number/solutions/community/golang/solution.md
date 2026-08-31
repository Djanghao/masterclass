# [Go/Golang] Simple 2 line solution with strings.Replace (100% Runtime/100% Memory)

**Author:** rafaelwi
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/486969/](https://leetcode.com/problems/maximum-69-number/solutions/486969/)

---

**Solution**
```go
func maximum69Number (num int) int {
    r, _ := strconv.Atoi((strings.Replace(strconv.Itoa(num), "6", "9", 1)))
    return r
}
```

**Explanation**
`r, _` -> We're saving the result of this operation in `r`. This operation will also return an `err`, but we don't need it for the purpose of this question. If this function was to be used in the real world (for whatever purpose), you'd want to error check before returning.

`strconv.Atoi((strings.Replace(strconv.Itoa(num), "6", "9", 1)))` -> Three things are happening here. 
1. `strconv.Itoa(num)` -> Converts `num` to a string
2. `strings.Replace(strconv.Itoa, "6", "9", 1)` -> Replaces the first occurance of 6 with 9 from the string of `num`
3. `strconv.Atoi((strings.Replace(strconv.Itoa(num), "6", "9", 1)))` -> Convert the string back into an int


**A small plug**
Hi, thanks for looking at my solution. I've been sharing my solutions to Leetcode problems on my Github. [Please check it out if you are interested, ](https://github.com/rafaelwi/leetcode)and leave a star if it helps you. Thanks :)