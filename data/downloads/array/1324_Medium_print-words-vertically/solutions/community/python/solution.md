# [Python] with Explanation. Beats 100% WITHOUT using zip.

**Author:** teampark
**Votes:** 6
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/485261/](https://leetcode.com/problems/print-words-vertically/solutions/485261/)

---

**High Level Approach**
This solution beats 100% runtime and 100% memory without using the zip function. I find this to be a more realistic answer to come up with in a high pressure interview. Don't get cute. Use foundational knowledge. 
```
Step 1. Convert string to list of strings
		-> words = s.split(" ")
Step 2. Find length of the longest word  
		-> longest_word = max(words, key=len)
Step 3. Iterate the length of the longest word 
		-> For index in range(len(longest_word))
Step 4. Iterate over the current index for every word
		-> For word in words
Step 5. Build current string 
		-> Check if index is less than the length of current word
		-> If it is, append letter
		-> If not, append a space " "
Step 6. Post Process current batch
		-> Remove trailing " "
		-> Join list of strings into a single string
```
**Notes**
We build the current index string by using ```temp_arr = []``` instead of a ```temp_string = " "``` because Python strings are immutable. This means doing string concatenation operations are costly, in that Python must allocate new memory for EACH concatenation. 

Appending the letters to an array and using the array's ```join``` method improves this because ```join``` only allocates memory for the final string. Using an array also gives us access to the array's ```pop()``` operation to remove trailing spaces in O(1) time  (the actual iteration over each trailing space could be more costly). 

**Code**
```
class Solution(object):
    def printVertically(self, s):
   
        words = s.split(' ')   # Step 1
        longest_word = max(words, key=len)  # Step 2
        retval = []
        
        for index in range(len(longest_word)):   # Step 3
            temp_arr = []
            for word in words:  # Step 4 
                if index < len(word):  # Step 5
                    temp_arr.append(word[index])
                else:
                    temp_arr.append(' ')
            
			# Step 6 
            for letter in temp_arr[::-1]:
                if letter == ' ':
                    temp_arr.pop()
                else:
                    break
					
            temp_word = ''.join(temp_arr) 
            retval.append(temp_word)
            
        return retval 
```
**Complexity**
Time:
O(NM) 
N = Number of words in the input string
M = Length of the longest word

Space:
O(N) 
