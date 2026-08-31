# ✅Detailed Explanation🔥2 Approaches🔥🔥Extremely Simple and effective🔥🔥🔥

**Author:** heir-of-god
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5200391/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5200391/)

---

# \uD83C\uDFAFProblem Explanation:
You are given a list of words ```words```, list of single character (alphaber letters) ```letters``` (might be repeating) and ```score``` which represents score of every character. You are allowed to form every word only once and use every letter in letters only once. You want to return maximum possible score after creating some words.

# \uD83D\uDCE5Input:
- String array ```words``` which represents words we are allowed to create.
- Character (string) array ```letters``` which represents letters we can use.
- Array ```score``` which length is exactly 26 (number of english letters) which represents score for each letter. 

# \uD83D\uDCE4Output:
The maximum possible score after creating some words (maybe 0, thus answer will be 0).

# \uD83E\uDDE0 Approach 1: Brute force with bit-mask

# \uD83E\uDD14 Intuition
Okay, let's talk about intuition I had when first looked at this problem
- Firstly, description isn't very clear about what ```score``` means so I will. Score[i] mean that character with i + 1 number in alphabet has this score. So score[0] will be score of letter "a", score[1] will be score of letter "b" and so on.
- Secondly, it's not that convinient to store letters we have as list of string since we have repetitions I thought it would be easier to create list of size 26 with counts of letters.
- Next question - how we will find score for letter "a" for example? We will use its ASCII number with ```ord``` in Python and subtract from it 97 (number of letter "a") so we will have index in array ```score``` which represents score of this character.
- Notice that the ```words.length``` is very small (up to 14) that means we probably can use brute force solution to solve this problem. Let's try it but to avoid additional compution we will count overall score for each word and store this in dictionary.
- We will look on every subset of words from ```words``` (up to 2^14) and calculate its total score in case we can form all this words. But how exactly we will find every subset of ```words```? We will use quite standard approach for this problem - bit-mask.
- We can form all words in subset if we have enough letters so we will count total letters of this subset and then check for every letter that its number is smaller of exactly the same as the number of this letter we have.

