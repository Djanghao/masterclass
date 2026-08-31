# Short solution with bit operation (detailed explanation)

**Author:** zzg_zzm
**Votes:** 10
**Link:** [https://leetcode.com/problems/ip-to-cidr/solutions/112938/](https://leetcode.com/problems/ip-to-cidr/solutions/112938/)

---

To get fewest CIDR list, we need to make each CIDR range as large as possible.

Consider IP address `ip="255.0.0.7"` as a 4-digit `256`-based integer `num`, **the largest CIDR range `(1<<i)` starting with `ip` is simply determined by the lowest 1-bit position `i` in `num`**. Then we have
* the CIDR range is `ip/(32-i)`;
* the next IP right after this range is `num+(1<<i)`, and the above process is repeated unless range `n` is exhausted.

**NOTE:** make sure to *NOT* exceed the total range `n` for each CIDR range.

```cpp
    vector<string> ipToCIDR(string ip, int n) {
        vector<string> CIDR;        
        for (long num = ip2num(ip), i; n; n -= (1<<i), num += (1<<i)) {
            for (i=0; !(num & 1<<i) && 1<<i <= n/2; ++i); // find lowest 1-bit in range n           
            CIDR.push_back(num2ip(num) + "/" + to_string(32-i));            
        }
        return CIDR;
    }
    
    long ip2num(string ip) { // convert IP to number
        long num = 0;
        stringstream ss(ip);        
        for (string s; getline(ss,s,'.'); (num*=256) += stoi(s));
        return num;
    }
    
    string num2ip(long num) { // convert number to IP
        string ip = to_string(num%256);
        for (int i = 0; i < 3; ++i)
            ip = to_string((num/=256)%256) + "." + ip;
        return ip;        
    }
```