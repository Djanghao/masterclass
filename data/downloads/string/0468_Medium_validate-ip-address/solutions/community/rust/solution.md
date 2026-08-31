# 🤩 Easiest Rust Solution 🤩 Beats 100% 📈

**Author:** ArcherScript
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/4679348/](https://leetcode.com/problems/validate-ip-address/solutions/4679348/)

---

# Intuition
Use standard library tooling to parse ip addresses.

# Approach
Import IpAddr std lib, and use the built in library to determine appropriate ip addresses. There's a bug in one of the test cases for "::", but we can just add a simple if statement to take care of that. Plz fix leetcode

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
use std::net::IpAddr;

impl Solution {
    pub fn valid_ip_address(query_ip: String) -> String {
        match query_ip.parse::<IpAddr>() {
            _ if query_ip.contains("::") =>  "Neither".to_string(),
            Ok(IpAddr::V4(_)) => "IPv4".to_string(),
            Ok(IpAddr::V6(_))  => "IPv6".to_string(),
            _ => "Neither".to_string(),
        }
    }
}
```