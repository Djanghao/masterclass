# Databricks: Go solution in one pass

**Author:** ilya-pimenov
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-comments/solutions/2752433/](https://leetcode.com/problems/remove-comments/solutions/2752433/)

---

# Intuition

My initial intuition made me approach problem with finding index of either `\\\\` or `\\*` and then implementing crude finite automata with that logic, but the complexity of if/else conditions exploses so fast that it becomes horrorsome (even if you do implement it in the end \u2014 it will be very fugly).

That led me (after an hour) to think that some structure that would help getting rid of elements that are not needed could help, and that is very often stack. After trying with stack I realised that perhaps it is easier not to even add elements to stack if we don't need to; the stack approach did lead me to think of the input as a stream or characters, rather then stream of strings, which made the solution much more approachable and the code simpler.

# Approach

## Step 1

Merge input into a stream of runes (characters).

## Step 2

Examine input character by character, flipping the `ignoreLine` or `ignoreBlock` on if we see the only correct starting sequences for both.

If either of the switches is on \u2014 ignore input as so far we don't see the only legitimate end of ignore block.

That is `\
` for `ignoreLine` and `*/` for `ignoreBlock`.

## Step 3

Pretty print output.

# Complexity
- Time complexity:

$$O(n)$$ \u2014 we walk the input once

- Space complexity:

$$O(n)$$ \u2014 or merged input

# Code
```
func removeComments(source []string) []string {
    // Step 1 Merge input into a stream of characters
    all := strings.Join(source, "\
")
    runes := []rune(all)

    // Step 2 Examine stream character by character flipping and respecting the states
    var st []rune
    var ignoreLine bool
    var ignoreBlock bool
    prev := '_'
    for _, v := range runes {
        if !ignoreLine && !ignoreBlock {
            st = append(st, v)
            if len(st) > 1 {
                // Started line comment
                if st[len(st)-2] == '/' && st[len(st)-1] == '*' {
                    st = st[:len(st)-2]
                    ignoreBlock = true
                    continue
                }
                // Started block comment
                if st[len(st)-2] == '/' && st[len(st)-1] == '/' {
                    st = st[:len(st)-2]
                    ignoreLine = true
                    continue
                }
            }
        } else {
            // Exit condition for line comment
            if ignoreLine && v == '\
' {
                ignoreLine = false
                st = append(st, '\
')
            }
            // Exit condition for block comment
            if ignoreBlock && prev == '*' && v == '/' {
                ignoreBlock = false
            }
        }
        prev = v
    }

    // Step 3 Pretty print ouput
    all = string(st)
    var ans []string
    for _, v := range strings.Split(all, "\
") {
        if len(v) > 0 {
            ans = append(ans, v)
        }
    }
    return ans
}
```