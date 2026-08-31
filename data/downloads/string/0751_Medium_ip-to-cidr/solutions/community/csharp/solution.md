# C# solution

**Author:** laihm6
**Votes:** 1
**Link:** [https://leetcode.com/problems/ip-to-cidr/solutions/3550064/](https://leetcode.com/problems/ip-to-cidr/solutions/3550064/)

---

# Intuition


# Approach

# Complexity
- Time complexity:
O(log(n))
- Space complexity:
O(1)

# Code
```
public class Solution {
    public IList<string> IpToCIDR(string ip, int n) {
        IList<string> cidrs = new List<string> ();
        long ip_long = IpToLong(ip);
        long ip_start = ip_long;
        while (ip_start <= ip_long + n-1){
            int digits = 0;

            while ((ip_start % (1<<(digits+1)) == 0)
            && (ip_start + (1<< (digits+1)) <= ip_long + n)){
                digits ++;
            }

            cidrs.Add(LongToIp(ip_start) + "/" + (32-digits).ToString());
            ip_start =  ip_start + (1 << digits);
        }
        return cidrs;
    }

    public string LongToIp(long ip){
        string cidr= "";
        for(int i=0; i<4; i++){
            cidr = i==0? (ip%256).ToString() + cidr: (ip%256).ToString() + "." + cidr;
            ip /= 256;
        }
        return cidr;
    }

    public long IpToLong(string ip){
        long ip_long = 0;
        string[] ip_splitted = ip.Split('.');
        for(int i=0; i<4; i++){
            ip_long = ip_long * 256 + Int32.Parse(ip_splitted[i]);
        }

        return ip_long;
    }
}
```