# Sliding Window with Example Walkthrough

**Author:** _sxrthakk
**Votes:** 49
**Link:** [https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/solutions/5818284/](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/solutions/5818284/)

---

# Intuition
1. **Prefix and Rearrangement :**
- A prefix is the starting portion of a string. For example, for the string "abc", the prefix could be "a", "ab", or "abc".
- Rearrangement means that we can rearrange the characters in a substring, but when rearranged, the beginning of the rearranged string must match word2.

2. **Key Insight :**
- The problem is about finding substrings of word1 whose characters can be rearranged in such a way that word2 becomes a prefix.
- For example, the substring "bcca" can be rearranged into "abcc", and "abc" is a prefix of "abcc". Therefore, "bcca" is a valid substring.

3. **Efficient Approach :**
- Instead of checking all possible substrings (which would take too much time), we can use a sliding window technique to check character frequencies and determine when a valid substring is formed.
- This way, we can avoid recalculating from scratch for every substring and just adjust the window as we process each new character.

# Approach
1. **Character Frequency Calculation :**
- First, we calculate the frequency of each character in word2 and store it in a frequency vector v of size 26 (for the 26 lowercase letters).
  
2. **Sliding Window Setup :**
- We maintain a sliding window over word1 to check its substrings.
- The window will keep track of character frequencies in word1 using another vector cnt of size 26.
- The sliding window will expand and shrink as needed. We will adjust the window as we move through the string word1.

3. **Tracking Remaining Matches :**
- We introduce a variable k which represents how many characters from word2 are yet to be matched within the window.
- Initially, k = length(word2), and it decreases as we match characters of word2 inside the current window of word1.
- When k == 0, it means the current window of word1 contains enough characters to potentially be rearranged into a valid substring that starts with word2.

4. **Expanding the Window :**
- For each character in word1, we:
a) Add the character to the current window (by updating cnt).
b) If this character exists in word2 and is still needed in the window (i.e., cnt has fewer occurrences of this character than v), we reduce k by 1.
c) If k == 0, we have a valid window that can potentially form a valid substring.

5. **Counting Valid Substrings :**
- Once we have a valid window (when k == 0), we count all substrings that can be formed by extending the window from the current position to the end of word1.
- The total number of such substrings is given by len(word1) - i, where i is the current end of the window.

6. **Shrinking the Window :**
- After counting, we begin shrinking the window from the left by moving the start pointer.
- As we remove characters from the left of the window, we update cnt and adjust k if necessary (i.e., if a character becomes unmatched).

# Example Walkthrough 
Let's go through the example word1 = "bcca" and word2 = "abc" step by step using the code.

## Initial Setup :
 After iterating over "abc", v looks like this:
### v = [1, 1, 1, 0, 0, 0, ..., 0]
This indicates that word2 contains one occurrence each of the letters 'a', 'b', and 'c'.

cnt is initialized to track the frequency of characters in the current sliding window of word1. Initially, all elements of cnt are 0.

### cnt = [0, 0, 0, ..., 0]
### start = 0 => This represents the start of the current window.

### k = 3 =>  This is the number of characters from word2 that still need to be matched.

### c = 0 =>  This will store the total number of valid substrings.

## Step-by-Step Walkthrough:

### Iteration 1:
**Current character :** 'b' (at index 0)

'b' exists in word2 (v['b' - 'a'] = 1), and its count in the window (cnt['b' - 'a'] = 0) is less than in word2. Therefore, we decrement k by 1:
k = 2

**Update cnt for 'b' :** cnt = [0, 1, 0, ..., 0]

Since k != 0, we don't have a valid substring yet.

### Iteration 2:
**Current character :** 'c' (at index 1)

'c' exists in word2 (v['c' - 'a'] = 1), and its count in the window (cnt['c' - 'a'] = 0) is less than in word2. We decrement k by 1:
k = 1

**Update cnt for 'c' :** cnt = [0, 1, 1, ..., 0]

