# C# Sliding Window Solution Explained with Clean Code

**Author:** woi55
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5547105/](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5547105/)

---

# Intuition
1. Start with a simpler problem like: How many substrings have exactly $k$ zeroes? This is a simple sliding window problem. Just count the strings with exactly $k$ zeroes.

2. Now make it harder: How many substrings have $k$ zeroes and atleast $k$ ones? Count the arrays that are atleast $2k$ in length with exactly $k$ zeroes.

3. Now make it harder: How many substrings have $k$ zeroes and atleast $k^2$ ones? Count the arrays that are atleast $k^2 + k$ in length with exactly $k$ zeroes.

4. Now make it harder: How many substrings have atleast a number of ones equal to the square of the number of zeroes? (thats this problem) 

Why track zeroes you may ask? For this question a valid substring can only have at most $sqrt(n)$ zeroes compared with $n$ ones. Since question 4 is just the sum of question 3 accross all possible zeroes (constraint puts this at 0-200 zeroes) this gives us a time complexity of $O(nsqrt(n))$.

# Approach
The basic gist is to iterate over the possible number of zeroes ($k$) and then iterate through the string and find all substrings that have exactly that $k$ zeroes and are atleast $k^2 + k$ in length. 

Track the length ($l$) of the substring with $k$ zeroes and the length till the leftmost of the $k$ zeroes ($m$).

number of valid substrings ending at position $r$ is $max(0, l - max(m, k^2 + k))$

# Complexity
- Time complexity:
$O(nsqrt(n))$

- Space complexity:
$O(sqrt(n))$

# Code
```
public class Solution {
    public int NumberOfSubstrings(string s) {
        int numSub = 0;
        int minLength;
        Queue<int> zeroes = new Queue<int>();
        for (int numZeroes = 0; numZeroes <= 200; ++numZeroes) {
            minLength = numZeroes * numZeroes + numZeroes - 1;
            if (minLength == -1) {
                minLength = 0;
            }
            zeroes.Clear();
            for (int r = 0, l = 1, m = 0; r < s.Length; ++r, ++l) {
                if (s[r] == '0') {
                    zeroes.Enqueue(r);
                }
                if (numZeroes < zeroes.Count) {
                    l = r - zeroes.Dequeue();
                }
                if (numZeroes > 0 && zeroes.Count > 0) {
                    m = r - zeroes.Peek();
                } else {
                    m = 0;
                }
                if (zeroes.Count == numZeroes) {
                    numSub += Math.Max(0, l - Math.Max(m, minLength));
                }
            }
        }
        return numSub;
    }
}
```