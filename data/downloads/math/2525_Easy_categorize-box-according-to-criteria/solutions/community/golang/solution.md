# Go: Bitwise Operations

**Author:** sudomateo
**Votes:** 0
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/5127633/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/5127633/)

---

# Intuition

Categories are nothing more than bit flips. Treat them as such.

# Approach

The two categories that a box can be are `Bulky` and `Heavy`. Use 2 bits to represent that.

```go
const (
    // 01
	Bulky = 1 << iota

    // 10
    Heavy
)
```

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
const (
    tenFour = 10_000
    tenNine = 1_000_000_000
)

const (
	Bulky = 1 << iota
    Heavy
)

// categorizeBox uses bitwise operations to determine the
// category and flex on other LeetCode submissions.
func categorizeBox(length int, width int, height int, mass int) string {
    var category int

    if length >= tenFour || width >= tenFour || height >= tenFour {
        category |= Bulky
    }

    if (length * width * height) >= tenNine {
        category |= Bulky
    }

    if mass >= 100 {
        category |= Heavy
    }

    if category & Bulky == Bulky && category & Heavy == Heavy {
        return "Both"
    }

    if category & Bulky == 0 && category & Heavy == 0 {
        return "Neither"
    }

    if category & Bulky == Bulky && category & Heavy == 0 {
        return "Bulky"
    }

    if category & Bulky == 0 && category & Heavy == Heavy {
        return "Heavy"
    }

    return ""
}
```