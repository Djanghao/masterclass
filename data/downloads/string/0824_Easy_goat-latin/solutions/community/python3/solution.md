# [Python] (Very Easy to understand solution)

**Author:** not_a_cp_coder
**Votes:** 15
**Link:** [https://leetcode.com/problems/goat-latin/solutions/800076/](https://leetcode.com/problems/goat-latin/solutions/800076/)

---

```
class Solution:
    def toGoatLatin(self, S: str) -> str:
        temp = []
        ans = " "  # Here space must be present. (So, after joining the words, they wil be separated by space)
        i = 1
        vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        for word in S.split(" "):
            if word[0] in vowel:
                word = word + "ma"
            else:
                word = word[1:] + word[0] + "ma"
            word = word + "a"*i
            i = i + 1
            temp.append(word)
		# Joins all the list elements.
        return ans.join(temp)
        
```
If you have any doubts, head over the **comment** section.
If you like this solution, do **UPVOTE**.
Happy Coding :)