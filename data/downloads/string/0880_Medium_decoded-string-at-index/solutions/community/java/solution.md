# 🚀100% || Reverse || Stack || Commented Code🚀

**Author:** MohamedMamdouh20
**Votes:** 255
**Link:** [https://leetcode.com/problems/decoded-string-at-index/solutions/4094710/](https://leetcode.com/problems/decoded-string-at-index/solutions/4094710/)

---

# Problem Description
The tasked is **decoding** an encoded string following specific **rules**. 
- The encoded string is read character by character, and actions are taken accordingly: 
    - letters are directly written to a tape,
    - digits determine how many times the current content of the tape is repeated. 
    
Given an encoded string and an integer `k`, you need to determine the `kth` letter (1-indexed) in the decoded string.

**Example:**
For a given encoded string `leet2code3` and `k = 10`.
 the decoded string is `leetleetcodeleetleetcodeleetleetcode`
the `10th` letter in the decoded string is `o`.

---


# Intuition
Hello There\uD83D\uDE00
Let's take a look on our today's unique problem\uD83D\uDE80

In our problem, we have an **encoded** string and we have to **decode** it then to find the `kth` character.
Seems Interesting.\uD83E\uDD29
The naive solution that can come in mind that we **first** encode the string by appending the **repeated** characters and then return the `kth` character.
like `leet2code3` and `k` = `10`.
we can intialize another vairable and construct the decoded string into it which will be `leetleetcodeleetleetcodeleetleetcode` then return `kth` character which is `o`.

This approach is **correct** but has one problem that it has **high** time complexity and will give you **time limit**.\uD83D\uDE14
Then how can we think out of box for this problem.\uD83D\uDCE6

The **valid** thing to think of is can we get the `kth` character without **storing** the **encoded** string?\uD83E\uDD14
Let's observe `leet2code3` and `k` = `10` example and see what happen to lengths when we traverse it.
```
1) string: l -> length: 1 
2) string: le -> length: 2
3) string: lee -> length: 3
4) string: leet -> length: 4
5) string: leetleet -> length: 8
6) string: leetleetc -> length: 9   
7) string: leetleetco -> length: 10
8) string: leetleetcod -> length: 11
9) string: leetleetcode -> length: 12
10)string: leetleetcodeleetleetcodeleetleetcode -> length: 36   
```

I think that we all **observed** something.\uD83E\uDD2F
The total encoded string is `leetleetcode-leetleetcode-leetleetcode`can be divided into three parts since the last character in the **decoded** string is `3`.
and because of that we have kind of **cycle** (this cycle feature is important in our problem).

asssume that we have different k.
```
k = 10 -> answer = o
k = 14 -> answer = e
k = 20 -> answer = t
k = 28 -> answer = t
```
The main **observation** to solve this problem is that we **multiply** string by some digit and `k` will always land in the **original** string

HOW TO GET K IF WE DON'T WANT TO ENCODE OUR STRING ?\uD83D\uDE20
if we have our string `leetleetcode` and number of multiplication `3` why don't we use **modulus** ?
```
length of encoded string = 36
length of desired string = 36 / 3 = 12 -> leetleetcode

k = 10 -> 10 % 12 = 10 -> o
k = 14 -> 14 % 12 = 2 -> e
k = 20 -> 20 % 12 = 8 -> t
k = 28 -> 28 % 12 = 4 -> t
``` 
Did you noticed how we always our final `k = (k % length of decoded string)`
this is the way to get the `kth` char without **encode** our string, only see the length of encoded string and take mod out of it.\uD83E\uDD2F

- and to do that we have two steps
    - **traverse** the whole string and get the **total length** of encoded string
    - **reverse traversing** the string and apply the two operations, **division** and **mod** to the length until we get `k`

let's take an example ?
string = `prob3slve4` , `k` = `31`
```
length of encoded string = ( 3 * 4 + 4 )* 4 = 64 
-without really encoding it-
```
now let's reverse traverse
string = `prob3slve4`

```
lentgh = 64, k = 31
at 10th char = 4 -> length = 64 / 4 = 16
k = 31 % 16 = 15
```
```
lentgh = 16, k = 15
at 9th char = e
length = 16 - 1 = 15
```
```
lentgh = 15, k = 15
at 8th char = v
k == length -> then our desire char is v
```

- this solution can be done using **two** approaches
  - **first** one by doint like the **intuition** exactly 
  - **second** one by using a **stack**

The **stack** solution can be little **tricky** but it is totally **like** the first one except for each char we traverse we are storing the size of the encoded string we have reached so far.
and when emptying the **stack** we are doing the **reverse travers**e and actually we won't need the division operation here since we have the **correct** lengths for all chars.

And this is the solution for our today problem I hope that you understood it\uD83D\uDE80\uD83D\uDE80

---

# Proposed Solutions
## 1. Reverse
- Initialize `decodedLength` to `0`, representing the **total length** of the decoded string.
- **Iterate** through each character in the input string.
    - If the character is a **digit**, update `decodedLength` by **multiplying** it with the digit.
    - If the character is a **letter**, **increment** `decodedLength`.
- **Traverse** the input string in **reverse** order.
- For each character:
    - If it's a **digit** adjust `decodedLength` and `k` accordingly.
    - If it's a **letter** Check if it's the `kth` character or if `k` is `0`.
        - If **yes**, **return** the character as a string.
        - If **not**, **decrement** decodedLength.

## Complexity
- **Time complexity:** $$O(N)$$
Since we are iterating over the string twice, one time to calculate lengths for each character in the encoded string and another time to get `kth` character then time complexity is `2*N` which is `O(N)`.
- **Space complexity:** $$O(1)$$
Since we are only storing couple of constant variables.
---

## 2. Stack
- Initialize a **stack** to store the lengths of characters in the decoded string.
- **Iterate** through each character in the encoded string.
    - If the character is a **digit**, **update** the length in the stack based on the digit.
    - If the character is a **letter**, **increment** the length in the stack.
- Traverse the character lengths in **reverse** order.
- For each character length:
    - Adjust `k` based on the current character length.
    - If `k` is `0` and the character is an alphabet letter, **return** it.
Move to the **previous** character length.

## Complexity
- **Time complexity:** $$O(N)$$
Since we are iterating over the string twice, one time to calculate `decodedLength` and another time to get `kth` character then time complexity is `2*N` which is `O(N)`.
- **Space complexity:** $$O(N)$$
Since we are storing the lengths if each character in a `stack` then the space complexity is `O(N)`

---


# Code
## 1. Reverse
```C++ []
class Solution {
public:
    std::string decodeAtIndex(std::string inputString, int k) {
        long long decodedLength = 0; // Total length of the decoded string
        for (auto character : inputString) {
            if (isdigit(character)) {
                // If the character is a digit, update the decoded length accordingly
                decodedLength *= character - '0';
            } else {
                // If the character is a letter, increment the decoded length
                decodedLength++;
            }
        }

        // Traverse the input string in reverse to decode and find the kth character
        for (int i = inputString.size() - 1; i >= 0; i--) {
            if (isdigit(inputString[i])) {
                // If the character is a digit, adjust the length and k accordingly
                decodedLength /= (inputString[i] - '0');
                k = k % decodedLength;
            } else {
                // If the character is a letter, check if it's the kth character
                if (k == 0 || decodedLength == k)
                    return string("") + inputString[i]; // Return the kth character as a string
                decodedLength--;
            }
        }

        return ""; // Return an empty string if no character is found
    }
};
```
```Java []
public class Solution {
    public String decodeAtIndex(String inputString, int k) {
        long decodedLength = 0; // Total length of the decoded string

        for (char character : inputString.toCharArray()) {
            if (Character.isDigit(character)) {
                // If the character is a digit, update the decoded length accordingly
                decodedLength *= (character - '0');
            } else {
                // If the character is a letter, increment the decoded length
                decodedLength++;
            }
        }

        // Traverse the input string in reverse to decode and find the kth character
        for (int i = inputString.length() - 1; i >= 0; i--) {
            char currentChar = inputString.charAt(i);

            if (Character.isDigit(currentChar)) {
                // If the character is a digit, adjust the length and k accordingly
                decodedLength /= (currentChar - '0');
                k %= decodedLength;
            } else {
                // If the character is a letter, check if it's the kth character
                if (k == 0 || decodedLength == k) {
                    return String.valueOf(currentChar); // Return the kth character as a string
                }
                decodedLength--;
            }
        }

        return ""; // Return an empty string if no character is found
    }
}
```
```Python []
class Solution:
    def decodeAtIndex(self, inputString: str, k: int) -> str:
        decoded_length = 0  # Total length of the decoded string

        for char in inputString:
            if char.isdigit():
                # If the character is a digit, update the decoded length accordingly
                decoded_length *= int(char)
            else:
                # If the character is a letter, increment the decoded length
                decoded_length += 1

        # Traverse the input string in reverse to decode and find the kth character
        for i in range(len(inputString) - 1, -1, -1):
            current_char = inputString[i]

            if current_char.isdigit():
                # If the character is a digit, adjust the length and k accordingly
                decoded_length //= int(current_char)
                k %= decoded_length
            else:
                # If the character is a letter, check if it's the kth character
                if k == 0 or decoded_length == k:
                    return current_char  # Return the kth character as a string

                decoded_length -= 1

        return ""  # Return an empty string if no character is found
```


---


## 2. Stack
```C++ []
class Solution {
public:
    string decodeAtIndex(string encodedString, int k) {
        stack<long long> characterLengths; // Stores the lengths of characters in the decoded string

        // Calculate lengths for each character in the encoded string
        characterLengths.push(0); // Start with 0 length

        for (size_t i = 0; i < encodedString.length(); ++i) {
            if (isdigit(encodedString[i])) {
                // If the character is a digit, update the length based on the digit
                long long length = characterLengths.top() * (encodedString[i] - '0');
                characterLengths.push(length);
            } else {
                // If the character is a letter, increment the length
                long long length = characterLengths.top() + 1;
                characterLengths.push(length);
            }
        }

        // Traverse the character lengths to decode and find the kth character
        size_t ln = characterLengths.size();
        while (!characterLengths.empty()) {
            k %= characterLengths.top(); // Adjust k based on the character length
            ln--;
            // If k is 0 and the character is an alphabet letter, return it
            if (k == 0 && isalpha(encodedString[ln - 1])) {
                return string(1, encodedString[ln - 1]);
            }

            // Move to the previous character length
            characterLengths.pop();
        }

        return ""; // Return an empty string if no character is found
    }
};
```
```Java []
class Solution {
    public String decodeAtIndex(String encodedString, int k) {
        Stack<Long> characterLengths = new Stack<>(); // Stores the lengths of characters in the decoded string

        // Calculate lengths for each character in the encoded string
        characterLengths.push(0L); // Start with 0 length

        for (int i = 0; i < encodedString.length(); i++) {
            char c = encodedString.charAt(i);
            if (Character.isDigit(c)) {
                // If the character is a digit, update the length based on the digit
                long length = characterLengths.peek() * (c - '0');
                characterLengths.push(length);
            } else {
                // If the character is a letter, increment the length
                long length = characterLengths.peek() + 1;
                characterLengths.push(length);
            }
        }

        // Traverse the character lengths to decode and find the kth character
        int ln = characterLengths.size();
        while (!characterLengths.isEmpty()) {
            k %= characterLengths.peek(); // Adjust k based on the character length
            ln--;
            // If k is 0 and the character is an alphabet letter, return it
            if (k == 0 && Character.isLetter(encodedString.charAt(ln - 1))) {
                return String.valueOf(encodedString.charAt(ln - 1));
            }

            // Move to the previous character length
            characterLengths.pop();
        }

        return ""; // Return an empty string if no character is found
    }
}
```
```Python []
class Solution:
    def decodeAtIndex(self, encodedString: str, k: int) -> str:
        character_lengths = [0]  # Stores the lengths of characters in the decoded string

        for i in range(len(encodedString)):
            if encodedString[i].isdigit():
                # If the character is a digit, update the length based on the digit
                length = character_lengths[-1] * int(encodedString[i])
                character_lengths.append(length)
            else:
                # If the character is a letter, increment the length
                length = character_lengths[-1] + 1
                character_lengths.append(length)

        # Traverse the character lengths to decode and find the kth character
        ln = len(character_lengths)
        while character_lengths:
            k %= character_lengths[-1]  # Adjust k based on the character length
            ln -= 1
            # If k is 0 and the character is an alphabet letter, return it
            if k == 0 and encodedString[ln - 1].isalpha():
                return encodedString[ln - 1]

            # Move to the previous character length
            character_lengths.pop()

        return ""  # Return an empty string if no character is found
```



![leet_sol.jpg](./images/0.jpeg)
