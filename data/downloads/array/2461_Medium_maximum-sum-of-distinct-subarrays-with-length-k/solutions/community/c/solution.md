# Sliding Window using hashmap [C++/Java]

**Author:** Rowque
**Votes:** 61
**Link:** [https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/2783175/](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/2783175/)

---

- Just Slide the window and for duplicates we will use hashmap instead of a hashset.
- We will discard any element if its count becomes zero in a window.

# Why we use a hashmap instead of hashset??
When we encounter a subarray of size k, having all duplicate elements, then if we simply discard it from set, that single will be removed and our set size will become zero and we will loose access to all previous elements.

So for that we will use a hashmap and while moving forward we will remove a key only if its count becomes 0, else we will keep moving by decreasing that element count in hashmap.

**Time** - O(N)
**Space** - O(N)
# C++   
    long long maximumSubarraySum(vector<int>& A, int k) {
        unordered_map<int, int> mp;
        long mx = 0, sum = 0;
        for (int i = 0; i < size(A); i++){
            sum += A[i];
            mp[A[i]]++;

            if (i >= k - 1){
                if (mp.size() == k) mx = max(mx, sum);
                sum -= A[i - k + 1];
                if (--mp[A[i - k + 1]] == 0) mp.erase(A[i - k + 1]);
            }
        }
        return mx;
    }

# Java
    public long maximumSubarraySum(int[] A, int k) {
        HashMap<Integer, Integer> mp = new HashMap<>();
        long mx = 0, sum = 0;
        for (int i = 0; i < A.length; i++){
            sum +=A[i];
            mp.put(A[i], mp.getOrDefault(A[i],0) + 1);

            if (i >= k - 1){
                if (mp.size() == k) mx = Math.max(mx, sum);
                sum -= A[i - k + 1];
                mp.put(A[i - k + 1], mp.get(A[i - k + 1]) - 1);
                if (mp.get(A[i - k + 1]) == 0) mp.remove(A[i - k + 1]);
            }
        }
        return mx;
    }