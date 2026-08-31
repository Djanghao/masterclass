# Golang | Beats 100% | Simple solution with comments

**Author:** dimaglushkov
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5225070/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5225070/)

---

![image.png](./images/0.png)

# Code
```
func numSteps(s string) int {
	ans := 0
	buf := []byte(s)

    // iterate over binary number until it's equal to "1"
	for len(buf) != 1 && buf[0] != 1 {
		ans++
		n := len(buf)

        // if number is even, divide it by 2 by 
        // shifting all bits to the right by one position
		if buf[n-1] == '0' {
			buf = buf[:n-1]

        // if number is odd, add 1
		} else {
			overflow := true
			
			for i := n - 1; i >= 0; i-- {
				if buf[i] == '1' {
					buf[i] = '0'
				} else {
					buf[i] = '1'
					overflow = false
					break
				}
			}
            
        // properly handle cases when the digits are '1's
			if overflow {
				buf = append([]byte{'1'}, buf...)
			}
		}
	}

	return ans
}
```