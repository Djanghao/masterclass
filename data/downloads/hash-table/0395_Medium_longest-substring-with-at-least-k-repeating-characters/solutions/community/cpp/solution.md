# Full Explanation✅✅ || 3 Approaches✅✅ || Best Solution✅✅ ||Beats 100.0% Users✅✅

**Author:** rashmantri
**Votes:** 85
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/4140333/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/4140333/)

---


# Approach 1 :Naive Approach
 Consider all the possible sub-strings and for every sub-string, calculate the frequency of each of its character and check whether all the characters appear at least K times. For all such valid sub-strings, find the largest length possible.
Below is the implementation of the above approach: 

# Complexity
- Time complexity:O(n2)


- Space complexity:O(MAX), where MAX is the maximum number of unique characters in the string.


# Code
```
class Solution {
public:
    #define MAX 26

    // Function that return true if frequency
    // of all the present characters is at least k
    bool atLeastK(int freq[], int k)
    {
        for (int i = 0; i < MAX; i++) {
    
            // If the character is present and
            // its frequency is less than k
            if (freq[i] != 0 && freq[i] < k)
                return false;
        }
    
        return true;
    }

    void setZero(int freq[])
    {
        for (int i = 0; i < MAX; i++)
            freq[i] = 0;
    }


    int longestSubstring(string s, int k) {
        int n=s.length();
        int maxLen = 0;
 
        int freq[MAX];
    
        // Starting index of the sub-string
        for (int i = 0; i < n; i++) {
            setZero(freq);
    
            // Ending index of the sub-string
            for (int j = i; j < n; j++) {
                freq[s[j] - 'a']++;
    
                // If the frequency of every character
                // of the current sub-string is at least k
                if (atLeastK(freq, k)) {
    
                    // Update the maximum possible length
                    maxLen = max(maxLen, j - i + 1);
                }
            }
        }
    
        return maxLen;
    }
};
```

# Approach 2 :Divide and Conquer
 
1. Store the frequency of each characters of the given string in a frequency array of size 26.
2. Initialize two variables start with 0 and end which is the length of the string str.
3. Iterate over the string from start to end and count the number of times each character repeats and store it in an array.
4. If any character repeats less than K times, then Divide the string into two halves. If i is the index of the string where we found that the string[i] repeats less than K times, then we divide the string into two halves from start to i and i + 1 to end.
5. Recursively call for the two halves in the above steps i.e., from start to i and i + 1 to end separately and repeat the Step 2 and 3 and return the maximum of the two values returned by the above recursive call.
6. If all the characters between start and end is repeated at least K times, then the answer is end \u2013 start. 

# Complexity
- Time complexity:O(N*log2N)


- Space complexity:O(26) == O(1), no extra space is required, so it is a constant.

# Code
```
class Solution {
public:
    int longestSubstring(string s, int k) {
        return longestSubstringUtil(s, k, 0, s.length());
    }
    
private:
    int longestSubstringUtil(string s, int k, int start, int end) {
        if (end - start < k) return 0;
        
        int count[26] = {0};
        for (int i = start; i < end; i++) {
            count[s[i] - 'a']++;
        }
        
        for (int i = start; i < end; i++) {
            if (count[s[i] - 'a'] < k) {
                int left = longestSubstringUtil(s, k, start, i);
                int right = longestSubstringUtil(s, k, i + 1, end);
                return max(left, right);
            }
        }
        
        return end - start;
    }
};
```

# Approach 3 : Sliding Window


# Complexity
- Time complexity:O(N)


- Space complexity:O(1)


# Code

```
class Solution {
public:
 

// Function to find the length of
// the longest substring
int longestSubstring(string s, int k)
{
	// Store the required answer
	int ans = 0;

	// Create a frequency map of the
	// characters of the string
	int freq[26] = { 0 };

	// Store the length of the string
	int n = s.size();

	// Traverse the string, s
	for (int i = 0; i < n; i++)

		// Increment the frequency of
		// the current character by 1
		freq[s[i] - 'a']++;

	// Stores count of unique characters
	int unique = 0;

	// Find the number of unique
	// characters in string
	for (int i = 0; i < 26; i++)
		if (freq[i] != 0)
			unique++;

	// Iterate in range [1, unique]
	for (int curr_unique = 1;
		curr_unique <= unique;
		curr_unique++) {

		// Initialize frequency of all
		// characters as 0
		memset(freq, 0, sizeof(freq));

		// Stores the start and the
		// end of the window
		int start = 0, end = 0;

		// Stores the current number of
		// unique characters and characters
		// occurring atleast K times
		int cnt = 0, count_k = 0;

		while (end < n) {
			if (cnt <= curr_unique) {
				int ind = s[end] - 'a';

				// New unique character
				if (freq[ind] == 0)
					cnt++;

				freq[ind]++;

				// New character which
				// occurs atleast k times
				if (freq[ind] == k)
					count_k++;

				// Expand window by
				// incrementing end by 1
				end++;
			}
			else {
				int ind = s[start] - 'a';

				// Check if this character
				// is present atleast k times
				if (freq[ind] == k)
					count_k--;

				freq[ind]--;

				// Check if this character
				// is unique
				if (freq[ind] == 0)
					cnt--;

				// Shrink the window by
				// incrementing start by 1
				start++;
			}

			// If there are curr_unique
			// characters and each character
			// is atleast k times
			if (cnt == curr_unique
				&& count_k == curr_unique)

				// Update the overall
				// maximum length
				ans = max(ans, end - start);
		}
	}

	// return the answer
	return ans;
    }
};
```

![upvote.jpg](./images/0.jpeg)


