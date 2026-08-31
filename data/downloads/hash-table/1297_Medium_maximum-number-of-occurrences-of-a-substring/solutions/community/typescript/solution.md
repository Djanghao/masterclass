# Java/Python/Typescript Sliding window Time Complexity: O(N * minSize) and Space Complexity: O(N)

**Author:** akashgond3112
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/4102703/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/4102703/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

Input: s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
Output: 2

Here's how the code works:

1. Initialize variables:
   - `n` is the length of the input string `s`, which is 9 in this case.
   - `substringFrequency` is a HashMap to store substrings that meet the conditions (i.e., have at most `maxLetters` distinct characters) and their frequencies.
   - `maxFreq` is a variable to keep track of the maximum frequency of valid substrings. Initialize it to 0.

2. Iterate through the string `s` using a sliding window of size `minSize`. The loop starts at index `i = 0` and goes up to `i = n - minSize`, which ensures that we consider all possible windows of size `minSize`.

3. For each window, extract the substring of length `minSize` starting from index `i`.

   - At the beginning, `i = 0`, so the first window is "aab."
   - Next, `i = 1`, so the window is "aba," and so on.

4. Within each window, calculate the number of distinct characters by iterating through the characters of the substring.

   - For "aab," there are two distinct characters ('a' and 'b'), which is less than or equal to `maxLetters` (2).

5. If the number of distinct characters in the substring is less than or equal to `maxLetters`, it's a valid substring. Increment its frequency in the `substringFrequency` map.

   - For "aab," it becomes: `substringFrequency = {"aab": 1}`

6. Update `maxFreq` if the current substring's frequency is greater than the current `maxFreq`.

   - In this case, `maxFreq` remains 0 because the frequency of "aab" is 1.

7. Continue this process for all possible windows of size `minSize`.

- For "aba," it is a valid substring, having less than equal to `maxLetters` distinct characters.
    -Will increase the SubstringFrequency in hashmap = {"aba": 1}.
- For "bab," it is a valid substring, having less than equal to `maxLetters` distinct characters.
    -Will increase the SubstringFrequency in hashmap = {"bab": 1}.
- For "abc," it's also not valid (three distinct characters).
- For "bca," it's also not valid (three distinct characters).
- For "aab," it is a valid substring, having less than equal to `maxLetters` distinct characters.
    - Will increase the SubstringFrequency in hashmap = {"aab": 2}.
The loop end at this window.

8. For each each window we are updating the frequency if the condition is staisfied.

9. After considering all possible windows, the code returns `maxFreq`, which is 2 in this case.

   - The valid substrings are "aab" with a frequency of 2.
   - Thus, the maximum frequency is 2.

So, the output of the code for the given input is indeed 2, as it correctly identifies "aab" and "aab" as valid substrings with the maximum frequency.

# Complexity
- Time complexity: The time complexity of this code is determined by the following factors:

- Iterating through the string s using a sliding window of size minSize. This loop runs from i = 0 to i = n - minSize, where n is the length of the input string s. The loop iterates once for each window, and each iteration involves extracting a substring and checking the number of distinct characters. Therefore, the time complexity of this part is O(N * minSize), where N is the length of the input string.

- The operations inside the loop, such as extracting substrings, checking the number of distinct characters, and updating the substringFrequency map, all have constant time complexity for each iteration.

Overall, the dominant factor in the time complexity is the first part, which results in a time complexity of O(N * minSize).

- Space complexity: The space complexity of this code is determined by the space used for data structures:

- substringFrequency is a HashMap used to store valid substrings and their frequencies. In the worst case, where all substrings are unique, this map can have up to N entries (one for each substring of length minSize). Therefore, the space complexity for this map is O(N).

- Other variables and data structures used in the code, such as maxFreq, n, and temporary variables, have constant space complexity and do not significantly impact the overall space complexity.

# Code
**Java**
```
class Solution {
    public int maxFreq(String s, int maxLetters, int minSize, int maxSize) {
        int n = s.length();
        Map<String, Integer> substringFrequency = new HashMap<>();
        int maxFreq = 0;

        for (int i = 0; i <= n - minSize; i++) {
            String substring = s.substring(i, i + minSize);
            Set<Character> uniqueChars = new HashSet<>();
            int distinctChars = 0;

            for (char c : substring.toCharArray()) {
                if (!uniqueChars.contains(c)) {
                    distinctChars++;
                    uniqueChars.add(c);
                }
            }

            if (distinctChars <= maxLetters) {
                int frequency = substringFrequency.getOrDefault(substring, 0) + 1;
                substringFrequency.put(substring, frequency);
                maxFreq = Math.max(maxFreq, frequency);
            }
        }

        return maxFreq;
    }
}
```
**Python**
```
class Solution(object):
    def maxFreq(self, s, maxLetters, minSize, maxSize):
        """
        :type s: str
        :type maxLetters: int
        :type minSize: int
        :type maxSize: int
        :rtype: int
        """
        n = len(s)
        substring_frequency = {}
        max_freq = 0
        i = 0

        while i <= n - minSize:
            sub_string = s[i: i + minSize]
            unique_chars = set()
            distinct_chars = 0

            for c in sub_string:
                if c not in unique_chars:
                    distinct_chars += 1
                    unique_chars.add(c)

            if distinct_chars <= maxLetters:
                substring_frequency[sub_string] = substring_frequency.get(sub_string, 0) + 1
                max_freq = max(max_freq, substring_frequency[sub_string])

            i += 1

        return max_freq
        
```
**TypeScript**
```
function maxFreq(s: string, maxLetters: number, minSize: number, maxSize: number): number {
    let n: number = s.length;
    const substringFrequency: Map<String, number> = new Map();
    let maxFreq: number = 0;

    for (let i: number = 0; i <= n - minSize; i++) {
        let substring: String = s.substring(i, i + minSize);
        let uniqueChars: Set<any> = new Set<any>();
        let distinctChars: number = 0;

        let final_arr = substring.split('');
        for (const c of final_arr) {
            if (!uniqueChars.has(c)) {
                distinctChars++;
                uniqueChars.add(c);
            }
        }

        if (distinctChars <= maxLetters) {
            substringFrequency.set(substring, (substringFrequency.get(substring) || 0) + 1);
            maxFreq = Math.max(maxFreq, substringFrequency.get(substring)!);
        }
    }

    return maxFreq;
}
```