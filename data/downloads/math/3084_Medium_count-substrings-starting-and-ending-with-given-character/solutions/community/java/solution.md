# Easiest Java Solution || Counting

**Author:** 1asthakhushi1
**Votes:** 19
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886182/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886182/)

---



# Code
```
class Solution {
    public long countSubstrings(String s, char c) {
        int count=0; // counting the no. of "char c" present
        long ans=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)==c){
                count++;
                ans+=count; 
                // Let say (c=='a'), then presence of any other chacter doesn't matter, neglect all charcters and focus only on "char c"
                // (if count==1, ans=0+1=1)-->a
                // (if count==2, ans=1+2=3)-->aa
                // (if count==3, ans=3+3=6)-->aaa
                // (if count==4, ans=6+4=10)-->aaaa
                //....
            }
        }
        return ans;
    }
}
```