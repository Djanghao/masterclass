# Java nlogn

**Author:** theharshit3
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-permutation/solutions/5519533/](https://leetcode.com/problems/find-the-index-of-permutation/solutions/5519533/)

---

# Complexity
- Time complexity:
**O(nlog(n))**

- Space complexity:
**O(n)**

# Code
```
class Solution {
    public int getPermutationIndex(int[] arr) {
        int n = arr.length, mod = 1000000007;
        int[] ans = new int[n], index = new int[n];
        for(int i=0; i<n; i++) index[i] = i;
        f(arr, index, ans, 0, n-1);
        long res = 0;
        long fact = 1;
        for(int i=n-2; i>=0; i--) {
            fact*= (n-i-1);
            fact = fact%mod;
            res += fact*ans[i];
            res = res%mod;
        }
        return (int)res;
    }

    private void f(int[] arr, int[] index, int[] ans, int s, int e) {
        if(s >= e) return;
        int mid = (e-s)/2 + s, n1 = mid - s+1, n2 = e - mid, l = 0, r =0;
        int[] a = new int[n1], b = new int[n2];
        for(int i=0; i<n1; i++) {
            a[i] = index[s + i];
        }
        for(int i=0; i<n2; i++) b[i] = index[mid+1+i];
        f(arr, a, ans, 0, n1-1);
        f(arr, b, ans, 0, n2-1);
        for(int i=s; i<=e; i++) {
            if(l == n1) {
                index[i] = b[r++];
            } else if (r == n2) {
                index[i] = a[l++];
                ans[index[i]] += r;
            } else {
                if(arr[a[l]] > arr[b[r]]) {
                    index[i] = b[r++];
                } else {
                    index[i] = a[l++];
                    ans[index[i]] += r;
                }
            }
        }
    }
}
```