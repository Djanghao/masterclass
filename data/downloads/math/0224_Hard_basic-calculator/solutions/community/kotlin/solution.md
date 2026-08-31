# O(n) with detailed explanation; novel approach with single stack (pseudocode + Kotlin)

**Author:** Aivean
**Votes:** 4
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/571448/](https://leetcode.com/problems/basic-calculator/solutions/571448/)

---

For this problem, there is no need to implement a generic expression evaluation algorithm, as all operators that exist in the expression have same priority (namely, `+` and `-`).

**If there were no paretheses**, the approach would be as simple as this (pseudocode):

```
acc = 0   // accumulator
prevSign = +1

for (token in s) {  // suppose we tokenized s into signs and numbers
    if (token in ['+', '-'])  prevSign = (token == '+' ? +1 : -1)
    else acc += prevSign * toInt(token)
}

return acc
```

Let's think, what exactly do paretheses change in the approach above?  

If there were no minus signs (`-`) directly before opening parenthesis, nothing changes, e.g:

```(1 + (2 - 3 + (4) - 5))```
is the same as:
```1 + 2 - 3 + 4 - 5 ```

however, 
```1 - (2 + 3 - (4 + 5)) ```
is **not** the same as:
```1 - 2 + 3 - 4 + 5 ```
**but!**  it's the same as:
```1 - 2 - 3 + 4 + 5 ```

Do you see what happened there?  When there is a minus sign directly before the opening parenthesis, all the signs within that parentheses pair are inverted!  And if there is another nested "negative opening parentheses" it inverts signs again! Even number of inversions amount to no change of sign ( `-1 * -1 * -1 * -1 = 1`), while odd number results in single inversion (`-1 * -1 * -1 = -1`).

So the logical modification for the algorithm above is to know how many levels of nested "negative opening paretheses" are we currently in. To do that, simple `sign = 1` variable would suffice, which is inverted when "negative opening parethesis" is encoutered or when closing parethesis is encountered, that corresponds to "negative opening parethesis". 

Now, "negative opening parethesis" is easy, but how to know whether closing parethesis corresponds to "negative" or "positive" opening parethesis? To do that we need a stack that holds signs of opening paretheses. When encountering opening parenthesis, put it's sign into stack. When encoutering closing parethesis, pop sign from stack \u2014 that would be the sign of corresponding opening parethesis.

Let's put all of this together:

```
acc = 0   // accumulator
prevSign = +1  // previously encountered sign/operator
signStack = []  // signs of opening parentheses
parenSigns = +1  // overall sign of current group of parentheses

for (token in s) {  // suppose we tokenized s into signs, numbers and parentheses
    if (token in ['+', '-'])  prevSign = (token == '+' ? +1 : -1)
	else if (token == '(')  {
	  signStack.push(prevSign)
	  if (prevSign < 0) parenSigns *= -1  // invert sign of nested paretheses
	  prevSign = +1 // after the opening parethesis, we assume sign is always positive (as in the start of new expression)
	} else if (token == ')') {
	  if (signStack.pop() < 0) parenSigns *= -1 // revert sign back
	} else acc += prevSign * parenSigns * toInt(token)
}

return acc
```



And now in Kotlin:
```
class Solution {
    
    fun calculate(s: String): Int {
        var acc = 0        
        var i = 0
        
        val signStack = LinkedList<Int>()  
        var parenSigns = 1
        var prevSign = 1
        
        while (i < s.length) {
            val c = s[i]
            when(c) {
                ' ' -> {}
                '(' -> { 
                    signStack.push(prevSign)
                    if (prevSign < 0) parenSigns *= -1
                    prevSign = 1
                }
                ')' -> if (signStack.pop() < 0) parenSigns *= -1
                '+' ->  prevSign = 1
                '-' -> prevSign = -1
                else -> { // parse whole number
                    var n = 0
                    while(i < s.length && '0' <= s[i] && s[i] <= '9') {
                        n = n * 10 + (s[i] - '0')
                        i++
                    }
                    i--
                    acc += n * parenSigns * prevSign
                }
            }
            i++
        }
     
        return acc
    }
}
```