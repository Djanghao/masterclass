# C | 23ms(100%) & 48.49MB(100%) | Pre-sum the Counts of Characters

**Author:** peihao61
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-same-end-substrings/solutions/5994983/](https://leetcode.com/problems/number-of-same-end-substrings/solutions/5994983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Pre-sum the Counts of Characters
# Approach
<!-- Describe your approach to solving the problem. -->
1. Allocate 26*n to pre-sum the counts of characters
2. Get interval counts of character from queries
3. Sum up 1 to n from each character to character.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
#define CHAR_SIZE   26

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sameEndSubstringCount(char* s, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int nSize = CHAR_SIZE * (1+strlen(s));
    short asCount[nSize];
    memset(asCount, 0, CHAR_SIZE*sizeof(short));

    short* psCount = asCount;
    while(*s)
    {
        short* psPreCount = psCount;
        psCount += CHAR_SIZE;
        memcpy(psCount, psPreCount, CHAR_SIZE*sizeof(short));

        psCount[-'a'+*(s++)]++;
    }

    *returnSize = queriesSize;
    int* pnRet = (int*) malloc(queriesSize*sizeof(int));
    
    queries += queriesSize;
    pnRet += queriesSize;
    while(queriesSize--)
    {
        short sLeft = (*(--queries))[0];

        *(--pnRet) = 0;
        psCount = asCount + CHAR_SIZE*(1+(*queries)[1]);
        char cSize = CHAR_SIZE;
        short* psLeft = sLeft? asCount + CHAR_SIZE*sLeft: asCount;
        while(cSize--)
        {
            int nSize = *(psCount++) - *(psLeft++);
            if(nSize) *pnRet += ((nSize++) * nSize) >> 1;
        }
    }

    return pnRet;
}
```