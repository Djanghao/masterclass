# Easy Understand | Simple Method | Java | Python ✅

**Author:** CzShippee
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3392433/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3392433/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Use mask to save all combination in hashmap and use "&" bit manipulation to check if two mask have repeated letter.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O((2^n)^2)$ => $O(4^n)$ 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The worst case is need save every combination, for example the string of length 12 that only contains one kind of letter.
$O(2^n)$

# Code
Mathod using bit mask
``` java []
class Solution {
    public int maxProduct(String s) {
        char[] strArr = s.toCharArray();
        int n = strArr.length;
        Map<Integer, Integer> pali = new HashMap<>();
        // save all elligible combination into hashmap
        for (int mask = 0; mask < 1<<n; mask++){
            String subseq = "";
            for (int i = 0; i < 12; i++){
                if ((mask & 1<<i) > 0)
                    subseq += strArr[i];
            }
            if (isPalindromic(subseq))
                pali.put(mask, subseq.length());
        }
        // use & opertion between any two combination
        int res = 0;
        for (int mask1 : pali.keySet()){
            for (int mask2 : pali.keySet()){
                if ((mask1 & mask2) == 0)
                    res = Math.max(res, pali.get(mask1)*pali.get(mask2));
            }
        }

        return res;
    }

    public boolean isPalindromic(String str){
        int j = str.length() - 1;
        char[] strArr = str.toCharArray();
        for (int i = 0; i < j; i ++){
            if (strArr[i] != strArr[j])
                return false;
            j--;
        }
        return true;
    }
}
```
``` python3 []
class Solution:
    def maxProduct(self, s: str) -> int:
        n, pali = len(s), {} # bitmask : length
        for mask in range(1, 1 << n):
            subseq = ""
            for i in range(n):
                if mask & (1 << i):
                    subseq += s[i]
            if subseq == subseq[::-1]: # valid is palindromic
                pali[mask] = len(subseq)
        res = 0
        for mask1, length1 in pali.items():
            for mask2, length2 in pali.items():
                if mask1 & mask2 == 0: 
                    res = max(res, length1 * length2)
        return res
```

There is another method using recursion
``` java []
class Solution {
    int res = 0;
    
    public int maxProduct(String s) {
        char[] strArr = s.toCharArray();
        dfs(strArr, 0, "", "");
        return res;
    }

    public void dfs(char[] strArr, int i, String s1, String s2){
        if(i >= strArr.length){
            if(isPalindromic(s1) && isPalindromic(s2))
                res = Math.max(res, s1.length()*s2.length());
            return;
        }
        dfs(strArr, i+1, s1 + strArr[i], s2);
        dfs(strArr, i+1, s1, s2 + strArr[i]);
        dfs(strArr, i+1, s1, s2);
    }

    public boolean isPalindromic(String str){
        int j = str.length() - 1;
        char[] strArr = str.toCharArray();
        for (int i = 0; i < j; i ++){
            if (strArr[i] != strArr[j])
                return false;
            j--;
        }
        return true;
    }
}
```

**Please upvate if helpful!!**

![image.png](./images/0.png)