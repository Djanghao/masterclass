# Easy Video Solution || Forward + Backward Iterations ✅

**Author:** ayushnemmaniwar12
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4745568/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4745568/)

---

# ***Video Solution***

https://youtu.be/O1LQReJqXzo

# Code
```
class Solution {
public:
    bool isValid(string a,string b) {
        int n=a.size(),m=b.size();
        int i=0,j=0;
        while(i<n && j<m && a[i]==b[j]) {
            i++;
            j++;
        }
       if(i!=n)
           return 0;
        i=n-1,j=m-1;
        while(i>=0 && j>=0 && a[i]==b[j]) {
            i--;
            j--;
        }
        return i==-1; 
    }
    int countPrefixSuffixPairs(vector<string>& v) {
        int n=v.size();
        int c=0;
        for(int i=0;i<n;i++) {
            for(int j=i+1;j<n;j++) {
                if(isValid(v[i],v[j]))
                    c++;
            }
        }
        return c;
    }
};
```