# C++ & Java || Explained - using Heap and without using Heap || Very simple

**Author:** kreakEmp
**Votes:** 26
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4916730/](https://leetcode.com/problems/most-frequent-ids/solutions/4916730/)

---

# Intuition
- We need to store out current freq and number of ids that have same freq

# Approach 1 ( without max heap)
- Consider two maps -> one unordered id to freq count map and another ordered map freq to number of ids having same freq
- Then iterate over each item in nums
- At each iteration first remove the occurance of each ids freq from the freq to number of ids map.
- Then update the id to freq map
- Update the freq to id count map as per the latest freq of cuurent id
- freq to ID count map's last key is the max count
# Complexity
- Time complexity: O(N.logN)

- Space complexity: O(N)

### Code
``` C++ []
vector<long long> mostFrequentIDs(vector<int>& nums, vector<int>& f) {
    vector<long long> ans;
    unordered_map<int, long long> idToFreqMap;          // id to freq of each id unordered map
    map<long long, int> freqToIdCountMap;               // freq to id's count map - keep track of number of ids have same freq
    for(int i = 0; i < nums.size(); ++i){               // iterate over each item in nums
        if(idToFreqMap[nums[i]]){                       // When freq is non-zero then remove its occurance from the freq to id map 
            freqToIdCountMap[idToFreqMap[nums[i]]]--;   // first reduce the count of freq to id map of last freq
            if(freqToIdCountMap[idToFreqMap[nums[i]]] == 0) freqToIdCountMap.erase(idToFreqMap[nums[i]]);      // when freq to id map have current freq occuarance as zero then remove it from the map
        }
        idToFreqMap[nums[i]] += freq[i];                // update the id to freq map with the current freq
        freqToIdCountMap[idToFreqMap[nums[i]]]++;       // update the freq to id count map as per latest freq of id
        ans.push_back(freqToIdCountMap.rbegin()->first);
    }
    return ans;
}
```
``` Java []
public long[] mostFrequentIDs(int[] nums, int[] freq) {
    long[] ans = new long[nums.length];
    HashMap<Integer, Long> idToFreqMap = new HashMap<>();
    TreeMap<Long, Integer> freqToIdCountMap = new TreeMap<>();
    for(int i = 0; i < nums.length; ++i){
        if(idToFreqMap.getOrDefault(nums[i], 0L) != 0){
            freqToIdCountMap.put(idToFreqMap.get(nums[i]), freqToIdCountMap.get(idToFreqMap.get(nums[i])) - 1);
            if(freqToIdCountMap.get(idToFreqMap.get(nums[i]) ) == 0) freqToIdCountMap.remove(idToFreqMap.get(nums[i]));   
        }
        idToFreqMap.put(nums[i], idToFreqMap.getOrDefault(nums[i], 0L) + freq[i]);
        freqToIdCountMap.put(idToFreqMap.get(nums[i]), freqToIdCountMap.getOrDefault(idToFreqMap.get(nums[i]), 0) + 1);
        ans[i] = freqToIdCountMap.lastKey();
    }
    return ans;
}
```

# Approach - 2 ( Using maxHeap )

- This approach is simple, where we just need to push items into the hash map and the max heap.
- The hash map always keep the latest freq of each ids where as the max heap may contain stale entry or the entries those might have been updated later in the hash map. So we need to remove the stale entry from the top of the max heap. This we can do by simply checking the max heap top item with the hash map entry for the top element id. If both are matching then the max heap top item is valid and if not matching then its invalid entry and remove it from the top.

# Code 
``` C++ []
vector<long long> mostFrequentIDs(vector<int>& nums, vector<int>& freq) {
    vector<long long> ans;
    unordered_map<int, long long> idToFreqMap;
    priority_queue<pair<long long, int>> maxHeap;
    for(int i = 0; i < nums.size(); ++i){
        idToFreqMap[nums[i]] += freq[i];                  // push the item to map and update the total freq
        maxHeap.push({idToFreqMap[nums[i]], nums[i]});    // push the <freq, id> to the max heap
        while(maxHeap.size() && idToFreqMap[maxHeap.top().second] != maxHeap.top().first) maxHeap.pop();   // Now if the top element's freq is different from the freq in the map then its a stale entry and remove it from the heap. Keep doing this untill we have a top item that have matching freq as per map
        ans.push_back(maxHeap.top().first);               // push the heap top item's freq in to the answer
    }
    return ans;
}
```

``` Java []
public long[] mostFrequentIDs(int[] nums, int[] freq) {
    long[] ans = new long[nums.length];
    HashMap<Integer, Long> idToFreqMap = new HashMap<>();
    PriorityQueue<Pair<Long, Integer>> maxHeap = new PriorityQueue<>((a, b) -> Long.compare(b.getKey(), a.getKey()));
    for(int i = 0; i < nums.length; ++i){
        idToFreqMap.put(nums[i], idToFreqMap.getOrDefault(nums[i], 0L) + freq[i]);
        maxHeap.add(new Pair<>(idToFreqMap.get(nums[i]), nums[i]));
        while(idToFreqMap.get(maxHeap.peek().getValue()) != maxHeap.peek().getKey()) maxHeap.poll();
        ans[i] = maxHeap.peek().getKey();
    }
    return ans;
}
```




---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---