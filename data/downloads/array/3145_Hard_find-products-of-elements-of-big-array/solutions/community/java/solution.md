# Java solution - 80ms

**Author:** darshit901
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5144506/](https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5144506/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For integers in ascending order, each power of 2 is present in a pattern. Let us consider the numbers up to 8 for reference and list their binary representations, up to 4 digits:

0 --> 0000
1 --> 0001
2 --> 0010
3 --> 0011
4 --> 0100
5 --> 0101
6 --> 0110
7 --> 0111
8 --> 1000

Now look at the pattern for each power of 2(column). Then each power of 2 has this pattern:
1 --> $$01$$0101010
2 --> $$0011$$00110
4 --> $$00001111$$0

1. We can use this to know the counts of each power of 2 in the *big_num* array before the representation starts for any given number x. 

2. Using 1, we can find the counts for each power of 2 in the desired index range.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Process each query individually.
2. For each query [s, t, mod], binary search to find the numbers whose representation will contain the (s+1)th index and (t+1)th index, say m and n.
3. Calculate the counts of each power of 2 less than m and less than n, to get the counts of each powers of 2 in the desired range.
4. For a given ith power of 2 with count c, its contribution in the desired product will be $$2^{i*c}$$. Transfer over as much of the expoenent as you can to the next highest power of 2, by representing this exponent as: 
$$i*c =  (i+1) * \\lfloor((c*i)/(i+1))\\rfloor + ((c*i) mod (i+1)))$$

    Now, the floor part of the previous formula is added to the count of the next power, while the remainder(which will be a lower power of 2 than i+1), is used in the product.
5. For the highest power of 2, reduce the count until it is zero, by doubling the base of the exponent iteratively.



# Complexity
- Time complexity:

    1. Binary search in the given range [1, n] will take $$O(log(n))$$ iterations.
    2. For each number n, counting the sum of freq of powers of 2 will take $$O(log(n))$$ time.
    3. Reducing the counts of each power of 2 to 0 will take a further $$O(log(n))$$ time.
    
    Hence for Q queries, the total time taken will be $$O(Q*(log^{2}(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
    $$O(Q + log(n))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int[] findProductsOfElements(long[][] queries) {
        
        int[] response = new int[queries.length];
        
        for(int i=0; i<response.length; i++) {
            response[i] = solve(queries[i][0], queries[i][1]+1, queries[i][2]);
        }
        
        return response;
    }
    
    public int solve(long s, long t, long mod) {
        // Get the highest number x s.t. the sum of count of 
        // powers of 2 in integers in the range [0, x-1] is <= s
        long n1 = s > 0 ? getNextHigher(1L, 100000_00000_00000L, s) : 0L;
        // Get the sum of counts of each power for 2 in all 
        // integers less than x
        long[] c1 = s > 0 ? getLowerCounts(n1) : new long[51];
        // When the total count is less than target, use powers of 
        // 2 present in the binary rep. of x until total matches target
        adjust(c1, n1, s);

        // Do the same process for the higher target(t)
        long n2 = getNextHigher(1L, 100000_00000_00000L, t);
        long[] c2 = getLowerCounts(n2);
        adjust(c2, n2, t);

        // Calculate diff of counts to find counts of each 
        // powers in the desired range
        for(int i=0; i<50; i++) {
            c2[i] -= c1[i];
        }
        
        // Calculate mod of each power of 2 for the current query
        long[] pow = new long[50];
        pow[0] = 1L;
        for(int i=1; i<50; i++) {
            pow[i] = pow[i-1] << 1;
            pow[i] %= mod;
        }
        
        // Calculate desired product here
        long prod = 1L;
        long next = 2L;
        // Using the last element as sum of counts, no longer required
        c2[50] = 0;

        // For each power of 2, use the minimum count necessary 
        // to use, and roll over as much as possible into the next higher power
        for(int i=1; i<50; i++) {
            int rem = (int)((c2[i]*(i)) % (i+1));
            long div = (c2[i]*i) / (i+1);
            prod *= pow[rem];
            prod %= mod;
            
            c2[i+1] += div;
            next <<= 1;
        }
        
        // For the highest power of 2, continually reduce the 
        // base of the exponent until the count is reduced to 0
        long base = next % mod;
        while(c2[50] > 0) {
            prod *= (c2[50] % 2 == 1) ? base : 1L;
            prod %= mod;
            
            base *= base;
            base %= mod;
            c2[50] >>= 1;
        }
        
        return (int)(prod % mod);
    }
    
    public void adjust(long[] c, long x, long target) {
        int i=0;
        // Start from the lowest bit, and increment until the 
        // total matches the target for each set bit
        while(c[50] != target) {
            if(x == 0) {
                System.out.println("Error");
                break;
            }
            if(x % 2 != 0) {
                c[i]++;
                c[50]++;
            }
            
            x >>= 1;
            i++;
        }
    }
    
    public long getNextHigher(long from, long to, long target) {
        // Binary search for the highest number for which total 
        // count of powers of 2 for numbers <= target
        if(from == to) {
            return from;
        }
        long mid = from + (to+1-from)/2;
        long[] counts = getLowerCounts(mid);
        if(counts[50] > target) {
            return getNextHigher(from, mid-1, target);
        } else {
            return getNextHigher(mid, to, target);
        }
    }
    
    public long[] getLowerCounts(long x) {
        long[] response = new long[51];
        long total = 0;
        int i = 0;
        long next = 1L;
        // For a given power of 2(i), it is unset in the first 2^i nums, 
        // then set for the next 2^i nums and the pattern repeats.  
        while(next < x) {
            response[i] = (x/(2*next))*next + Math.max((x % (2*next))-next, 0);
            total += response[i];
            i++;
            next <<= 1;
        }
        // Using the last element as a special num to represent total
        response[50] = total;
        return response;
    }
}
```