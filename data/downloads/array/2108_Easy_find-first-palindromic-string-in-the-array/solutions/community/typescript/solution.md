# Easy and Beginner-Friendly Approach with Reduced Complexity.

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/5791457/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/5791457/)

---

# Intuition
The problem requires us to find the first string in an array that is a palindrome. A palindrome is a string that reads the same forward and backward. To solve this problem, we can check each word in the array one by one to see if it's a palindrome.

# Approach
1. Create a helper function to check if a string is a palindrome. This is done by reversing the string and comparing it with the original.

2. Loop through the given array of words, and for each word, use the helper function to determine if it's a palindrome.

3. Return the first palindrome found. If no palindromic word is found, return an empty string " ".

# Complexity
- Time complexity:O(n*m)
 where n is the number of words and m is the average length of the words. We iterate through all the words and check each word if it is a palindrome.

- Space complexity:O(1)
O(1), since we only use a constant amount of space for the helper function and comparison.

# Code
```typescript []
function firstPalindrome(words: string[]): string {
    
    //helper function to reverse and check the string is palindrome
    const isPalindrome = (word:string) : boolean => {

        return word === word.split('').reverse().join('')
        //We are splitting the word into individual characters, reversing them, and then merging them back into a string.
        //Then, compare the words; if they are the same, return true; otherwise, return false.
    }

    for(const str of words){

        if(isPalindrome(str)){ 
            return str;
        }
    }

    return '';
    
};
```