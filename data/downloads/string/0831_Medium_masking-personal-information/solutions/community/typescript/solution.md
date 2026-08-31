# When you think there is a catch in a problem, but it is solved head-on

**Author:** Paracells
**Votes:** 0
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/4686684/](https://leetcode.com/problems/masking-personal-information/solutions/4686684/)

---

```
function maskPII(s: string): string {
  if (s.includes("@")) {
    const lower = s.toLowerCase().split("@")
    return (lower[0][0] + "*****" + lower[0][lower[0].length - 1] + "@" + lower[1])
  }

  let replaced = s.replace(/[()\\-+\\s]/g, "");
  const coded = "***-***-"
  const countryCode = replaced.length - 10
  return (countryCode > 0 ? "+" + "*".repeat(countryCode) + "-" : "") + coded + replaced.slice(-4)
}
```