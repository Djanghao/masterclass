# JAVA Brute Force-> Recursion Step by Step || With Detailed Explanation

**Author:** leetcoderkk
**Votes:** 26
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/1186896/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/1186896/)

---

**Please Upvote ! if you found useful, so it helps others to find it. Thank you, I tried to explain in as depth as possible. Enjoy!**

**Approach 1: Brute Force**

So my idea was to hop **i** digits at the time, if we reach to the end that means we found our answer. 
**What do i mean by hop?**
Ex: "000908760" 
	i = 1 -> "0009" then "08" then "07" then "6" then "0" (It will find single digits) i.e 9..8..6..0
	i = 2 -> "00090" then "87" then "60" (it will find double digits) i.e 90..87..60
	So if we reach till End that means we got our answer and return true
	
**Tricky part of this problem**
*   **Zeros:** I considered the number after intial 0's i.e 00007 -> 7
*  **Gap of 1:** so to check that convert the number to long and subtract with prev itteration and diff should be 1
* 	**Edge case** 001: We check if prev is Long.max value that means this is the first digit and should not return true even we reach till end
* 	 **Edge Case** 1009897: here if our i = 2 10..98..97 if i=3 then i=100..989..7 so using variable "width" to check if number is 10..100..10000 or power of 10 next number we search is i width shorter so if we find 100 we are nowlooking for 2 digit number instead of 3

Using long because there's a test case which int cannot parse
Hope it makes sense comment if you have any question.
```
class Solution {
    public boolean splitString(String s) {
	// we are only making s.length()/2 hops becase we only want min 2 parts of string
        for(int i = 1; i <= (s.length() / 2)+1; i++){
            int index = 0, width = i; 
            Long prev = Long.MAX_VALUE;
            while(index < s.length()){ 
				
				// checking if 100 then next time find 2 digit number so width-1
                long ten = (long)Math.pow ( 10, i-1); 
                if(i > 1 && prev == ten) width--;
				
                String next = getDigit(index, s, width);
                long val = Long.parseLong(next);
				
                if(index != 0 && prev - val != 1) break; // 
                
                index += next.length();
				// If it is not the first values && we hopped till end then return true;
                if(prev != Long.MAX_VALUE && index >= s.length()) return true;
                prev = val;
            }
        }
        return false;
    }
    
	// This function simply returns the next len digit number starting from i index of string
	// getDigit(2,"090087",1) -> 8
    public String getDigit(int i, String s, int len){
        int digits = 0;
        int j = i;
        while(j < s.length() && s.charAt(j) == '0') j++;
        return s.substring(i, Math.min(j+len, s.length()));
    }
}
```


**Approach 2 DFS**

Simply we start and keep finding the next substring(long) such that curr - next = 1 and the end if we reach to the last index we check if we found atleast 2 long
Ex: "9998" -> 9..99..98
```
class Solution {
    public boolean splitString(String s) {
        if (s == null || s.length()<=1) return false;
        return backtrack(0, s, new ArrayList<Long>());
    }
    
    public boolean backtrack(int pos, String s, ArrayList<Long> list) {
		// Base case where we reach till end of string and we have atleast 2 parts
        if (pos >= s.length()) return list.size() >= 2; 

        long num = 0;
        for (int i=pos; i<s.length(); i++) {
            num = num*10 + (s.charAt(i)-'0'); // "070" i = 1 -> 0.. i = 2 -> 7.. i =3 -> 70 
            if (list.size()==0 || list.get(list.size()-1) - num == 1) { // if it is first digit or difference is +1 valid
                
                list.add(num);  // add the number and continue to next index
                if (backtrack(i+1, s, list)) return true;
                list.remove(list.size()-1); // backtrack, done with that itteration coun't find it
                
            }
        }
        return false;
    }
}
```
