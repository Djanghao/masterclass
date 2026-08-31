# Easy Solution with Simple Explanation (Using Two Pointer)

**Author:** deepankyadav
**Votes:** 727
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3723102/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3723102/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
The goal of the problem is to reverse the order of vowels in a given string while keeping the non-vowel characters in their original positions. To achieve this, we can use two pointers technique: one pointer starting from the beginning of the string and another starting from the end. We will move these pointers towards each other, swapping the vowels they point to until they meet in the middle of the string.

# Approach
1. Convert the input string s to an array of characters word. This step is necessary because strings are immutable in Java, and we need to modify the vowels' positions.

1. Initialize two pointers, start and end, to the first and last characters of the string, respectively.

1. Create a String variable vowels containing all the vowel characters (both lowercase and uppercase).

1. Use a while loop to iterate until start is no longer less than end. This loop ensures that the pointers will not cross each other, and we process the characters in the middle of the string only once.

**Inside the loop:**
1. Move the start pointer towards the end of the string until it points to a vowel character. We do this by using the indexOf method to find the index of the character in the vowels string. If the character is not a vowel, we keep moving the start pointer.

1. Similarly, move the end pointer towards the beginning of the string until it points to a vowel character. Again, we use the indexOf method to check if the character is a vowel and keep moving the end pointer if it is not.

1. Swap the vowels found at the start and end positions in the word array.

1. Move the start pointer one step ahead and the end pointer one step back to continue searching for more vowels.

After the loop finishes, the word array will contain the string with the reversed vowels. Convert the character array back to a String and return the result.


# Complexity
- Time complexity:
The time complexity of this solution is $$O(n)$$, where n is the length of the input string s. The two pointers start and end move towards each other, and each character is processed once.

- Space complexity:
The space complexity of this solution is $$O(n)$$ because we create a character array word to store the characters of the input string. The space used is proportional to the length of the input string. Other than that, we use a constant amount of extra space for the vowels string and a few integer variables, which doesn't depend on the input size.

# Code
```java []
class Solution {
    public String reverseVowels(String s) {
        char[] word = s.toCharArray();
        int start = 0;
        int end = s.length() - 1;
        String vowels = "aeiouAEIOU";
        
        while (start < end) {
            // Move start pointer until it points to a vowel
            while (start < end && vowels.indexOf(word[start]) == -1) {
                start++;
            }
            
            // Move end pointer until it points to a vowel
            while (start < end && vowels.indexOf(word[end]) == -1) {
                end--;
            }
            
            // Swap the vowels
            char temp = word[start];
            word[start] = word[end];
            word[end] = temp;
            
            // Move the pointers towards each other
            start++;
            end--;
        }
        
        String answer = new String(word);
        return answer;
    }
}
```
```python []
class Solution(object):
    def reverseVowels(self, s):
        # Convert the input string to a character array.
        word = list(s)
        start = 0
        end = len(s) - 1
        vowels = "aeiouAEIOU"
        
        # Loop until the start pointer is no longer less than the end pointer.
        while start < end:
            # Move the start pointer towards the end until it points to a vowel.
            while start < end and vowels.find(word[start]) == -1:
                start += 1
            
            # Move the end pointer towards the start until it points to a vowel.
            while start < end and vowels.find(word[end]) == -1:
                end -= 1
            
            # Swap the vowels found at the start and end positions.
            word[start], word[end] = word[end], word[start]
            
            # Move the pointers towards each other for the next iteration.
            start += 1
            end -= 1
        
        # Convert the character array back to a string and return the result.
        return "".join(word)
```
```C++ []
class Solution {
public:
    string reverseVowels(string s) {
        // Convert the input string to a character array.
        string word = s;
        int start = 0;
        int end = s.length() - 1;
        string vowels = "aeiouAEIOU";
        
        // Loop until the start pointer is no longer less than the end pointer.
        while (start < end) {
            // Move the start pointer towards the end until it points to a vowel.
            while (start < end && vowels.find(word[start]) == string::npos) {
                start++;
            }
            
            // Move the end pointer towards the start until it points to a vowel.
            while (start < end && vowels.find(word[end]) == string::npos) {
                end--;
            }
            
            // Swap the vowels found at the start and end positions.
            swap(word[start], word[end]);
            
            // Move the pointers towards each other for the next iteration.
            start++;
            end--;
        }
        
        // Return the modified string.
        return word;
    }
};
```
## ***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)

