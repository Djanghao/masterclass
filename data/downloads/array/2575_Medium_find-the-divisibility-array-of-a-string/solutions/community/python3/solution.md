# ✅Python3 || C++ || Java✅ Easy solution

**Author:** abdullayev_akbar
**Votes:** 41
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3230830/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3230830/)

---

# Please UPVOTE\uD83D\uDE0A

# Python3
```
class Solution:
    def divisibilityArray(self, word: str, m: int) -> List[int]:
        x=0
        a=[]
        for i in word:
            x=x*10+int(i)
            if(x%m==0):
                a+=[1]
            else:
                a+=[0]
            x%=m
        return a
        
```
# C++
```
class Solution {
public:
    vector<int> divisibilityArray(string word, int m) {
        long long int x=0;
        vector<int>ans;
        for(int i=0;i<word.size();i++)
        {
            x=x*10+(word[i]-'0');
            if(x%m==0) ans.push_back(1);else ans.push_back(0);
            x%=m;
        }
        return ans;
    }
};
```
# Java
```
class Solution {
    public int[] divisibilityArray(String word, int m) {
        long x=0;
        int n=word.length();
        int[] ans = new int[n];
        for(int i=0;i<word.length();i++)
        {
            x=x*10+(word.charAt(i)-'0');
            if(x%m==0) ans[i]=1;else ans[i]=0;
            x%=m;
        }
        return ans;
    }
}
```
