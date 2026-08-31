# Golang Easy Solution [Sorting, Two Pointers]

**Author:** Toasty_02
**Votes:** 2
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/4822405/](https://leetcode.com/problems/bag-of-tokens/solutions/4822405/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This was a new solve for me so i refered the tags, the tags suggested sorting, greedy and two-pointer.

Since they are asking us for the maximum score we can think of sorting.

# Approach
<!-- Describe your approach to solving the problem. -->
subtract power (also do score++) until it is less than left index, then add the power of right index (do score--)
# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func bagOfTokensScore(tokens []int, power int) int {
    
    //sort tokens slice and get the length
    sort.Ints(tokens)
    n := len(tokens)

    //solve for only one value
    if n == 1 {
        if power >= tokens[0] {
            return 1
        }
        return 0
    }

    //initialize and define score, l, r
    score := 0
    l, r := 0, n-1

    //two pointer logic
    for l <= r {

        //power is insufficient
        if power < tokens[l] {

            // score cannot go neagtive
            if l == 0 {
                return 0
            }

            //add power
            power = power + tokens[r]

            //donot reduce the score at last iteration, you know why :)
            if l != r {
                score--
            }
            r=r-1

        } else {

            // when power is sufficient -> reduce the power
            power = power - tokens[l]
            score++
            l=l+1

        }
    }
    return score
}
```