# [JAVA] Sliding Window Solution with Explanation

**Author:** rock_lee
**Votes:** 168
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/409017/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/409017/)

---

**Explanation:**

The idea is to first count up each type of character. Since we know there are only 4 characters: Q, W, E, R, we can easily count them up using an int[] arr of length 4.

Then once we count them up, we look at the number of occurrences of each and see if any of them > N/4 (where N is the length of the String). If they are, this means that we need this freq[character] - (N/4) number of this character in the substring we choose to replace.

E.g. If we have N = 12 and freq[Q] = freq[0] = 6. Since we know each character must occur N/4 = 12/4 = 3 times. We have 3 extra Qs. So we need to make sure our substring at the end has 3 Qs in it. The same principle applies when there are multiple characters > (N/4).

Essentially, we reduced the problem to finding a minimum substring containing a certain number of each character.

Then we go to the freq array and subtract (N/4) from each of freq[Q], freq[W], freq[E], freq[R].
If it is below 0 (this means our substring does not need to contain this letter since we are already in demand of this letter), then we just set it to 0.

Then for our sliding window approach - see more: https://www.geeksforgeeks.org/window-sliding-technique/

We update freq[] so that freq[char] always represents how many characters we need still of each char to get the substring that we need. It is okay for freq[char] to be < 0 as this mean we have more characters than we need (which is fine). Each time we have an eligible substring, we update our minLen variable and try to shrink the window from the left as much as possible.

In the end we get the minimum length of a substring containing at least the characters we need to replace with other characters.

*Forgive me for messy code - contest code can get a bit less elegant.*

**Code:**
```
class Solution {
	// Checks that freq[char] <= 0 meaning we have an elligible substring
    private boolean fulfilled(int[] freq) {
        boolean fulfilled = true;
        for(int f: freq) {
            if(f > 0) fulfilled = false;
        }
        return fulfilled;
    }
    
	 // Q 0 W 1 E 2 R 3
    private int charToIdx(char c) {
        switch(c) {
            case 'Q': return 0;
            case 'W': return 1;
            case 'E': return 2;
        }
        return 3;
    }
    
    public int balancedString(String s) {
        // 1) Find freq of each first
        int N = s.length();
        int required = N/4;
       
        int[] freq = new int[4];
        for(int i = 0; i < N; ++i) {
            char c = s.charAt(i);
            ++freq[charToIdx(c)];
        }
        
        // 2) Determine the ones we need to change
        boolean equal = true;
        for(int i = 0; i < 4; ++i) {
            if(freq[i] != required) equal = false;
            freq[i] = Math.max(0, freq[i] - required);
        }
        
        if(equal) return 0; // Early return if all are equal
        
        // 3) Use sliding window and try to track what more is needed to find smallest window
        int start = 0;
        int minLen = N; // Maximum will only ever be N
        
        for(int end = 0; end < N; ++end) {
            char c = s.charAt(end);
            --freq[charToIdx(c)];
            
            while(fulfilled(freq)) {
                minLen = Math.min(end - start + 1, minLen);

                char st = s.charAt(start);
                ++freq[charToIdx(st)];
                ++start;
            }
        }
        
        return minLen;
    }
}
```

Time complexity: O(N)
Space complexity: O(1)