# Go solution that beats 100%

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/2462985/](https://leetcode.com/problems/reformat-the-string/solutions/2462985/)

---

```
func reformat(s string) string {
	alphabet, alphabetCount := make([]byte, 26), 0
	digit, digitCount := make([]byte, 10), 0
	str := make([]byte, len(s))

	for i := 0; i < len(s); i++ {
		if s[i] >= 'a' && s[i] <= 'z' {
			alphabet[s[i]-'a']++
			alphabetCount++
		} else {
			digit[s[i]-'0']++
			digitCount++
		}
	}

	if alphabetCount != digitCount && alphabetCount != digitCount+1 && alphabetCount+1 != digitCount {
		return ""
	}
	
    toggle := 1
    
    if alphabetCount > digitCount {
        toggle = 0
    }

    for i := 0; i < len(s); i++ {
        if i%2 == toggle {
            for j := 0; j < 26; j++ {
                if alphabet[j] > 0 {
                    str[i] = 'a' + byte(j)
                    alphabet[j]--
                    break
                }
            }
        } else {
            for j := 0; j < 10; j++ {
                if digit[j] > 0 {
                    str[i] = '0' + byte(j)
                    digit[j]--
                    break
                }
            }
        }
    }

	return string(str)
}

```