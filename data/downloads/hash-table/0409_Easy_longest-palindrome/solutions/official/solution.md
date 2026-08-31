# Official Solution

**Link:** [https://leetcode.com/problems/longest-palindrome/solution/](https://leetcode.com/problems/longest-palindrome/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find the length of the longest palindrome using the letters from a given string `s`. 

To determine when a letter from the given string is eligible to be a part of the longest palindrome, let's examine our example palindromes:
1. "acbbca": in a palindrome of even length, each character must appear an even number of times.
2. "madam": in a palindrome of odd length, a single additional character may be counted for the center character. 

---

### Approach 1: Greedy Way (Hash Table)

#### Intuition

To determine the longest possible length of the palindrome, we need to find out how many times each character appears in `s`. A good way to count the frequency of each character is by using a hash table, where each character is a key and its frequency is the value.

Hash tables are a data structure that allows for the efficient storage and retrieval of key-value pairs. For more information about hash tables, refer to the [HashMap Explore Card](https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/).

Consider the example string `s` = `cabcacdd`.

If we count the frequencies of each character in a hash table, we get the following table:

| Character | Frequency |
| :------: | :-------:  |
| a   | 2  |
| b   | 1  |
| c   | 3  |
| d   | 2  |

To form the longest palindrome, we take the maximum number of even occurrences of each character. In this case, we can count all occurrences of `a` and `d`, and 2 occurrences of `c`. 

With one occurrence each of `b` and `c` remaining, we can further increase the length of the palindrome by adding a center character. 

#### Algorithm

- Initialize a map `frequencyMap` to store the frequency of each character.
- Count the frequency of each character in `s`.
- Initialize variables:
  - `res` to store the length of the longest palindrome.
  - `hasOddFrequency` flag to check whether a character with odd frequency exists.
- Loop through the frequencies `freq` of each character:
  - If `freq` is even, add it to `res`.
  - If the `freq` is odd, add `freq-1` to `res` and set `hasOddFrequency` to `true`.
- If `hasOddFrequency` is `true`, return `res+1`, otherwise, return `res`.

#### Implementation

<iframe src="https://leetcode.com/playground/DeaL9XJB/shared" frameBorder="0" width="100%" height="500" name="DeaL9XJB"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given string `s`.

- Time complexity: $O(n)$

    The algorithm goes through the characters of `s` twice: once to count their frequencies and once to construct the palindrome. Since hash table operations like inserting and updating take constant time ($O(1)$), the time complexity of the algorithm is $O(2 \cdot n)$, which simplifies to $O(n)$.

- Space complexity: $O(1)$

    The algorithm uses a hash table to store the frequency of characters. Given that there can be at most $52$ unique characters in `s`, the space complexity is $O(52)$, which can be simplified to $O(1)$ space.

---

### Approach 2: Greedy Way (Optimized)

#### Intuition.

Notice that every character with an odd frequency has one unused occurrence in our longest palindrome, except for one character that can be used as the center. Like our previous approach, we will use a hash table to count the number of occurrences of each letter and a variable,`oddFreqCharsCount`, to track the number of letters with an odd number of occurrences. For example, in a string where the letter `a` appears 3 times, the letter `b` appears 7 times, and all other characters appear an even number of times, the count of `oddFreqCharsCount` is 2. Whenever we increase the frequency of a character in our hash table, we check if the new frequency is odd. If it is, we increment `oddFreqCharsCount`. If it isn't, we decrease `oddFreqCharsCount` to remove it from the count of characters with an odd frequency.

The following slideshow demonstrates the optimized greedy approach:

!?!../Documents/409/map_slideshow.json:1182,902!?!

A non-zero value of `oddFreqCharsCount` indicates that at least one letter is left unmatched. We can use this letter to form the center of a odd length palindrome, thereby increasing the length of the palindrome by one. 

Now the length of the longest palindrome can be determined by subtracting the count of characters with odd frequencies from the total length of the given string, and adding one unpaired character for the center if one exists.

> The hash table used to store the frequencies of each character can be replaced with an integer array, where each index corresponds to a character's ASCII value. For our purposes, we can create an array of size 52: the first 26 indices represent the characters 'A' to 'Z', and the next 26 represent 'a' to 'z'. This approach is slightly more space-efficient than using a hash table, as hash tables need to store both the characters and the frequencies and often involve additional overhead from internal data structures used to handle hash collisions.

#### Algorithm

- Initialize a hash table `frequencyMap` to store the frequency of each character.
- Initialize a variable `oddFreqCharsCount` to store the number of characters with odd frequency of occurrence.
- Count the frequency of each character `c` in `s`.
  - If after addition, the frequency of `c` becomes odd, increment `oddFreqCharsCount`.
  - Else, decrement `oddFreqCharsCount`.
- If the `oddFreqCharsCount` is greater than zero, return the length of the string minus `oddFreqCharsCount`, plus one.
- Else, return the length of `s`.

#### Implementation

<iframe src="https://leetcode.com/playground/nrb9y96V/shared" frameBorder="0" width="100%" height="500" name="nrb9y96V"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given string `s`.

* Time complexity: $O(n)$

    The algorithm loops over the entire string `s` only once. Since hash table operations like inserting and updating take constant time ($O(1)$), the time complexity of the algorithm is $O(2 \cdot n)$, which simplifies to $O(n)$.

* Space complexity: $O(1)$

    The only data structure used in our algorithm is a hash table, which stores the frequencies of at most $52$ unique characters. Thus, the space complexity of the algorithm is $O(52)$, which can be simplified to $O(1)$.

---

### Approach 3: Greedy Way (Hash Set)

#### Intuition

We can also create the longest palindrome by simulating the matching process and counting the number of characters that we can match.

Let's loop over the string `s` and track all the characters encountered at each step. For each character, we check if it matches any previously seen character. If it does, we add these two characters to our palindrome and remove the matched character from our tracking collection. If there are unmatched characters remaining at the end, we can use any one as the middle character.

We can use a hash set to track and count our letter pairings as we loop through the string.

Hash sets are an efficient way to store and repeatedly query elements. A hash set is a data structure that stores unique elements, providing efficient insertions, deletions, and lookups. It is implemented using a hash table, which ensures that operations average $O(1)$ time complexity. For more detailed information on hash sets and their applications, check out LeetCode's [Hash Set Explore Card](https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/).

As we loop through the string `s`, we store each character in a hash set. If we encounter a character that matches a letter already in the set, we know we can pair it.  We remove that letter from the set and count these two letters as part of our palindrome.

The following slideshow illustrates the process of matching characters in the set:

!?!../Documents/409/set_slideshow.json:1102,802!?!

At the end of this process, if the hash set isn't empty, it means we have some unmatched characters. We can use one of these unmatched characters to increase the length of the palindrome by one, making it the longest possible palindrome from the given string.

#### Algorithm

- Initialize a set `characterSet` to store a running collection of characters.
- Initialize a variable `res` to store our required answer.
- Loop over each character `c` of the string `s`:
  - If `characterSet` already contains `c`, remove `c` from the set and add 2 to `res`.
  - Else, add `c` to `characterSet`.
- If `characterSet` is not empty, increment `res`.
- Return `res`, which holds the length of the longest palindrome.

#### Implementation

<iframe src="https://leetcode.com/playground/ifUEC382/shared" frameBorder="0" width="100%" height="500" name="ifUEC382"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given string `s`.

- Time complexity: $O(n)$

    The algorithm loops over the entire string only once, which takes $O(n)$ time. All insert, query and delete operations on the set takes constant time, so the time complexity of the algorithm remains $O(n)$.

- Space complexity: $O(1)$

    The maximum number of unique characters in the string is 52 (considering both uppercase and lowercase English letters). Since 52 is a constant number, the space complexity of the set is $O(52)$, which simplifies to $O(1)$.

---