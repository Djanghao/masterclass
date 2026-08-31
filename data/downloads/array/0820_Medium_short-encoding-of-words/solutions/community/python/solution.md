# JS, Python, Java, C++ | (Updated) Set & Trie Solutions w/ Visual Explanation

**Author:** sgallivan
**Votes:** 35
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/1095894/](https://leetcode.com/problems/short-encoding-of-words/solutions/1095894/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

(*Note: I've added a breakdown for the **trie approach** below the **set approach**.*)

#### ***Set Idea:***

So a simple encoding of the input would be to add the '**#**' marker to the end of each word and then join them in a string. Per the instructions, this encoding can be made shorter if you can combine two or more words into one encoded word. In order to do this, the smaller word would have to be not just a substring of the larger word, but the *rightmost* substring, or its suffix.

A naive solution here would be to compare each word to each other word and examine if the larger word has the smaller word as its suffix, but with a range of up to **2000** words, that would mean almost **4 million** potential combinations.

But if we're asked to check for matching suffixes, we might also be thinking of a **trie** solution. This seems like a good time for a trie, but tries tend to have a lot of processing and memory overhead involved, and in this instance there's an easier method.

Going back to our naive method, what if, instead of comparing each word to the up to **2000** other words, we instead just identified which possible words could share a suffix with the current word and check for them? Since each word is at most **7** characters long, that means only up to **6** checks per word, rather than **2000**.

In order to make this work more efficiently, of course, we'll have to first make a **map** of the words in **W** so that we don't have to iterate through it repeatedly. In this case, we don't need to store a value, so we can use a **set** as our wordmap.

Then for each word, we should check for each of its suffixes and remove any matches from our set as unnecessary if found.

---

#### ***Trie Idea:***

This problem really is just asking for a **trie** solution. It's only beacuse the constraints on the word lengths are so short that the **set** solution ends up being more performant. So what would a trie solution look like?

First, a trie is a tree data structure in which you define branches of prefix (or in this case suffix) data. In this way, entries that share the same prefix will be grouped together and easy to identify.

When you build out a trie, you iterate through the granular segments of the data and go down existing branches of the trie when they exist and create them when they don't. For this problem, the entries are **words** and thus the granular segments are **characters**. We'll also be iterating through the characters in reverse order, since we're dealing with suffixes instead of prefixes.

![Trie Example](https://i.imgur.com/IwFkd6d.png)

We could fully build out the trie then later traverse the trie to calculate our answer (**ans**), but instead we can just keep our **ans** up-to-date as we build out the trie to be more efficient.

As we build out our trie, there are three things we have to look out for:
 - If any new branches are formed while processing a **word**, then that word must be new and we should add its length (plus 1 for the '#' at the end) to our **ans**.
 - If a **word** ends without forging a new branch, then it must be the suffix of an earlier word, so we shouldn't add its length to our **ans**.
 - If there are no other branches on the node in which the first new branch is formed while processing a **word**, then some earlier word must be a suffix to the current word, so we should subtract the already added amount from our **ans**.

The third check in particular will allow us to avoid needing to sort **W** before entry. In order to prevent the third check from triggering every time a word extends into new territory (which would happen with each new character), we can use a **boolean** flag (**newWord**) to mark only the first instance.

---

#### ***Trie Implementation:***

Javascript and Python are a little more straightforward in their implementation of the trie. They can use a more simple **map** structure to good use.

For Java and C++, however, we'll want to use a **class** structure for our trie, but rather than use data structures with more overhead, we can improve efficiency by simplifying each node to an array of **26** elements, with each index corresponding to a **character**.

The one additional problem we face when converting from a map-type object to an ordered array is that we no longer have an easy way to tell whether or not the array is fully empty. To get around this, we can just add an **isEmpty** boolean flag to our **TrieNode** class.

---

#### ***Javascript Code w/ Set:***

The best result for the code below is **88ms / 46.1MB** (beats 100% / 67%).
```javascript
var minimumLengthEncoding = function(W) {
    let set = new Set(W)
    for (let word of W)
        if (set.has(word))
            for (let i = 1; i < word.length; i++) 
                set.delete(word.slice(i))
    return Array.from(set).join().length + 1
};
```

---

#### ***Javascript Code w/ Trie:***

The best result for the code below is **100ms / 48.0MB** (beats 96% / 33%).
```javascript
var minimumLengthEncoding = function(W) {
    let len = W.length, trie = new Map(), ans = 1
    for (let word of W) {
        let curr = trie, newWord = false
        for (let j = word.length - 1; ~j; j--) {
            let char = word.charAt(j)
            if (!curr.size && !newWord)
                ans -= word.length - j
            if (!curr.has(char))
                newWord = true, curr.set(char, new Map())
            curr = curr.get(char)
        }
        if (newWord) ans += word.length + 1
    }
    return ans
};
```

---

#### ***Python Code w/ Set:***

The best result for the code below is **104ms / 14.9MB** (beats 96% / 97%).
```python
class Solution:
    def minimumLengthEncoding(self, W: List[str]) -> int:
        wset = set(W)
        for word in W:
            if word in wset:
                for i in range(1,len(word)):
                    wset.discard(word[i:])
        return len("#".join(list(wset))) + 1
```

---

#### ***Python Code w/ Trie:***

The best result for the code below is **148ms / 16.2MB** (beats 61% / 38%).
```python
class Solution:
    def minimumLengthEncoding(self, W: List[str]) -> int:
        trie, ans = defaultdict(), 1
        for word in W:
            curr, newWord = trie, False
            for i in range(len(word)-1,-1,-1):
                char = word[i]
                if not curr and not newWord: ans -= len(word) - i
                if char not in curr:
                    newWord = True
                    curr[char] = defaultdict()
                curr = curr[char]
            if newWord: ans += len(word) + 1
        return ans
```

---

#### ***Java Code w/ Set:***

The best result for the code below is **12ms / 38.9MB** (beats 92% / 93%).
```java
class Solution {
    public int minimumLengthEncoding(String[] W) {
        Set<String> set = new HashSet<>(Arrays.asList(W));
        for (String word : W)
            if (set.contains(word))
                for (int i = 1; i < word.length(); i++) 
                    set.remove(word.substring(i));
        int ans = set.size();
        for (String word : set) ans += word.length();
        return ans;
    }
}
```

---

#### ***Java Code w/ Trie:***

The best result for the code below is **8ms / 43.8MB** (beats 99% / 52%).
```java
class TrieNode {
    TrieNode[] branch = new TrieNode[26];
    Boolean isEmpty = true;
}

class Solution {
    public int minimumLengthEncoding(String[] W) {
        TrieNode trie = new TrieNode();
        trie.branch = new TrieNode[26];
        int ans = 1;
        for (String word : W) {
            TrieNode curr = trie;
            Boolean newWord = false;
            for (int i = word.length() - 1; i >= 0; i--) {
                int c = word.charAt(i) - 'a';
                if (curr.isEmpty && !newWord) ans -= word.length() - i;
                if (curr.branch[c] == null) {
                    curr.branch[c] = new TrieNode();
                    newWord = true;
                    curr.isEmpty = false;
                }
                curr = curr.branch[c];
            }
            if (newWord) ans += word.length() + 1;
        }
        return ans;
    }
}
```

---

#### ***C++ Code w/ Set:***

The best result for the code below is **36ms / 17.1MB** (beats 94% / 78%).
```c++
class Solution {
public:
    int minimumLengthEncoding(vector<string>& W) {
        unordered_set<string> wset(W.begin(), W.end());
        for (string &word : W)
            if (wset.find(word) != wset.end())
                for (int i = 1; i < word.length(); i++) 
                    wset.erase(word.substr(i));
        int ans = wset.size();
        for (string word : wset) ans += word.size();
        return ans;
    }
};
```

---

#### ***C++ Code w/ Trie:***

The best result for the code below is **36ms / 73.7MB** (beats 94% / 37%).
```c++
struct TrieNode {
    TrieNode *branch[26];
    bool isEmpty = true;
};

class Solution {
public:
    int minimumLengthEncoding(vector<string>& W) {
        TrieNode *trie = new TrieNode();
        int ans = 1;
        for (string word : W) {
            TrieNode *curr = trie;
            bool newWord = false;
            for (int i = word.size() - 1; i >= 0; i--) {
                int c = word[i] - 97;
                if (curr->isEmpty && !newWord) ans -= word.size() - i;
                if (!curr->branch[c]) {
                    newWord = true;
                    curr->branch[c] = new TrieNode();
                    curr->isEmpty = false;
                }
                curr = curr->branch[c];
            }
            if (newWord) ans += word.size() + 1;
        }
        return ans;
    }
};
```