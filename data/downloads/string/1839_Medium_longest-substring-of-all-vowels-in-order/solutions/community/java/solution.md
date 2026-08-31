# JAVA READABLE CODE || Constant Space

**Author:** HIMANSHUCHHIKARA
**Votes:** 27
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1175715/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1175715/)

---

**Idea:**
 Given word only contains vowels(given in question) and we just have to find out the longest substring that contains all vowels in sorted order of ascii value. i.e 'a'<'e'<'i'<'o'<'u' .
 So if a substring have 5 unique character and following ascii order we can update our answer by its length.
**CODE:**
```
 public int longestBeautifulSubstring(String word) {
        int cnt=1;
        int len=1;
        int max_length=0;
        
        int n=word.length();
        
        for(int i=1;i<n;i++){
            if(word.charAt(i)==word.charAt(i-1)){
                 len++;
            }else if(word.charAt(i-1)<word.charAt(i)){
                cnt++;
                len++;
            }else{
                len=1;
                cnt=1;
            }
            
            if(cnt==5){
                max_length=Math.max(max_length,len);
            }
        }
        return max_length;
    }
```	

**Complexity:**
`Time:O(n) and Space:O(1)`
