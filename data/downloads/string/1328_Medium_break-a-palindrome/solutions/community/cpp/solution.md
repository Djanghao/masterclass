# cpp solution || 100% faster || simplest approach

**Author:** TheCodeAlpha
**Votes:** 6
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/2684545/](https://leetcode.com/problems/break-a-palindrome/solutions/2684545/)

---

__Thank you for checking out the solution
Do upvote if it helps :)__

__Approach :
First task is to check if the string is not a single character, if it is then no answer exists
After this one important fact is to be used, "THE GIVEN STRING IS A PALINDROME"__
```
This makes the takes simpler as any character at a distance x from the beginning 
is same as the character at a distance x from the end
Which means we only have to traverse half of the string
```
__So Start the traversal, if a character at the i(th) position is not 'a'__
>__Check if the length is odd and i = length/2__
>> __If yes, break the loop (Since our string is like aaaa...*...aaaa), we h=will have to replace the last 'a' with 'b'__
 
>__Change the character at the position i, to 'a', this works because the character from the end is not same as 'a' (NOW)
>Return the manipulated String__
>
__If by now, nothing has been returned, the string is either all (a)s or of type  
aaaa...*...aaaa,  where * can be any character other than 'a' and the length is surely odd for the string of this type__

__What to do ?
Just change the last 'a' of the string to 'b' and return the string__

__Below is the coding implementation for the same__
_____
```
class Solution 
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Break a Palindrome.
{
public:
    string breakPalindrome(string palindrome)
    {
        ios_base::sync_with_stdio(0);
        int l = palindrome.size();
        // A single letter entry can't be broken in any way so that it doesnt stay a palindrome
        // Hence return ""
        if (l == 1)
            return "";
        // Now the remaining task to find a position that doesn't contain 'a'
        for (int i = 0; i <= l/2; i++)
            if (palindrome[i] != 'a')
            {
			    //If the position lies in the center of the string, and the string has an odd-number length
				// Time to break, becoz changing it into 'a', will create a new palindrome
                if ((l & 1) && i == l / 2)
                    break;
				// Otherwise change the character at index i to 'a', and return it
                palindrome[i] = 'a';
                return palindrome;
            }
        // In a case where
        // We have all 'a's,
        // Or when replacing a char in the middle makes the string palindrome again
        // Just replace b with the character at the end
        palindrome[l - 1] = 'b';
        return palindrome;
    }
};
```
__Time Complexity : O(N/2) ~ O(N) , where N is the length of the string
Space Complexity : O(1)__

__Some Test case to consider:
"aaaaaaa"
"aaabaaa"
"aaabbaaa"
"abccba"
"c"
"a"__