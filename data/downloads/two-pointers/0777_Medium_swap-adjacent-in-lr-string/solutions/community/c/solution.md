# [C++] one pass - time:O(n) space:O(1) (with explanation)

**Author:** julianakuei
**Votes:** 18
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/1704920/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/1704920/)

---

Here I translate 'X' to '.' for understanding more easily.

```
start = "R..LR.R.L"
end   = ".RL..RRL."
```
From the above example, we can find some rules for 'L' and 'R':

**1. "*XL*" to "*LX*": L only go left
2. "*RX*" to "*XR*": R only go right
3. L and R cannot change their order**

For example, if we have "XXXXXXXL" and finally we may get the result "LXXXXXXX".
###### -----------------------------------------------------------------
We only need to check the "L" and "R" position in two string.
Using two pointer `i` and `j` to keep comparing:
1. skip 'X', make sure `start[i]` and `end[j]` is the same 
2. 'R' position in `start` is smaller than `end`
3. 'L' position in `start` is larger than `end`

```
class Solution {
public:
    bool canTransform(string start, string end) {
        
        int i=0, j=0;
        while(i<start.size() && j<end.size()) {
            
            while(start[i]=='X') i++;
            while(end[j]=='X') j++;
            
            if(start[i]!=end[j]) return false;
            if(start[i]=='R' && i>j) return false;
            if(start[i]=='L' && i<j) return false;
            i++; j++;
        }
        while(i<start.size() && start[i]=='X') i++;
        while(j<end.size() && end[j]=='X') j++;
        return i==j;
    }
};
```
