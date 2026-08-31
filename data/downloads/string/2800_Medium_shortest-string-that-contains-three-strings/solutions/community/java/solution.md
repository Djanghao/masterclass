# Detailed Video Explanation 😃 || Constructive Algorithm🔥 || Permutations

**Author:** ayushnemmaniwar12
**Votes:** 10
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836887/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836887/)

---

# ***I have given detailed explanation of the problem in the video***

### ***If You like the video please upvote. It will motivate me to make more videos***

https://youtu.be/2FjxZLlFvQg

***I have made a video on "How to be consistent in leetcode". I can guarantee that this video will help you ***

https://youtu.be/H-IfFL0DBOs
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to try permuatations and try to build the string/


# Approach
<!-- Describe your approach to solving the problem. -->
My approach was to merge the diffrent combinations of strings till I get the final result


# Code
 
```C++ []
class Solution {
public:
    string solve(string a,string b)
    {   
        int x=a.find(b);
        if(x!=-1)
            return a;
        string ans=a;
        for(int i=0;i<a.size();i++)
        {
            int j=0;
            int k=i;
            int c=0;
            while(k<a.size() && j<b.size())
            {
                if(a[k]==b[j])
                    c++;
                else
                    break;
                k++;
                j++;
            }
            if(k==a.size())
            {
                for(int i=c;i<b.size();i++)
                    ans.push_back(b[i]);
                return ans;
            }
        }
        for(int i=0;i<b.size();i++)
            ans.push_back(b[i]);
        return ans;
    }
    string minimumString(string a, string b, string c) {
        vector<string>v;
        v.push_back(a);
        v.push_back(b);
        v.push_back(c);
        sort(v.begin(),v.end());
        a=v[0],b=v[1],c=v[2];
        string m=a+b+c+a;
        for(int i=0;i<3;i++)
        {
            for(int j=0;j<3;j++)
            {
                for(int k=0;k<3;k++)
                {
                    if(i!=j && j!=k && i!=k)
                    {
                        string x=solve(v[i],v[j]);
                        string ans=solve(x,v[k]);
                        if(ans.size()<=m.size())
                        {
                            if(ans.size()==m.size())
                                m=min(m,ans);
                            else
                                m=ans;
                        }
                    }
                }
            }
        }
        return m;
    }
};
```
```python []
def solve(a, b):
    x = a.find(b)
    if x != -1:
        return a
    ans = a
    for i in range(len(a)):
        j = 0
        k = i
        c = 0
        while k < len(a) and j < len(b):
            if a[k] == b[j]:
                c += 1
            else:
                break
            k += 1
            j += 1
        if k == len(a):
            for m in range(c, len(b)):
                ans += b[m]
            return ans
    for i in range(len(b)):
        ans += b[i]
    return ans

def minimumString(a, b, c):
    v = [a, b, c]
    v.sort()
    a, b, c = v[0], v[1], v[2]
    m = a + b + c + a
    for i in range(3):
        for j in range(3):
            for k in range(3):
                if i != j and j != k and i != k:
                    x = solve(v[i], v[j])
                    ans = solve(x, v[k])
                    if len(ans) <= len(m):
                        if len(ans) == len(m):
                            m = min(m, ans)
                        else:
                            m = ans
    return m

```
```JAVA []
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Solution {
    public String solve(String a, String b) {
        int x = a.indexOf(b);
        if (x != -1)
            return a;
        String ans = a;
        for (int i = 0; i < a.length(); i++) {
            int j = 0;
            int k = i;
            int c = 0;
            while (k < a.length() && j < b.length()) {
                if (a.charAt(k) == b.charAt(j))
                    c++;
                else
                    break;
                k++;
                j++;
            }
            if (k == a.length()) {
                for (int m = c; m < b.length(); m++)
                    ans += b.charAt(m);
                return ans;
            }
        }
        for (int i = 0; i < b.length(); i++)
            ans += b.charAt(i);
        return ans;
    }

    public String minimumString(String a, String b, String c) {
        List<String> v = new ArrayList<>();
        v.add(a);
        v.add(b);
        v.add(c);
        Collections.sort(v);
        a = v.get(0);
        b = v.get(1);
        c = v.get(2);
        String m = a + b + c + a;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                for (int k = 0; k < 3; k++) {
                    if (i != j && j != k && i != k) {
                        String x = solve(v.get(i), v.get(j));
                        String ans = solve(x, v.get(k));
                        if (ans.length() <= m.length()) {
                            if (ans.length() == m.length())
                                m = (m.compareTo(ans) < 0) ? m : ans;
                            else
                                m = ans;
                        }
                    }
                }
            }
        }
        return m;
    }
}

```
