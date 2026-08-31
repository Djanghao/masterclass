# Simple solution in Go

**Author:** supcik
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/6102057/](https://leetcode.com/problems/magical-string/solutions/6102057/)

---


# Intuition

I first started with 2 lists, but then, I found that one signe list and an index inside this list was sufficient.

# Approach

Instead of building a real *string*, I decided to build a **slice** of bytes : `magical`. It is initialized with `[1]` and has the capacity of `n+2` (to avoid resizing).

The variable `next` represent the next element to add to the magical slice. It alternate beetween 1 and 2 using the formula `next = 3 - next`. It starts with `2`.

The variable `count` represent the number of time we need to add `next` to `magical`. It starts with `2`.

The variable `index` is an index into the `magical` slice and indicates the position where we will find the next value of `count`. It starts with `1`.

Then a loop constructs the `magical` slice.

Finally, another loop counts the number or `1` in the `magical` slice.

We could improve the speed by already counting the first `1` in the first loop, but the code would be longer and more complex to read.

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code
```golang []
func magicalString(n int) int {
    magical := make([]uint8, 1, n+2)
    magical [0] = 1
    var next uint8 = 2
    var count uint8 = 2
    index := 1
    for len(magical) <= n {
        magical = append(magical, next)
        if count == 2 {
            magical = append(magical, next)
        }
        next = 3 - next
        index++
        count = magical[index]
    }

    res := 0
    for i := 0; i < n; i++ {
        if magical[i] == 1 {
            res++
        }
    }
    return res
}
```