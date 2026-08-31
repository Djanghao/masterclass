# C++| Segment tree

**Author:** kumarabhi98
**Votes:** 57
**Link:** [https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/1867713/](https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/1867713/)

---

#### Prerequisite: Construction of segment tree
Contruction and updating characters in segment tree is easy ( standard problem ), but keeping the record of longest substring with one repeating is hard. To do this, we will need 5 parameter.
let a segement be from index `l` to `h`, then the five parameters are:
1. longest substring in segment `l` to `h`
1. leftmost character of segment `l` to `h`
1. rightmost character of segment `l` to `h`
1. index of rightend of contiguous characters of segment `l` to `h` from left side  
1. index of leftend of contiguous characters of segment `l` to `h` from right side

### For example,
for a string `s` = "**abssefgth**", we have segement from` l = 2` to` h = 8` ( **ssefgth** ). Then the five parameter are:
1. longest substring in segment is **2**
1. leftmost character of segment is **s**
1. rightmost character of segment is **h**
1. index of rightend of contiguous characters of segment is **3** ( "ss" => 2 to 3)
1. index of rightend of contiguous characters of segment is **8** ( "h" => 8 to 8)

To store these values, following arrays are defined:
* `nums` to store the longest substring in segment
* `lc` to store leftmost character of segment 
* `rc` to store rightmost character of segment `l` to `h` 
* `left` to store index of rightend of contiguous characters of segment `l` to `h` from **left** side.
* `right` to store index of contiguous characters of segment `l` to `h` from **right** side

**Idea to find longest substring in segment**:
Assuming we have done calculation for both *left* and *right* child of a segment, calculation for *parent* is as follows:
for example, *parent*  = "**smmh**", then the *leftchild* = "**sm**", *rightchild* = "**mh**",
the index of segment from `l` to `h` is `in` and left child segment is from `l` to `m` and right child segment is from `m+1` to `h` , where ` m = (l+h)/2`
* leftmost character of segment is the leftmost character of left child.
* rightmost character of segment is the rightmost character of right child.
* Atfirst, ``left[in] = left[left_child]`` and ``right[in] = right[left_child]``, where *leftchild* and *rightchild* are the index of segment of left and right child
* Now suppose, if rightmost char of left child == leftmost char of right child and also left[left_child] == m (end of segment of left child), then new left[in] = left[right_child]. similarly, if right[right_child] == m+1 (start of the segement of right child), the new value right[in] = right[left_child]
* Now, longest substring can be, from `l` to `left[in]`, or from `right[in]` to `h`, or from `right[left_child]` to `left[right_child]` if rightmost char of left child == leftmost char of right child. Or it can be max of longest substring of *leftchild* and *rightchild*.

Rest of the operations are given in the code below:
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
**Time: O(nlogn)**
***Upvote*** if it helps