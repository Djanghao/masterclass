# Python with Explanation and Thought Process (Leetcode is Easy!)

**Author:** teampark
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/464681/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/464681/)

---

Ok so this is a variation to the sliding window problem. 

**Highlevel:**
We iterate over the input, expanding and contracting our window.
1. Whenever the window has a repeating character, contract the window until there are no repeating characters. 
2.  If length of window equals K, add 1 to count of good windows and then contract the window. 
    - This works because since we checked and got rid of repeating characters in step 1, our window of length K must NOT have any repeating characters. 
    - We contract our window in this step because we don't want a window that has a length GREATER than K.

**Notes:**
- Keep track of our window bounds with left and right. 
- Use a frequency dictionary to keep track of how many times we've seen a character.
- Remember to access frequency dictionary ```freq[S[right]]``` and not just ```freq[right]``` (I admit I made this mistake ;))
- Check if ```right - left + 1 == K``` because we've added right to our frequency dictionary but we haven't actually incremented right yet 

```
import collections
class Solution(object):
    def numKLenSubstrNoRepeats(self, S, K):
        if K > len(S):
            return 0
        
        freq = collections.defaultdict(int)
        count_of_good_lenK_windows = 0
        left, right = 0, 0

        while right < len(S):
            freq[S[right]] += 1
            
			###########################
	        # Highlevel Step 1
			###########################
            while freq[S[right]] == 2:
                freq[S[left]] -= 1
                left += 1
				
			###########################
            # Highlevel Step 2
			###########################
            if right - left + 1 == K:
                count_of_good_lenK_windows += 1
                freq[S[left]] -= 1
                left += 1

            right += 1

        return count_of_good_lenK_windows 
```

Check out my Medium post on Sliding Windows for more detail.
https://medium.com/@timpark0807/leetcode-is-easy-sliding-window-c44c11cc33e1

Upvote if you found this helpful so we can get explanations and thought process to the top.