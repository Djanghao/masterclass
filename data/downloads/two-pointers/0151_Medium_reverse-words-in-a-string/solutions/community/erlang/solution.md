# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/3934164/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/3934164/)

---

# Intuition
Ask GPT-4

# Approach
Ask GPT-4

# Complexity
- Time complexity:
I have no idea. GPT-4 solved it for me.

- Space complexity:
I have no idea. GPT-4 solved it for me.

# Code
```
-spec reverse_words(S :: binary()) -> binary().
reverse_words(S) ->
    % Convert the binary to a list
    SList = binary_to_list(S),

    % Split the string into a list of words
    Words = string:lexemes(SList, " "),

    % Reverse the order of the words
    ReversedWords = lists:reverse(Words),

    % Join the reversed words into a string with a single space between each word
    ReversedString = string:join(ReversedWords, " "),

    % Convert the list back to a binary
    list_to_binary(ReversedString).
```