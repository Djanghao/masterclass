# Finding the First Repeated Character in a String Using Scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/5655138/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/5655138/)

---

# Intuition
The problem asks for the first repeated character in a string. My initial thought is to use a set to keep track of characters as we iterate through the string. The moment we encounter a character that is already in the set, we know it's the first repeated character.


# Approach
Initialize an empty set to store characters as they are encountered.
Iterate through each character in the string.For each character, check if it is already in the set. If it is, return that character immediately, as it is the first repeated one.If it is not, add the character to the set.
If the loop completes and no character was repeated, throw an exception or return a special value to indicate no repetition was found.

This approach leverages the fact that checking for existence in a set and adding to a set are both average O(1) operations.
# Complexity
- Time complexity:
The time complexity is O(n)O(n), where n is the length of the string. This is because we only make a single pass through the string, and each operation inside the loop (checking and inserting into the set) takes O(1) time on average.
- Space complexity:
The space complexity is also O(n)O(n), as in the worst case, we might need to store all the characters in the set if there are no repetitions.
# Code
```
import scala.util.boundary, boundary.break
object Solution {
    def repeatedCharacter(s: String): Char = {
        var set:Set[Char]=Set()
        var i:Int =0
        while(i<s.length){
            if(set.contains(s(i))){
                return s(i)
            }
            else{
                set+=s(i)
            }
            i+=1
        }
        throw new NoSuchElementException("No repeated character found")
    }
}
```