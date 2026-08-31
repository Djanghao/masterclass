# JAVA Greedy Solution

**Author:** HIMANSHUCHHIKARA
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/1232221/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/1232221/)

---

**IDEA:**
* First calculate the count of zeros and count of ones . if absolute difference is greater than 1 means alternating string is not possible.
* if let say countZero>countOne basically countZero=countOne+1. So length of string is going to be odd and at even places we must have zero(string will start from zero). Similarly in case if countOne>countZero.
* If countZero==CountOne it means that string can start from either 0 or 1. will calculate both.
* Now create a function countSwaps(String s,char start) .
* Note in one swap we will get two positions rigth. and if we are calling countSwaps we are sure that a answer is possible. So just count the wrongpositions of start character.
```
 Eg : s : 00110 
alternative string : 01010
     00110
       ^   here 0 should be there so its a wrongposition and we will do a swap one 0 and one 1 will get right position in one swap . 01010
Answer=1 .
```
**CODE:**
```
class Solution {
    public int minSwaps(String s) {
        int cntZero=0 , cntOne=0;
        for(char ch:s.toCharArray()){
            if(ch=='0') cntZero++;
            else cntOne++;
        }
        
        //Invalid
        if(Math.abs(cntOne-cntZero)>1) return -1;
        
        
        if(cntOne>cntZero){  //one must be at even posotion
            return countSwaps(s,'1');    
        }else if(cntOne<cntZero){
            return countSwaps(s,'0'); //zero must be at even position
        }
        
        return Math.min(countSwaps(s,'0'),countSwaps(s,'1'));    
    }
    
    //wrong count 
    private int countSwaps(String s,char start){
        int wrongPosition=0;
        for(int i=0;i<s.length();i+=2){
            if(s.charAt(i)!=start) wrongPosition++;
        }
        return wrongPosition;
    }
} 
```

Complexity:
`Time:O(n) and Space:O(1)`