# Simple solution beats 100% with detailed explanation

**Author:** tao96
**Votes:** 11
**Link:** [https://leetcode.com/problems/ip-to-cidr/solutions/3869475/](https://leetcode.com/problems/ip-to-cidr/solutions/3869475/)

---

# Intuition
ip address is essentially a 32-digit binary integer. So this question is to ask, for a sub-interval within [2, 2^32-1], how to divide this sub-interval to intervals with 2^k length efficiently.

# Approach
If $[i, i + 2^k-1]$ is a member of final answer, then because of the property of CIDR expression, i statisfies
1) i has $\\geq k$ trailing zeros, otherwise there will be numbers differs with i in higher digit positions
2) include $2^k$ more ips would not pass total $n$

So the algorithm is clear, whenever there is a start point $i$, counting the number of trailing zeros $m$. Starting from $m$, find the largest $k$ that $2^k$ do not pass remaining quota $n$.
n -> n - 2^k
i -> i + 2^k
starting from initial ip input


# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(1)

# Code
```
class Solution:
    def ipToCIDR(self, ip: str, n: int) -> List[str]:
        def ip_to_bin(ip):
            return "".join(["{:08b}".format(i) for i in map(int, ip.split("."))])
        def bin_to_ip(b):
            return ".".join([str(int(b[i:i+8],2)) for i in range(0, 32, 8)])


        ans = []
        cur_ip = ip_to_bin(ip)
        while n > 0:
            last_one = 31
            while last_one> -1 and cur_ip[last_one] != '1':
                last_one -= 1
            trailing_zero = 31 - last_one
            while n - (2 ** trailing_zero) < 0:
                trailing_zero -= 1
            ans.append(f"{bin_to_ip(cur_ip)}/{32 - trailing_zero}")
            n -= 2 ** trailing_zero
            cur_ip = "{:032b}".format(int(cur_ip, 2) + 2 ** trailing_zero)
        return ans
```