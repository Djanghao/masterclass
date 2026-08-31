# Kotlin Solution => O(n) time, O(n) space

**Author:** sweetPetite
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4418313/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4418313/)

---

# Intuition
This is my first submission of a solution! 

At frist I looked at using a queue for storing the values, but then i realized it made the last portion of handling the leftover characters difficutly to compare. Using a stack make more since to keep track of the indices. Another important thing to node is wildcards help in making the pair ONLY IF they are in the correct order. 

# Approach
I started by creating two stacks to store my left parentheis and wildcard characters. 

If the characters are found, they are pushed onto their respective stacks. When a right parenthesis is found, it looks to pair it with a left first, then a wildcard second. Given the order of traversal of the string, this conforms to the rules regauding order. 

Lastly, we have these two stacks that may have leftover characters. The remaining left parenthesis need right pairs (note leftover wildcards are just empty spaces). We loop through the stack and pop each value checking if the wildcard's index is less than the parenthesis. It can never be lower so we return false if that's the case. 

Once we're done, return true. 

# Complexity
- Time complexity:
The time complexity is O(n), where n is the length of the input string.
The operations inside the loop, such as pushing and popping from the stack, are constant time.

- Space complexity:
The space complexity is O(n), where n is the length of the input string.
In the worst case, the openChar or wildcard stacks can contain all the characters in the string.

# Code
```
class Solution {
    fun checkValidString(s: String): Boolean {
        // Stack to store index of chars
        val charOpen = Stack<Int>()
        val wildcard = Stack<Int>()

        // Iterate over index and eliminate the close parenthesis pairs
        s.forEachIndexed { index, char ->
            when (char) {
                '(' -> {
                    charOpen.push(index)
                }
                '*' -> {
                    wildcard.push(index)
                }
                ')' -> {
                    if(!charOpen.isEmpty()) {
                        charOpen.pop()
                    } else if (!wildcard.isEmpty()) {
                        wildcard.pop()
                    } else {
                        return false
                    }
                }        
            }
        }

        // Check for leftovers
        while (!charOpen.isEmpty()) {
            if (wildcard.isEmpty() || charOpen.pop() > wildcard.pop()) return false 
        } 

        return true    
    }
}
```