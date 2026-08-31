# wont find a straight forward solution.

**Author:** Abhishekkant135
**Votes:** 91
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5032157/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/5032157/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
# BOISS JUST UPVOTE , I WORK SO HARD WRITNG THIS OUT AND YOU SHAMELESS PEOPLE SONT EVEN LIKE THE POST . PLS UPVOTE IT.
# Approach
<!-- Describe your approach to solving the problem. -->



**Steps:**

1. **Initializing Variables:**
   - `int ans = 0`: Initializes a variable `ans` to 0 to accumulate the total beauty score.

2. **Iterating Through Substrings:**
   - The outer `for` loop iterates through each starting index `i` from 0 to the length of the string (`s.length()`), considering all possible substrings.
     - `int[] freq = new int[26]`: Initializes a frequency array `freq` of size 26 to store the character frequencies for the current substring.
     - The inner `for` loop iterates through each character `j` from the current starting index `i` to the end of the string (`j < s.length()`), building the substring.
       - `char ch = s.charAt(j)`: Gets the character at index `j` from the string `s`.
       - `freq[ch - 'a']++`: Increments the count for the current character (`ch`) in the `freq` array. This effectively tracks character frequencies within the current substring.

3. **Finding Minimum and Maximum Frequencies:**
   - `int max = Integer.MIN_VALUE`: Initializes a variable `max` to the minimum possible integer value to find the most frequent character's count.
   - `int min = Integer.MAX_VALUE`: Initializes a variable `min` to the maximum possible integer value to find the least frequent character's count (excluding non-existent characters).
   - The inner `for` loop iterates through the frequency array `freq`.
     - `if (freq[k] > 0)`: Checks if the frequency count for the character at index `k` (referring to the character 'a' + k) is greater than 0. This ensures we only consider characters that exist in the substring.
       - `min = Math.min(min, freq[k])`: Updates `min` to the smaller value between the current minimum (`min`) and the current character's frequency (`freq[k]`). This effectively finds the least frequent character's count.
       - `max = Math.max(max, freq[k])`: Updates `max` to the larger value between the current maximum (`max`) and the current character's frequency (`freq[k]`). This effectively finds the most frequent character's count.

4. **Calculating and Accumulating Beauty Score:**
   - `ans += max - min`: Calculates the beauty score for the current substring by subtracting the minimum frequency (`min`) from the maximum frequency (`max`). This accounts for the difference between the most and least frequent characters.
   - The result (`max - min`) is added to the `ans` variable, accumulating the beauty score for all processed substrings so far.

5. **Returning the Result:**
   - After iterating through all possible substrings, the `ans` variable holds the total sum of beauty scores for all substrings of the input string `s`. The code returns `ans`.

.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- The nested loops iterate through all substrings. In the worst case (considering all characters are unique), the total number of substrings is n*(n+1)/2, where n is the string length. This results in a time complexity of O(n^3) as we have to run through the 26 box of array or O(N square) I have DOUBT.tell me what you think in the comments.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

- The space complexity is O(1) due to the constant size of the `freq` array (independent of the string length). However, if the characters are not guaranteed to be lowercase alphabets, the frequency array might need to be adjusted, potentially affecting the space complexity.
# Code
```
class Solution {
    public int beautySum(String s) {
        int ans=0;
        for(int i=0;i<s.length();i++){
            int [] freq=new int [26];
            for(int j=i;j<s.length();j++){
                char ch=s.charAt(j);
                freq[ch-'a']++;
                int max=Integer.MIN_VALUE;
                int min=Integer.MAX_VALUE;
                for(int k=0;k<26;k++){
                    if(freq[k]>0){
                        min=Math.min(min,freq[k]);
                        max=Math.max(max,freq[k]);
                    }
                }
                ans+=max-min;
            }
        }
        return ans;
    }
}
```