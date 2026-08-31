# 🚀Beats 100%(0ms) ||🚀Easy Solution🚀||🔥Fully Explained🔥|| C++ || Python3 || Java

**Author:** Naman_Ag
**Votes:** 103
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/3079269/](https://leetcode.com/problems/restore-ip-addresses/solutions/3079269/)

---

# Consider\uD83D\uDC4D
```
                    Please Upvote If You Find It Helpful.

```
# Intuition
1. There needs to be 4 parts per IP. There are always three dots/four candidates (2.5.5.2.5.5.1.1.1.3.5 is not valid, neither is 1.1.1)
2. When selecting a candidate, it can't have more than 3 characters (2552.55.111.35 is not valid)
3. When selecting a candidate, its characters cant be above 255 (25.525.511.135 is not valid because of 525 and 511)
4. When selecting a candidate, IF the candidate has 2 or more characters, then the first can't be a zero. (1.0.1.023 is not valid as member 023 is size>1 and leads with 0. But 0.0.0.0 is valid as each candidate is size 1)
# Approach : Backtracking
<!-- Describe your approach to solving the problem. -->

# Code
```C++ []
class Solution {
public:
    // Helper function to check if a given string is a valid IP address segment
    bool valid(string temp){
        if(temp.size()>3 || temp.size()==0) return false; // segment length should be between 1 and 3
        if(temp.size()>1 && temp[0]=='0')   return false; // segment should not start with 0, unless it is a single digit
        if(temp.size() && stoi(temp)>255) return false; // segment should not be greater than 255
        return true;
    }

    // Backtracking function to generate all possible IP addresses
    void solve(vector<string>& ans, string output, int ind, string s, int dots){
        if(dots == 3){ // if we have already added 3 dots, check if the remaining segment is valid
            if(valid(s.substr(ind)))
                ans.push_back(output+s.substr(ind));
            return;
        }
        int sz = s.size();
        for(int i=ind;i<min(ind+3, sz);i++){
            if(valid(s.substr(ind, i-ind+1))){
                output.push_back(s[i]);
                output.push_back('.');
                solve(ans, output, i+1, s, dots+1);
                output.pop_back(); //backtrack
            }
        }

    }

    vector<string> restoreIpAddresses(string s) {
        vector<string> ans;
        string res;
        solve(ans, res, 0, s, 0);
        return ans;
    }
};

```
```python []
class Solution:
    def valid(self, temp: str) -> bool:
        if len(temp) > 3 or len(temp) == 0:
            return False
        if len(temp) > 1 and temp[0] == '0':
            return False
        if len(temp) and int(temp) > 255:
            return False
        return True

    def solve(self, ans, output, ind, s, dots):
        if dots == 3:
            if self.valid(s[ind:]):
                ans.append(output + s[ind:])
            return
        for i in range(ind, min(ind+3, len(s))):
            if self.valid(s[ind:i+1]):
                new_output = output + s[ind:i+1] + '.'
                self.solve(ans, new_output, i+1, s, dots+1)

    def restoreIpAddresses(self, s: str) -> List[str]:
        ans = []
        self.solve(ans, "", 0, s, 0)
        return ans

```
```Java []
 private List<String> ipes;
   private int l;
   public List<String> restoreIpAddresses(String s) {
       ipes = new ArrayList<>();
       l = s.length();
       f(s, 0, "", 0);
       return ipes;
   }
   
   private boolean isIp(String ip){
       if(ip.length() > 3 || ip.length() == 0) return false;
       if(ip.length() > 1 && ip.charAt(0) == '0') return false;
       if(ip.length() > 0 && Integer.parseInt(ip) > 255) return false;
       return true; 
   }

   private void f(String s, int index, String ip, int dot){
       //base case
       if(dot == 3){
           if(isIp(s.substring(index))) {
               ip += s.substring(index);
               ipes.add(ip);
           }
           return;
       }

       //do all the stuff
       for(int i = index; i < l; i++){
           if(isIp(s.substring(index, i +1))){
               int k = s.substring(index, i+1).length();
               ip += s.substring(index, i+1) + ".";
               f(s, i+1, ip, dot+1);
               ip = ip.substring(0, ip.length() - k -1);
           }
       }
   }
}
```
```
                               Give a \uD83D\uDC4D. It motivates me alot.
```
Let's Connect On [Linkedin](https://www.linkedin.com/in/naman-agarwal-0551aa1aa/)

