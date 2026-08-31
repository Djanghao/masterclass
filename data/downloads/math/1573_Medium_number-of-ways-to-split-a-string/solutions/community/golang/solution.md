# Go | Combinations problem

**Author:** jodarsyoung
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/4283306/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/4283306/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
This is a combinatorics problem, split into three different cases.

1. When number of '1' in the string is not divisible by 3.
Can't split, so zero ways.

2. When number of '1' is not zero.
Need to find the number of '0' between the last '1' of previous substring and the first '1' of the next substring. From there we find the number of ways to make a split, then multiply that with the number of ways for the next split.

3. When number of '1' is zero. (All characters are '0'.)
Need to find a way on counting where to put the splits. There are two splits and you have to put it before any '0 except the first.
$C(n-1, 2)= (n-1)(n-2) / 2$


# Complexity
- Time complexity:
$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func numWays(s string) int {
    const MAX int = 1e9 + 7

    numOnes := 0

    for i := range s {
        if s[i] == '1' {
            numOnes++
        }
    }

    if numOnes % 3 != 0 {
        return 0
    }

    if numOnes == 0 {
        // special case when string is purely zeros:
        // to understand this problem, we need to know
        // how to split s into three parts.
        // how that works is you can think of it as picking
        // two zeroes in the list and making the split before those zeroes.
        // the first zero can't be included in the selection so the answer
        // would be (n-1) taken two at a time where n is the length of s.
        return nMinusOneTakenTwo(len(s)) % MAX
    }

    // i here acts as a global index whenever we advance index in s
    numOnes /= 3
    i := 0

    advanceToSplitAndCountZeros := func() int {
        // advance until we have enough "1" for this string
        for j := numOnes; j > 0; i++ {
            if s[i] == '1' {
                j--
            }
        }

        // number of ways to split is based on the number of zeros
        // between previous string's last "1" and the next string's first "1".
        numZeros := 0
        for ; s[i] == '0'; i++ {
            numZeros++
        }
        return numZeros
    }

    firstSplit := advanceToSplitAndCountZeros() + 1
    secondSplit := advanceToSplitAndCountZeros() + 1
    
    return firstSplit * secondSplit % MAX
}

func nMinusOneTakenTwo(n int) int {
    return (n-1) * (n-2) / 2
}
```