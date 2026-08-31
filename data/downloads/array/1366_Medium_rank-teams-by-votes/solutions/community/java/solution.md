# Java solution with explanation 4ms

**Author:** miaoyao
**Votes:** 154
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/619556/](https://leetcode.com/problems/rank-teams-by-votes/solutions/619556/)

---

I want to use example1 to explain this solution.
we have candidates A, B, C. So we can record the number of votes in every position for each candidate.
A: 5, 0, 0
B: 0, 2, 3
C: 0, 3, 2
we imagine it is a 2D array. we try to sort the array. After sorting, we should make the array like this:
A: 5, 0, 0
C: 0, 3, 2
B: 0, 2, 3
Obviously, ACB is the result we want.

Now, we just need to use coding to realizing it.
1. we define an array, every row denote a candidate, every column denotes a position.
2. we add an extra column to identify which candidate the row is.
3. we record the number of votes in every position for each candidate by using for-loop
4. sort the array. we define a method to compare candidates.
5. after sorting, build string.

The time complexity: O(26 + n * c  + 26 * log 26 * c + c) = O(n). 
c is a constant number, and c <= 26.

```
class Solution {
    public String rankTeams(String[] votes) {
        int len = votes[0].length();
        int[][] map = new int[26][len + 1];
        for(int i = 0; i < 26; i++) map[i][len] = i;
        
        for(int i = 0; i < votes.length; i++){
            String s = votes[i];
            for(int j = 0; j < len; j++){
                map[s.charAt(j) - 'A'][j]++;
            }
        }
        Arrays.sort(map, (a, b) ->{
            for(int i = 0; i < len; i++){
                if(a[i] < b[i]) return 1;
                if(a[i] > b[i]) return -1;
            }
            return 0;
        });
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < len; i++){
            sb.append((char)('A' + map[i][len]));
        }
        return sb.toString();
    }
}
```