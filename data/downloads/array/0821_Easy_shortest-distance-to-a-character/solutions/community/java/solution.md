# Intuition leads to approach | Java | optimize intuition to get effective solution

**Author:** ksumit9895
**Votes:** 11
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/1055960/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/1055960/)

---

**Intuition:**
**Simple intuition**: 

* Suppose the answer is stored ans array.
* ans[i] is minimum of distances from all the positions of character C in string S
Ex : Input: s = "loveleetcode", c = "e"
Indices of e = {3, 5, 6, 12}
* To get the shortest distance, we need to check the nearest from both sides.
* Run 2 loops from both end, updating the min value.

**Solution**:
* We have to traverse the array two times, one from left to right & right to left.

**Time Complexity**: Forward loop & Backward Loop : O(N) + O(N) ~ O(N)
**Space Complexity**: Without considering answer array : O(1) 
```
class Solution {
    public int[] shortestToChar(String s, char c) {
        int len = s.length();
        int ans[] = new int[len];
        int prev = len;
        
        // forward
        for(int i = 0; i < len; i++){
            if(s.charAt(i) == c){
                prev = 0;
                ans[i] = 0;
            }
            else
                ans[i] = ++prev;
        }
        
        prev = len;
        for(int i = len-1; i >= 0; i--){
            if(s.charAt(i) == c){
                prev = 0;
                ans[i] = Math.min(ans[i], 0);
            }
            else
                ans[i] = Math.min(ans[i], ++prev);
        }
        
        return ans;
    }
}

```

**Intuition 2**: 
```
class Solution {
    public int[] shortestToChar(String s, char c) {
        int len = s.length();
        int[] ans = new int[len];
        Arrays.fill(ans, len + 1);
        int j;
        for(int i = 0; i < len; i++){
            if(s.charAt(i) == c){
                ans[i] = 0;
                j = i - 1;
                //fill reverse 
                while(j >= 0 && ans[j] > i - j){
                    ans[j] = i - j;
                    j--;
                }
                //fill forward
                j = i + 1;
                while( j < len && s.charAt(j) != c){
                    ans[j] = j - i;
                    j++;
                }
                i = j - 1;
            }
        }
        return ans;
    }
}
```
**Optimization**: 
While traversing the string, 
* ans[i] = 0 for all i where s.charAt(i) == c
* start filling from the index of character to both ends.
1. For forward: start filling {1, 2, 3... } from j = i+1 till we reach to another c or end of the string.
2. For backward : From j = i -1 till we reach to another c or start of the string.
							Fill minimum of ans[j] &  i - j (distance of j from i).
* If at any point if ans[j] is less than & equal to i-j, for all the elements before jth index i-j is greater than ans[j]

**Solution**:
* We have to traverse the array from one end, if there is a character c, update in backward too.

**Time Complexity**: Forward loop & Backward Loop : O(N) + O(N/2) ~ O(N) where N is number of string.
**Space Complexity**: Without considering answer array : O(1) 
```
class Solution {
    public int[] shortestToChar(String s, char c) {
        int N = s.length();
        int[] ans = new int[N];
        int prev = N + 1, j;
        for (int i = 0; i < N; ++i) {
            if (s.charAt(i) == c) {
                ans[i] = 0;
                prev = 1;
                j = i-1;
                while( j >= 0 && ans[j] > i - j ){
                    ans[j] = i - j;
                    j--;
                }
            }
            else
                ans[i] = prev++;
        }
    return ans;
    }
}
```