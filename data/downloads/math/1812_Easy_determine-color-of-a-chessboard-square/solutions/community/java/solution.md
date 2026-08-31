# Java Simple and easy to understand solution, 0 ms, faster than 100.00% , clean code with comments

**Author:** satyaDcoder
**Votes:** 22
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1140737/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1140737/)

---

**PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**

```
class Solution {
    public boolean squareIsWhite(String coordinates) {
        char letter = coordinates.charAt(0);
        int digit = coordinates.charAt(1) - '0';
        
        
        if(letter == 'a' || letter == 'c' || letter == 'e' || letter == 'g'){
			// when digit is even
            return digit % 2 == 0;
        }else{
		   //when digit is odd
            return digit % 2 == 1;
        }
    }
}
```