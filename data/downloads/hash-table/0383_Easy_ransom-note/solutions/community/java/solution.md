# 1ms 100% | Easy Explanation | Java Solution

**Author:** binayshaw7777
**Votes:** 889
**Link:** [https://leetcode.com/problems/ransom-note/solutions/1671552/](https://leetcode.com/problems/ransom-note/solutions/1671552/)

---

```
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
		if (ransomNote.length() > magazine.length()) return false;
        int[] alphabets_counter = new int[26];
        
        for (char c : magazine.toCharArray())
            alphabets_counter[c-'a']++;

        for (char c : ransomNote.toCharArray()){
            if (alphabets_counter[c-'a'] == 0) return false;
            alphabets_counter[c-'a']--;
        }
        return true;
    }
}
```

So, What we doing here is... First we will initialize an **array of alphabets counter.** 
*Let's initialize with the size 24.* noo... **Its 26**, you forgot the number of alphabets in English?
*Jokes Apart..*

Now we **loop through** the entire **String of magazine** where char c stores the char at the index of magazine..

You might think why I typed c-'a' 
It is because in ascii if you subtract any char with 'a' , it gives you index of that alphabet.
Still confused?
Let us assume **a = 0** and **z = 25**. Now subtract a - a. You got 0 in ASCII, right? 
now **subtract d-a, in ASCII it is 100-97, it leaves you with 3**. Isn't that the index of that character in our alphabet counter and isn't that the fact the **a=0, b=1, c=2 and d=3.** Got it?

Now we **increment the counter** for that character of its own index according to English Alphabets (Obviously)

We have our counter ready!

Now we run another for **loop for ransomNote.**
Remember: if the charachter doesn't exists in magazine for ransomNote, **we return false;**
or if it does exists, **we decrement the counter** of that charachter from its **own index.**

lastly if nothing goes wrong (we have sufficient amount of charachters to make ransomNote)

Return true :)

If my explanation was helpful or interactive
**PLEASE DO UPVOTE**
Thank you!