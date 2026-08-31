# Java C++ Python3 || 3 Algorithms: KMP, Rolling Hash, Sliding Window

**Author:** dudeandcat
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/5468319/](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/5468319/)

---

The code samples below implement search algorithms to find a specific pattern within the infinite stream.  Algorithms are:

1. **KMP (Knuth-Morris-Pratt) algorithm** (Java, C++, Python3)
KMP Algorithm is a table-driven search, which is more thoroughly described in Wikipedia than I could describe here.  The algorithm is in two parts: **1) Build the table** from the pattern values.  The table controls how to recover and continue searching after a mismatch between the next value from the stream, and the current value from the pattern.  **2) Search using the table** to process the values from the stream.  If reaching the end of the table, which is the same length as the pattern, then a match has been found.

2. **Rolling Hash** (Java, C++, Python3)
Use a 50-bit hash value, calculated from the pattern.  Calculate a hash value from the stream, using a rolling hash, where new stream values are included into the hash value, while old stream values roll out of the hash value.  When the pattern hash value equals the stream's rolling hash value, then a match has probably been found.  There is a small probability that two different sets of data could have the same hash value, but the code assumes that equal hash values are from the same data.  The code could be made fully accurate, by comparing the pattern and the stream data after matching hash values are found.

3. **Sliding Window** (Java, Python3)
Sliding window algorithms compare all of the bits of the pattern with all the bits in a window looking into the stream.  Both the pattern and the window have the same number of bits in integer variables, which can be up to 10_000 bits in this leetcode problem.  The window slides through the stream with bits entering one side of the window as older bits slide out the other side of the window.  The Java code uses the BigInteger class to have integers of any length, but the runtimes are very slow.  Python3 allows integer variables to contain a huge number of bits, while comparing and updating those variables using normal math operators.  Python3 has only a small speed decrease when using the big integers for the sliding window compared to the other Python3 algorithms.  While using Java's big integers for a sliding window is more than 100 times slower than the other Java algorithms.  There is no C++ version of code for a sliding window, because there is no standard C++ class for very big integers, although many sources offer their own implementation of big integers.

4. **Combined KMP and Sliding Window** (Java)
This Java-only code is a hybrid sliding window, using the KMP Algorithm if the pattern is more than 32 bits, and a sliding window algorithm if the pattern is 32 bits or less.  Note: As of July 2024, all leetcode test cases will pass as "Accepted" when a 32-bit maximum window size is used for ALL test cases.  This means that for any testcase with a pattern that is more than 32 bits up to 10_000 bits, only the last 32-bits are needed to reliably match the location in the sliding window.

**Complexity and Runtimes**
For time complexity, P is the length of the pattern, and N is the number of bits into the stream to find the match.

The KMP Algorithm and Rolling Hash are the fastest (100%) on their runtime graphs, or near the fastest.
```
     (July 2024)
                       Time            ---- Fastest Runtime ----
   Algorithm        Complexity         Java       C++      Python3
-------------------+---------------+----------+----------+----------+
1. KMP Algorithm   |  O(P+N)       |    13ms  |   223ms  |  2015ms  |
2. Rolling Hash    |  O(P+N)       |    12ms  |   233ms  |  2280ms  |
3. Sliding Window  |  O(PlogP+NP)  |  1662ms  |    --    |  2351ms  |
4. Combined        |  O(P+N)       |    13ms  |    --    |    --    |
-------------------+---------------+----------+----------+----------+
```

