# Regex Typescript/JS solution - two liner

**Author:** epg323
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/5042645/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/5042645/)

---

# Intuition
This is a problems that requires that wants all the characters that are vowels to be replaced with a specific set of characters. replaceAll function seems like a natural fit for this, it readds in english perfectly as well. My instinct is to go with arrays but it seems like there is a few more steps to that as compared to replaceAll. 

With replaceAll you can use regex and implement a list of characters to be replaced with an empty.

# Approach
I write my regex statement first, its just a bunch of OR statements. Once I do that I write my replaceAll function.

# Complexity
- Time complexity:
$$O(n)$$ - linear time in respect to the number of characters. 1 increase in a character, is an increase for every unit of time.
    
    $$O(1)$$ - For the regular expression, its just checking if the value matches one of the characters from the list. 

- Space complexity:
$$O(n)$$ - replace all will store the string in fragments, but it should not exceed the length of the string. The longer the string, the more is stored.

# Code
```
const bannedList: RegExp = /a|e|i|o|u/g

function removeVowels(s: string): string {
    return s.replaceAll(bannedList, "") //replace can be used since the regex has global(g). ReplaceAll reads nicer
};
```