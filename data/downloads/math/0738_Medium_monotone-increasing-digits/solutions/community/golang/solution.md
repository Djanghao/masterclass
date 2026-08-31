# Go Solution | Math Based | O(log n) time complexity | O(1) space complexity

**Author:** yanwan
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/5686308/](https://leetcode.com/problems/monotone-increasing-digits/solutions/5686308/)

---

# Approach
64999 -> 59999
65352 -> 65299
Idea:
Record the digits of n: prevDigit
Start with ten digits and go to the highest digit of n
If curDigit > prevDigit
    To increase digits monotonically, change prevDigit to 9, curDigit-=1; Update current numbers
Update prevDigit to curDigit
The result after traversal processing is the result to be returned

# Complexity
- Time complexity:
O(log n), the base of log is 10

- Space complexity:
O(1)

# Code
```
func monotoneIncreasingDigits(n int) int {
    result := n % 10
    prevDigit := result
    counts := 1

    for n >= 10{
        n = n / 10
        counts *= 10

        curDigit := n % 10
        if curDigit > prevDigit{
            //  32 ->  29   --- 2*10 + 10-1
            //  329 -> 299  --- 2*100 + 100-1
            curDigit--
            result = curDigit * counts + counts - 1

        } else{
            result = counts * curDigit + result
        }

        prevDigit = curDigit
    }
    return result
}
```