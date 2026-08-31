# 🚀 Sorting & Cantor's Diagonal Argument || Explained Intuition 🚀

**Author:** MohamedMamdouh20
**Votes:** 42
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4292875/](https://leetcode.com/problems/find-unique-binary-string/solutions/4292875/)

---

# Problem Description

Write a function that takes an array of length `n` of **unique** **binary** strings, each of length `n`, as input. The task is to **find** and return a binary string of length `n` that does not **exist** in the given array. 
In case there are multiple valid answers, the function is allowed to return any of them.

- Constraints:
    - $n == nums.length$
    - $1 <= n <= 16$
    - $nums[i].length == n$
    - nums[i][j] is either '0' or '1'.
    - All the strings of nums are **unique**.

---



# Intuition

Hi there,\uD83D\uDE00

Let's take a look\uD83D\uDC40 on our today's problem.
In our today's problem, We have array of **binary** strings of size `n` and each string in it has length `n` and our task is to return any binary string og length `n` that doesn't **appear** in our array.\uD83E\uDD14

Seem pretty easy !\uD83D\uDCAA

We can notice that `n` isn't that large $1 <= n <= 16$ so there are at most `2^16` possible binary strings. Our **Brute Force** guy can be used here !\uD83D\uDCAA\uD83D\uDCAA
We can **generate** all **possible** strings and see when string of them doesn't exist then we can return it as an answer.\uD83E\uDD29
but we can try a neat solution using **Sorting**.\uD83E\uDD2F

### Sorting
Why not we **sort** the array then **initialize** pointer variable that **expects** the next element in sequence of binary strings and return that pointer if it doesn't match with current element in the array.... How ?\uD83E\uDD28

Let's see some examples
```
nums = ["111","011","001"]
Decimal = [7, 3, 1]
Sorted = [1, 3, 7]

Pointer = 0 
First element = 1 -> 1 != Pointer

Return 0 which is 000
```
```
nums = ["1110","0000", "0001", "1100"]
Decimal = [14, 0, 1, 12]
Sorted = [0, 1, 12, 14]

Pointer = 0 
First element = 0 -> 0 == Pointer

Pointer = 1
Second element = 1 -> 1 == Pointer

Pointer = 2
Third element = 12 -> 12 != Pointer

Return 2 which is 0010
```

Since the input array is **smaller** than the whole sequence of binary strings of length `n` then we are sure that at some point our pointer won't match the sorted array.\uD83E\uDD29
And is a neat solution and has good complexity of $O(N * log(N))$.\uD83D\uDE0E

There is another pretty solution using a **mathematical** proof from the world of set theory called **Cantor's diagonal argument**.

### Cantor's diagonal argument
This mathimatical proof was published in `1891` by **Georg Cantor**. 
Pretty old proof.\uD83D\uDE05

This was a mathematical proof that set of **Real numbers** are **uncountable** sets which means that we **can't count** all the numbers in this set.\uD83E\uDD2F

How does that relate to our problem?\uD83E\uDD14
The proof started by **mapping** each binary string `X` to a real number and said that if the set of binary strings are **countable** then the set of real numbers are **countable**.
What next\u2753
It was proven by **contradiction** that the set of binary strings in **uncountable**.
By simply, construct a new string `Xn` that doesn't exist in this set and that what we will use in our problem.\uD83E\uDD2F

Since we want a new string that is **different** from all strings in our array then why don't we **alter** some character from each string so that the result is **different** from each string in the array in some **position**.\uD83D\uDE00
And these positions are the **diagonal** of the matrix formed by our input.\uD83E\uDD28

Let's see some examples

```
nums = ["111","011","001"]

nums = ["1 1 1",
        "0 1 1",
        "0 0 1"]

result = "000"
```
```
nums = ["1011","1001","0001", "1100"]

nums = ["1 011",
        "1 0 01",
        "00 0 1", 
        "110 0"]

result = "0111"
```
You can see the **pattern** right?
our result is **different** from all of the strings in the array. Actually it is **formed** from the **input** itself to ensure that it is different from it.\uD83E\uDD29


### Bonus Part
There is pretty **observation**. You noticed that the array length is `n` right ? and the binary string length is also `n` ?\uD83E\uDD14
That means that can exist $2^n - n$ answers to return.
|Input Size | Possible strings of lengths n | Number of Answers |
| :---:| :---: | :---: | 
| 1 | 2 | 1 |
| 2 | 4 | 2 |
| 3 | 8 | 5 |
| 4 | 16 | 12 |
| 5 | 32 | 27 |
| ... | ... | ... |
| 16 | 65536 | 65520 | 


And this is the solution for our today'S problem I hope that you understood it\uD83D\uDE80\uD83D\uDE80



---



# Approach
## 1. Sorting

1. Declare an integer `pointer` to track the expected decimal value for the next binary string.
2.  Sort the input vector `nums` in lexicographical order.

3. Iterate through the sorted binary strings using a for loop:
   - Convert the current binary string to decimal.
   - Check if the decimal value matches the expected value (`pointer`).
   - If they **match**, increment `pointer`.
   - If **not**, return the binary representation of the expected value with the appropriate length.
4. If no binary string is found during the iteration, return the binary representation of the next expected value.



## Complexity
- **Time complexity:** $O(N ^ 2)$
We are sorting the input array which takes `O(N * log(N))` generally in all programming languages then we are iterating over all of its elements in `O(N)` and converting each string to its equivalent integer in `O(N)` Which cost us total `O(N^2)` for the for loop then total complexity is `O(N^2 + N * log(N))` which is `O(N^2)`.
- **Space complexity:** $O(log(N))$ or $O(N)$
The space complexity depends on the used sorting algorithm. In Java which uses **Dual-Pivot Quick Sort** and C++ which uses **Intro Sort** the complexity of their algorithms are `O(log(N))` space which in Python which uses **Timsort** it uses `O(N)`.



---

## 2. Cantor's Diagonal Argument

1. Create an empty string called `result` to store the binary string.
2. Use a **loop** to iterate through each binary string in the vector:
    - For each binary string, access the character at the current index (`i`) and **append** the **opposite** binary value to the `result` string.
    - If the current character is `0`, append `1`; otherwise, append `0`.
4. The final **result** is the binary string formed by appending the **opposite** binary values from each binary string.


## Complexity
- **Time complexity:** $O(N)$
We are iterating over the input using for loop which cost us `O(N)`.
- **Space complexity:** $O(1)$
Without considering the result then we are using constant variables.


---



# Code
## 1. Sorting
```C++ []
class Solution {
public:

    string findDifferentBinaryString(vector<string>& nums) {
        const int size = nums.size(); // Number of binary strings in the input vector

        // Sort the input vector in lexicographical order
        sort(nums.begin(), nums.end());

        int pointer = 0; // Pointer to track the expected decimal value for the next binary string

        // Iterate through the sorted binary strings
        for(int i = 0; i < size; ++i) {
            // Convert the current binary string to decimal
            unsigned long decimalValue = bitset<16>(nums[i]).to_ulong();

            // Check if the decimal value matches the expected value
            if(decimalValue == pointer)
                pointer++;
            else
                // If not, return the binary representation of the expected value with appropriate length
                return bitset<16>(pointer).to_string().substr(16 - size);
        }

        // If no unique binary string is found, return the binary representation of the next expected value
        return bitset<16>(pointer).to_string().substr(16 - size);
    }
};
```
```Java []
public class Solution {
    public String findDifferentBinaryString(String[] nums) {
        int size = nums.length; // Number of binary strings in the input array

        // Sort the input array in lexicographical order
        Arrays.sort(nums);

        int pointer = 0; // Pointer to track the expected decimal value for the next binary string

        // Iterate through the sorted binary strings
        for (int i = 0; i < size; ++i) {
            // Convert the current binary string to decimal
            long decimalValue = Long.parseLong(nums[i], 2);

            // Check if the decimal value matches the expected value
            if (decimalValue == pointer)
                pointer++;
            else
                // If not, return the binary representation of the expected value with appropriate length
                return String.format("%" + size + "s", Long.toBinaryString(pointer)).replace(' ', '0');
        }

        // If no unique binary string is found, return the binary representation of the next expected value
        return String.format("%" + size + "s", Long.toBinaryString(pointer)).replace(' ', '0');
    }
}
```
```Python []
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        size = len(nums)  # Number of binary strings in the input list

        # Sort the input list in lexicographical order
        nums.sort()

        pointer = 0  # Pointer to track the expected decimal value for the next binary string

        # Iterate through the sorted binary strings
        for i in range(size):
            # Convert the current binary string to decimal
            decimal_value = int(nums[i], 2)

            # Check if the decimal value matches the expected value
            if decimal_value == pointer:
                pointer += 1
            else:
                # If not, return the binary representation of the expected value with appropriate length
                return format(pointer, f'0{size}b')

        # If no unique binary string is found, return the binary representation of the next expected value
        return format(pointer, f'0{size}b')
```


---

## 2. Cantor's Diagonal Argument
```C++ []
class Solution {
public:
    string findDifferentBinaryString(vector<string>& nums) {
        string result;

        // Iterate through each binary string in the vector
        for (int i = 0; i < nums.size(); ++i) {
            // Access the i-th character of the i-th binary string
            char currentCharacter = nums[i][i];

            // Append the opposite binary value to the result string
            result += (currentCharacter == '0' ? '1' : '0');
        }

        // Return the resulting binary string
        return result;
    }
};
```
```Java []
public class Solution {
    public String findDifferentBinaryString(String[] nums) {
        StringBuilder result = new StringBuilder();

        // Iterate through each binary string in the array
        for (int i = 0; i < nums.length; ++i) {
            // Access the i-th character of the i-th binary string
            char currentCharacter = nums[i].charAt(i);

            // Append the opposite binary value to the result string
            result.append((currentCharacter == '0' ? '1' : '0'));
        }

        // Return the resulting binary string
        return result.toString();
    }
}
```
```Python []
class Solution:
    def findDifferentBinaryString(self, binaryStrings: List[str]) -> str:
        result = []

        # Iterate through each binary string in the list
        for i in range(len(binaryStrings)):
            # Access the i-th character of the i-th binary string
            current_character = binaryStrings[i][i]

            # Append the opposite binary value to the result string
            result.append('1' if current_character == '0' else '0')

        # Return the resulting binary string
        return ''.join(result)
```





![HelpfulJerry.jpg](./images/0.jpeg)

