# Easy Video Solution 🔥|| divisibility Rule of 25 🔥|| Check last 2 digits🔥

**Author:** ayushnemmaniwar12
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3994894/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3994894/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Start from Divisibility Rule of 25 

# ***Detailed and easy Video Solution***

https://youtu.be/J7MQHH1G92U

# Approach

***To Summarize***

The code determines the fewest operations required to transform a given string into one of four target strings ("00", "25", "50", or "75"). This code is available in both Java and Python versions.

The solve function identifies the operations needed to match characters between the input string and the target string. The minimumOperations function iterates through the input string, calculates the minimum operations for all target strings, and returns the smallest count. If the input string contains a '0', it decreases the count accordingly. This code offers a systematic solution for solving a specific transformation problem, enhancing readability and clarity.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    4*O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

```C++ []
class Solution {
public:
    int solve(string s,string k)
    {   
        int n=s.size();
        int i=n-1,j=1;
        vector<int>v;
        while(i>=0)
        {
            if(s[i]==k[j])
            {
                v.push_back(i);
                j--;
            }
            if(j==-1)
                break;
            i--;
        }
        if(v.size()<2)
            return 1e5;
        int a=v[0],b=v[1];
        return (n-1)-a+a-b-1;
    }
    int minimumOperations(string s) {
        int n=s.size();
        int a=n;
        for(auto i:s)
        {
            if(i=='0')
            {
                a=a-1;
                break;
            }
        }
        a=min(a,solve(s,"00"));
        a=min(a,solve(s,"25"));
        a=min(a,solve(s,"50"));
        a=min(a,solve(s,"75"));
        return a;
    }
};
```
```JAVA []
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public int solve(String s, String k) {
        int n = s.length();
        int i = n - 1, j = 1;
        List<Integer> v = new ArrayList<>();
        
        while (i >= 0) {
            if (s.charAt(i) == k.charAt(j)) {
                v.add(i);
                j--;
            }
            if (j == -1) {
                break;
            }
            i--;
        }
        
        if (v.size() < 2) {
            return 1e5;
        }
        
        int a = v.get(0);
        int b = v.get(1);
        return (n - 1) - a + a - b - 1;
    }
    
    public int minimumOperations(String s) {
        int n = s.length();
        int a = n;
        
        for (char c : s.toCharArray()) {
            if (c == '0') {
                a--;
                break;
            }
        }
        
        a = Math.min(a, solve(s, "00"));
        a = Math.min(a, solve(s, "25"));
        a = Math.min(a, solve(s, "50"));
        a = Math.min(a, solve(s, "75"));
        
        return a;
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        String s = "example"; // Replace with your input string
        int result = solution.minimumOperations(s);
        System.out.println(result);
    }
}

```
```Python []
class Solution:
    def solve(self, s, k):
        n = len(s)
        i = n - 1
        j = 1
        v = []
        
        while i >= 0:
            if s[i] == k[j]:
                v.append(i)
                j -= 1
            if j == -1:
                break
            i -= 1
        
        if len(v) < 2:
            return 1e5
        
        a = v[0]
        b = v[1]
        return (n - 1) - a + a - b - 1
    
    def minimumOperations(self, s):
        n = len(s)
        a = n
        
        for char in s:
            if char == '0':
                a -= 1
                break
        
        a = min(a, self.solve(s, "00"))
        a = min(a, self.solve(s, "25"))
        a = min(a, self.solve(s, "50"))
        a = min(a, self.solve(s, "75"))
        
        return a

# Usage example
solution = Solution()
s = "example"  # Replace with your input string
result = solution.minimumOperations(s)
print(result)
```

# ***If you like the solution Please Upvote***
***It Motivates me to record more videos
Thank you***