k != 0, so still no valid substring yet.

### Iteration 3:
**Current character :** 'c' (at index 2)

'c' exists in word2 (v['c' - 'a'] = 1), but its count in the window (cnt['c' - 'a'] = 1) is already equal to what\u2019s required in word2. So, we don\u2019t change k.

**Update cnt for 'c' :** cnt = [0, 1, 2, ..., 0]

Still, k != 0, so no valid substring yet.

### Iteration 4:
**Current character :** 'a' (at index 3)

'a' exists in word2 (v['a' - 'a'] = 1), and its count in the window (cnt['a' - 'a'] = 0) is less than in word2. We decrement k by 1:
k = 0

**Update cnt for 'a' :** cnt = [1, 1, 2, ..., 0]

## Now, k == 0, meaning the window from start = 0 to i = 3 forms a valid substring.

We calculate the number of valid substrings starting at start = 0 and ending at or after i = 3:

The total length of word1 is 4. Therefore, there is 4 - 3 = 1 valid substring: "bcca".

**Increment c by 1 :** c = 1

## Now, we shrink the window by moving start to the right and updating counts.

The leftmost character is 'b'. Reduce the count of 'b' in cnt:
cnt = [1, 0, 2, ..., 0]

Since we reduced the count of 'b' below its needed count in word2, we increment k by 1:
k = 1

Move start to 1.

## Final Answer:
After processing all characters in word1, the total number of valid substrings is 1.

# Code
```cpp []
long long validSubstringCount(string s1, string s2){
        vector<int> v(26,0);
        for(char c : s2){
            v[c-'a']++;
        }

        vector<int> cnt(26, 0);
        int start=0, k=s2.length();
        long long c=0;

        for(int i=0;i<s1.length();i++){
            char curr=s1[i];

            if(v[curr-'a']>0){
                if(cnt[curr-'a']<v[curr-'a']){
                    k--;
                }
            }

            cnt[curr-'a']++;

            while(k==0){
                c+=s1.length()-i;

                char pre=s1[start];
                cnt[pre-'a']--;

                if(v[pre-'a']>0  and cnt[pre-'a']<v[pre-'a']){
                    k++;
                }

                start++;
            }
        }

        return c;
    }
```

```Python []
def validSubstringCount(self,word1, word2) :
    v = [0] * 26
    for c in word2:
        v[ord(c) - ord('a')] += 1

    cnt = [0] * 26
    start = 0
    k = len(word2)
    count = 0

    for i in range(len(word1)):
        curr = word1[i]
        if v[ord(curr) - ord('a')] > 0:
            if cnt[ord(curr) - ord('a')] < v[ord(curr) - ord('a')]:
                k -= 1
            
        cnt[ord(curr) - ord('a')] += 1

        while k == 0:
            count += len(word1) - i
            pre = word1[start]
            cnt[ord(pre) - ord('a')] -= 1
            if v[ord(pre) - ord('a')] > 0 and cnt[ord(pre) - ord('a')] < v[ord(pre) - ord('a')]:
                k += 1
            start += 1

        return count
```

```Java []
public static long validSubstringCount(String word1, String word2) {
        int[] v = new int[26];
        for (char c : word2.toCharArray()) {
            v[c - 'a']++;
        }

        int[] cnt = new int[26];
        int start = 0;
        int k = word2.length();
        long count = 0;

        for (int i = 0; i < word1.length(); i++) {
            char curr = word1.charAt(i);
            if (v[curr - 'a'] > 0) {
                if (cnt[curr - 'a'] < v[curr - 'a']) {
                    k--;
                }
            }

            cnt[curr - 'a']++;

            while (k == 0) {
                count += word1.length() - i;
                char pre = word1.charAt(start);
                cnt[pre - 'a']--;
                if (v[pre - 'a'] > 0 && cnt[pre - 'a'] < v[pre - 'a']) {
                    k++;
                }
                start++;
            }
        }

        return count;
    }
```

