# JAVA || Easy Solution With Explanation || 93% Faster Code

**Author:** shivrastogi
**Votes:** 92
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551895/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551895/)

---

	PLEASE UPVOTE IF YOU LIKE.
```
class Solution {
    public int numberOfWeakCharacters(int[][] properties) {
        
        // if we sort only by 1st indexes, there could be values where 1st index is the same 
        // Arrays.sort(properties, (a,b) -> Integer.compare(a[0], b[0]));
        
        // b[1], a[1] because we need the 2nd values in descending order
        Arrays.sort(properties, (a,b) -> (a[0] == b[0]) ? Integer.compare(b[1], a[1]) : Integer.compare(a[0], b[0]));
        
        int noOfWeakCharacters = 0;
        int len = properties.length;
       // improvization here - // we need to keep track of the max value
        int max = properties[len-1][1];
        
        for(int i = len-2; i>=0 ;i--) {
            
            if(properties[i][1] < max) {
                noOfWeakCharacters++;
            } else {
                max = properties[i][1];
            }
        }
        return noOfWeakCharacters;
    }
}
```