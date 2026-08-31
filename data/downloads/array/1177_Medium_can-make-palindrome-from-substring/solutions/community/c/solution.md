# C++ solution using prefix sum with explaination

**Author:** Maitreya47
**Votes:** 19
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/1340842/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/1340842/)

---

There are 2 parts to solve the question:

**Part 1:**
First to check if the substring can be made into a palindrome, given k tries. Here we actually dont compare the substring, but do computations on the frequency of each character in the substring. If a character appears even number of times, surely, we can have half of them on left and half of them on right side of the palindrome, hence characters with even frequency require 0 resets to contribute to a palindrome. Example freq of 'c' = 4 -> .... cc ....... cc .... we can create palindrome like this.
Now, if there are odd numbers, we need to count them. If,
odd_numbers > (k * 2) + (total number of characters in substring)%2
then we cannot create a palindromic string even with k resets. 
Why is that so? Because with 1 reset, we can make 1 odd freq char equal to another. For example there are 1 a's, 2 b's and 3 c's in a substring, converting 1 c to 1 a makes 2 a's, 2 b's and 2 c's, hence a palindrome is possible from such characters and number of resets used in this case = 1 (c converted to a). Also, if total number of characters in a subtring are odd, we dont care for that one odd character that can appear in the middle of the subtring.

**Part 2:**
Initially I was creating a substring, counting the frequency of each character in it and check for the condition given above. It gave TLE as length of s and queries can be 10^5. So there is something known as prefix sum that we need to maintain. That will give us the frequency of characters in each substring, without having to calculate it again and again.
How to maintain this prefix sum? Imagine a string-> "abcbc"
[index: prefix_sum]
[0: (a=1), 1: (a=1, b=1), 2: (a=1, b=1, c=1), 3: (a=1, b=2, c=1), 4: (a=1, b=2, c=2)]
So we use a 2D vector to keep track of prefix sum. We traverse through all the characters in the string and store the updated vector in our 2D vector prefix. Also, dont forget to push_back empty vector at start- as that will be needed when the lower bound of your subtring will be at index 0.
Now when we are processing the queries, count the frequency of each character by doing:
prefix[hi][i]-prefix[lo][i] (If you notice this ultimately what we are doing for each index in the vector sub (representing the frequency of each character in the substring).
Atlast check the condition given in the part 1 and add true/false in the return vector.

```
class Solution {
public:
    vector<bool> canMakePaliQueries(string s, vector<vector<int>>& queries) {
        vector<bool> ret;
        vector<vector<int>> prefix;
        vector<int> temp(26, 0);
        prefix.push_back(temp);
        for(int i=0; i<s.length(); i++)
        {
            temp[s[i]-'a']++;
            prefix.push_back(temp);
        }
        for(int i=0; i<queries.size(); i++)
        {
            int hi = queries[i][1], lo = queries[i][0], k = queries[i][2];
            vector<int> sub = prefix[hi+1];
            int odd=0, sum=hi-lo+1;
            for(int j=0; j<26; j++)
            {
                sub[j] = sub[j] - prefix[lo][j];
                odd+=sub[j]%2;
            }
            bool t = (odd <= k*2 + sum%2);
            ret.push_back(t);
        }
        return ret;
    }
};
```
n = s.length()
Space complexity = O(26 * n (prefix) + 26 (temp) + 26 (sub) + n (ret)) = O(n)
Time complexity = O(n + n * 26) (1st and 2nd loop) = O(n)