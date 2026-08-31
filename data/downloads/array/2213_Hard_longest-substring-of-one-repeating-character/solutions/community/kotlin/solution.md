# Best Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/3157720/](https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/3157720/)

---


```
class sgtree{
public:
    vector<int> nums,left,right;
    vector<char> lc,rc; int n;
    sgtree(string &s){
        n = s.size();
        nums = vector<int>(4*n+5,0);
        left = vector<int>(4*n+5,-1);
        right = vector<int>(4*n+5,-1);
        lc = vector<char>(4*n+5,'*');
        rc = vector<char>(4*n+5,'*');
        build(0,s,0,n-1);
    }
    void build(int in, string &s,int l,int h){
        if(l>h) return;
        if(l==h){
            lc[in] = rc[in] = s[l];
            left[in] = l,right[in] = l; nums[in] = 1;
            return;
        }
        int m = (l+h)/2;
        build(2*in+1,s,l,m); build(2*in+2,s,m+1,h); 
        merge(in,l,m,h);
    }
    void merge(int in,int l,int m,int h){
        int lt = in*2+1, rt = in*2+2, max_ = 0;
        lc[in] = lc[lt]; rc[in] = rc[rt];
        left[in] = left[lt];
        right[in] = right[rt]; 
        if(rc[lt]==lc[rt]){ 
            if(left[lt]==m) left[in] = left[rt];
        }
        if(lc[rt]==rc[lt]){ 
            if(right[rt]==m+1) right[in] = right[lt]; 
        }
        if(rc[lt]==lc[rt]) max_ = left[rt]-right[lt]+1;
        
        max_ = max(max_,left[in]-l+1);
        max_ = max(max_,h-right[in]+1);
        nums[in] = max(max_,max(nums[lt],nums[rt]));
    }
    int update(int in,int l,int h,int j,char ch){
        if(l>h) return 0;
        if(l==h){
            lc[in] = rc[in] = ch;
            left[in] = l,right[in] = l; nums[in] = 1;
            return 1;
        }
        int m = (l+h)/2;
        if(j>=l && j<=m) update(2*in+1,l,m,j,ch);
        else update(2*in+2,m+1,h,j,ch); 
        merge(in,l,m,h);
        return nums[in];
    }
};
class Solution {
public:
    vector<int> longestRepeating(string s, string q, vector<int>& in) {
        sgtree node(s);
        vector<int> re(q.size(),0);
        for(int i = 0; i<q.size();++i){
            re[i] = node.update(0,0,s.size()-1,in[i],q[i]);
        }
        return re;
    }
};
```