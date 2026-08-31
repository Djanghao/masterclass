# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 4
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5799060/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5799060/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1393064209?envType=daily-question&envId=2024-09-17
- ***C++ Code -->*** https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1392910695?envType=daily-question&envId=2024-09-17
- ***Python3 Code -->*** https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1393045141?envType=daily-question&envId=2024-09-17
- ***Java Code -->*** https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1392937029?envType=daily-question&envId=2024-09-17
- ***C Code -->*** https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1393082212?envType=daily-question&envId=2024-09-17
- ***Python Code -->*** https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1392968601?envType=daily-question&envId=2024-09-17
- ***C# Code -->*** https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/1393056413?envType=daily-question&envId=2024-09-17
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
      O(N + M)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
      O(N + M)
# Code
```c []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include<stdio.h>
#include<stdlib.h>
#define FOR(a, b, c) for (int a = b; a < c; ++a)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)
#define Rep1(i, n) FOR1(i, 1, n)

#define MAX_WORD_LENGTH 100
#define HASH_SIZE 1000
#define MAX_SIZE 200

// Hash table node
typedef struct Node {
    char word[MAX_WORD_LENGTH];
    int count;
    struct Node* next;
} Node;

// Hash table
typedef struct {
    Node* table[HASH_SIZE];
} HashTable;

// Hash function
unsigned int hash(const char* str) {
    unsigned int hash = 0;
    while (*str)
        hash = (hash << 5) + *str++;
    return hash % HASH_SIZE;
}

// Initialize the hash table
void initHashTable(HashTable* ht) {
    Rep (i, HASH_SIZE)
        ht->table[i] = NULL;
}

// Insert a word into the hash table
void insertHashTable(HashTable* ht, const char* word) {
    unsigned int index = hash(word);
    Node* list = ht->table[index];
    Node* node = list;

    // Check if the word already exists
    while (node) {
        if (strcmp(node->word, word) == 0) {
            node->count++;
            return;
        }
        node = node->next;
    }

    // Add new word
    Node* newNode = (Node*)malloc(sizeof(Node));
    strcpy(newNode->word, word);
    newNode->count = 1;
    newNode->next = list;
    ht->table[index] = newNode;
}

// Search for a word in the hash table
Node* searchHashTable(HashTable* ht, const char* word) {
    unsigned int index = hash(word);
    Node* list = ht->table[index];

    while (list) {
        if (strcmp(list->word, word) == 0)
            return list;
        list = list->next;
    }
    return NULL;
}

// Free the hash table
void freeHashTable(HashTable* ht) {
    Rep (i, HASH_SIZE) {
        Node* list = ht->table[i];
        while (list) {
            Node* temp = list;
            list = list->next;
            free(temp);
        }
    }
}

// Read a sentence and split into words
void processSentence(HashTable* ht, const char* sentence) {
    char word[MAX_WORD_LENGTH];
    const char* p = sentence;
    const char* start;

    while (*p) {
        while (*p == ' ')
            p++; // Skip spaces
        start = p;
        while (*p && *p != ' ')
            p++;
        if (p > start) {
            strncpy(word, start, p - start);
            word[p - start] = '\\0';
            insertHashTable(ht, word);
        }
    }
}
char** uncommonFromSentences(char* s1, char* s2, int* returnSize) {
    char** ans = (char**)malloc(sizeof(char*) * MAX_SIZE);
    *returnSize = 0;

    HashTable ht1, ht2;

    initHashTable(&ht1);
    initHashTable(&ht2);

    processSentence(&ht1, s1);
    processSentence(&ht2, s2);

    Rep (i, HASH_SIZE) {
        Node* list = ht1.table[i];
        while (list) {
            if (list->count == 1 && searchHashTable(&ht2, list->word) == NULL) {
                //printf("%s\
", list->word);
                ans[(*returnSize)++] = list->word;
            }
            list = list->next;
        }
    }

    Rep (i, HASH_SIZE) {
        Node* list = ht2.table[i];
        while (list) {
            if (list->count == 1 && searchHashTable(&ht1, list->word) == NULL) {
                //printf("%s\
", list->word);
                ans[(*returnSize)++] = list->word;
            }
            list = list->next;
        }
    }


    return ans;
    // Free hash tables
    freeHashTable(&ht1);
    freeHashTable(&ht2);
}
```
![th.jpeg](./images/1.jpeg)
