# simple solution using Trie data structure

**Author:** Reddaiah12345
**Votes:** 9
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5818785/](https://leetcode.com/problems/report-spam-message/solutions/5818785/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

In this problem, we are tasked with detecting whether a message contains any banned words, and if it contains at least two banned words, it should be classified as spam. To solve this efficiently, we can use a Trie (prefix tree) data structure to store the words from the message. Then, we can quickly search the banned words in the Trie to determine how many of them appear in the message. If we find two or more banned words, the message is considered spam.

The Trie allows us to efficiently insert and search for words by breaking each word down into characters and storing them in a tree structure. This avoids repeatedly checking entire words when searching for banned words, making the solution more efficient for large datasets.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Trie Structure:
    - We use a Trie to store the words from the message.
    - Each node in the Trie contains an array of 26 pointers (one for each letter of the alphabet).
    - The count field in each node indicates how many times a word ends at that node.
1. Inserting Words into the Trie:

    - For each word in the message, we insert it into the Trie by iterating through its characters.
    - If a character does not already exist in the Trie, a new node is created for it.
    - Once the word is fully inserted, we increment the count at the last node to mark the end of the word.
1. Searching for Words in the Trie:

    - For each banned word, we check if it exists in the Trie by traversing the Trie node by node using the word's characters.
    - If the word is found, we increment the count of banned words found in the message.
    - If two or more banned words are found, we classify the message as spam.
1. Handling Unique Banned Words:

    - We use a Set<String> to ensure we are only counting unique banned words.
Stopping Condition:

    - As soon as we find two or more banned words, we immediately return true (indicating spam) and stop further searches.



# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```python []
class Trie:
    def __init__(self):
        self.count = 0
        self.list = [None] * 26  # Initialize the list of 26 elements for 'a'-'z'

    def put(self, node, ch):
        self.list[ord(ch) - ord('a')] = node

    def get(self, ch):
        return self.list[ord(ch) - ord('a')]

    def setEnd(self):
        self.count += 1

    def isEnd(self):
        return self.count


class Solution:
    def __init__(self):
        self.root = Trie()

    def insert(self, word):
        node = self.root
        for ch in word:
            if node.get(ch) is None:
                node.put(Trie(), ch)
            node = node.get(ch)
        node.setEnd()

    def search(self, word):
        node = self.root
        for ch in word:
            if node.get(ch) is None:
                return 0
            node = node.get(ch)
        return node.isEnd()

    def reportSpam(self, message, bannedWords):
        # Insert all words in the message into the Trie
        for word in message:
            self.insert(word)

        count = 0
        st = set(bannedWords)

        # Check if banned words exist in the message
        for word in st:
            count += self.search(word)
            if count >= 2:
                return True
        return False


# Example Usage
sol = Solution()
message = ["hello", "world", "spam", "message"]
bannedWords = ["spam", "message", "notfound"]

print(sol.reportSpam(message, bannedWords))  # Output: True

```
```cpp []
struct Trie {
    int count=0;
    Trie* list[26];
    
    Trie() {
        memset(list, 0, sizeof(list));  // Initialize all pointers to NULL
    }

    void put(Trie *node, char ch) {
        list[ch - 'a'] = node;
    }

    Trie* get(char ch) {
        return list[ch - 'a'];
    }

    void setEnd() {
        count++;
    }

    int isEnd() {
        return count;
    }
};

class Solution {
public:
    Trie *root;

    Solution() {
        root = new Trie();
    }

    void insert(string word) {
        Trie *node = root;
        for (auto ch : word) {
            if (node->get(ch) == NULL) {
                node->put(new Trie, ch);
            }
            node = node->get(ch);  // Update node after inserting/finding the character
        }
        node->setEnd();
    }

    int search(string word) {
        Trie *node = root;
        for (auto ch : word) {
            if (node->get(ch) == NULL) {
                return false;
            }
            node = node->get(ch);  // Use node instead of root
        }
        return node->isEnd();
    }

    bool reportSpam(vector<string>& message, vector<string>& bannedWords) {
        // Insert all words in the message into the Trie
        for (auto word : message) {
            insert(word);
        }

        int count = 0;
        // Check if banned words exist in the message
        set<string>st;
        for(auto word:bannedWords){
            st.insert(word);
        }
        for (auto word : st) {
            count+=search(word);
            if (count >= 2) {
                return true;
            }
        }
        return false;
    }
};

```
![ljyaCIu_RMGymk1NhSvUeA.jpg](./images/0.jpeg)
