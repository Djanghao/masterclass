# C++ two fold binary search.

**Author:** erika1121
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/1015830/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/1015830/)

---

It's not hard to think about compare left part with right part recursively until you get the ```l == r```, but the when compare left and right, you need to be careful that make sure two parts have same number of elements for fair comparison. 
```
class Solution {
public:
    int getIndex(ArrayReader &reader) {
        int len = reader.length();
        return aux(0, len-1, reader);
    }
    
    int aux(int l, int r, ArrayReader &reader){
        
        if (l == r){
            return l;
        }
        
        auto mid = (l+r)/2;
        if (mid - l == r - (mid+1)){    // even
            auto compare = reader.compareSub(l, mid, mid+1, r);
            //cout<<compare<<": "<<l<<", "<<r<<"\
";
            if (compare ==1){
                return aux(l, mid, reader);
            }
            else {
                return aux(mid+1, r, reader);
            }
        }
        else{   // odd
            auto compare = reader.compareSub(l, mid-1, mid+1, r);
            //cout<<compare<<": "<<l<<", "<<r<<"\
";
            if (compare ==1){
                return aux(l, mid-1, reader);
            }
            else if (compare==-1){
                return aux(mid+1, r, reader);
            }
            else{
                return mid;
            }
        }
    }
};
```