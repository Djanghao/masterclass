# Longest Palindromic Substring in Erlang

**Author:** dwish24
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/5762847/](https://leetcode.com/problems/longest-palindromic-substring/solutions/5762847/)

---

# Intuition
To find the longest palindromic substring in a given string, we can leverage the concept of expanding around potential centers. Each character and each pair of consecutive characters in the string can be a center of a palindrome. By expanding outward from each center, we can determine the length of the palindrome centered at that point.

# Approach
1. **Initialize:** We start by iterating over each possible center in the string. Each character can be the center of an odd-length palindrome, and each pair of consecutive characters can be the center of an even-length palindrome.

2. **Find Palindrome:** For each center, use a helper function to expand outward as long as the characters at the current expansion are equal. This will help us find the longest palindrome for that center.

3. **Update Best Palindrome:** Maintain a record of the best (longest) palindrome found so far. Update this record whenever a longer palindrome is found.

4. **Return Result:** Once all centers have been checked, extract and return the longest palindromic substring based on the recorded start position and length.

# Complexity
- **Time complexity:** $O(n^2)$. We check each possible center and expand outward, leading to a quadratic time complexity in the worst case.

- **Space complexity:** $O(1)$. The algorithm only uses a constant amount of extra space for variables and does not require additional space proportional to the input size.

# Code
```erlang []
-export([longest_palindrome/1]).

-spec longest_palindrome(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
longest_palindrome(S) ->
    Length = byte_size(S),
    case Length of
        0 -> <<>>; % Return empty binary if input is empty
        _ ->
            % Initialize variables for the best palindrome
            {Start, Len} = lists:foldl(
                fun(Index, {BestStart, BestLen}) ->
                    % Find the longest palindrome for odd and even length centers
                    {NewStart1, NewLen1} = find_longest_palindrome(S, Index, Index),
                    {NewStart2, NewLen2} = find_longest_palindrome(S, Index, Index + 1),
                    % Choose the longer of the two found palindromes
                    case NewLen1 >= NewLen2 of
                        true  -> update_best(BestStart, BestLen, NewStart1, NewLen1);
                        false -> update_best(BestStart, BestLen, NewStart2, NewLen2)
                    end
                end,
                {0, 0}, % Initial best palindrome start and length
                lists:seq(0, Length - 1) % Iterate through all positions
            ),
            % Extract the longest palindromic substring
            binary:part(S, Start, Len)
    end.

% Helper function to find the longest palindrome around the center
-spec find_longest_palindrome(S :: unicode:unicode_binary(), L :: integer(), R :: integer()) -> {integer(), integer()}.
find_longest_palindrome(S, L, R) ->
    Length = byte_size(S),
    case (L >= 0 andalso R < Length andalso binary:part(S, L, 1) =:= binary:part(S, R, 1)) of
        true ->
            find_longest_palindrome(S, L - 1, R + 1);
        false ->
            {L + 1, R - L - 1}
    end.

% Helper function to update the best palindrome found so far
-spec update_best(BestStart :: integer(), BestLen :: integer(), NewStart :: integer(), NewLen :: integer()) -> {integer(), integer()}.
update_best(BestStart, BestLen, NewStart, NewLen) ->
    case NewLen > BestLen of
        true  -> {NewStart, NewLen};
        false -> {BestStart, BestLen}
    end.
```