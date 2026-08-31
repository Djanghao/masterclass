# Kadanes algorithm solution (Java)

**Author:** amjadmoqade98
**Votes:** 147
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/2038222/](https://leetcode.com/problems/substring-with-largest-variance/solutions/2038222/)

---

Time = O(26\\*26*n)

For every possible character pair a(min freq) & b(max freq), 
find the substring with the max differenct between the freq of a & b which can be done using kadanes algorithm.

We can think about it as finding the maximum subarray with a = -1 and b = 1 and other characters = 0. But we should have at least one occurrence of a.
[53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) 
```
class Solution {
    public int largestVariance(String s) {
        
        int [] freq = new int[26];
        for(int i = 0 ; i < s.length() ; i++)
            freq[(int)(s.charAt(i) - 'a')]++;
        
        int maxVariance = 0;
        for(int a = 0 ; a < 26 ; a++){
            for(int b = 0 ; b < 26 ; b++){
                int remainingA = freq[a];
                int remainingB = freq[b];
                if(a == b || remainingA == 0 || remainingB == 0) continue;
                
				// run kadanes on each possible character pairs (A & B)
                int currBFreq = 0, currAFreq = 0;
                for(int i = 0 ; i < s.length() ; i++){
                    int c =  (int)(s.charAt(i) - 'a');
                    
                    if(c == b) currBFreq++;
                    if(c == a) {
                        currAFreq++;
                        remainingA--;
                    }
                    
                    if(currAFreq > 0)
                        maxVariance = Math.max(maxVariance, currBFreq - currAFreq);
                    
                    if(currBFreq < currAFreq &&  remainingA >= 1){
                        currBFreq = 0;
                        currAFreq = 0;
                    }
                }
            }
        }
        
        return maxVariance;
    }
}
```