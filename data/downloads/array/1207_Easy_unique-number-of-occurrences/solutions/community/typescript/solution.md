# (O(n)⏱️| O(n)📦) JAVA☕ PYTHON🐍 JAVASCRIPT💛 TYPESCRIPT🔷 C++🦾 C##️⃣ HashMap Solution🪄

**Author:** VishnuThangaraj
**Votes:** 7
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/4578452/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/4578452/)

---

Github - https://github.com/VishnuThangaraj \uD83D\uDE3A
**UPVOTE IF YOU FOUND HELPFUL**\u2728

# Intuition\uD83E\uDDE0
<!-- Describe your first thoughts on how to solve this problem. -->
To Find the unique number of occurrence, Store the elements and its occurrence in a **HashMap/Ordered_Map** and check for the repeated frequency using a **HashSet/Set**.

# Approach\u26A1
<!-- Describe your approach to solving the problem. -->
1. Initialize a HashMap `frequency` to store the elements and its occurrence.
2. Iterate through the given array `arr` and store the frequency in the HashMap.
3. Initialize a HashSet `storage` to store the unique frequency of the elements.
4. Iterate through the `frequency` HashMap and store the frequency of elements to `storage` set.
5. Check if the **N** number of elements in `frequency` HashMap has **N** unique occurrences in `storage` HashSet.
`frequency.size() == storage.size()`


# Complexity\u231B
- Time complexity: `O(n)`, where the input array and the HashMap is Iterated only once.` O(n) + O(n) = O(n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`, As we are using **HashMap** and **HashSet** to store the elements and its frequency.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code\uD83D\uDCBB
``` Java []
class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        HashMap<Integer,Integer> frequency = new HashMap<>();

        for(int num : arr) // Store element and its frequency
            frequency.put(num, frequency.getOrDefault(num,0)+1);

        // store the frequency 
        HashSet<Integer> storage = new HashSet<>(frequency.values());

        // True if we get n different frequency for n different numbers
        return frequency.size() == storage.size();
    }
}
```
``` Python []
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        frequency = {}

        for num in arr: # Store element and its frequency
            frequency[num] = frequency.get(num,0) + 1

        # True if we get n different frequency for n different numbers
        return len(frequency) == len(set(frequency.values()))
```
``` Javascript []
var uniqueOccurrences = function(arr) {
    const frequency = new Map();

    for(let num of arr) // Store element and its frequency
        if(frequency.has(num)) frequency.set(num, frequency.get(num)+1);
        else frequency.set(num,1);

    // store the frequency 
    const storage = new Set(Array.from(frequency.values()));

    // True if we get n different frequency for n different numbers
    return frequency.size == storage.size;
};
```
``` Typescript []
const frequency = new Map();

    for(let num of arr) // Store element and its frequency
        if(frequency.has(num)) frequency.set(num, frequency.get(num)+1);
        else frequency.set(num,1);

    // store the frequency 
    const storage = new Set(Array.from(frequency.values()));

    // True if we get n different frequency for n different numbers
    return frequency.size == storage.size;
```
``` C++ []
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        unordered_map<int, int> frequency;

        for(int num : arr) // Store element and its frequency
            frequency[num]++;

        // store the frequency 
        unordered_set<int> storage;
        for(auto key : frequency)
            storage.insert(key.second);

        // True if we get n different frequency for n different numbers
        return frequency.size() == storage.size();
    }
};
```
``` C# []
public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        Dictionary<int,int> frequency = new Dictionary<int, int>();

        foreach(int num in arr) // Store element and its frequency
            frequency[num] = frequency.ContainsKey(num) ? frequency[num]+1 : 1;

        // store the frequency 
        HashSet<int> storage = new HashSet<int>();
        foreach(var key in frequency)
            // Return false if same frequency occurs twice
            if(storage.Contains(key.Value)) return false;
            else storage.Add(key.Value);

        // True if we get n different frequency for n different numbers
        return true;
    }
}
```

**UPVOTE IF YOU FOUND HELPFUL**\u2728