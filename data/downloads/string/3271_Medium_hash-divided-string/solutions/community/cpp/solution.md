# Easy Brute Force Approach

**Author:** MainFrameKuznetSov
**Votes:** 6
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5716167/](https://leetcode.com/problems/hash-divided-string/solutions/5716167/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
You are given a string s of length n and an integer k, where n is a multiple of k. Your task is to hash the string s into a new string called result, which has a length of n/k.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Loop Over Substrings:
    - The outer loop runs from 0 to the length of s in steps of k, processing each substring of length k separately.

2. Calculate Hash Value:
    - For each substring of length k, we initialize sum to 0 and calculate the hash value for each character by subtracting 'a' from the character. This gives the index of the character in the alphabet (0-based). We then add this value to sum.

3. Compute the Hashed Character:
    - After calculating the total sum for a substring, we compute the remainder when sum is divided by 26 using sum % 26. This remainder (sum) corresponds to a character in the English lowercase alphabet.

4. Append to Result:
    - Convert the $sum$ to a character by adding 'a' and append it to the result string ans.

# Example

Input:
s = "abcdefghi", k = 3

Output:
"beh"

Explanation:

Divide the String:

Divide s into substrings of length k = 3: ["abc", "def", "ghi"].
Process Each Substring:

$For$ $"abc"$:
Hash values: $a\u21920$, $b\u21921$, $c\u21922$
Sum: 0 + 1 + 2 = 3
3 % 26 = 3 \u2192 $Corresponding$ $character:$ $'d'$

$For$ $"def"$:
Hash values: $d\u21923$,$e\u21924$,$f\u21925$
Sum: 3 + 4 + 5 = 12
12 % 26 = 12 \u2192 $Corresponding$ $character:$ $'m'$

$For$ $"ghi"$:
Hash values: $g\u21926$,$h\u21927$,$i\u21928$
Sum: 6 + 7 + 8 = 21
21 % 26 = 21 \u2192 $Corresponding$ $character$: $'v'$

$Result:$
Concatenate the characters $'d', 'm', 'v'$ to form the result $"dmv"$.

# Complexity
- Time complexity:- $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    string stringHash(string s, int k) {
        string ans="";
        for(int i=0;i<s.size();i+=k)
        {
            int sum=0;
            for(int j=0;j<k;++j)
                sum+=s[i+j]-'a';
            sum=sum%26;
            ans+=(char)(sum+'a');
        }
        return ans;
    }
};
```