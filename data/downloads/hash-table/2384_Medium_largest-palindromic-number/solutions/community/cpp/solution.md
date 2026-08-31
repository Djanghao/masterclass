# [CPP , JAVA] | Greedy | O(n) SPACE | O(N) TIME

**Author:** amirkpatna
**Votes:** 56
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/2456626/](https://leetcode.com/problems/largest-palindromic-number/solutions/2456626/)

---

**Intuition :** Just count the frequency of each character and start from `9` to `0` and check if it is occurring more than once or not if so then keep pushing it in your ans variable untill its frequency drops to `1` or less and also keep account of the number occuring exactly once after all operations.

**Time Complexity :** O(n)
**Space Complexity :** O(n)

**CPP**

```
class Solution {
public:
    string largestPalindromic(string s) {
        vector<int> v(10);
        for(char c:s)v[c-'0']++;
        string ans;
        int single=-1;
        for(int i=9;i>=0;i--){
            if(ans.empty() && i==0) continue;
            while(v[i]>1){
                ans.push_back(i+'0');
                v[i]-=2;
            }
            if(v[i]==1 && single==-1)single=i;
        }
        string res=string(ans.rbegin(),ans.rend());
        if(ans.empty() && single==-1) return "0";
        if(single!=-1)
            ans.push_back(single+'0');
        ans+=res;
        return ans;
    }
};
```

**JAVA**

```
class Solution {
    public String largestPalindromic(String s) {
        int[] v=new int[10];
        for(int i=0;i<s.length();i++){
            v[(int)s.charAt(i)-48]++;
        }
        StringBuffer ans = new StringBuffer();
        int single = -1;
        for(int i=9;i>=0;i--){
            if(ans.length()==0 && i==0)continue;
            while(v[i]>1){
                ans.append((char)(i+48));
                v[i]-=2;
            }
            if(v[i]==1 && single == -1)single = i;
        }
        if(ans.length()==0 && single==-1)return "0";
        int i = ans.length()-1;
        if(single!=-1)ans.append((char)(single+48));
        for(;i>=0;i--){
            ans.append(ans.charAt(i));
        }
        return ans.toString();
    }
}
```