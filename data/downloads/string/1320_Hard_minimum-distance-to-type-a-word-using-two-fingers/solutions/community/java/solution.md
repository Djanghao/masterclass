# Dew It | Tricky solution explained | Easy to understand | O(n)

**Author:** captain_jackked
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/491083/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/491083/)

---

**APPROACH**
* Imagine that we have already typed the given string upto index k
* This means that **one finger is at k**: this also means that the **other finger is before k**
* The lagging finger could be pointing at **any one of the letters A-Z** or perhaps it was **never used at all**
* Let us suppose that we know the optimal costs for being in any of those **27 "states"** i.e **{ A, arr[k] }, { B, arr[k] }, ... { Z, arr[k] }, { null, arr[k] }**
(leading finger being at { arr[k] } and lagging finger last used to type { A-Z or nothing })
* What we need is the optimal costs for reaching the 27 states when the leading finger is at { arr[k+1] } using the costs computed so far
* The letter k+1 can be typed in one of two ways: **1. use the leading finger** VS **2. use the lagging finger**
* If we do 2, we have a potential min cost for the state { arr[k], arr[k+1] }
If we do 1, we have potential min costs for { A, arr[k+1] }, { B, arr[k+1] }, ... { Z, arr[k+1] }, { null, arr[k+1] }
NOTE: arr[k] is some char between A and Z, so there might be a clash - we take the min of the two ways from above.
* We can **extend our logic upto n-1** and then return the lowest cost from there as the answer

**CODE**

```
class Solution {
    public int minimumDistance(String word) {
        int n = word.length();
        if(n < 3) return 0;
        
        char[] arr = word.toCharArray();
        int[] store = new int[27];
        for(int i=0; i<27; ++i) store[i] = Integer.MAX_VALUE;
        
        store[26] = dist(arr[1], arr[0]);
        store[arr[0]-'A'] = 0;
        for(int k=2; k<n; ++k) {
            int delta = dist(arr[k], arr[k-1]), min = store[26];
            for(int i=0; i<27; ++i) {
                if(store[i] < min) min = Math.min(min, store[i] + dist(arr[k], (char) (i + 'A')));
                if(store[i] < Integer.MAX_VALUE) store[i] += delta;
            }
            store[arr[k-1]-'A'] = Math.min(store[arr[k-1]-'A'], min);
        }
        
        int ans = Integer.MAX_VALUE;
        for(int x: store) ans = Math.min(ans, x);
        
        return ans;
    }
    
    private int dist(char a, char b) {
        int i = a - 'A', j = b - 'A';
        return Math.abs(i/6 - j/6) + Math.abs(i%6 - j%6);
    }
}