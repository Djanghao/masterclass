# Pure RE Solution

**Author:** shimrra
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/5875120/](https://leetcode.com/problems/validate-ip-address/solutions/5875120/)

---

# Intuition
Simply evaluate against a RE and check to see if there is a match.

# Approach
We have two separate REs, one for IPv4 and one for IPv6. We return a string if we match one. We use a short-circuit/nil-slide to return the correct string. There are no loops or other forms of control flow other than boolean conditions. The REs handle all of the matching logic and return nil if there is no match.

# Code
```ruby []
# @param {String} query_ip
# @return {String}
def valid_ip_address(query_ip)
    val4(query_ip) || val6(query_ip) || "Neither"
end

def val4(ip)
    "IPv4" unless (ip =~ /\\A((1[0-9]{2}|25[0-5]|2[0-4][0-9]|[1-9][0-9]|[0-9])\\.){3}(1[0-9]{2}|25[0-5]|2[0-4][0-9]|[1-9][0-9]|[0-9])\\Z/).nil?
end

def val6(ip)
    "IPv6" unless (ip.upcase =~ /\\A([0-9A-F]{1,4}:){7}([0-9A-F]{1,4})\\Z/).nil?
end
```