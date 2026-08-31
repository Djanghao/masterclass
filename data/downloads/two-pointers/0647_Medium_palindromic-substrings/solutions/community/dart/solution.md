# ✅ Simple idea and simple code || Beats 100% and 0ms🔥

**Author:** omar_walied_ismail
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/4704523/](https://leetcode.com/problems/palindromic-substrings/solutions/4704523/)

---

# Intuition
- After seeing the `n <= 1000` i thinked about brute force solution
- We know that the blindrome string maybe can be odd size or even size
- So we care about counting the odd sizes substrings 
- Then count the even sizes
- But how i count them ?

# Approach

- To count the odd sizes, if I am on position `i` then I will create two pointers `l = i` and `r = i` because I can count the same character I stand on then if `s[l] == s[r]` i will make `l--` and `r++` while they in boundaries I continue this operation and `ans++`.
- To count the even sizes I will do the same thing but I will start counting when `i` is greater than zero to set `l = i-1` and `r = i` and do the same thing while `s[l] == s[r]` and `l` and `r` in boundaries than `ans++`

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```cpp
// C++ code
class Solution {
public:
    int countSubstrings(string s) {
        int ans=0,n=s.size();
        for(int i=0;i<n;i++){
            
            // for odds
            int l=i,r=i;
            while(l>=0&&r<n){
                if(s[l]==s[r])
                    ans++,l--,r++;
                else
                    break;
            }

            // for evens
            if(i){
                l=i-1,r=i;
                while(l>=0&&r<n){
                    if(s[l]==s[r])
                        ans++,l--,r++;
                    else
                        break;
                }
            }
        }
        return ans;
    }
};

```
```Dart
// Dart code
class Solution {
  int countSubstrings(String s) {
    int n=s.length,ans=0;
    for(int i=0;i<n;i++){
        int l=i,r=i;
        while(l>=0&&r<n){
            if(s[l]==s[r]){
                ans++;r++;l--;
            }
            else
                break;
        }
        if(i!=0){
            l=i-1;r=i;
            while(l>=0&&r<n){
            if(s[l]==s[r]){
                ans++;r++;l--;
            }
            else
                break;
            }
        }
    }
    return ans;
  }
}
```
