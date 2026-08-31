# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/4162521/](https://leetcode.com/problems/validate-ip-address/solutions/4162521/)

---

```
class Solution {
    func validIPAddress(_ queryIP: String) -> String {

        func isIPv4() -> Bool {

            func isValidCmp(_ str: String) -> Bool {
                guard str == "0" || !str.hasPrefix("0") else { return false }
                guard let n = Int(str) else { return false }
                return 0 <= n && n <= 255
            }

            let cmps = queryIP.components(separatedBy: ".")

            return cmps.count == 4 && cmps.allSatisfy(isValidCmp)
        }

        func isIPv6() -> Bool {

            func isValidCmp(_ str: String) -> Bool {
                guard !str.isEmpty && str.count <= 4 else { return false }
                print(str, Int(str, radix: 16))
                return Int(str, radix: 16) != nil
            }

            let cmps = queryIP.components(separatedBy: ":")

            return cmps.count == 8 && cmps.allSatisfy(isValidCmp)
        }

        if isIPv4() { return "IPv4" }
        else if isIPv6() { return "IPv6" }
        else { return "Neither" }
    }
}
```