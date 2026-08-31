# java easy solution

**Author:** gaganMaheshwari
**Votes:** 20
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/531865/](https://leetcode.com/problems/increasing-decreasing-string/solutions/531865/)

---

```
public String sortString(String s) {
        int[] chars = new int[26];
        
        for(char c:s.toCharArray()){
            chars[c-'a']++;
        }
        StringBuilder output = new StringBuilder();
        
        while(output.length()<s.length()){
            for(int i=0;i<26;i++){
                if(chars[i] != 0){
                    output.append((char)(i+'a'));
                    chars[i]--;
                }
            }
            for(int i=25;i>=0;i--){
                if(chars[i] != 0){
                    output.append((char)(i+'a'));
                    chars[i]--;
                }
            }
        }
        
        return output.toString();
    }
```