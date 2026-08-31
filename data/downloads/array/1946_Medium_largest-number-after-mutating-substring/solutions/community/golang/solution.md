# Golang Soluton ||| A lot of Explanations ||| Clean Code ||| Easy to understand

**Author:** https_whxyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/5071158/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/5071158/)

---

# Intuition
Finding the first suitable digit to exchange and changing subsequent digits as long as it is profitable to do so

# Approach
# Start Index Replaced Substring
First, **let's define when it is advantageous for us to substitute a substring.**
# **It is advantageous when all the first digits in the substituted substring are greater than the original first digit in the original string.**
**Example:**
Suppose we have some clipping under consideration:
* $$====421542====$$
* and its substituted substring: 
* $$====561713====$$

**We benefit from replacing substring 4214 with substring 5091, since 5 > 4.** The rest of the digits are no longer important, since we have replaced the largest decimal with a larger digit.

**This thing works correctly for the whole number as well.**

Accordingly, 
# We need to find the first digit (from the beginning of the string), the replaced version of which is larger than the original one, and replace the substring that starts with this digit. 
**But, this is still not the maximum string.** 

Let's decide exactly how long (up to what point) we should change the substring.

# End Index Replaced Substring
It is quite obvious that **we benefit from changing the digits in the substring as long as their replaced version is >= than the original one.** 

Let's go back to our example, and define the end of the substituted substring.
* Origin:
* $$====421542====$$
* \u0421hanged: 
* $$====561713====$$

5 > 4, **that's the number we'll start replacing the digits with.**

0) (ChangedDidit) *** (OriginDidit) 
1) 5 > 4, **start replating.**
2) 6 > 4, keep replacing
3) 1 > 1, ok, maybe next it will be profitable to replace it too. **keep replacing**
4) 7 > 5, keep replacing
5) 4 < 1, **stop replating.**

Thus, **we have determined that we benefit from replacing the string** 
* ====4215======
with the string
* ====5617======
**The remaining characters (digits) (=) will match the original substring**

# Summarize
1) Find the first digit from the beginning of the line whose replaced digit > original digit.
* Replacing it.
* From now on, we'll start substituting numbers. 
2) Replace the numbers with their modified versions. 
* If the replaced digit >= the original digit, continue.
* If the replaced digit < original digit, then we stop replacing digits, **including without changing the current digit.**
3) After the procedure of successive digit substitution, we have the answer. Return the answer.

# If my solution was helpful, don't forget to upvote \uD83D\uDDA4
![Upvote Please.jpeg](./images/0.jpeg)


# Complexity
- Time complexity:
$$O(N)$$
*(One each for)*

- Space complexity:
$$O(N)$$
*(Create bytes version of num)*

# Code
```
func maximumNumber(num string, change []int) string {
    // Init need variables
    bytesNum := []byte(num)
    n := len(num)
    isNowChanged := false

    // Start moving from start num
    for i := 0; i <= n - 1; i++ {
        if !isNowChanged {
            // Not in changedStage, benefit check
            intDigit := int(bytesNum[i] - '0')
            changedDigit := change[intDigit]

            // If it
            if changedDigit > intDigit {
                // Replace stage and digit
                isNowChanged = true
                bytesNum[i] = byte('0' + changedDigit)
            }
        } else {
            // In changedStage, benefit check
            intDigit := int(bytesNum[i] - '0')
            changedDigit := change[intDigit]

            // If it's not keep up the good work
            if intDigit > changedDigit {
                // Break it
                break
            }

            // Not? Continue
            bytesNum[i] = byte('0' + changedDigit)
        }
    }

    // Return string type representing ans
    return string(bytesNum)
}
```

# If my solution was helpful, don't forget to upvote \uD83D\uDDA4
