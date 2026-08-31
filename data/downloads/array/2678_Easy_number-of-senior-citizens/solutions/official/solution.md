# Official Solution

**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solution/](https://leetcode.com/problems/number-of-senior-citizens/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of strings called `details`. Each string in this array contains compressed information about a passenger, structured as follows:

![image showing how information is compressed](../Figures/2678/image1.png)

Our task is to extract the age of each passenger from the provided information and count the total number of passengers who are strictly over 60 years old.
    
---

### Approach 1: String Parsing

#### Intuition

To determine whether each passenger is a senior citizen, we need to find the age of every passenger. As illustrated above, the age is embedded as a two-digit number in the string at indices `11` and `12`. To extract these digits, we can use the `substring` method to isolate the two-digit age as a separate string.

Since we can't directly compare a string with an integer, we need to convert the extracted string into an integer. Fortunately, most modern programming languages provide built-in methods for parsing strings into integers.

We then increment a counter each time we find an age over 60. After processing all passengers, this counter will give us the final count of passengers over 60 years old.

#### Algorithm

- Initialize a variable `seniorCount` to `0`.
- Iterate through each string `passengerInfo` in the `details` array:
  - Extract the substring from index `11` to `13` (exclusive) from `passengerInfo`.
  - Convert this substring to an integer `age`.
  - Check if `age` is greater than `60`.
    - If true, increment `seniorCount` by `1`.
- Return `seniorCount`.

#### Implementation

<iframe src="https://leetcode.com/playground/BijhwCiM/shared" frameBorder="0" width="100%" height="395" name="BijhwCiM"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `details` array.

- Time complexity: $O(n)$

    The algorithm loops over each element of `details`, taking linear time. In each iteration, it creates a substring of the current element and parses it to an integer, each operation taking $O(15) = O(1)$ time. Finding a substring of a string and parsing a string are both linear time operations, which work well when each string has a fixed length of $15$. However, this solution becomes inefficient if the string lengths are much larger.
    
    Thus, the overall time complexity of the algorithm is $O(n)$.

- Space complexity: $O(1)$

    The algorithm only uses a few variables which take constant space. The space complexity remains constant. 

---

### Approach 2: Character-Based Extraction

#### Intuition

In Approach 1, we create a new substring and then convert that string into an integer. In Approach 2, we'll explore a way to eliminate the need for creating a substring by directly accessing the age-related characters at indices 11 and 12 using ASCII values. 

Every character value in the given string also represents a numeric value corresponding to the character’s ASCII code. If you are unfamiliar with ASCII, [this](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/editorial/) solution article covers it in depth. You can reference the second table on [this](https://www.ascii-code.com/) page for the ASCII codes representing ‘0’ to ‘9’.

We can directly access the integer values of the passenger’s ages without extracting them as substrings by performing some simple calculations using the character's ASCII value. For example, the ASCII character code for ‘7’ is 55. You’ll see that if we subtract the ASCII code for ‘0’, which is 48, we get the character’s numerical value of 7!

Keeping in mind that the character at the 11th index represents the tens place of the age and the character at the 12th represents the ones, we can reconstruct the age and check if it exceeds 60. If it does, we increment a counter. After the loop completes, the counter reflects the total number of senior citizens.

#### Algorithm
 
- Initialize a variable `seniorCount` to `0`.
- Iterate through each string `passengerInfo` in `details`:
  - Set `ageTens` as the difference between the ASCII values of the character at index `11` and `0`.
  - Set `ageOnes` as the difference between the ASCII values of the character at index `12` and `0`.
  - Calculate `age` by multiplying `ageTens` by 10 and adding `ageOnes`.
  - Check if `age` is greater than 60.
    - If it is, increment `seniorCount` by 1.
- Return `seniorCount` as the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/Ar2bj2dz/shared" frameBorder="0" width="100%" height="446" name="Ar2bj2dz"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `details` array. 

* Time complexity: $O(n)$

    The algorithm iterates over `details`, which takes linear time. All operations done on each element in `details` are $O(1)$. Thus, the overall time complexity of the algorithm is $O(n)$.

* Space complexity: $O(1)$

    The algorithm does not use any data structures which scale with input size. So, it's space complexity remains constant. 

---