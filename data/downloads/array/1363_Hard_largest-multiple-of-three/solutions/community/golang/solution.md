# Go O(n) solution, no sorting, details explaination

**Author:** gavin92
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/4694814/](https://leetcode.com/problems/largest-multiple-of-three/solutions/4694814/)

---

# Approach
We want to keep as many digit as possible, and sort the digits decreasingly to build the final number.

So the most important part is to figure out if we need to remove any digit, and if so, which digit(s) to remove.

Sum up all digits. 
If `digit_sum % 3 == 0`, it means we don't need to remove any digits. Simply use them all.
If `digit_sum % 3 == 1`:
(1) if we have at least 1 digit that is `digit % 3 == 1`, remove the smallest one
- for example `[6, 9, 4, 2, 7]`, the sum is `28` and `28%3=1`, we have 4 and 7 which both mod 3 == 1, so we pick the smallest one (in this case 4) to remove.

(2) if we don't have any `mod 3 == 1` digit, it means we have at least 2 `mod 3 == 2` digit, we need to remove the 2 smallest of them
- for example `[6, 9, 2, 2, 5, 8, 5]` which sums up to `37`, `37%3=1`, but we don't have any `mod 3 == 1` digits, so we remove 2 smallest `mod 3 = 2` digits, in this case, we remove 2 `2`s

if `digit_sum % 3 == 2`: it's simillar to the `digit_sum%3 == 1` case but we either remove 1 smallest `mod 3==2` digit or remove 2 smallest `mod 3 == 1` digit (if `mod 3==2` digit doesn't exist)

After figuring out what to remove, the rest of the work is easy. we can store a `digit count` array (constant space of 10) to avoid sorting.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) if the output string space doesn't count
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func largestMultipleOfThree(digits []int) string {
    var digitCount [10]int
    var mod3Count [3]int
    digitSum := 0
    for _, d := range digits {
        digitCount[d]++
        mod3Count[d%3]++
        digitSum += d
    }

    extra1, extra2 := 0, 0
    switch digitSum % 3 {
    case 1:
        if mod3Count[1] > 0 {
            extra1 = 1
        } else {
            extra2 = 2
        }
    case 2:
        if mod3Count[2] > 0 {
            extra2 = 1
        } else {
            extra1 = 2
        }
    case 0:
    }

    for digit, count := range digitCount {
        if digit % 3 == 1 && extra1 > 0 && count > 0 {
            if count >= extra1 {
                digitCount[digit] -= extra1
                extra1 = 0
            } else {
                extra1 -= count
                digitCount[digit] = 0
            }
        } else if digit % 3 == 2 && extra2 > 0 && count > 0 {
            if count >= extra2 {
                digitCount[digit] -= extra2
                extra2 = 0
            } else {
                extra2 -= count
                digitCount[digit] = 0
            }
        }
    }
    var res []byte
    for digit := 9; digit >= 0; digit-- {
        count := digitCount[digit]
        for i := 0; i < count; i++ {
            res = append(res, byte('0'+digit))
        }
    }
    if len(res) > 0 && res[0] == '0'{
        res = []byte{'0'}
    }
    return string(res)
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```