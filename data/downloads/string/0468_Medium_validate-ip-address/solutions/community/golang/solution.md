# Easy Solution Go

**Author:** seneralkan
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/5611377/](https://leetcode.com/problems/validate-ip-address/solutions/5611377/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func validIPAddress(queryIP string) string {
  if isIPv4(queryIP) {
		return "IPv4"
	}
	if isIPv6(queryIP) {
		return "IPv6"
	}
	return "Neither"
    
}

func isIPv4(ip string) bool {
	parts := strings.Split(ip, ".")
	if len(parts) != 4 {
		return false
	}
	for _, part := range parts {
		if num, err := strconv.Atoi(part); err != nil || strconv.Itoa(num) != part || num < 0 || num > 255 {
			return false
		}
	}
	return true
}

func isIPv6(ip string) bool {
	parts := strings.Split(ip, ":")
	if len(parts) != 8 {
		return false
	}
	for _, part := range parts {
		if len(part) < 1 || len(part) > 4 {
			return false
		}
		for _, ch := range part {
			if !unicode.IsDigit(ch) && (ch < 'a' || ch > 'f') && (ch < 'A' || ch > 'F') {
				return false
			}
		}
	}
	return true
}
```