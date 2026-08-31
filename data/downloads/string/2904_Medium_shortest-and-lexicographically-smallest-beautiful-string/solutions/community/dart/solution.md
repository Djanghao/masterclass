# Using Sliding Window in DART

**Author:** user7097xf
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4982159/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4982159/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  String shortestBeautifulSubstring(String s, int k) {
    int count =0;
    String res ="";
    int mins=1000;
    int left =0;
    int right =0;
    int len = s.length;
    while(right<len ){
        if(s[right]=="1"){
            count++;
            while(count>=k){
                if(mins >= right-left && count ==k){
                    if(mins==right-left){
                    res= checkbig(res, s.substring(left,right+1));
                    }else{
                        res=s.substring(left,right+1);
                    }
                    mins = right-left;

                }
                if(left>=right){
                    break;
                }
                if(s[left]=="1"){
                    left++;
                    count--;
                }else{
                    left++;
                }
            }
           
        }
        right++;
    }
    print(mins);
    return res;


  }

  checkbig(String s1 ,String s2){
    for(int i =0;i<s1.length;i++){
        if(s1[i]=="1" && s2[i]=="0"){
            return s2;
        }
        else if(s1[i]=="0" && s2[i]=="1"){
            return s1;
        }
    }
    return s1;

  }
}
```