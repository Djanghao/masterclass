# C Easy Solution using hashtable - Time = O(n), Space = O(n)

**Author:** akib_islam
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/1979683/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/1979683/)

---

```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
#define HASHTABLE_SIZE 1000

struct HashNode
{
  int val;
  int freq;
  struct HashNode * next;
};

int hashindex(int key)
{
    return (key%HASHTABLE_SIZE);
}

struct ListNode* deleteDuplicatesUnsorted(struct ListNode* head)
{
    struct HashNode * hashtable[HASHTABLE_SIZE] = {NULL};  
    
    struct ListNode * trav = head;
    
    while(trav)
    {
        int index = hashindex(trav->val);
        if(hashtable[index] == NULL)
        {
            struct HashNode * new_node = (struct HashNode *)malloc(sizeof(struct HashNode));
            new_node->val = trav->val;
            new_node->freq = 1;
            new_node->next = NULL;
            hashtable[index] = new_node;
        }
        else
        {
            //Search if the node with the key is presnet
            struct HashNode * cur = hashtable[index];
            struct HashNode * prev = NULL;
            while(cur)
            {
                if(cur->val == trav->val)
                {
                    cur->freq += 1;
                    break;
                }
                
                    prev = cur;
                    cur = cur->next;
            }
            
            if(cur == NULL)
            {
                struct HashNode * new_node = (struct HashNode *)malloc(sizeof(struct HashNode));
                new_node->val = trav->val;
                new_node->freq = 1;
                new_node->next = NULL;
                prev->next = new_node;
            }
        }
        trav = trav->next;
    }
    
    struct ListNode * prev_ptr = NULL;
    trav = head;
    
    while(trav)
    {
        int index = hashindex(trav->val);
        struct HashNode * cur = hashtable[index];
        int freq = 0;
        while(cur)
        {
            if(cur->val == trav->val)
            {
                freq = cur->freq;
                break;
            }
            cur = cur->next;
        }
        
        if(freq == 1)
        {
            prev_ptr = trav;
            trav = trav->next;
        }
        else
        {
            struct ListNode * del_node = NULL;
            del_node = trav;
            trav = trav->next;
            
            if(prev_ptr == NULL)
            {
                head = trav;
            }
            else
            { 
                prev_ptr->next = trav;
            }
            free(del_node);
        }
    }
    return head;
}
```