# Detailed explanation of why (len - pos) * (pos + 1) works

**Author:** bitmasker
**Votes:** 117
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/1564075/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/1564075/)

---

<br>
Let us understand this problem with an example
<br>let word = "abei"

**All possible substrings:**
```
a        b       e      i
ab       be      ei
abe      bei
abei
```

So for counting occurences of vowels in each substring, we can count the occurence of each vowel in each substring
In this example, count of vowels in substrings are
```
a - 4 times
e - 6 times
i - 4 times
```
And you can observe that occurence of each vowel depends on it's position like below:
* a is at position 0 so it can be present only in the substrings starting at 0
* e is in the middle so it can be present in the substrings starting at it's position, substrings ending at it's position, and substrings containing it in middle
* i is at last so it can be present only in the substrings ending at that position
<br>

**Did you see any pattern ?** Yes !
<br>A character at position pos can be present in substrings starting at i and substrings ending at j, <br>where **0 <= i <= pos** (pos + 1 choices) and **pos <= j <= len** (len - pos choices) <br>so there are total **(len - pos) * (pos + 1)** substrings that contain the character word[pos]

(You can see from above example that e is at position 2 and it's present in substrings "abei", "bei", "ei", "abe", "be", "e"<br> (0 <= start <= pos and pos <= end <= len) and same will be true for each vowel.
<br>
**From this observation we can generalise the occurence of each vowel in the string as**
```
here len(abei) = 4
a,  pos = 0, count = (4 - 0) * (0 + 1) = 4
e,  pos = 2, count = (4 - 2) * (2 + 1) = 6
i,  pos = 3, count = (4 - 3) * (3 + 1) = 4
```
**So the generalised formula will be**
```
count = (len - pos) * (pos + 1)
```
and we can keep summing the count of each vowel (don't forget to convert to long)
<br>


**C++ code:**

```
class Solution {
public:
    bool isVowel(char ch) {
        return ch == 'a' or ch == 'e' or ch == 'i' or ch == 'o' or ch == 'u';
    }
    
    long long countVowels(string word) {
        long long count = 0;
        int len = word.size();
        
        for(int pos = 0; pos < len; pos++) {
            if(isVowel(word[pos])) {
                count += (long)(len - pos) * (long)(pos + 1);
            }
        }
        
        return count;
    }
};
```

<br>

**Python Code:**
```
class Solution:
    def countVowels(self, word: str) -> int:
        count = 0
        sz = len(word)
        
        for pos in range(sz):
            if word[pos] in 'aeiou':
                count += (sz - pos) * (pos + 1)
        
        return count
```

<br>

**Java Code:**

```
class Solution {
    
    boolean isVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }
    
    public long countVowels(String word) {
        long count = 0;
        int len = word.length();
        
        for(int pos = 0; pos < len; pos++) {
            if(isVowel(word.charAt(pos))) {
                count += (long)(len - pos) * (long)(pos + 1);
            }
        }
        
        return count;
    }
}
```

<br>
Do upvote if you liked the explanation :)

<br>