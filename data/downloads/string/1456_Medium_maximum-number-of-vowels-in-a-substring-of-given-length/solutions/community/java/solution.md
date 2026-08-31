# Java Simple Solution O(N) time complexity

**Author:** ndivyansh29
**Votes:** 28
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3487875/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3487875/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks to find the maximum number of vowels in any sub-string of length k in the given string s. To solve the problem, the solution uses a sliding window approach. We keep a window of size k and slide it through the string s to calculate the count of vowels in the current window. We maintain the maximum count of vowels found so far, which is the required answer.
# Approach
<!-- Describe your approach to solving the problem. -->
Initialize the variables n, maxVowels, and count to 0. n is the length of the input string s, maxVowels will store the maximum number of vowels found so far, and count will store the number of vowels in the current window of size k.

Create an array vowels of size 128 to store the count of vowels for each character. Set the value of vowels['a'], vowels['e'], vowels['i'], vowels['o'], and vowels['u'] to 1, and for all other characters, the value is 0.

Iterate from i = 0 to k-1 and calculate the number of vowels in the first window of size k. Update the count variable to store the number of vowels in the current window.

Set the value of maxVowels to count, as this is the maximum number of vowels in any sub-string of length k that ends at the kth position.

Iterate from i = k to n-1, sliding the window of size k through the input string s. Update the count variable by subtracting the count of the first character in the previous window and adding the count of the last character in the current window.

Update the maxVowels variable to store the maximum count of vowels found so far.

If the value of maxVowels equals k, we have found a sub-string that contains all k vowels, and we can return k.

Finally, return the value of maxVowels as the answer.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
    public int maxVowels(String s, int k) {
        int n = s.length();
        int maxVowels = 0;
        int count = 0;

        int[] vowels = new int[128];
        vowels['a'] = 1;
        vowels['e'] = 1;
        vowels['i'] = 1;
        vowels['o'] = 1;
        vowels['u'] = 1;

        for (int i = 0; i < k; i++) {
            count += vowels[s.charAt(i)];
        }

        maxVowels = count;
        for (int i = k; i < n; i++) {
            count += vowels[s.charAt(i)] - vowels[s.charAt(i - k)];
            maxVowels = Math.max(maxVowels, count);
            //System.out.println(Arrays.toString(vowels));
            if (maxVowels == k) {
                return maxVowels; 
            }
        }
        return maxVowels;
    }
}

```