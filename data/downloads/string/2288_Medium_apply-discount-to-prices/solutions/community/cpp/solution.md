# [c++] | simple solution | without using double ✅

**Author:** _algoristy
**Votes:** 5
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/2087782/](https://leetcode.com/problems/apply-discount-to-prices/solutions/2087782/)

---

I saw many people frustrated on this problem because of the precession error in c++. so, here's my solution without using double data type. if you like it do upvote it. 
Thanks 
peace \uD83E\uDD1E

```
class Solution {
public:
    int d;
    void check(string&s){
    
        if(s.size() == 1 || s[0] != '$') return;
        long long int num = 0;
        for(int i=1;i<s.size();i++){
            if(s[i] >= '0' && s[i] <= '9'){
                num *= 10;
                num += s[i] - '0';
            }
            else return;
        }
        
        num *= (100 - d);
        s = to_string(num);
		
        if(s.size() == 1) s = "00" + s;
        else if(s.size() == 2) s = "0" + s;
        
		s.push_back('.');
        int n = s.size();
        
		swap(s[n-1], s[n-2]);
        swap(s[n-3], s[n-2]);
        s = "$" + s;
		
    }
    
    string discountPrices(string s, int discount) {
        d = discount;
        vector<string> arr = {""};
        s.push_back(' ');
        for(char c: s){
            if(c == ' '){
                check(arr[arr.size()-1]);
                arr.push_back("");
            }
            else{
                arr[arr.size()-1].push_back(c);
            }
        }
        string ans = "";
        arr.pop_back();
        for(string&s: arr){ 
            ans += s;
            ans.push_back(' ');
        }
        ans.pop_back();
        return ans;
    }
};
```