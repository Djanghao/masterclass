# Python 🔥Java 🔥C++ 🔥Simple Solution 🔥Easy to Understand

**Author:** mangoip
**Votes:** 66
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/3738829/](https://leetcode.com/problems/substring-with-largest-variance/solutions/3738829/)

---

# An Upvote will be encouraging \uD83D\uDC4D

# Video Solution

# Search \uD83D\uDC49 `Substring With Largest Variance By Tech Wired`

# OR

# Click the link in my profile

# Intuition

- Initialize count1, count2, and max_variance to 0. These variables will keep track of the counts and the maximum variance encountered.

- Create a set of distinct characters from the input string s. This step ensures that we only consider unique characters for our pairs.

- Iterate over the characters in the string s twice:
a. First, iterate in the original order.
b. Then, iterate in the reverse order.

- For each pair of distinct characters (l1 and l2) from the set:
a. Reset count1 and count2 to 0.
b. Iterate over each character in the string s.

- Inside the inner iteration:
a. If the current character is equal to l1, increment count1.
b. If the current character is equal to l2, increment count2.

- Check if count1 is less than count2. If so, reset count1 and count2 to 0. This step ensures that the counts are only considered if count1 >= count2.

- If both count1 and count2 are greater than 0, calculate the variance (count1 - count2) and update max_variance if the calculated variance is greater than the current max_variance. This step keeps track of the maximum variance encountered so far.

- After completing the iteration for the current string order, reverse the string s for the next iteration. Reversing the string allows us to consider the pairs in both the original and reverse order.

- Finally, return the maximum variance (max_variance) found during the iterations.

```Python []
class Solution:
    def largestVariance(self, s: str) -> int:
        count1 = 0
        count2 = 0
        max_variance = 0
        
        # create distinct list of character pairs
        pairs = [(l1, l2) for l1 in set(s) for l2 in set(s) if l1 != l2]

        # run once for original string order, then again for reverse string order
        for runs in range(2):
            for pair in pairs:
                count1 = count2 = 0
                for letter in s:
                    # no reason to process letters that aren't part of the current pair
                    if letter not in pair:
                        continue
                    if letter == pair[0]:
                        count1 += 1
                    elif letter == pair[1]:
                        count2 += 1
                    if count1 < count2:
                        count1 = count2 = 0
                    elif count1 > 0 and count2 > 0:
                        max_variance = max(max_variance, count1 - count2)
                
            
            # reverse the string for the second time around
            s = s[::-1]
                
        return max_variance
```
```Java []
public class Solution {
    public int largestVariance(String s) {
        int count1 = 0;
        int count2 = 0;
        int maxVariance = 0;

        // Create a distinct set of character pairs
        HashSet<Character> distinctChars = new HashSet<>();
        for (char c : s.toCharArray()) {
            distinctChars.add(c);
        }

        // Run once for original string order, then again for reverse string order
        for (int runs = 0; runs < 2; runs++) {
            for (char l1 : distinctChars) {
                for (char l2 : distinctChars) {
                    if (l1 == l2) {
                        continue;
                    }
                    count1 = count2 = 0;
                    for (char letter : s.toCharArray()) {
                        if (letter == l1) {
                            count1++;
                        } else if (letter == l2) {
                            count2++;
                        }
                        if (count1 < count2) {
                            count1 = count2 = 0;
                        } else if (count1 > 0 && count2 > 0) {
                            maxVariance = Math.max(maxVariance, count1 - count2);
                        }
                    }
                }
            }

            // Reverse the string for the second time around
            s = new StringBuilder(s).reverse().toString();
        }

        return maxVariance;
    }
}
```
```C++ []

class Solution {
public:
    int largestVariance(string s) {
        int count1 = 0;
        int count2 = 0;
        int max_variance = 0;

        // Create a distinct set of character pairs
        unordered_set<char> distinct_chars(s.begin(), s.end());

        // Run once for original string order, then again for reverse string order
        for (int runs = 0; runs < 2; runs++) {
            for (char l1 : distinct_chars) {
                for (char l2 : distinct_chars) {
                    if (l1 == l2) {
                        continue;
                    }
                    count1 = count2 = 0;
                    for (char letter : s) {
                        if (letter == l1) {
                            count1++;
                        } else if (letter == l2) {
                            count2++;
                        }
                        if (count1 < count2) {
                            count1 = count2 = 0;
                        } else if (count1 > 0 && count2 > 0) {
                            max_variance = max(max_variance, count1 - count2);
                        }
                    }
                }
            }

            // Reverse the string for the second time around
            reverse(s.begin(), s.end());
        }

        return max_variance;
    }
};

```
# An Upvote will be encouraging \uD83D\uDC4D

