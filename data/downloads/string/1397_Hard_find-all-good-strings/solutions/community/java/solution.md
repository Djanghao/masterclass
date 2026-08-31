# Dew It | No KMP, O(m*n) | 8ms (very fast Java sol)

**Author:** captain_jackked
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-all-good-strings/solutions/556643/](https://leetcode.com/problems/find-all-good-strings/solutions/556643/)

---

**BASIC IDEA**
It helps to IMAGINE a completely filled trie of depth ```n``` (DO NOT construct this). The left boundary of the trie is that path of leaf ```s1``` and the right boundary is same for ```s2``` - what we need is the **count of leaves between these two boundaries** such that ```evil``` is not a part of the path.
The dynamic programming part is where we add levels to this tree (trie) one by one. What we indirectly store is the number of ```good``` strings we have seen so far (a new good string is a child of an existing good string)

* From 0 to n-1, we add characters one by one to ```s1```, ```s2``` and all strings between s1 and s2
* ```store``` is a ```[3][m]``` sized 2D array where 0th row represents s1, 2nd row represents s2 and 1st row represents every string lexicographically between s1 and s2
* We store counts of certain *categories* of strings in ```store```. These categories are basically: **strings suffixed with r sized prefix of** ```evil```  (*where r ranges from 0 to m-1*)
* An example to understand what ```store``` is: after ```k``` additions (loop from step 1), essentially ```store[1][5]``` represents the count of strings in between ```s1``` and ```s2``` of **size** ```k``` such that they **end** with the **first** ```5``` characters of ```evil```
* If we have all ```store[i][j]``` for the kth step, the problem reduces to finding ```store[i][j]``` for the (k+1)th step and keep doing it until ```n```.
In the end return ```(store[0][0] + store[1][0] + store[2][0])```
* Let's generate the "next" ```store[][]``` in a temporary matrix called ```next``` (which is of the same size ```[3][m]```).
* The most crucial part is the following relationship:
```store[0]``` feeds ```next[0]```
```store[2]``` feeds ```next[2]```
```store[0]```, ```store[1]``` and ```store[2]``` feed ```next[1]```

I think the rest is self explanatory if you read the code
(Why create ```suffix```? What is the exact relationship between ```store``` and ```next```? and so on)

**CODE**
```
class Solution {
    final int MOD = 1000000007;
    final boolean PRINT = false;
    
    boolean[] suffix;
    char[] a, b, e;
    int n, m;
    
    // Why the redundant parameter n in the first place??
    public int findGoodStrings(int whatTheHell, String s1, String s2, String evil) {
        a = s1.toCharArray(); b = s2.toCharArray(); e = evil.toCharArray();
        n = a.length; m = e.length;
        
        // First task is to find the longest "common" prefix for s1 and s2
        int index = 0;
        while(index < n && a[index] == b[index]) ++index;
        if(index < n && b[index] < a[index]) return 0; // if s2 < s1, return 0
        
        /*
        Suffix is a boolean array of size m where suffix[i] is true if
        prefix of size (i+1) is same as suffix of size (i+1)
        */
        initSuffix();
        
        // Analysis starts at 'start'
        int start = 0;
        if(index >= m) {
            if(s1.substring(0, index).indexOf(evil) != -1) return 0;
            else start = index - m + 1;
        }
        // We use indices from start to index to initialize store
        long[][] store = initStore(start, index);
        
        // Saving the starting point <- logic within while loop different the very first time
        start = index;
        while(index < n) {
            long[][] next = new long[3][m];
            
            /*
            if(start == index)
                feed store[0] to next[1] with new char in (a[index], b[index])
            else
                feed store[0] to next[1] with new char in (a[index], 'z']
                feed store[2] to next[1] with new char in ['a', b[index])
                feed store[1] to next[1] with new char in ['a', 'z']
            */
            char low = a[index], hi = 'z';
            if(index == start) {
                hi = b[index];
                --hi;
            }
            ++low;
            dewIt(store[0], next[1], low, hi);
            
            char c;
            long sum;
            if(index > start) {
                hi = b[index]; --hi;
                dewIt(store[2], next[1], 'a', hi);
                dewIt(store[1], next[1], 'a', 'z');
            }
            
            dewIt(store[0], next[0], a[index], a[index]);
            dewIt(store[2], next[2], b[index], b[index]);
            
            store = next;
            ++index;
            if(PRINT) System.out.println(Arrays.deepToString(store));
        }
        return (int) ((store[0][0] + store[1][0] + store[2][0])%MOD);
    }
    
    private void dewIt(long[] source, long[] dest, char low, char hi) {
        for(char c=low; c<=hi; ++c) feed(source, dest, c);
        // dest[0] is not handled in the feed function
        // we decrease iff last char of evil exists within our range
        long dec = ((e[m-1] >= low && e[m-1] <= hi)?source[m-1]:0);
        dest[0] = (dest[0] + (hi-low+1)*source[0] - dec)%MOD;
        if(dest[0] < 0) dest[0] += MOD;
    }
    
    private void feed(long[] source, long[] dest, char c) {
        // If c is the last char in evil, we may discard some strings
        boolean minus = (c == e[m-1]);
        for(int i=0; i<m-1; ++i) {
            // Discard only if suffix[i] is also true
            long remove = ((minus && suffix[i]) ? source[m-1]:0);
            if(c == e[i]) {
                dest[i+1] += (source[i] - remove);
                dest[i+1] %= MOD;
                if(dest[i+1] < 0) dest[i+1] += MOD;
            }
        }
    }
    
    private long[][] initStore(int start, int index) {
        long[][] store = new long[3][m];
        for(int i=start; i<index; ++i) {
            int x = i, y = 0;
            boolean nah = false;
            while(x < index) {
                if(a[x] != e[y]) {
                    nah = true;
                    break;
                }
                ++x; ++y;
            }
            if(!nah) {
                int l = index - i;
                store[0][l] = 1;
                store[2][l] = 1;
            }
        }
        store[0][0] = 1; store[2][0] = 1;
        if(PRINT) System.out.println(Arrays.deepToString(store));
        return store;
    }
    
    private void initSuffix() {
        suffix = new boolean[m];
        for(int i=0; i<m; ++i) {
            int x = 0, y = m-1-i;
            boolean nah = false;
            while(y < m) {
                if(e[x] != e[y]) {
                    nah = true;
                    break;
                }
                ++x; ++y;
            }
            suffix[i] = !nah;
        }
        if(PRINT) System.out.println(Arrays.toString(suffix));
    }
}
```