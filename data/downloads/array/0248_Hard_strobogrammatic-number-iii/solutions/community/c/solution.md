# C Variant with inline comments

**Author:** msreekan
**Votes:** 1
**Link:** [https://leetcode.com/problems/strobogrammatic-number-iii/solutions/1995635/](https://leetcode.com/problems/strobogrammatic-number-iii/solutions/1995635/)

---

C Variant with comments
```
typedef enum {
    PAUSED,
    START,
    END
} CountState;

int compare(char *str, char *ref) 
{
    int i, str_len = strlen(str), ref_len = strlen(ref);

    // Comparison only needed if the strings are of same length
    if (str_len != ref_len) return -1;

    for (i = 0; str[i]; ++i) {        
        if (str[i] != ref[i]) break;
    }
    return str[i] - ref[i];
}

void dfs(char *str, int soff, int eoff, int *count, char *low, CountState *state, char *high)
{
    // End time 
    if (*state == END) {
        return;
    }

    // We have a new Strobogrammatic number
    if (soff > eoff) {
        // Start counter if we have reached 'low'
        if (compare(str, low) >= 0 && *state == PAUSED) {
            *state = START;
        }
        // Stop counter if we reached > 'high'
        if (compare(str, high) > 0) {
            *state = END;
            return;
        }
        // increment count
        if (*state == START) (*count) += 1;    
        return;
    }

    // Generate this lexicographically for above start and end condition to work!
    
    // Use 0 only if there is only one element or in between numbers
    if (soff > 0 || soff == eoff) {
        str[eoff] = str[soff] = '0';
        dfs(str, soff + 1, eoff - 1, count, low, state, high);
    }
    
    str[eoff] = str[soff] = '1';
    dfs(str, soff + 1, eoff - 1, count, low, state, high);

    // Use 6/9 only if start and end offset are different!!
    if (soff < eoff) {
        str[soff] = '6';
        str[eoff] = '9';
        dfs(str, soff + 1, eoff - 1, count, low, state, high);
    }

    str[eoff] = str[soff] = '8';
    dfs(str, soff + 1, eoff - 1, count, low, state, high);

    // Use 6/9 only if start and end offset are different!!
    if (soff < eoff) {
        str[soff] = '9';
        str[eoff] = '6';
        dfs(str, soff + 1, eoff - 1, count, low, state, high);
    }
}

int strobogrammaticInRange(char * low, char * high)
{
    int low_len = strlen(low), high_len = strlen(high), i, j;
    int count = 0;
    CountState state = 0;

    // Allocate temporary string
    char *str = calloc(high_len + 1, sizeof(char));
    if (!str) return 0;
    
    // Run dfs for string of each length from low to high
    for (i = low_len; i <= high_len; ++i) {
        dfs(str, 0, i - 1, &count, low, &state, high);
    }
    free(str);
    return count;
}
```