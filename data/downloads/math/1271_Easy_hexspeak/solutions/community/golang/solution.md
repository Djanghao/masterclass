# Go solution 100% space and time

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/hexspeak/solutions/1765050/](https://leetcode.com/problems/hexspeak/solutions/1765050/)

---

```
func toHexspeak(num string) string {
  hexMap := map[int]rune{10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'}
  var hexDigits []rune
  num2, _ := strconv.Atoi(num) // expected to be a valid number
  // convert the number to an upper case hexadecimal number 
  for n := num2; n != 0; n /= 16 {
    reminder := n%16
    if hex, ok := hexMap[reminder]; ok {
      hexDigits = append(hexDigits, hex)
    } else {
      hexDigits = append(hexDigits, rune(reminder+'0'))
    }
  }
  var res string
  // the hex digits are in the reverse order
  for i := len(hexDigits)-1; i >= 0; i-- {
    switch hexDigits[i] {
      case 'A', 'B', 'C', 'D', 'E', 'F':
      res += string(hexDigits[i])
      case '1':
      res += "I"
      case '0':
      res += "O"
      default:
      return "ERROR"
    }
  }
  return res
}
```