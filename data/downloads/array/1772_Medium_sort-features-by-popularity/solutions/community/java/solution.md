# [Java] - Frequency Count + Sort AND Quick Sort - Explanation Provided for Both Solutions

**Author:** kniffina
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/1100222/](https://leetcode.com/problems/sort-features-by-popularity/solutions/1100222/)

---

**Approach #1 - Frequency Count and Sort**
This approach is pretty straight forward. Below is how it is broken into a few different steps.

1) We need to put each feature in our HashMap and set the count to 0. The reason for this is because, when we go to sort there may not have been a response with the given feature, which would result in a NULL pointer exception.

2) Go through each response and break the response into their own String arrays with each String represent a word in the response. Based on the problem description `Notice that one response could contain the same feature multiple times; this feature is only counted once in its popularity.` we only care about the unique words in each response so a HashSet is used to keep each string unique.

3) Now, simply loop through each unique string and increment the frequency count if it is a value that is from the features array (we put them in our HashMap earlier).

4) Now we know what to do! Sort the features array by frequency and return the finished product. Also of note; because we are only moving elements if their frequencies differ, if they are the same frequency we won't move them and will preserver the requirement `If two features have the same popularity, order them by their original index`.

```
class Solution {
    public String[] sortFeatures(String[] features, String[] responses) {
        Map<String, Integer> map = new HashMap<>();
        for(String s : features)
            map.put(s, 0);
        
        for(String str : responses) {
            Set<String> set = new HashSet<>();
            Collections.addAll(set, str.split(" "));
            for(String s : set) {
                if(map.containsKey(s))
                    map.put(s, map.getOrDefault(s, 0) + 1);
            }
        }
        
        Arrays.sort(features, (a,b) -> map.get(b) - map.get(a));
        return features;
    }
}
```

**Approach #2 - Quick Sort**
This problem isn't inherently set up for a quick sort problem but I thought it would be fun to try to implement it. The biggest hurdle here is with the statement `If two features have the same popularity, order them by their original index in features.` We need some extra information when sorting so we know when to swap elements if they have the same frequency count but still need to be swapped. We will use a `Map<String, Integer> idxs; ` for this which will just keep track of the index of each element in the features array. After that we will follow similar steps as above, but implement quick sort instead of a custom sort to put the elements in the right order.

1) Same implementation as above, except store the indexes of each feature in a separate data structure. This could be an array but I chose to use HashMap here.

2) After getting our frequency (same as above) run a quick sort algorithm.

3) If you are not familiar with quick sort I would check out other problems that are listed in the problem description under *Similar Problems*, they are a good starter point for it.

4) The main difference here is that it is possible when we are putting our values in the correct frequency order it results in an element being in the wrong spot in respect to its original index place. 

	* Take the first example ["cooler","lock","touch"] and ["i like cooler cooler","lock touch cool","locker like touch"]. 
	
	* The frequency count is: {cooler=1, lock=1, touch=2}
	
	* **Iteration 1)** Swap "touch" to be in its correct location in the front by moving "cooler". Features =  ["touch","lock","cooler"]
	
	* **Iteration 2)** At this point, they are all in the *correct frequency* sorted order, but now when looking at "lock" and "cooler" they are not in the correct order in respect to their original index position. This is where the `map.get(features[i]) == map.get(features[high]) && idxs.get(features[i]) < idxs.get(features[high])` comes into play. Check to see if they have the same frequency, and if necessary, swap them to their correct places in regards to their original index position. 

Obviously there are a few more iterations on both ends but when getting into the pivot function those are the two main parts we are looking at. It is a little different then a normal quick sort algorithm and is definitely solved much easier with the first algorithm. 
	
```
class Solution {
    
    private Map<String, Integer> map = new HashMap<>();
    private Map<String, Integer> idxs = new HashMap<>();
    
    public String[] sortFeatures(String[] features, String[] responses) {
        for(int i = 0; i < features.length; i++) {
            map.put(features[i], 0);
            idxs.put(features[i], i);
        }
        
        for(String str : responses) {
            Set<String> set = new HashSet<>();
            Collections.addAll(set, str.split(" "));
            for(String s : set) {
                if(map.containsKey(s))
                    map.put(s, map.getOrDefault(s, 0) + 1);
            }
        }
        quickSort(features, 0, features.length-1);
        return features;
    }
    
    private void quickSort(String[] features, int start, int end) {
        if(start < end) {
            int p = partition(features, start, end);
            quickSort(features, start, p-1);
            quickSort(features, p+1, end);
        }
    }
    private int partition(String[] features, int low, int high) {
        int j = low;
        for(int i = low; i < high; i++) {
            if(map.get(features[i]) > map.get(features[high]))
                swap(features, i, j++);
            else if(map.get(features[i]) == map.get(features[high]) && idxs.get(features[i]) < idxs.get(features[high]))
                swap(features, i, j++);
        }
        
        swap(features, j, high);
        return j;
    }
    private void swap(String[] s, int i, int j) {
        String temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
}
```

Hope this helps and if you have any questions feel free to ask!
**Please upvote if this helped!**