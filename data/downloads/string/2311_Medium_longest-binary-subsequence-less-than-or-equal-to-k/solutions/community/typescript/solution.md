# Greedy and smart optimisations | O(N) | C++ | Javascript | Typescript

**Author:** volcano_7
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2170752/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2170752/)

---

Please read the question properly before searching for its solution. 
You should know the difference between **Subsequence** & **Subbarray** and knowledge of binary numbers

## Approach : 
Greedily get maximum 1s possible and use all the zeroes

## Algorithm :
- We traverse from right of the binary string.
- We keep track of the power of 2 from the right of the string
- We also keep track of sum which the sum of binary sequence traversed till now and number of 1s traversed.  
- As soon sum hits greater than k we break from loop.
- We then add the total number of zeros and number of 1 traversed which results in the length of the longest substring

## Visualisation
```
    100010100 [some binary sequence]
        ^
 ```
 The point where sum exceds the k
 Wouldn't the largest subsequence length would be :
 = [number of zeroes in left] + [number of digits in right]  *since zero doesn't add value we can take all the zero from left*
 = [total number of zeroes] + [total number of 1s covered in right]
 
 Rest is the implementation in CPP and TS
			 
```cpp
class Solution {
public:
   int longestSubsequence(string s, int k) {
       int ones = 0;
       for(int i = s.size() - 1 , sum = 0 , pw = 1; i >= 0; i-- , pw <<= 1) {
               if(sum + pw  > k)
                    break;
                if(s[i] == '1')
                    ones++ , sum += pw ;
       }
       return ones + count(s.begin() , s.end() , '0');
   }
};
```
```typescript
function longestSubsequence(s: string, k: number): number {
       let ones = 0;
       for(let i = s.length - 1 , sum = 0 , pw = 1; i >= 0 ; i-- , pw <<= 1 ) {
           if(sum + pw  > k)
               break;
          if(s[i] === '1') 
              ones++ , sum += pw ;
       }
       return ones + s.split("").filter(_ => _ === '0').length;
};
```