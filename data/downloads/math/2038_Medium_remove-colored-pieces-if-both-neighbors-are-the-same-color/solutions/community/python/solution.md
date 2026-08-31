# [C++/Python/Java] Count "AAA" and "BBB"

**Author:** lokeshsk1
**Votes:** 157
**Link:** [https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/1524153/](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/1524153/)

---

Count "AAA" and "BBB" and compare them

You can only remove an A that is surrounded by two other A's.
So if you keep on removing valid A's, then the valid B's are not affected. Same goes for all valid B's.
You just count all the valid A's and valid B's. At each turn, Alice removes a valid A and the count of all valid A's (countA) decreases by one. Similarly after Bob's turn, countB decreases by one.
So if countA > countB, then a turn comes when Bob has no valid B's to remove. So he loses and Alice wins. You return TRUE.
Else if countA == countB, then at some point Alice has no valid A's to remove, So Bob wins and you return FALSE.
Else (countA < countB), then at some point Alice has no valid A's to remove. So Bob wins and you return FALSE.

In either case, if countA <= countB, then you return FALSE.
So just return countA > countB.

PS: There's no optimal play here. No matter what valid color a player removes at each turn, it has no effect on the outcome.
Explanation credits : @Zombiesalad 

**Python:**
```
class Solution:
    def winnerOfGame(self, s: str) -> bool:
        
        a = b = 0
        
        for i in range(1,len(s)-1):
            if s[i-1] == s[i] == s[i+1]:
                if s[i] == 'A':
                    a += 1
                else:
                    b += 1
                    
        return a>b
```


**C++:**
```
class Solution {
public:
    bool winnerOfGame(string s) {
        
        int a = 0, b = 0;
        
        for(int i=1; i<s.size()-1; i++){
            if(s[i-1] == s[i] && s[i] == s[i+1]){
                if(s[i] == 'A')
                    a++;
                else
                    b++;
			}
        }   
                    
        return a>b;
    }
};
```


**Java:**
```
class Solution {
    public boolean winnerOfGame(String s) {
        
        int a = 0, b = 0;
        
        for(int i=1; i<s.length()-1; i++){
            if(s.charAt(i) == s.charAt(i-1) && s.charAt(i) == s.charAt(i+1)){
                if(s.charAt(i) == 'A')
                    a++;
                else
                    b++;
			}
        }
                    
        return a>b;
    }
}
```
