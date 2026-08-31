# 2ms 99% | Easy Explanation | Java

**Author:** binayshaw7777
**Votes:** 239
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1662598/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1662598/)

---

This one is the same but slightly readable **(UPDATED)**

```
class Solution {
    public int mostWordsFound(String[] sentences) {
        int maxLen = 0;
		
        for (String currSent : sentences) {
            int currLen = currSent.split(" ").length;
            if (maxLen < currLen)
                maxLen = currLen;
        }
        return maxLen;
    }
}
```

**Old Code**
```
class Solution {
    public int mostWordsFound(String[] sentences) {
        int max=0;
        for(int i=0; i<sentences.length; i++) {
            max = Math.max(max,(sentences[i].split(" ")).length);
        }
        return max;
    }
}
```


So, first of all I initialized **int max = 0**. (It stores the **max words** in each sentences)
Now, we run a for loop which takes the **max between max and the words in that sentence.**

*Let's break it down!*
**sentences[i]** is nothing but the sentence at **'i' th index** of the String array.
We are **splitting up** all the whitespaces present in it to **calculate number of words.**
**Logic:** If you remove all the whitespaces of that sentence, you get number of words, right?
now we use **.length** method to find the number of words.

**Lets rewind at Math.max:**
Here max is initially 0, and we check **max vs number of words of the sentence present at index of the array.**

Here you get the max number of word, just **return it**!

If my solution and explanation was helpful then
**PLEASE UPVOTE**

Thank you :)