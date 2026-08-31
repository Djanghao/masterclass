# Go O(n) time O(1) space: two pointers and switch no reversing (beats 100%)

**Author:** agilov
**Votes:** 4
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/3880860/](https://leetcode.com/problems/faulty-keyboard/solutions/3880860/)

---

# Intuition
We don't have to reverse string each time we read 'i', instead we can read string from the end and write characters in the result string one by one in the right position.

# Approach
We maintaining two pointers start and end of the result string and switch flag.
Reading input from the end.
If switch is on - filling result from the end.
If switch off - filling result from start.
If we encounter i - toggle switch and skip.
Start and end approaching each other as we filling the result

# Complexity
Time $$O(n)$$, space $$O(1)$$


# Code
```
func finalString(s string) string {
    // First we need to know how much memory to allocate for the result string
    // Result string length equals input string length minus amount of 'i' we encounter in the input
    is := 0
    for _, c := range []byte(s) {
        if c == 'i' {
            is++
        }
    }

    // No we know amount of 'i' and if it's zero - we don't have to do anything with the input
    // and return it as is
    if is == 0 {
        return s
    }
    
    // Initializing result string, pointers and switch variable (mode).
    mode, start, end, result := true, 0, len(s) - is - 1, make([]byte, len(s) - is)

    // Explanation of what is going on.
    // Let's assume we have string:
    // "abicdi" and result string for it will be: "dcab"
    // if we try to read string from the end we'll notice that character right after 'i' should be at the 
    // end of the result in this case "d" and character after "d" should go on the second place and so on 
    // until we meet another i.
    // When we met another i we should place next character at the end of the result because string after second i sould be already reversed if we simulate it according to description.
    for i := len(s) - 1; i >= 0; i-- {
        if s[i] == 'i' {
            mode = !mode
            continue
        }

        if mode {
            result[end] = s[i]
            end--
        } else {
            result[start] = s[i]
            start++
        }
    }

    return string(result)
}
```