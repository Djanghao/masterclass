# Python: Beginner Friendly Explanation with time and space complexity analysis

**Author:** meaditya70
**Votes:** 22
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2039991/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2039991/)

---

Two words are condidered as **anagram** if they have the same letters with exactly same letter counts. The order of the letters in the words does not matter.

`E.g.: abbaa, aabab, aabbb, bbaaa, etc.. are all anagrams of each other as both have 2 letters 'a' and 'b' and both the letters in all the words have the same count, i.e., |a| = 3 and |b| = 2`.

Now Since, the order doesn't matter, **sorting them all will make them equal**. 
E.g.: In the above example, if we sort all the words we get 'aaabb'. Which means all of them are anagrams of each other.

I hope finding anagrams is clear.

Now, if word[i] and word[i+1] are anagrams, then remove word[i + 1] from the list, do not increment the index and compare again, else ignore and increment the index.

The full code (***written during contest***) is given below:
```
class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        i = 0
        while i < len(words) - 1:
            if sorted(words[i]) == sorted(words[i + 1]):
                words.remove(words[i + 1])
                continue
            i += 1
        return words
```

**Time and Space complexity Analysis:**
* Let n = size of words array, and m = max length of a word.

The loop runs for 'n' times and sorting takes 'mlogm' time, and both are nested (done simultaneously).  Hence, **time complexity = O(n * mlogm)**.
Note that the time complexity can be easily reduced to ***O(n *  m)*** as finding anagrams can be done efficiently in O(m) time.
We do not use any extra space, so space complexity = O(1) but sorting takes some internal space O(m). Thus, **space complexity = O(m)**.

Do Upvote, if helpful.

**EDIT:** The corresponding one liner for the above code (inspired from votrubac):
```
class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        return [words[i] for i in range(0, len(words)) if i == 0 or sorted(words[i]) != sorted(words[i - 1])]
```

***But wait can't we do better?***

Yes actually, we can still reduce the time complexity. 

**Idea:** As anagrams must have same letters with same letter counts. We can count each letter in both the strings in O(n) time and match their counts in O(n) time sequentially (not simultaneously). Hence, **optimized time complexity** = O(n + n)  **= O(n)**.

Can we reduce the sapce complexity?? => We will see after this code.

The **optimized solution** is given below:
```
class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        def get_counts(x):
            """
            As there are only 26 alphabets, make an array of constant size = 26 
            such that its index 0 maps to letter 'a', 1 maps to 'b' and so on...
            upto index 25 that maps to letter 'z'
            
            E.g.: If we want count of letter 'c', we will get it from count[2], 
                  as index 2 maps to letter 'c'.
                  
            But how will we do the mapping?
            
            There is a function in Python that returns a corresponding integer value for a character.
            
            ord(c) => return ordinal value of character 'c'.
            
            index of a = 0 right? => ord('a') - ord('a')
            index of b = 1        => ord('b') - ord('a')
            .
            .
            .
            index of z = 25       => ord('z') - ord('a')
            
            """
            count = [0] * 26 
            for c in x:
                count[ord(c) - ord('a')] += 1
            return count
        
        
        if not words:
            return []
        
        
        i = 0
        while i < len(words) - 1:
            # just replace sort function by get_count functions
            if get_counts(words[i]) == get_counts(words[i + 1]):
                words.remove(words[i + 1])
                continue
            i += 1
        return words
```

In the above code we have used a list, but it is always fixed in size (= 26 integers). Also apart from the list, we have used only fixed sized variables.

So **optimized space complexity = O(1)** = constant.

`Hope it helps.` ***UPVOTE***.