# \uD83D\uDCBB Coding 
This is quite naive approach and so a little slow so let's code it up and move to the next approach.
- Firstly, as was said, we need to count letters and scores for each word
- Secondly we will iterate through numbers from 0 to 2^n - 1 as ```mask``` and binary representation of this number will be our mask (at index ```i``` 1 will mean that ```words[i]``` is used in subset and 0 will mean that it isn't)
- If we iterating through words ever encounter state where we already have invalid number of letters - we will exit the loop and move to the next mask
- If this state is valid and calculated score is bigger than it was we will change result to it and continue.

# \uD83D\uDCD2 Complexity
- \u23F0 Time complexity: O(2^n * n), we will iterate 2^n times to check every subset and every this subset has up to n words so I think ```2^n * n``` is 
fair assessment.
- \uD83E\uDDFA Space complexity: O(n) where n is the length of the ```words``` but in fact this is too small so very close to be O(1) (all other arrays have constant size so O(1) complexity)

# \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
        n = len(words)
        res = 0

        # count letters
        letters_count = [0 for _ in range(26)]
        for letter in letters:
            ind = ord(letter) - 97
            letters_count[ind] += 1
        
        # calculate words
        words_scores = {}
        for word in words:
            s = 0
            for char in word:
                ind = ord(char) - 97
                s += score[ind]
            words_scores[word] = s
 
        for mask in range(0, 2 ** n, 1): # There will be exactly 2^n different states
            cur_count = [0 for _ in range(26)]
            can_create = True
            cur_score = 0

            for word_ind in range(n):
                if (mask & (1 << word_ind)) != 0: # if in mask bit of this word is 1
                    word = words[word_ind]
                    cur_score += words_scores[word]
                    for char in word:
                        ind = ord(char) - 97
                        cur_count[ind] += 1
                        if cur_count[ind] > letters_count[ind]:
                            can_create = False
                            break
                if not can_create:
                    break
            if can_create and cur_score > res: 
                res = cur_score

        return res
```
``` C++ []
class Solution {
public:
    int maxScoreWords(vector<string>& words, vector<char>& letters, vector<int>& score) {
        int n = words.size();
        int res = 0;

        // count letters
        vector<int> letters_count(26, 0);
        for (char letter : letters) {
            int ind = letter - 'a';
            letters_count[ind] += 1;
        }

        // calculate words
        unordered_map<string, int> words_scores;
        for (string word : words) {
            int s = 0;
            for (char c : word) {
                int ind = c - 'a';
                s += score[ind];
            }
            words_scores[word] = s;
        }

        for (int mask = 0; mask < (1 << n); ++mask) { // There will be exactly 2^n different states
            vector<int> cur_count(26, 0);
            bool can_create = true;
            int cur_score = 0;

            for (int word_ind = 0; word_ind < n; ++word_ind) {
                if (mask & (1 << word_ind)) { // if in mask bit of this word is 1
                    string word = words[word_ind];
                    cur_score += words_scores[word];
                    for (char c : word) {
                        int ind = c - 'a';
                        cur_count[ind] += 1;
                        if (cur_count[ind] > letters_count[ind]) {
                            can_create = false;
                            break;
                        }
                    }
                }
                if (!can_create) {
                    break;
                }
            }
            if (can_create && cur_score > res) {
                res = cur_score;
            }
        }

        return res;
    }
};
```
``` JavaScript []
var maxScoreWords = function(words, letters, score) {
    let n = words.length;
    let res = 0;

    // count letters
    let letters_count = new Array(26).fill(0);
    for (let letter of letters) {
        let ind = letter.charCodeAt(0) - 97;
        letters_count[ind]++;
    }

    // calculate words
    let words_scores = {};
    for (let word of words) {
        let s = 0;
        for (let c of word) {
            let ind = c.charCodeAt(0) - 97;
            s += score[ind];
        }
        words_scores[word] = s;
    }

    for (let mask = 0; mask < (1 << n); ++mask) { // There will be exactly 2^n different states
        let cur_count = new Array(26).fill(0);
        let can_create = true;
        let cur_score = 0;

        for (let word_ind = 0; word_ind < n; ++word_ind) {
            if (mask & (1 << word_ind)) { // if in mask bit of this word is 1
                let word = words[word_ind];
                cur_score += words_scores[word];
                for (let c of word) {
                    let ind = c.charCodeAt(0) - 97;
                    cur_count[ind]++;
                    if (cur_count[ind] > letters_count[ind]) {
                        can_create = false;
                        break;
                    }
                }
            }
            if (!can_create) {
                break;
            }
        }
        if (can_create && cur_score > res) {
            res = cur_score;
        }
    }

    return res;
};
```
``` Java []
public class Solution {
    public int maxScoreWords(String[] words, char[] letters, int[] score) {
        int n = words.length;
        int res = 0;

        // count letters
        int[] letters_count = new int[26];
        for (char letter : letters) {
            int ind = letter - 'a';
            letters_count[ind] += 1;
        }

        // calculate words
        Map<String, Integer> words_scores = new HashMap<>();
        for (String word : words) {
            int s = 0;
            for (int i = 0; i < word.length(); i++) {
                char c = word.charAt(i);
                int ind = c - 'a';
                s += score[ind];
            }
            words_scores.put(word, s);
        }

        for (int mask = 0; mask < (1 << n); ++mask) { // There will be exactly 2^n different states
            int[] cur_count = new int[26];
            boolean can_create = true;
            int cur_score = 0;

            for (int word_ind = 0; word_ind < n; ++word_ind) {
                if ((mask & (1 << word_ind)) != 0) { // if in mask bit of this word is 1
                    String word = words[word_ind];
                    cur_score += words_scores.get(word);
                    for (int i = 0; i < word.length(); i++) {
                        char c = word.charAt(i);
                        int ind = c - 'a';
                        cur_count[ind]++;
                        if (cur_count[ind] > letters_count[ind]) {
                            can_create = false;
                            break;
                        }
                    }
                }
                if (!can_create) {
                    break;
                }
            }
            if (can_create && cur_score > res) {
                res = cur_score;
            }
        }

        return res;
    }
}
```
``` C []
int maxScoreWords(char** words, int wordsSize, char* letters, int lettersSize, int* score, int scoreSize) {
    int n = wordsSize;
    int res = 0;

    // count letters
    int letters_count[26] = {0};
    for (int i = 0; i < lettersSize; ++i) {
        int ind = letters[i] - 'a';
        letters_count[ind]++;
    }

    // calculate words
    int* words_scores = (int*)malloc(wordsSize * sizeof(int));
    for (int i = 0; i < wordsSize; ++i) {
        int s = 0;
        for (int j = 0; j < strlen(words[i]); ++j) {
            int ind = words[i][j] - 'a';
            s += score[ind];
        }
        words_scores[i] = s;
    }

    for (int mask = 0; mask < (1 << n); ++mask) { // There will be exactly 2^n different states
        int cur_count[26] = {0};
        bool can_create = true;
        int cur_score = 0;

        for (int word_ind = 0; word_ind < n; ++word_ind) {
            if (mask & (1 << word_ind)) { // if in mask bit of this word is 1
                char* word = words[word_ind];
                cur_score += words_scores[word_ind];
                for (int j = 0; j < strlen(word); ++j) {
                    int ind = word[j] - 'a';
                    cur_count[ind]++;
                    if (cur_count[ind] > letters_count[ind]) {
                        can_create = false;
                        break;
                    }
                }
            }
            if (!can_create) {
                break;
            }
        }
        if (can_create && cur_score > res) {
            res = cur_score;
        }
    }

    free(words_scores);
    return res;
}
```


# \uD83E\uDDE0 Approach 2: Recursion with backtracking

# \uD83E\uDD14 Intuition
In my opinion the backtracking intuition for this problem is even easier that for the brute force one.
- Firstly, we will keep ```letters_count``` and ```words_scores``` the same. 
- For every word we can either include this word in subset or not (including is only OK if ```letters_count``` is valid).
- After we've included this word and checked all possible states with it we want to return letters we wasted on it. (backtracking)

# \uD83D\uDCBB Coding 
Okay, now let's implement recursion with backtracking
- Firstly, as was said, we need to count letters and scores for each word (as in first approach).
- Secondly, let's write our recursion function ```recursion``` as this:
    - We will track our ```cur_ind``` and if we've checked all the words and still this state is valid so we will check whether ```cur_score``` is bigger than is was.
    - In the next block of code we will check whether we can add this word to our current subset based on number of letters we have now (code is simillar to last approach).
    - So if it's possible to add this word let's check all subsets with adding it (we apply backtracking here) and in any occasion let's check case where we don't add this word.
- Call recursion with parameters ```cur_ind=0, cur_score=0``` and return result.

# \uD83D\uDCD2 Complexity
- \u23F0 Time complexity: O(2^n), for every word we call recursion up to 2 times.
- \uD83E\uDDFA Space complexity: O(n), for recursive stack and keeping arrays

# \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def maxScoreWords(self, words: list[str], letters: list[str], score: list[int]) -> int:
        n: int = len(words)
        res: int = 0

        letters_count: list[int] = [0 for _ in range(26)]
        for letter in letters:
            ind: int = ord(letter) - 97
            letters_count[ind] += 1

        words_scores: dict[str, int] = {}
        for word in words:
            s = 0
            for char in word:
                ind = ord(char) - 97
                s += score[ind]
            words_scores[word] = s

        def recursion(cur_ind, cur_score) -> None:
            nonlocal res

            if cur_ind == n:
                if cur_score > res:
                    res = cur_score
                return

            can_add_this_word = True
            word: str = words[cur_ind]
            word_count: list[int] = [0 for _ in range(26)]
            for char in word:
                ind: int = ord(char) - 97
                word_count[ind] += 1
                if word_count[ind] > letters_count[ind]:
                    can_add_this_word = False
                    break

            if can_add_this_word:
                for ind in range(26):
                    letters_count[ind] -= word_count[ind]
                recursion(cur_ind + 1, cur_score + words_scores[word])
                for ind in range(26):
                    letters_count[ind] += word_count[ind]
            recursion(cur_ind + 1, cur_score)  # recursion without this word

        recursion(0, 0)
        return res
```
``` C++ []
class Solution {
public:
    int maxScoreWords(vector<string>& words, vector<char>& letters, vector<int>& score) {
        int n = words.size();
        int res = 0;

        vector<int> letters_count(26, 0);
        for (char letter : letters) {
            letters_count[letter - 'a']++;
        }

        unordered_map<string, int> words_scores;
        for (const string& word : words) {
            int s = 0;
            for (char ch : word) {
                s += score[ch - 'a'];
            }
            words_scores[word] = s;
        }

        function<void(int, int)> recursion = [&](int cur_ind, int cur_score) {
            if (cur_ind == n) {
                res = max(res, cur_score);
                return;
            }

            bool can_add_this_word = true;
            const string& word = words[cur_ind];
            vector<int> word_count(26, 0);
            for (char ch : word) {
                word_count[ch - 'a']++;
                if (word_count[ch - 'a'] > letters_count[ch - 'a']) {
                    can_add_this_word = false;
                    break;
                }
            }

            if (can_add_this_word) {
                for (int i = 0; i < 26; i++) {
                    letters_count[i] -= word_count[i];
                }
                recursion(cur_ind + 1, cur_score + words_scores[word]);
                for (int i = 0; i < 26; i++) {
                    letters_count[i] += word_count[i];
                }
            }
            recursion(cur_ind + 1, cur_score);
        };

        recursion(0, 0);
        return res;
    }
};
```
``` JavaScript []
var maxScoreWords = function(words, letters, score) {
    let n = words.length;
    let res = 0;

    let letters_count = new Array(26).fill(0);
    for (let letter of letters) {
        letters_count[letter.charCodeAt(0) - 97]++;
    }

    let words_scores = {};
    for (let word of words) {
        let s = 0;
        for (let ch of word) {
            s += score[ch.charCodeAt(0) - 97];
        }
        words_scores[word] = s;
    }

    function recursion(cur_ind, cur_score) {
        if (cur_ind === n) {
            res = Math.max(res, cur_score);
            return;
        }

        let can_add_this_word = true;
        let word = words[cur_ind];
        let word_count = new Array(26).fill(0);

        for (let ch of word) {
            word_count[ch.charCodeAt(0) - 97]++;
            if (word_count[ch.charCodeAt(0) - 97] > letters_count[ch.charCodeAt(0) - 97]) {
                can_add_this_word = false;
                break;
            }
        }

        if (can_add_this_word) {
            for (let i = 0; i < 26; i++) {
                letters_count[i] -= word_count[i];
            }
            recursion(cur_ind + 1, cur_score + words_scores[word]);
            for (let i = 0; i < 26; i++) {
                letters_count[i] += word_count[i];
            }
        }
        recursion(cur_ind + 1, cur_score);
    }

    recursion(0, 0);
    return res;
};
```
``` Java []
class Solution {
    public int maxScoreWords(String[] words, char[] letters, int[] score) {
        int n = words.length;
        int res = 0;

        int[] letters_count = new int[26];
        for (char letter : letters) {
            letters_count[letter - 'a']++;
        }

        Map<String, Integer> words_scores = new HashMap<>();
        for (String word : words) {
            int s = 0;
            for (int i = 0; i < word.length(); i++) {
                char ch = word.charAt(i);
                s += score[ch - 'a'];
            }
            words_scores.put(word, s);
        }

        res = recursion(0, 0, words, letters_count, words_scores, n);
        return res;
    }

    private int recursion(int cur_ind, int cur_score, String[] words, int[] letters_count, Map<String, Integer> words_scores, int n) {
        if (cur_ind == n) {
            return cur_score;
        }

        int res = cur_score;

        String word = words[cur_ind];
        int[] word_count = new int[26];
        boolean can_add_this_word = true;

        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            word_count[ch - 'a']++;
            if (word_count[ch - 'a'] > letters_count[ch - 'a']) {
                can_add_this_word = false;
                break;
            }
        }

        if (can_add_this_word) {
            for (int i = 0; i < 26; i++) {
                letters_count[i] -= word_count[i];
            }
            res = Math.max(res, recursion(cur_ind + 1, cur_score + words_scores.get(word), words, letters_count, words_scores, n));
            for (int i = 0; i < 26; i++) {
                letters_count[i] += word_count[i];
            }
        }

        res = Math.max(res, recursion(cur_ind + 1, cur_score, words, letters_count, words_scores, n));
        return res;
    }
}
```
``` C []
int maxScoreWords(char** words, int wordsSize, char* letters, int lettersSize, int* score, int scoreSize) {
    int n = wordsSize;
    int res = 0;

    int letters_count[26] = {0};
    for (int i = 0; i < lettersSize; i++) {
        letters_count[letters[i] - 'a']++;
    }

    int words_scores[wordsSize];
    for (int i = 0; i < wordsSize; i++) {
        int s = 0;
        for (int j = 0; words[i][j] != '\\0'; j++) {
            s += score[words[i][j] - 'a'];
        }
        words_scores[i] = s;
    }

    void recursion(int cur_ind, int cur_score) {
        if (cur_ind == n) {
            if (cur_score > res) {
                res = cur_score;
            }
            return;
        }

        int can_add_this_word = 1;
        char* word = words[cur_ind];
        int word_count[26] = {0};

        for (int i = 0; word[i] != '\\0'; i++) {
            int ind = word[i] - 'a';
            word_count[ind]++;
            if (word_count[ind] > letters_count[ind]) {
                can_add_this_word = 0;
                break;
            }
        }

        if (can_add_this_word) {
            for (int i = 0; i < 26; i++) {
                letters_count[i] -= word_count[i];
            }
            recursion(cur_ind + 1, cur_score + words_scores[cur_ind]);
            for (int i = 0; i < 26; i++) {
                letters_count[i] += word_count[i];
            }
        }
        recursion(cur_ind + 1, cur_score);
    }

    recursion(0, 0);
    return res;
}
```

## \uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning! \uD83D\uDCDA

### Please consider *upvote* because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
