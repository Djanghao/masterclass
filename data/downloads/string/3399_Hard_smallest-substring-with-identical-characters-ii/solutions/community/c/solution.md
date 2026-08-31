# C++ Explained Solution -> Binary Search With horrible Edge case (alternating substring)

**Author:** asif_star_135
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-substring-with-identical-characters-ii/solutions/6181098/](https://leetcode.com/problems/smallest-substring-with-identical-characters-ii/solutions/6181098/)

---

```
class Solution {
// Function to check if single size substring is possible from k operations
// Starting with ch ('1' or '0')
// e.g : check if '10110' is possible to make '10101' or '01010' within k operations..
    bool toAlternate(string &s, char ch, int k){
        bool one = (ch == '1');
        for(auto c:s){
            if(one && c == '1') k--;
            else if(!one && c == '0') k--;
            one = !one;
        }
        
        return k >= 0;
    }
    
    bool isPossible(string &s, int size, int k){
        //  if it's single sized, refer to above function !
        if(size == 1) 
            return toAlternate(s, '1', k) || toAlternate(s, '0', k);
        
        //  count size of identical substrings and divide that with size+1, add to ans count.
        int ans = 0, cnt = 0;
        char prev = '\
';
        for(char ch:s){
            if(ch == prev) cnt++;
            //  change of character and add it to ans
            else{
                ans += cnt/(size+1);
                prev = ch;
                cnt = 1;
            }
        }
        ans += cnt/(size+1);
        
        return k >= ans;
    }
    
public:
    int minLength(string s, int numOps) {
        //   Binary search on size from 1 to n
        int low = 1, high = s.size();
        
        while(low < high){
            int mid = low + (high - low)/2;
            
            //  If possible then check for more smaller substrings
            if(isPossible(s, mid, numOps))
                high = mid;
            else low = mid + 1;
        }
        
        return low;
    }
};
```