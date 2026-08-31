# C solution

**Author:** lathcsmath
**Votes:** 1
**Link:** [https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/4426553/](https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/4426553/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a rope tree node. */
struct RopeTreeNode {
    int len;
    char* val;
    struct RopeTreeNode* left;
    struct RopeTreeNode* right;
};

/// DO NOT MODIFY THE CODE ABOVE

char* getResultOfOperationS(struct RopeTreeNode*);
char getKthCharacter(struct RopeTreeNode*, int);

char* getResultOfOperationS(struct RopeTreeNode* root)
{
    if(root->left == NULL && root->right == NULL)
    {
        char* root_val = malloc(strlen(root->val) + 1);
        if(root_val == NULL)
        {
            return NULL;
        }
        return strcpy(root_val, root->val);
    }
    else if(root->left == NULL)
    {
        return getResultOfOperationS(root->right);
    }
    else if(root->right == NULL)
    {
        return getResultOfOperationS(root->left);
    }
    char *S_left_child = getResultOfOperationS(root->left);
    char *S_right_child = getResultOfOperationS(root->right);
    if(S_left_child == NULL || S_right_child == NULL)
    {
        free(S_left_child);
        free(S_right_child);
        return NULL;
    }
    int len = strlen(S_left_child) + strlen(S_right_child);
    char *S_root = malloc((len + 1) * sizeof(char)); 
    if(S_root == NULL)
    {
        free(S_left_child);
        free(S_right_child);
        return NULL;
    }
    S_root[0] = '\\0';
    strcat(S_root,S_left_child);
    strcat(S_root,S_right_child);
    free(S_left_child);
    free(S_right_child);
    return S_root; 
}

char getKthCharacter(struct RopeTreeNode* root, int k)
{
    char *S_root = getResultOfOperationS(root);
    char letter_at_pos_k = (S_root != NULL)? S_root[k - 1] : '\\0';
    free(S_root);
    return letter_at_pos_k;
}
```