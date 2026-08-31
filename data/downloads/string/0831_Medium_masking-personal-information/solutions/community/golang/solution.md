# Golang. Looks like it's pretty fast.

**Author:** District_12
**Votes:** 0
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/4121323/](https://leetcode.com/problems/masking-personal-information/solutions/4121323/)

---

```
import (
  "unicode"
  "fmt"
  "strings"
)

func maskPII(s string) string {
  if unicode.IsLetter(rune(s[0])) {
    // it's an email
    s = strings.ToLower(s)
    idx := strings.Index(s, "@")
    s = s[:1] + "*****" + s[idx-1:]
  } else {
    // it's a phone number
    lastFourDigits := make([]byte, 0, 4)

    for i:=len(s)-1; i>0; i-- {
      if len(lastFourDigits) == 4 {
        break
      }
      if unicode.IsDigit(rune(s[i])) {
        lastFourDigits = append(lastFourDigits, s[i])
      }
    }

    for i, j := 0, len(lastFourDigits)-1; i < j; i, j = i+1, j-1 {
      lastFourDigits[i], lastFourDigits[j] = lastFourDigits[j], lastFourDigits[i]
    }

    lfd := string(lastFourDigits)

    countryCodeLen := 0
    localNumberIndex := 0
    lnCounter := 0

    for i:=len(s)-1; i>=0; i-- {
      if unicode.IsDigit(rune(s[i])) {
        lnCounter++
      }
      if lnCounter == 10 {
        localNumberIndex = i
        break
      }
    }

    for i:=0; i<localNumberIndex; i++ {
      if unicode.IsDigit(rune(s[i])) {
        countryCodeLen++
      }
    }

    if countryCodeLen == 0 {
      s = "***-***-" + lfd 
    } else if countryCodeLen == 1 {
      s = "+*-***-***-" + lfd 
    } else if countryCodeLen == 2 {
      s = "+**-***-***-" + lfd 
    } else if countryCodeLen == 3 {
      s = "+***-***-***-" + lfd 
    }
  }
  return s
}
```