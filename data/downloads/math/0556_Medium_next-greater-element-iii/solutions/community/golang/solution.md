# Go (Golang) Monotonic stack. Time complexity: O(n), Space complexity O(n)

**Author:** oleg1628
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/2894586/](https://leetcode.com/problems/next-greater-element-iii/solutions/2894586/)

---

# Intuition
1. Iterate from right to left searching the first occurancy or the decreasing digit (named as "rogue" below)). Add everything to the stack on the way.
2. Permutate the "rogue" element with the first element in the stack, which is greater that the "rogue" element.
3. Append stack contents to the tail.

# Approach
Monotonic stack

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
func nextGreaterElement(n int) int {
    if n < 10 {
        return -1
    }
    stack := []int{}
    digits := intToDigitsSlice(n)
    for i := len(digits) - 1; i > 0; i-- {
        stack = append(stack, digits[i])
        if digits[i-1] < digits[i] {
            resSlice := make([]int, 0)
            resSlice = digits[0:i-1]
            rogue := digits[i-1]

            for i,v := range(stack) {
                if rogue < v {
                    rogue, stack[i] = stack[i], rogue
                    break
                }
            }
            resSlice = append(resSlice, rogue)

            for _,v := range(stack) {
                resSlice = append(resSlice, v)
            }

            res := digitsSliceToint(resSlice)
            
            if res == n || res > int(math.Pow(2, 31)) - 1  {
                return -1
            }
            return res
        }
    }
    return -1
}

func digitsSliceToint(digits []int) int {
    res := 0
    for i := len(digits); i > 0; i-- {
        res += digits[i-1] * int(math.Pow(10, float64(len(digits) - i)))
    }
    return res
}

func intToDigitsSlice(n int) []int {
    digits := []int{}
    for n > 0 {
        digit := n % 10
        digits = append(digits, digit)
         n /= 10
    }
    reverse(digits)
    return digits
}

func reverse(digits []int) {
    for i,j := 0, len(digits) - 1; i < j; i,j = i+1, j-1 {
        digits[i], digits[j] = digits[j], digits[i]
    } 
}

// time O(n)
// space O(n)

```