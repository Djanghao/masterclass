# [Golang] Simple Solution

**Author:** vasakris
**Votes:** 4
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/3082015/](https://leetcode.com/problems/restore-ip-addresses/solutions/3082015/)

---

# Intuition
Divide given string into valid 4 substring and check if each substring is valid

# Approach
1. Divide given string into valid 4 substrings
2. Check value of each substring is valid (0-255)
3. Join substring and check if there was not leading zeros. After joining lengths should match

# Complexity
- Time complexity:
We run 3 for loops for 3 values (1,2,3)
O(3*3) -> O(1). We are not dependent on length of input string

- Space complexity:
O(1)

# Code
```
func restoreIpAddresses(s string) []string { 
    res := []string{}

    for a := 1; a <= 3; a++ {
        for b := 1; b <= 3; b++ {
            for c := 1; c <= 3; c++ {

                d := len(s) - (a + b + c)
                if d > 0 && d <= 3 && a+b+c+d == len(s) {
                    A, _ := strconv.Atoi(s[:a])
                    B, _ := strconv.Atoi(s[a:a+b])
                    C, _ := strconv.Atoi(s[a+b:a+b+c])
                    D, _ := strconv.Atoi(s[a+b+c:])

                    if A <= 255 && B <= 255 && C <= 255 && D <= 255 {
                        addr := fmt.Sprintf("%d.%d.%d.%d", A, B, C, D)
                        
                        // To check if there was any leading zeros, 
                        // If leading zeros was there, then len will be reduced
                        // +3, for 3 '.'
                        if len(addr) == len(s) + 3 {
                            res = append(res, addr)
                        }
                    } 
                }
            }
        }
    }

    return res
}
```