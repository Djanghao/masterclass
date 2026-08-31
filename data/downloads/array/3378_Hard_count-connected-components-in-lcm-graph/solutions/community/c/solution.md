# C solution

**Author:** Yuexuan222
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-connected-components-in-lcm-graph/solutions/6124291/](https://leetcode.com/problems/count-connected-components-in-lcm-graph/solutions/6124291/)

---


# Code
```c []
// for qsort
int cmp( void const *a, void const *b) {
    return *(int*)a - *(int*)b;
}

int gcd( int a, int b) {
    if ( b > a) {
        return gcd( b, a);
    } else if ( b == 0) {
        return a;
    } else {
        return gcd( b, a%b);
    }
}

long long lcm( int a, int b) {
    int tmp = b / gcd(a,b);
    return (long long) a * tmp;
}

// DSU
int find( int x, int *father) {
    if ( father[x] == x) {
        return x;
    }
    int root = find( father[x], father);
    father[x] = root;
    return root;
}

// DSU
void merge( int x, int y, int *father) {
    int root_x = find( x, father);
    int root_y = find( y, father);
    father[root_y] = root_x;
}


int countComponents(int* nums, int numsSize, int threshold) {

    // sort first to make scope reducing easier
    qsort( nums, numsSize, sizeof(int), cmp);

    // initialize the disjoint sets
    int father[numsSize];
    for ( int i=0; i<numsSize; i++) {
        father[i] = i;
    }

    // numbers before index p are all in the same set
    int p = 0;
    int tmp = threshold / nums[0];
    for ( ; p<numsSize && nums[p] <= tmp; p++) {
        father[p] = 0;
    }

    // numbers bigger than threshold are a disjoint set itself
    int q = numsSize-1;
    for ( ; q>=0 && nums[q] > threshold; q--) {
    }

    // we only have to check the range between [p,q]

    // for every i, check all pairs (i,j) which j is in [p,q]
    for ( int i=0; i<=q; i++) {
        for ( int j=p>i+1?p:i+1; j<=q; j++) {
            if ( father[i] != father[j]) {
                if ( lcm( nums[i], nums[j]) <= threshold) {
                    merge( i, j, father);
                }
            }
        }
    }


    // calculate how many sets there are
    int set = 0;
    int hash[numsSize];
    for ( int i=0; i<numsSize; i++) {
        hash[i] = 0;
    }
    for ( int i=0; i<numsSize; i++) {
        if ( !hash[ find( i, father)]) {
            hash[ find( i, father)]++;
            set++;
        }
    }

    return set;
}
```