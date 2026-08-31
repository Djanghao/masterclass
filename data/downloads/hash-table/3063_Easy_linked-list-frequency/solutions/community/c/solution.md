# C Solution using hashtable, TC = O(n), SC = O(1)

**Author:** akibr5
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/5503273/](https://leetcode.com/problems/linked-list-frequency/solutions/5503273/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n) where n is number of elements in the linked list
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
#define HASH_SIZE 1000

typedef struct hashNode
{
    int val;
    int freq;
    struct hashNode * next;
}hashNode;

int hash_index(int val)
{
    return (val % HASH_SIZE);
}

void insert_hashtable(hashNode ** hashtable, int val)
{
    int index = hash_index(val);
    
    if(hashtable[index] == NULL)    //hashTable Index doesn't have any node
    {
        hashNode * new_node = (hashNode *)malloc(sizeof(hashNode));
        new_node->val = val;
        new_node->freq = 1;
        new_node->next = NULL;
        hashtable[index] = new_node;
        return;
    }

    hashNode * prev = NULL;
    hashNode * trav = hashtable[index];
    
    while(trav)
    {
        if(trav->val == val)
        {
            trav->freq += 1;
            return;
        }
        prev = trav;
        trav = trav->next;
    }

    //Insertion at the end
    hashNode * new_node = (hashNode *)malloc(sizeof(hashNode));
    new_node->val = val;
    new_node->freq = 1;
    new_node->next = NULL;
    prev->next = new_node;
    return;
}

int search_hashtable(hashNode ** hashtable, int index)
{
    int freq = 0;
    hashNode * trav = hashtable[index];
    if(trav == NULL) //Index is empty
        return freq;

    //Remove the first element and return it
    freq = trav->freq;
    hashtable[index] = trav->next;
    free(trav);
    return freq;
}

struct ListNode* frequenciesOfElements(struct ListNode* head) 
{
    struct ListNode * trav = head;
    hashNode ** hashtable = (hashNode **)malloc(sizeof(hashNode *) * HASH_SIZE);
    int i=0;
    for(i=0; i<HASH_SIZE; i++)
    {
        hashtable[i] = NULL;
    }

    while(trav)
    {
        insert_hashtable(hashtable ,trav->val);
        trav = trav->next;
    }

    struct ListNode * return_head = NULL;
    trav = NULL;
    
    for(i=0; i<HASH_SIZE; i++)
    {
        int freq = 0;
        while((freq = search_hashtable(hashtable, i)) > 0)
        {
            struct ListNode * new_node = (struct ListNode *)malloc(sizeof(struct ListNode));
            new_node->val = freq;
            new_node->next = NULL;

            if(return_head == NULL)
            {
                return_head = new_node;
                trav = new_node;
            }
            else
            {
                trav->next = new_node;
                trav = new_node;
            }
        }
    }
    return return_head;
}
```