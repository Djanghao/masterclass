# ✅✅||Easy and Clean Code || C++ ||✅✅

**Author:** prikarshglory
**Votes:** 16
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3804389/](https://leetcode.com/problems/split-strings-by-separator/solutions/3804389/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) : storing ans
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<string> splitWordsBySeparator(vector<string>& words, char separator) {
        vector<string> ans;
        for(int i=0; i<words.size();i++){
            string s = words[i];
            string temp ="";
            for(auto a:s){
                if(a==separator && temp!=""){
                    ans.push_back(temp);
                    temp="";
                }
                if(a!=separator) temp+=a;
            }
            if(temp!="")ans.push_back(temp);
        }
        return ans;
    }
};
```