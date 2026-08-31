# Java✅1ms,100% faster🔥,99% less memory usage

**Author:** deepVashisth
**Votes:** 70
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/2609325/](https://leetcode.com/problems/reverse-string-ii/solutions/2609325/)

---

**If you really found my solution helpful please upvote it, as it motivates me to post such kind of codes and help the coding community, if you have some queries or some improvements please feel free to comment and share your views.**
```
class Solution {
    public String reverseStr(String s, int k) {
        char[] str = s.toCharArray();
        int n = str.length;
        for(int i = 0 ; i <= n-1; i += 2*k){
            if(i+k-1 <= n-1){
                reverseK(i,i+k-1,str);
            }else{
				//for fewer than k characters left (edge case)
                reverseK(i,n-1,str);
            }
        }
        String ans = new String(str);
        return ans;
    }
    public void reverseK(int i, int j, char[] str){
        while(i < j){
            char temp = str[i];
            str[i] = str[j];
            str[j] = temp;
            i++;
            j--;
        }
    }
}
```
**Happy Coding**