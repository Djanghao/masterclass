# Kotlin with state machine

**Author:** fponias
**Votes:** 3
**Link:** [https://leetcode.com/problems/valid-number/solutions/2697405/](https://leetcode.com/problems/valid-number/solutions/2697405/)

---

First I thought regular expressions might work but the resulting RE would be impossible to read even if it did only take 4 lines of code.  State machines are one of my favorite CS design approaches.


```
class Solution {
    enum class State {
        START,
        SIGN,
        NUMBER,
        SOLO_DECIMAL,
        NUMBER_DECIMAL,
        NUMBER_FRACTION,
        EXPONENT,
        EXPONENT_SIGN,
        EXPONENT_NUMBER
    }

    var state = State.START

    fun isDigit(ch: Char): Boolean {
        return ch - '0' in 0..9
    }

    fun isNumber(s: String): Boolean {
        val chars = s.toCharArray()
        for (ch in chars) {
            when(state) {
                State.START -> {
                    state = if (ch == '-' || ch == '+') State.SIGN
                        else if (ch == '.') State.SOLO_DECIMAL
                        else if (isDigit(ch)) State.NUMBER
                        else return false
                }
                State.SIGN -> {
                    state = if (ch == '.') State.SOLO_DECIMAL
                        else if (isDigit(ch)) State.NUMBER
                        else return false
                }
                State.NUMBER -> {
                    state = if (isDigit(ch)) State.NUMBER
                        else if (ch == '.') State.NUMBER_DECIMAL
                        else if (ch == 'e' || ch == 'E') State.EXPONENT
                        else return false
                }
                State.SOLO_DECIMAL -> {
                    state = if (isDigit(ch)) State.NUMBER_FRACTION
                        else return false
                }
                State.NUMBER_DECIMAL -> {
                    state = if (isDigit(ch)) State.NUMBER_FRACTION
                        else if (ch == 'e' || ch == 'E') State.EXPONENT
                        else return false
                }
                State.NUMBER_FRACTION -> {
                    state = if (isDigit(ch)) State.NUMBER_FRACTION
                        else if (ch == 'e' || ch == 'E') State.EXPONENT
                        else return false
                }
                State.EXPONENT -> {
                    state = if (ch == '-' || ch == '+') State.EXPONENT_SIGN
                        else if (isDigit(ch)) State.EXPONENT_NUMBER
                        else return false
                }
                State.EXPONENT_SIGN -> {
                    state = if (isDigit(ch)) State.EXPONENT_NUMBER
                        else return false
                }
                State.EXPONENT_NUMBER -> {
                    state = if (isDigit(ch)) State.EXPONENT_NUMBER
                        else return false
                }
            }
        }

        return state == State.NUMBER ||
                state == State.NUMBER_FRACTION ||
                state == State.EXPONENT_NUMBER ||
                state == State.NUMBER_DECIMAL
    }
}
```