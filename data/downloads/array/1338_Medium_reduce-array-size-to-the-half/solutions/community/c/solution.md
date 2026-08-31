# ✅ Simple Solution w/ Explanation | Delete Elements by Max Frequency | O(N) Beats 100%

**Author:** archit91
**Votes:** 83
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/1319437/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/1319437/)

---

\u2714\uFE0F ***Solution - I (HashMap and Multiset)***

We need to choose smallest set of numbers such that deleting all occurences of those numberswill be reduce the array size by half. It should be obvious that the number having the maximum frequency should be deleted first so that size of set of numbers is minimized.

For this, we can use **hashmap to find frequency of each number**, then **sort the frequencies using multiset** in descending order and keep adding numbers to our set till atleast `n / 2` numbers are deleted.

```
class Solution {
public:
    int minSetSize(vector<int>& arr) {
        unordered_map<int, int>mp;
        multiset<int, greater<int>> s;
		for(auto num : arr) mp[num]++;                  // find frequency of elements
        for(auto [num, freq] : mp) s.insert(freq);      // sort frequency in descending order
        for(int deleted{}, ans{}; auto freq : s) {      // keep deleting till array size is reduced to half
            deleted += freq, ans++;
            if(deleted >= size(arr) / 2) return ans;    // atleast half array is deleted
        }
        return -1;  // won't ever be reached
    }
};
```

***Time Complexity :*** **`O(NlogN)`**, where `N` is the size of `arr`. In the worst case, all elements might be unique and we need to store and sort `N` elements which will require `O(NlogN)` time.
***Space Complexity :*** **`O(N)`**, required to store elements in hashmap and set.

---

\u2714\uFE0F ***Solution - II (HashMap and Priority queue / Max-Heap)***

Same solution as above but using max priority queue in C++ -

```
class Solution {
public:
    int minSetSize(vector<int>& arr) {
        unordered_map<int, int>mp;
        priority_queue<int> pq;
		for(auto num : arr) mp[num]++;                  
        for(auto [num, freq] : mp) pq.push(freq);
        for(int deleted{}, ans{}; ;pq.pop()) {
            deleted += pq.top(), ans++;
            if(deleted >= size(arr) / 2) return ans;    
        }
        return -1;
    }
};
```

***Time Complexity :*** **`O(NlogN)`**
***Space Complexity :*** **`O(N)`**

---

\u2714\uFE0F ***Solution - III (Find Frequency and Bucket Sort)***

Instead of sorting the frequency of elements, we could use bucket sort over the range `[0, 100000]` since the frequency of elements always fall within this range. This will reduce the sorting time from `O(NlogN)` to `O(N)`. The steps used in this approach are as follows -

1.  Find the frequency of elements in `arr`. Here, ***`freq`*** array is used, where `freq[i]` will denote frequency of element `i`. Use hashmap to generalize for any `arr[i]` but array works here since `1 <= arr[i] <= 100000`
2.  Find the **count** (or frequency) **of each frequency**. Here ***`freqBuckets`*** is used, where `freqBucket[i]` will denote the number of elements in `arr` having frequency `i`.
3.  Keep deleting all elements of a given frequency till atleast half are deleted. We start from max possible frequency `i=100000`. 
  If instances of frequency `i` is present (i.e `freqBuckets[i] > 0`) then delete an instance of that frequency. Repeat till all elements of this frequency are deleted or  array size is reduced by half or .
  
 4. `ans` will be incremented each time an instance of a frequency is deleted.

Another optimization I have used here is instead of deleting an instance one-by-one, we can simply find the number of instances of a frequency to delete (denoted by *`noOfFreqToDelete`*) in `O(1)`. We can either delete all instances of a frequency or only as much required to get array size to half.


```
class Solution {
    static const int MAX = 100000;
public:
    int minSetSize(vector<int>& arr) {        
        int freq[MAX+1]{}, freqBuckets[MAX+1]{}, ans = 0, maxFreq = 0;
        for(auto num : arr) maxFreq = max(maxFreq, ++freq[num]); // get frequency of elements
        for(int i = 0; i <= MAX; i++) freqBuckets[freq[i]]++;    // get instances of each frequency
        for(int i = maxFreq, deleteRequired = size(arr) / 2; deleteRequired > 0; i--) {
            if(!freqBuckets[i]) continue;                        // no elements having this frequency
            int noOfFreqToDelete = min(freqBuckets[i], deleteRequired / i + (deleteRequired % i > 0));  // above-mentioned optimization
            deleteRequired -= i * noOfFreqToDelete;              // delete elements having frequency = i
            ans += noOfFreqToDelete;                             // increment by number of instances of frequency (unique elements) deleted
        }   
        return ans;
    }
};
```

***Time Complexity :*** **`O(N)`**,  required to iterate over the array.
***Space Complexity :*** **`O(1)`**, constant amount of extra space is used.

---

*Best Runtime -*

The runtime achieved by `Solution - III` is more than twice faster than the fastest solution shown on runtime distribution map for C++ :)

<table><tr><td><img src =https://assets.leetcode.com/users/images/412acc8e-0435-4ad1-8f07-309851772004_1625563379.7080557.png /></td></tr></table>




---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, comment below \uD83D\uDC47 

---
---