**--- Java KMP code ---**
Runtime: 13ms, July 2024
```
// Uses KMP (Knuth-Morris-Pratt) algorithm for searching.
class Solution {
    public int findPattern(InfiniteStream infiniteStream, int[] pattern) {
        int n = pattern.length;

        // Build the KMP algorithm table for the pattern that allows 
        // smart restarts of the pattern matching when a mis-match values 
        // was found.
        int[] patTbl = new int[n];
        patTbl[0] = -1;
        int pIdx = 0;
        int cmpIdx = 0;
        while (++pIdx < n) {
            if (pattern[pIdx] == pattern[cmpIdx])
                patTbl[pIdx] = patTbl[cmpIdx];
            else {
                patTbl[pIdx] = cmpIdx;
                while (cmpIdx >= 0 && pattern[pIdx] != pattern[cmpIdx])
                    cmpIdx = patTbl[cmpIdx];
            }
            cmpIdx++;
        }
        
        // Do the KMP algorithm search using the previously built table.
        pIdx = 0;
        int num = infiniteStream.next();
        int streamIdx = 1;
        while (true) {
            if (num == pattern[pIdx]) {
                if (++pIdx == n)  return streamIdx - n;
            } else {
                pIdx = patTbl[pIdx];
                if (pIdx >= 0)  continue;
                pIdx = 0;
            }
            num = infiniteStream.next();
            streamIdx++;
        }
    }
}
```
**--- C++ KMP code ---**
Runtime: 223ms to 286ms, July 2024
```
// Uses KMP (Knuth-Morris-Pratt) algorithm for searching.
class Solution {
public:
    Solution() {ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0); }
    int findPattern(InfiniteStream* stream, vector<int>& pattern) {
        const int n = pattern.size();

        // Build the KMP algorithm table for the pattern that allows 
        // smart restarts of the pattern matching when a mis-match values 
        // was found.
        vector<int> patTbl(n);
        patTbl[0] = -1;
        int pIdx = 0;
        int cmpIdx = 0;
        while (++pIdx < n) {
            if (pattern[pIdx] == pattern[cmpIdx])
                patTbl[pIdx] = patTbl[cmpIdx];
            else {
                patTbl[pIdx] = cmpIdx;
                while (cmpIdx >= 0 && pattern[pIdx] != pattern[cmpIdx])
                    cmpIdx = patTbl[cmpIdx];
            }
            cmpIdx++;
        }
        
        // Do the KMP algorithm search using the previously built table.
        pIdx = 0;
        int num = stream->next();
        int streamIdx = 1;
        while (true) {
            if (num == pattern[pIdx]) {
                if (++pIdx == n)  return streamIdx - n;
            } else {
                pIdx = patTbl[pIdx];
                if (pIdx >= 0)  continue;
                pIdx = 0;
            }
            num = stream->next();
            streamIdx++;
        }
    }
};
```
**--- Python3 KMP code ---**
Runtime: 2015ms to 2099ms, July 2024
```
# Uses KMP (Knuth-Morris-Pratt) algorithm for searching.
class Solution:
    def findPattern(self, stream: Optional['InfiniteStream'], pattern: List[int]) -> int:
        n = len(pattern)

        # Build the KMP algorithm table for the pattern that allows 
        # smart restarts of the pattern matching when a mis-match values 
        # was found.
        patTbl = [0]*n
        patTbl[0] = -1
        pIdx = 1
        cmpIdx = 0
        while pIdx < n:
            if pattern[pIdx] == pattern[cmpIdx]:
                patTbl[pIdx] = patTbl[cmpIdx]
            else:
                patTbl[pIdx] = cmpIdx
                while cmpIdx >= 0 and pattern[pIdx] != pattern[cmpIdx]:
                    cmpIdx = patTbl[cmpIdx]
            cmpIdx += 1
            pIdx += 1
        
        # Do the KMP algorithm search using the previously built table.
        pIdx = 0
        num = stream.next()
        streamIdx = 1
        while True:
            if num == pattern[pIdx]:
                pIdx += 1
                if pIdx == n:  return streamIdx - n
            else:
                pIdx = patTbl[pIdx]
                if pIdx >= 0:  continue
                pIdx = 0
            num = stream.next()
            streamIdx += 1
```
**--- Java Rolling Hash code ---**
Runtime: 12ms, July 2024
```
// Use a hash of the pattern and a hash of a sliding window.
class Solution {
    public int findPattern(InfiniteStream infiniteStream, int[] pattern) {
        final int n = pattern.length;
        final long MOD = 1_000_000_000_007L;

        // Calculate the k for the hash calculations, which is 
        // k = (1 << n) % MOD
        // But this number can be too big to be calculated 
        // directly since n can be as large as 10_000, so 
        // it has to be calculated in pieces.
        final int K_BIT_INC = 20;
        int kRemaining = n;
        long k = 1;
        while (kRemaining > 0) {
            k = (k * (1L << Math.min(kRemaining, K_BIT_INC))) % MOD;
            kRemaining -= K_BIT_INC;
        }
        
        // Find the largest power of 2 greater than n.
        int nBitSize = 1;
        while (nBitSize <= n)  nBitSize <<= 1;
        final int N_BIT_MASK = nBitSize - 1;

        // Convert the pattern to a single long hash value.
        long patHash = 0;
        for (int pat : pattern) 
            patHash = ((patHash << 1) + pat) % MOD;
        
        // Fill the inintial window with bits from the stream to 
        // get the initial window's hash value.  Save all the 
        // stream values in a buffer.
        byte[] winBuff = new byte[nBitSize];
        int winBuffInnIdx = 0;
        int winBuffOutIdx = 0;
        long winHash = 0;
        int streamIdx;
        for (streamIdx = 0; streamIdx < n; streamIdx++) {
            int num = infiniteStream.next();
            winBuff[winBuffInnIdx++] = (byte)num;
            winHash = ((winHash << 1) + num) % MOD;
        }

        // Read bits from the stream into the sliding window to 
        // get rolling hash values.  Compare the sliding window 
        // hash value with the pattern hash value, looking for a 
        // match.  Save the stream values used in the sliding 
        // window, into a circular buffer.
        while (true) {
            if (patHash == winHash)  return streamIdx - n;
            int num = infiniteStream.next();
            winBuff[winBuffInnIdx++] = (byte)num;
            winBuffInnIdx &= N_BIT_MASK;
            winHash = ((winHash << 1) + num - winBuff[winBuffOutIdx++] * k + MOD) % MOD;
            winBuffOutIdx &= N_BIT_MASK;
            streamIdx++;
        }
    }
}
```
**--- C++ Rolling Hash code ---**
Runtime: 233ms to 276ms, July 2024
```
// Use a hash of the pattern and a hash of a sliding window.
class Solution {
public:
    Solution() {ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0); }
    int findPattern(InfiniteStream* stream, vector<int>& pattern) {
        const int n = pattern.size();
        const long long MOD = 1000000000007L;

        // Calculate the k for the hash calculations, which is 
        // k = (1 << n) % MOD
        // But this number can be too big to be calculated 
        // directly since n can be as large as 10_000, so 
        // it has to be calculated in pieces.
        const int K_BIT_INC = 20;
        int kRemaining = n;
        long long k = 1;
        while (kRemaining > 0) {
            k = (k * (1L << min(kRemaining, K_BIT_INC))) % MOD;
            kRemaining -= K_BIT_INC;
        }
        
        // Find the largest power of 2 greater than n.
        int nBitSize = 1;
        while (nBitSize <= n)  nBitSize <<= 1;
        const int N_BIT_MASK = nBitSize - 1;

        // Convert the pattern to a single long hash value.
        long long patHash = 0;
        for (int pat : pattern) 
            patHash = ((patHash << 1) + pat) % MOD;
        
        // Fill the inintial window with bits from the stream to 
        // get the initial window's hash value.  Save all the 
        // stream values in a buffer.
        char winBuff[nBitSize];
        int winBuffInnIdx = 0;
        int winBuffOutIdx = 0;
        long long winHash = 0;
        int streamIdx;
        for (streamIdx = 0; streamIdx < n; streamIdx++) {
            int num = stream->next();
            winBuff[winBuffInnIdx++] = num;
            winHash = ((winHash << 1) + num) % MOD;
        }

        // Read bits from the stream into the sliding window to 
        // get rolling hash values.  Compare the sliding window 
        // hash value with the pattern hash value, looking for a 
        // match.  Save the stream values used in the sliding 
        // window, into a circular buffer.
        while (true) {
            if (patHash == winHash)  return streamIdx - n;
            int num = stream->next();
            winBuff[winBuffInnIdx++] = num;
            winBuffInnIdx &= N_BIT_MASK;
            winHash = ((winHash << 1) + num - winBuff[winBuffOutIdx++] * k + MOD) % MOD;
            winBuffOutIdx &= N_BIT_MASK;
            streamIdx++;
        }
    }
};
```
**--- Python3 Rolling Hash code ---**
Runtime: 2280ms to 2346ms, July 2024
```
# Use a hash of the pattern and a hash of a sliding window.
class Solution:
    def findPattern(self, stream: Optional['InfiniteStream'], pattern: List[int]) -> int:
        n = len(pattern)
        MOD = 1000000000007

        # Calculate the k for the hash calculations, which is 
        # k = (1 << n) % MOD
        # But this number can be too big to be calculated 
        # directly since n can be as large as 10_000, so 
        # it has to be calculated in pieces.
        K_BIT_INC = 20
        kRemaining = n
        k = 1
        while kRemaining > 0:
            k = (k * (1 << min(kRemaining, K_BIT_INC))) % MOD
            kRemaining -= K_BIT_INC
        
        # Find the largest power of 2 greater than n.
        nBitSize = 1
        while nBitSize <= n:  nBitSize <<= 1
        N_BIT_MASK = nBitSize - 1

        # Convert the pattern to a single long hash value.
        patHash = 0
        for pat in pattern:
            patHash = ((patHash << 1) + pat) % MOD
        
        # Fill the inintial window with bits from the stream to 
        # get the initial window's hash value.  Save all the 
        # stream values in a buffer.
        winBuff = bytearray(nBitSize)
        winBuffInnIdx = 0
        winBuffOutIdx = 0
        winHash = 0
        streamIdx = n
        for _ in range(n):
            num = stream.next()
            winBuff[winBuffInnIdx] = num
            winBuffInnIdx += 1
            winHash = ((winHash << 1) + num) % MOD

        # Read bits from the stream into the sliding window to 
        # get rolling hash values.  Compare the sliding window 
        # hash value with the pattern hash value, looking for a 
        # match.  Save the stream values used in the sliding 
        # window, into a circular buffer.
        while True:
            if patHash == winHash:  return streamIdx - n
            num = stream.next()
            winBuff[winBuffInnIdx] = num
            winBuffInnIdx = (winBuffInnIdx + 1) & N_BIT_MASK
            winHash = ((winHash << 1) + num - 
                       winBuff[winBuffOutIdx] * k + MOD) % MOD
            winBuffOutIdx = (winBuffOutIdx + 1) & N_BIT_MASK
            streamIdx += 1
```
**--- Java Sliding Window code ---**
Runtime: 1662ms to 1684ms, July 2024
```
// Sliding window using BigInteger class
import java.math.*;
class Solution {
    public int findPattern(InfiniteStream infiniteStream, int[] pattern) {
        final int n = pattern.length;
        // Convert the pattern to a single binary integer, 
        // possibly very big, with as many as 1250 bytes 
        // needed to hold all the bits.
        BigInteger patBits = BigInteger.ZERO;
        for (int pat : pattern) 
            patBits = patBits.shiftLeft(1).add(BigInteger.valueOf(pat));
        
        // Fill the inintial window with bits from the stream.
        BigInteger winBits = BigInteger.ZERO;
        for (int i = 0; i < n; i++) 
            winBits = winBits.shiftLeft(1).add(BigInteger.valueOf(infiniteStream.next()));

        // Read bits from the stream into the sliding window.  
        // Compare the sliding window bits with the pattern bits, 
        // looking for a match.
        int streamIdx = 0;
        while (patBits.compareTo(winBits) != 0) {
            winBits = winBits.clearBit(n - 1).shiftLeft(1);
            int num = infiniteStream.next();
            if (num != 0) 
                winBits = winBits.or(BigInteger.ONE);
            streamIdx++;
        }
               
        return streamIdx;
    }
}
```
**--- Python3 Sliding Window code ---**
Runtime: 2351ms to 2477ms, July 2024
```
# Sliding window
class Solution:
    def findPattern(self, stream: Optional['InfiniteStream'], pattern: List[int]) -> int:
        # Convert the pattern to a single binary integer, 
        # possibly very big, with as many as 1250 bytes 
        # needed to hold all the bits.
        patBits = 0
        for pat in pattern:
            patBits = (patBits << 1) + pat;
        
        # Fill the inintial window with bits from the stream.
        winBits = 0
        for _ in range(len(pattern)):
            winBits = (winBits << 1) + stream.next()
        
        # Read bits from the stream into the sliding window.  
        # Compare the sliding window bits with the pattern bits, 
        # looking for a match.
        WINDOW_MASK = (1 << (len(pattern) - 1)) - 1
        streamIdx = 0
        while patBits != winBits:
            winBits = ((winBits & WINDOW_MASK) << 1) | stream.next()
            streamIdx += 1

        return streamIdx
```
**--- Java Combined KMP and Sliding Window code ---**
Runtime: 13ms to 14ms, July 2024
```
// Two algorithms combined:
// 1) KNP (Knuth-Morris-Pratt) algorithm, when pattern has more than 32 values.
// 2) Sliding window when pattern has 32 or fewer values.
class Solution {
    public int findPattern(InfiniteStream infiniteStream, int[] pattern) {
        if (pattern.length > 32) 
            return big(infiniteStream, pattern);
        else
            return small(infiniteStream, pattern);
    }
    
    
    private int big(InfiniteStream infiniteStream, int[] pattern) {
        int n = pattern.length;

        // Build the KMP algorithm table for the pattern that allows 
        // smart restarts of the pattern matching when a mis-match values 
        // was found.
        int[] patTbl = new int[n];
        patTbl[0] = -1;
        int pIdx = 0;
        int cmpIdx = 0;
        while (++pIdx < n) {
            if (pattern[pIdx] == pattern[cmpIdx])
                patTbl[pIdx] = patTbl[cmpIdx];
            else {
                patTbl[pIdx] = cmpIdx;
                while (cmpIdx >= 0 && pattern[pIdx] != pattern[cmpIdx])
                    cmpIdx = patTbl[cmpIdx];
            }
            cmpIdx++;
        }
        
        // Do the KMP algorithm search using the previously built table.
        pIdx = 0;
        int num = infiniteStream.next();
        int streamIdx = 1;
        while (true) {
            if (num == pattern[pIdx]) {
                if (++pIdx == n)  return streamIdx - n;
            } else {
                pIdx = patTbl[pIdx];
                if (pIdx >= 0)  continue;
                pIdx = 0;
            }
            num = infiniteStream.next();
            streamIdx++;
        }
    }
    
    // Do a 32-bit max length sliding window algorithm.    
    private int small(InfiniteStream infiniteStream, int[] pattern) {
        int n = pattern.length;

        // Convert the pattern to a single binary integer.
        int patBits = 0;
        for (int pat : pattern) 
            patBits = (patBits << 1) + pat;
        
        // Fill the inintial window with bits from the stream.
        int winBits = 0;
        int streamIdx;
        for (streamIdx = 0; streamIdx < n; streamIdx++) 
            winBits = (winBits << 1) + infiniteStream.next();

        // Read bits from the stream into the sliding window.  
        // Compare the sliding window bits with the pattern bits, 
        // looking for a match.
        final int WINDOW_MASK = (n == 32) ? -1 : ((1 << n) - 1);
        while (true) {
            if (patBits == winBits)  return streamIdx - n;
            winBits = ((winBits << 1) | infiniteStream.next()) & WINDOW_MASK;
            streamIdx++;
        }
    }
}


// Test case insufficiency:
// July 2024
//      The following test case will fail when 32-bit (or even 64-bit) 
//      maximum length sliding window is used for all test cases.  
//      That is why the above code examples wither use a sliding 
//      window only when the pattern is 32-bits or less, or when 
//      the sliding window can be up to 10_000 bits long.
//
//      Some leetcode submissions used a 32-bit sliding window for 
//      all test cases, even when the pattern is longer than 32 bits.  
//      The submissions with 32-bit sliding windows passed all 
//      leetcode test cases.  All existing test cases can find the 
//      pattern using only the last 32 bits of the pattern.  
//      The following test case is where the portion of the pattern 
//      needed to match the sliding window is BEFORE the last 
//      64-bits of the pattern.  The following test case will fail 
//      in those submissions that used a 32-bit max length sliding 
//      window.
/*
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
*/
```