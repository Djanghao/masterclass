# C++ . Perfect Explanation with Intuition.

**Author:** gaurav_17_18
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5972472/](https://leetcode.com/problems/find-the-original-typed-string-ii/solutions/5972472/)

---

# Intuition
The first thoughts were the time complexities that neither n * k will work. And suddenly I see that if I somehow divide into segments . Like for aabbcccd = {2,2,3,1};
So, I know that total_options_for_me_for_any_length_string = 2 * 2 * 3 * 1 (as we are not taking empty segment)

So, If I want for length >= k, if I compute for length < k, and then subtract from the total that we have got. So, it would be easier.

Okay , so when I see I have multiple options to select from, either 1 or 2 or 3 and so on from a segment, I think I can use DP.

LET'S define dp[i][x] as after considering the first i segments, x length has been formed

THis state would have come from dp[i-1][x-1] , dp[i - 1] [x - 2] , ....
dp[i - 1][x - x[i]];

For i we have to loop upto minimum of number of segments (let's say a or k because I am selecting atleast one from each segment, so more than k segments won't give me a string of length lesser than k)



# Approach
<!-- Describe your approach to solving the problem. -->

Seeing the mentioned transition, I should be able to think of the prefix sum directly.

base case will be very simple. what if i have only one segment.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

O(k ^ 2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

O(k)

# Code
```cpp []
class Solution {
public:
    int possibleStringCount(string word, int k) {
        int n = word.length();
        long long total = 1;
        const long long mod = 1e9 + 7;
        vector<int> segments;
        int cnt = 1;

        // Step 1: Segment consecutive identical characters in `word`
        // For example, if word = "aaabbc", segments will store [3, 2, 1]
        for (int i = 1; i < n; i++) {
            if (word[i] != word[i - 1]) {
                segments.push_back(cnt);  // Store the length of current segment
                cnt = 1;  // Reset count for new segment
            } else {
                cnt++;  // Increment count for consecutive character
            }
        }
        segments.push_back(cnt);  // Add the last segment count

        // Step 2: Calculate `total`, the product of all segment sizes (modulo `mod`)
        // This represents the total possible combinations considering each segment individually
        for (int i = 0; i < segments.size(); i++) {
            total = (total * segments[i]) % mod;
        }

        // Step 3: Initialize the first row of dynamic programming table `prev_row`
        // `prev_row[x]` represents the number of ways to form a valid substring
        // ending with `x` characters from the first segment.
        vector<int> prev_row(k + 1, 0);
        for (int x = 1; x <= min(segments[0], k - 1); x++) {
            prev_row[x] = 1;  // Set ways to 1 for initial segment
        }

        // Initialize temporary vectors for calculations in later segments
        vector<int> curr_row(k + 1, 0);   // Stores ways for the current segment
        vector<int> prefix(k + 1, 0);     // Stores cumulative sums for efficient range calculations

        int a = segments.size();  // Number of segments
        // Step 4: Process each subsequent segment up to `k` segments (to avoid over-calculation)
        for (int i = 1; i < min(a, k); i++) {     
            // Compute cumulative sums in `prefix` for `prev_row`
            prefix[0] = prev_row[0];
            for (int x = 1; x <= k; x++) {
                prefix[x] = (prefix[x - 1] + prev_row[x]) % mod;  // Prefix sum mod `mod`
            }

            // Calculate current row `curr_row` using prefix sums
            for (int x = 1; x <= k; x++) {
                int prev_point = max(x - segments[i], i);
                // Calculate ways for current position x using the prefix array
                curr_row[x] = (prefix[x - 1] - prefix[prev_point - 1] + mod) % mod;
            }
            prev_row = curr_row;  // Move current row to previous row for next iteration
        }

        // Step 5: Calculate `t2`, which is the sum of possible substrings of length `k`
        long long t2 = 0;
        for (int i = 0; i < k; i++) {
            t2 = (t2 + prev_row[i]) % mod;
        }

        // Step 6: Return the result as (total - t2) modulo `mod`
        // `total` is all combinations, and `t2` removes those not meeting the criteria
        return (total - t2 + mod) % mod;
    }
};


```