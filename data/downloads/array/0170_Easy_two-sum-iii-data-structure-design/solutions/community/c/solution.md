# Pure C||malloc() & realloc() only

**Author:** killbugchance
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/2844394/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/2844394/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
For adding, use insertion sort to keep the input nums sorted.
For finding pair, use two pointers algorithem to find pair in O(n)


# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
For each adding:
Find position $$O(logn)$$ + Moving data $$O(n)$$
For adding all: $$O(n^2)$$

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Use two pointers to scan each element at most once.

# Code
```
typedef struct {
    int *nums;
    int numSize;
    int numBufferSize;      // real buffer size allocated for nums (trunk size = 100(int))
} TwoSum;


TwoSum* twoSumCreate() {
    TwoSum *obj = (TwoSum *)malloc( sizeof (TwoSum) );
    obj->nums = (int *)malloc( (obj->numBufferSize = 100) * sizeof (int) );
    obj->numSize = 0;
    return obj;
}

// Use insertion sort to keep the input nums sorted. 
// Time complexity: O(search:logN + data move:N) for each, so O(N^2) for all
void twoSumAdd(TwoSum* obj, int number) {
    int lo, hi, mid;

    // increase buffer size as need
    if ( obj->numSize >= obj->numBufferSize )
        obj->nums = (int *)realloc( obj->nums, (obj->numBufferSize += 100) * sizeof (int) );

    // find insert position (binary search)
    lo = 0, hi = obj->numSize - 1;
    while ( lo <= hi ) {
        mid = (lo + hi) / 2;

        if ( obj->nums[mid] == number ) {
            lo = mid;
            break;
        }
        if ( obj->nums[mid] < number )
            lo = mid + 1;
        else  // ( obj->nums[mid] > number )
            hi = mid - 1;
    }

    // keep space and store to
    if ( obj->numSize - lo > 0 )
        memmove( &obj->nums[lo+1], &obj->nums[lo], (obj->numSize - lo)*sizeof (int) );
    obj->nums[lo] = number;
    obj->numSize++;
}

// Use two pointers algorithm to find the pair
// Time complexity: O(N)
bool twoSumFind(TwoSum* obj, int value) {
    int i_lo = 0, i_hi = obj->numSize - 1;
    long sum;

    while ( i_lo < i_hi ) {
        sum = obj->nums[i_lo] + obj->nums[i_hi];
        if ( sum == (long)value )
            return true;
        if ( sum > (long)value )
            i_hi--;
        else
            i_lo++;
    }
    return false;
}

void twoSumFree(TwoSum* obj) {
    if ( obj != NULL ) {
        if ( obj->nums != NULL )
            free( obj->nums );
        free( obj );
    }
}

/**
 * Your TwoSum struct will be instantiated and called as such:
 * TwoSum* obj = twoSumCreate();
 * twoSumAdd(obj, number);
 
 * bool param_2 = twoSumFind(obj, value);
 
 * twoSumFree(obj);
*/
```