# Java Naive, Greedy Explanation + Comments, Beats 100%

**Author:** _velasoka
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-string-anti-palindrome/solutions/4911490/](https://leetcode.com/problems/make-string-anti-palindrome/solutions/4911490/)

---

**Intuition:** Count frequency of each character. Start creating resulting String from `a.....z` based on frequency.

**Approach:** Greedy
1. Count frequency of each character
2. if frequency of any character exceeds `n/2` return `-1`. (because you can't form anti-palindrome)
3. define a resulting string with size `n`
4. keep filling the resulting string till `n/2` of length
5. when you want to fill, rest of the string (from `n/2.........n`) you must check condition saying that `sb.charAt(n-i-1) != (do I have any character from frequency array)`
6. if you can't find different character in frequency array immediately return `-1` (because you can't form anti-palindrome)


**Time & Space complexity:** O(n * 26) & O(n)

```
class Solution {
    public String makeAntiPalindrome(String s) {
        int freq[] = new int[26], n = s.length();
        for(int i=0; i<n; i++) {
            freq[s.charAt(i)-'a']++;
            
            //any of the char freq exceeds n/2, we can't form anti-palindrome
            if(freq[s.charAt(i)-'a']>n/2) {
                return "-1";
            }
        }
        StringBuilder sb = new StringBuilder(n);
        int i = 0, //sb pointer
        x = 0;  //frequency pointer

        //start filling resulting string
        while(i<n/2) {

            //take character which has freq > 0 
            while(freq[x]==0) {
                x++;
            }

            //decrement freq by 1
            freq[x]--;
            sb.append((char)(x+'a'));
            i++;
        }

        //now i=n/2, 
        //you must fill rest of the character for the resulting string  
        while(i<n) {

            //for each `i`, `n-i-1` is a pair
            int pair = sb.charAt(n-i-1)-'a', 
            
            j = x; // don't want to start from 0....26 
            // because n/2 character already choosen so starting from previous `x`

            boolean notFound = true;

            //try to pick non-matching pair
            while(j<26) {
                if(freq[j]>0 && j!=pair) {
                    sb.append((char)(j+'a'));
                    freq[j]--;
                    notFound = false;
                    break;
                }
                j++;
            }

            //can't pick non-matching pair
            if(notFound) {
                return "-1";
            }
            i++;
        }
        return sb.toString();
    }
}
```
Please **UPVOTE**, if you find the solution helpful