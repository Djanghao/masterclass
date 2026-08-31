# 📌 Easy-Approach || Well-explained || 95% faster 🐍

**Author:** abhi9Rai
**Votes:** 31
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/1289476/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/1289476/)

---

## IDEA:

\uD83D\uDC49 finding the index of each character in "s" then virtually cutting "s" => from index+1 to last.
\uD83D\uDC49 repeating above point for all the characters in word, if any ch not found in s then it will return -1.

e.g.-
	s="abgheaf"
	w=["gef", "gefk"]
	index = -1
* 	first found index of "g" in s[index+1 : ] => "abgheaf", which is  2 (i.e. index=2).
* 	Now, we find the index of "e" in s[index+1:] => s[2+1:] => s[3:] => "heaf" which results index=4.
* 	Again find the index of "f" in s[index+1: ] => s[4+1:] => s[5:] => "af" which gives index=6.
**Another word:**
* 	if we are having word as "gefk" then after repeating previous 3 points we will have index=6.
* 	Now find the index of "k" in s[index+1:] => s[6+1:] => s[7:] =>"" which will give index=-1. i.e. not found.
	
'''

	class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        
        def is_sub(word):
            index=-1
            for ch in word:
                index=s.find(ch,index+1)
                if index==-1:
                    return False
            return True
        
        c=0
        for word in words:
            if is_sub(word):
                c+=1
        
        return c
		
feel free to ask if any doubt. \uD83C\uDFCD
if you got helpful then please **upvote!!** \uD83E\uDD17