# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 4
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5819491/](https://leetcode.com/problems/report-spam-message/solutions/5819491/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
```javascript []
//JavaScript Code
/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    const set = new Set()
    for (let words of bannedWords)
        set.add(words)
    let count = 0
    for (let word of message){
        if (set.has(word))
            count++
    }
    return count >= 2
};
```
```C++ []
//C++ Code
class Solution {
    const int W = 59;
    unsigned int hash(const string &s) {
        unsigned int r = 0;
        for (char c : s) {
            r = r * W + c;
        }
        return r;
    }
public:
    bool reportSpam(vector<string>& message, vector<string>& bannedWords) {
        unordered_set<unsigned int> banned;
        for (const auto& s : bannedWords) {
           banned.insert(hash(s));
        }
        int r = 0;
        for (const auto& s : message) {
            if ((r += banned.count(hash(s))) == 2) return true;
        }
        return false;
    }
};
```
```Python3 []
#Python3 code
class Solution:
    def reportSpam(self, message: List[str], bannedWords: List[str]) -> bool:
        res = set(_ for _ in bannedWords)
        cnt = 0
        for word in message:
            if word in res:
                cnt += 1
        return cnt >= 2
```
```Java []
//Java Code
class Solution {
    public boolean reportSpam(String[] message, String[] bannedWords) {
        HashSet<String> set = new HashSet<>();
        for (String word : bannedWords)
            set.add(word);
        int cnt = 0;
        for (String words : message) {
            if (set.contains(words))
                cnt++;
        }
        return cnt >= 2;
    }
}
```
```C []
//C Code
#include<stdio.h>
#include<stdlib.h>

#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)
#define Rep1(i, n) FOR1(i, 1, n)

#define MAX_WORDS 100000
#define MAX_WORD_LENGTH 15

typedef struct Node {
    char *word;
    struct Node *next;
} Node;

typedef struct HashTable {
    Node **table;
    int size;
} HashTable;

unsigned int hash(char *str) {
    unsigned int hash = 0;
    while (*str)
        hash = (hash * 31) + *str++;
    
    return hash;
}

HashTable *create_hash_table(int size) {
    HashTable *ht = (HashTable*) malloc(sizeof(HashTable));
    ht->table = (Node**) calloc(size, sizeof(Node *));
    ht->size = size;
    return ht;
}

void insert(HashTable *ht, char *word) {
    unsigned int index = hash(word) % ht->size;
    Node *new_node = malloc(sizeof(Node));
    new_node->word = strdup(word);
    new_node->next = ht->table[index];
    ht->table[index] = new_node;
}

bool search(HashTable *ht, char *word) {
    unsigned int index = hash(word) % ht->size;
    Node *current = ht->table[index];
    while (current) {
        if (strcmp(current->word, word) == 0) {
            return true; // Found
        }
        current = current->next;
    }
    return false; // Not found
}

void free_hash_table(HashTable *ht) {
    Rep (i, ht->size) {
        Node *current = ht->table[i];
        while (current) {
            Node *temp = current;
            current = current->next;
            free(temp->word);
            free(temp);
        }
    }
    free(ht->table);
    free(ht);
}

bool reportSpam(char** message, int message_length, char** bannedWords, int banned_length) {

    HashTable *banned_table = create_hash_table(100003);
    
    Rep (i, banned_length)
        insert(banned_table, bannedWords[i]);

    int match_count = 0;
    
    Rep (i, message_length) {
        if (search(banned_table, message[i])) {
            match_count++;
            if (match_count >= 2) {
                free_hash_table(banned_table);
                return true; // true
            }
        }
    }

    free_hash_table(banned_table);
    return 0; // false
}
```
```Pyhton []
#Python Code
```
```C# []
//C# Code
public class Solution {
    public bool ReportSpam(string[] message, string[] bannedWords) {
        HashSet<string> st = new HashSet<string>();
        foreach (string ban in bannedWords)
            st.Add(ban);
        var cnt = 0;
        foreach (string w in message){
            if (st.Contains(w))
                cnt++;
        }
        return cnt >= 2;
    }
}
```
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N + M) // N -> MessageSize
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(M) // M -> bannedSize
# Code
![th.jpeg](./images/1.jpeg)
