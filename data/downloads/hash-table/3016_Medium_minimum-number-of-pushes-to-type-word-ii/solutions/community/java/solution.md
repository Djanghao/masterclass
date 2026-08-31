# O(n) | Greedy |  Heap | Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 96
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5593444/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5593444/)

---

# Approach 1
### Intuition

The core idea behind solving this problem lies in optimizing the key mapping to minimize the total number of key presses required to type a given word. The intuition stems from the observation that in an optimal mapping, the most frequently occurring letters should be assigned to keys that require the least number of presses.

Consider a standard phone keypad with 8 available keys (2-9). Each key can be pressed multiple times to access different letters. For instance, pressing a key once might give you the first letter, twice for the second letter, and so on. With this in mind, the optimal strategy would be to assign the 8 most frequent letters to single presses across the 8 keys, the next 8 most frequent letters to double presses, and continue this pattern.

This approach naturally leads to a greedy algorithm. By sorting the letters based on their frequency in **descending order**, we can ensure that the most common letters are assigned to the easiest-to-access positions on the keypad.

### Approach

The solution implements a greedy algorithm that can be broken down into several key steps:

1. **Frequency Counting**: 
   The first step involves counting the frequency of each letter in the input word. This is achieved by iterating through each character in the word and incrementing a counter for the corresponding letter in an array. The array `letterFrequency` is initialized with 26 elements, each representing a letter of the alphabet (a-z).

   ```java
   int[] letterFrequency = new int[26];
   for (char c : word.toCharArray()) {
       letterFrequency[c - 'a']++;
   }
   ```

   This step has a time complexity of O(n), where n is the length of the input word.

2. **Sorting Frequencies**:
   After counting the frequencies, the next step is to sort these frequencies in descending order. This is crucial for the greedy approach, as it allows us to assign the most frequent letters to the most accessible key positions.

   ```java
   Integer[] sortedFreq = new Integer[26];
   for (int i = 0; i < 26; i++) {
       sortedFreq[i] = letterFrequency[i];
   }
   Arrays.sort(sortedFreq, Collections.reverseOrder());
   ```

   Here, a new array `sortedFreq` is created and populated with the frequency counts. The use of Integer objects instead of primitives allows for the use of `Collections.reverseOrder()` in the sorting process, which sorts the array in descending order.

   The time complexity of this step is O(1) since we're sorting a fixed-size array of 26 elements.

3. **Calculating Total Presses**:
   The final step involves calculating the total number of key presses required based on the sorted frequencies. This is where the greedy strategy comes into play.

   ```java
   int totalPresses = 0;
   for (int i = 0; i < 26; i++) {
       if (sortedFreq[i] == 0) break;
       totalPresses += (i / 8 + 1) * sortedFreq[i];
   }
   ```

   The loop iterates through the sorted frequencies. For each frequency:
   - `i / 8 + 1` determines the number of presses required for the current letter. The first 8 letters (indices 0-7) require 1 press, the next 8 (indices 8-15) require 2 presses, and so on.
   - This number of presses is multiplied by the frequency of the letter (`sortedFreq[i]`).
   - The result is added to the total number of presses.

   The loop breaks early if it encounters a frequency of 0, as this indicates that all non-zero frequencies have been processed.

   This step has a time complexity of O(1) since it always processes at most 26 elements.

4. **Returning the Result**:
   After calculating the total number of presses, the method returns this value as the final result.

   ```java
   return totalPresses;
   ```

The greedy nature of this approach ensures that the most frequent letters are assigned to the most accessible key positions (requiring fewer presses), thereby minimizing the total number of presses required to type the word.

This solution elegantly handles various scenarios:
- For words with a small number of unique letters, it efficiently assigns each letter to a single press on different keys.
- For words with many unique letters, it prioritizes the most frequent ones, assigning them to single presses and less frequent ones to multiple presses.
- It naturally handles cases where some keys might not be used at all, as it only processes letters that actually appear in the word.

The approach is particularly effective because it takes advantage of the constraint that there are only 26 possible letters. This allows for the use of fixed-size data structures and sorting algorithms that operate in constant time relative to the input size.

# Complexity

- **Time complexity: O(n)**

  The time complexity of this solution can be broken down as follows:
  1. Counting letter frequencies: O(n), where n is the length of the input word.
  2. Creating and sorting the frequency array: O(1), as it always deals with 26 elements.
  3. Calculating total presses: O(1), as it iterates over at most 26 elements.

  The dominant factor is the initial frequency counting, which scales with the input size. Therefore, the overall time complexity is O(n).

- **Space complexity: O(1)**

  The space complexity remains constant regardless of the input size:
  1. `letterFrequency` array: O(1) - fixed size of 26 elements.
  2. `sortedFreq` array: O(1) - also fixed size of 26 elements.
  3. Other variables (`totalPresses`, loop counters): O(1) - constant space.

  All data structures used have a fixed size independent of the input, resulting in a space complexity of O(1).


### Code
```Java []
class Solution {
    public int minimumPushes(String word) {
        int[] letterFrequency = new int[26];
        for (char c : word.toCharArray()) {
            letterFrequency[c - 'a']++;
        }
        
        Integer[] sortedFreq = new Integer[26];
        for (int i = 0; i < 26; i++) {
            sortedFreq[i] = letterFrequency[i];
        }
        Arrays.sort(sortedFreq, Collections.reverseOrder());
        
        int totalPresses = 0;
        for (int i = 0; i < 26; i++) {
            if (sortedFreq[i] == 0) break;
            totalPresses += (i / 8 + 1) * sortedFreq[i];
        }
        
        return totalPresses;
    }
}
```
```Python []
class Solution:
    def minimumPushes(self, input_text: str) -> int:
        # Count letter occurrences
        letter_counts = [0] * 26
        for char in input_text:
            letter_counts[ord(char) - ord('a')] += 1
        
        # Sort counts in descending order
        sorted_counts = sorted(letter_counts, reverse=True)
        
        total_key_presses = 0
        for index, count in enumerate(sorted_counts):
            if count == 0:
                break
            total_key_presses += (index // 8 + 1) * count
        
        return total_key_presses
```
```C++ []
class Solution {
public:
    int minimumPushes(string word) {
        vector<int> letterFreq(26, 0);
        for (char c : word) {
            letterFreq[c - 'a']++;
        }
        
        sort(letterFreq.rbegin(), letterFreq.rend());
        
        int totalPresses = 0;
        for (int i = 0; i < 26; i++) {
            if (letterFreq[i] == 0) break;
            totalPresses += (i / 8 + 1) * letterFreq[i];
        }
        
        return totalPresses;
    }
};
```
```Go []
func minimumPushes(word string) int {
    letterFreq := make([]int, 26)
    for _, c := range word {
        letterFreq[c - 'a']++
    }
    
    sort.Sort(sort.Reverse(sort.IntSlice(letterFreq)))
    
    totalPresses := 0
    for i, freq := range letterFreq {
        if freq == 0 {
            break
        }
        totalPresses += (i / 8 + 1) * freq
    }
    
    return totalPresses
}
```
```Rust []
impl Solution {
    pub fn minimum_pushes(word: String) -> i32 {
        let mut letter_freq = vec![0; 26];
        for c in word.chars() {
            letter_freq[(c as u8 - b'a') as usize] += 1;
        }
        
        letter_freq.sort_unstable_by(|a, b| b.cmp(a));
        
        let mut total_presses = 0;
        for (i, &freq) in letter_freq.iter().enumerate() {
            if freq == 0 {
                break;
            }
            total_presses += (i / 8 + 1) as i32 * freq;
        }
        
        total_presses
    }
}
```
```JavaScript []
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const letterFreq = new Array(26).fill(0);
    for (let c of word) {
        letterFreq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    letterFreq.sort((a, b) => b - a);
    
    let totalPresses = 0;
    for (let i = 0; i < 26; i++) {
        if (letterFreq[i] === 0) break;
        totalPresses += Math.floor(i / 8 + 1) * letterFreq[i];
    }
    
    return totalPresses;
};
```
---

# Appraoch 2
### Intuition

Optimizing key mappings to minimize the total number of key presses required to type a given word. This approach recognizes that the most efficient solution lies in assigning the most frequently occurring letters to the keys and positions that require the least number of presses.

The key insight here is that by directly manipulating an array of frequencies, we can achieve our goal without the need for complex data structures like heaps or hash maps. This approach leverages the fact that there are only 26 lowercase English letters, allowing for a fixed-size array to be used effectively.

By sorting the frequency array in **ascending order** and then iterating backwards, we can easily assign the most frequent letters to the most accessible key positions. This backwards iteration naturally aligns with the concept of assigning letters to keys in order of decreasing frequency.

Furthermore, this approach intuitively understands that early termination is possible as soon as we encounter a zero frequency, as this indicates that all non-zero frequencies have been processed. This can lead to performance gains, especially in cases where the input word uses only a subset of the alphabet.

### Approach

The approach for this third solution can be broken down into several key steps:

1. **Frequency Counting:**
   The first step involves counting the frequency of each letter in the input word. This is achieved using a fixed-size integer array of length 26, where each index corresponds to a letter of the alphabet (0 for 'a', 1 for 'b', and so on).

   ```java
   int[] freq = new int[26];
   for (char c : word.toCharArray()) {
       freq[c - 'a']++;
   }
   ```

   This step efficiently counts occurrences without the need for more complex data structures like hash maps. It takes advantage of the fact that we're dealing with a known, limited set of characters (lowercase English letters).

2. **Sorting Frequencies:**
   After counting, the frequency array is sorted in ascending order. This is a crucial step that differentiates this approach from the previous ones.

   ```java
   Arrays.sort(freq);
   ```

   By sorting in ascending order, we set up the array so that the most frequent letters will be at the end. This allows for a more intuitive backwards iteration in the next step.

3. **Calculating Total Pushes:**
   The core of the algorithm lies in this step. We iterate through the sorted frequency array from right to left, assigning the most frequent letters to the most accessible key positions.

   ```java
   int totalPushes = 0;
   int multiplier = 1;
   
   for (int i = 25; i >= 0; i--) {
       if (freq[i] == 0) break;
       
       if ((25 - i) % 8 == 0 && i != 25) {
           multiplier++;
       }
       
       totalPushes += freq[i] * multiplier;
   }
   ```

   This loop incorporates several clever elements:
   - Backwards Iteration: By starting from index 25 and moving left, we process letters in order of decreasing frequency.
   - Early Termination: The loop breaks as soon as it encounters a zero frequency, optimizing performance for words that don't use all 26 letters.
   - Dynamic Multiplier: The multiplier (representing the number of pushes needed for a key) increases every 8 letters, accurately modeling the keypad layout.

4. **Returning the Result:**
   Finally, the total number of pushes is returned as the solution.

   ```java
   return totalPushes;
   ```

This approach stands out from the previous two in several ways:

- **Direct Array Manipulation:** Unlike the first approach, which used an Integer array and Collections.reverseOrder(), or the second approach, which used a PriorityQueue, this method directly manipulates a primitive int array. 
- **Ascending Sort with Reverse Iteration:** By sorting in ascending order and iterating backwards, this approach achieves the same effect as a descending sort, but potentially with better cache locality during the iteration phase.



### Complexity

- **Time complexity: O(n)**

  The time complexity of this solution can be broken down as follows:

  1. Frequency Counting: O(n), where n is the length of the input word.
     - This step involves a single pass through the input string, counting the frequency of each character.

  2. Sorting the Frequency Array: O(26 log 26)
     - The sorting step uses Java's built-in sorting algorithm, which has a time complexity of O(k log k) for k elements.
     - In this case, k is always 26 (the size of the alphabet), so this step has a constant time complexity relative to the input size.

  3. Calculating Total Pushes: O(26)
     - The final loop iterates at most 26 times, once for each possible letter.

  The dominant factor in this time complexity is the initial frequency counting step, which scales with the input size. The sorting and calculation steps have constant time complexity relative to the input size.

  While the complexity includes a 26 log 26 term, this is effectively constant for the given problem constraints. Therefore, for all practical purposes, the time complexity can be considered O(n).

- **Space complexity: O(1)**

  The space complexity of this solution remains constant regardless of the input size:

  1. Frequency Array: O(26) = O(1)
     - A fixed-size array of 26 integers is used to store letter frequencies.

  2. Other Variables: O(1)
     - A constant number of additional variables (totalPushes, multiplier, loop counters) are used.

  All data structures used have a fixed size independent of the input, resulting in a space complexity of O(1).


Compared to the previous approaches, this method potentially offers better cache performance due to its use of a single, contiguous array and simpler control flow. It avoids the overhead associated with object creation and method calls that come with using more complex data structures like PriorityQueues or boxed Integer objects.

### Code

```Java []
class Solution {
    public int minimumPushes(String word) {
        // Count the frequency of each letter
        int[] freq = new int[26];
        for (char c : word.toCharArray()) {
            freq[c - 'a']++;
        }
        
        // Sort the frequencies in descending order
        Arrays.sort(freq);
        
        int totalPushes = 0;
        int multiplier = 1;
        
        // Assign letters to keys, starting from the most frequent
        for (int i = 25; i >= 0; i--) {
            if (freq[i] == 0) break;
            
            if ((25 - i) % 8 == 0 && i != 25) {
                multiplier++;
            }
            
            totalPushes += freq[i] * multiplier;
        }
        
        return totalPushes;
    }
}

```
```C++ []

class Solution {
public:
    int minimumPushes(string word) {
        vector<int> freq(26, 0);
        for (char c : word) {
            freq[c - 'a']++;
        }
        
        sort(freq.begin(), freq.end());
        
        int totalPushes = 0;
        int multiplier = 1;
        
        for (int i = 25; i >= 0; i--) {
            if (freq[i] == 0) break;
            
            if ((25 - i) % 8 == 0 && i != 25) {
                multiplier++;
            }
            
            totalPushes += freq[i] * multiplier;
        }
        
        return totalPushes;
    }
};
```
```Python []
class Solution:
    def minimumPushes(self, word: str) -> int:
        freq = [0] * 26
        for c in word:
            freq[ord(c) - ord('a')] += 1
        
        freq.sort()
        
        totalPushes = 0
        multiplier = 1
        
        for i in range(25, -1, -1):
            if freq[i] == 0:
                break
            
            if (25 - i) % 8 == 0 and i != 25:
                multiplier += 1
            
            totalPushes += freq[i] * multiplier
        
        return totalPushes

```
```Go []
func minimumPushes(word string) int {
    freq := make([]int, 26)
    for _, c := range word {
        freq[c - 'a']++
    }
    
    sort.Ints(freq)
    
    totalPushes := 0
    multiplier := 1
    
    for i := 25; i >= 0; i-- {
        if freq[i] == 0 {
            break
        }
        
        if (25 - i) % 8 == 0 && i != 25 {
            multiplier++
        }
        
        totalPushes += freq[i] * multiplier
    }
    
    return totalPushes
}

```
```Rust []
impl Solution {
    pub fn minimum_pushes(word: String) -> i32 {
        let mut freq = [0; 26];
        for c in word.chars() {
            freq[(c as u8 - b'a') as usize] += 1;
        }
        
        freq.sort_unstable();
        
        let mut total_pushes = 0;
        let mut multiplier = 1;
        
        for i in (0..26).rev() {
            if freq[i] == 0 {
                break;
            }
            
            if (25 - i) % 8 == 0 && i != 25 {
                multiplier += 1;
            }
            
            total_pushes += freq[i] * multiplier;
        }
        
        total_pushes
    }
}

```
```JavaScript []
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const freq = new Array(26).fill(0);
    for (let c of word) {
        freq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    freq.sort((a, b) => a - b);
    
    let totalPushes = 0;
    let multiplier = 1;
    
    for (let i = 25; i >= 0; i--) {
        if (freq[i] === 0) break;
        
        if ((25 - i) % 8 === 0 && i !== 25) {
            multiplier++;
        }
        
        totalPushes += freq[i] * multiplier;
    }
    
    return totalPushes;
};

```





---
# Approach 3
### Intuition

The problem of minimizing key presses on a remappable telephone keypad can be approached by considering the frequency of each character in the input string. The core insight is that assigning the most frequently occurring characters to the first positions on the keys will minimize the total number of key presses required.

This leads to a natural greedy strategy: map the most frequent characters to single key presses, the next most frequent to double key presses, and so on. By doing this, we ensure that characters appearing often in the text require fewer presses, thus minimizing the total count of key presses needed to type the entire string.

To efficiently implement this strategy, a max heap (priority queue) proves to be an excellent data structure. It allows us to continually access and remove the highest frequency count, enabling a dynamic and efficient assignment of characters to key positions.

### Approach

The approach to solve this problem can be broken down into several key steps:

1. **Character Frequency Analysis:**
   The first step involves analyzing the input string to determine the frequency of each character. This is crucial because our strategy revolves around prioritizing the most frequent characters.

   We iterate through each character in the input string, using a hash map (or dictionary) to keep track of how many times each character appears. The key in this map is the character itself, and the value is its frequency count.

2. **Building a Max Heap:**
   Once we have the frequency count for each character, we construct a max heap (priority queue) using these frequency values. The heap is ordered such that the highest frequency is always at the top.

   This step is vital because it allows us to efficiently retrieve the most frequent characters first, without needing to sort the entire list of frequencies. The heap structure maintains this order dynamically as we remove elements.

3. **Assigning Key Presses:**
   With the max heap in place, we can start assigning key presses to characters. We process the frequencies in the heap one by one, always taking the highest frequency (which is at the top of the heap) first.

   As we assign key presses, we keep track of how many characters have been assigned so far. This count helps us determine which key press count (1, 2, 3, etc.) we should be using for the current character.

   The key press count for a character is calculated as `(keyPosition / 8) + 1`, where `keyPosition` is the number of characters we've assigned so far. This formula ensures that:
   - The first 8 characters get assigned to single key presses (when keyPosition is 0 to 7)
   - The next 8 characters get assigned to double key presses (when keyPosition is 8 to 15)
   - And so on...

4. **Calculating Total Key Presses:**
   As we assign key presses to each character, we calculate the contribution of that character to the total number of key presses. This is done by multiplying the character's frequency by its assigned key press count.

   We keep a running sum of these contributions, which ultimately gives us the total number of key presses required to type the entire string.

5. **Iterative Process:**
   Steps 3 and 4 are repeated until we've processed all the frequencies in our max heap. This ensures that every character in the input string has been accounted for.

Here's a more detailed breakdown of the algorithm:

1. **Initialize a hash map to store character frequencies:**
   - Iterate through each character in the input string.
   - For each character, increment its count in the hash map.

2. **Create a max heap (priority queue) of frequencies:**
   - Take all the frequency values from the hash map.
   - Insert these values into a max heap.

3. **Initialize variables:**
   - Set `totalPresses` to 0 (this will store our final answer).
   - Set `keyPosition` to 0 (this tracks how many characters we've assigned).

4. **Process frequencies from the max heap:**
   - While the heap is not empty:
     a. Remove the top element from the heap (highest frequency).
     b. Calculate the key press count: `pressCount = (keyPosition / 8) + 1`.
     c. Add to totalPresses: `totalPresses += frequency * pressCount`.
     d. Increment `keyPosition` by 1.

5. **Return `totalPresses` as the final answer.**

This approach ensures that we always assign the most frequent characters to the lowest number of key presses possible, thus minimizing the total number of key presses required to type the entire string.

The use of a max heap allows us to efficiently retrieve the highest frequencies without needing to sort the entire list of frequencies. This is particularly beneficial as we only need to know the next highest frequency at each step, not the entire sorted order.


It's worth noting that this approach works because the problem allows us to freely map characters to keys. If there were constraints on which characters could be mapped to which keys, a different approach might be necessary. However, for the given problem statement, this approach with a max heap provides an optimal solution.

### Complexity

- **Time complexity: O(n)**

  Where n is the length of the input string and k is the number of unique characters in the string.

  The time complexity can be broken down as follows:
  1. Creating the frequency map: O(n)
     - We iterate through each character in the input string once.

  2. Building the max heap: O(k log k)
     - Inserting k elements into a heap, where each insertion takes log k time.

  3. Processing the heap: O(k log k)
     - We remove k elements from the heap, where each removal takes log k time.

  However, it's important to note that k is bounded by the size of the alphabet. In the case of lowercase English letters, k \u2264 26. Therefore, for practical purposes, the k log k terms can be considered constant.

  This means that for most practical inputs, the time complexity effectively becomes O(n).

- **Space complexity: O(1)**

  Where k is the number of unique characters in the string.

  The space complexity is determined by:
  1. The frequency map: O(k)
     - In the worst case, we store a count for each unique character.

  2. The max heap: O(k)
     - The heap will contain at most k elements, one for each unique character frequency.

  Again, since k is bounded by the alphabet size (k \u2264 26 for lowercase English letters), the space complexity can be considered O(1) for practical purposes.

It's worth noting that while the theoretical complexity includes terms dependent on k, in practice, for the given constraint of lowercase English letters, k is always \u2264 26. This means that for the specific problem of remapping a telephone keypad for English text, both the time and space complexity effectively become O(n) and O(1) respectively.



# Code
```Java []
class Solution {
    public int minimumPushes(String word) {
        Map<Character, Integer> charCount = new HashMap<>();
        for (char c : word.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        PriorityQueue<Integer> freqHeap = new PriorityQueue<>(Collections.reverseOrder());
        freqHeap.addAll(charCount.values());
        
        int totalPresses = 0;
        int keyPosition = 0;
        
        while (!freqHeap.isEmpty()) {
            totalPresses += (keyPosition / 8 + 1) * freqHeap.poll();
            keyPosition++;
        }
        
        return totalPresses;
    }
}
```
```Python []
import heapq
from collections import Counter

class Solution:
    def minimumPushes(self, input_text: str) -> int:
        # Count letter occurrences
        char_frequency = Counter(input_text)
        
        # Create max heap of frequencies
        frequency_heap = [-freq for freq in char_frequency.values()]
        heapq.heapify(frequency_heap)
        
        total_key_presses = 0
        key_position = 0
        
        while frequency_heap:
            current_freq = -heapq.heappop(frequency_heap)
            total_key_presses += (key_position // 8 + 1) * current_freq
            key_position += 1
        
        return total_key_presses
```
```C++ []
class Solution {
public:
    int minimumPushes(string word) {
        unordered_map<char, int> charCount;
        for (char c : word) {
            charCount[c]++;
        }
        
        priority_queue<int> freqHeap;
        for (const auto& pair : charCount) {
            freqHeap.push(pair.second);
        }
        
        int totalPresses = 0;
        int keyPosition = 0;
        
        while (!freqHeap.empty()) {
            totalPresses += (keyPosition / 8 + 1) * freqHeap.top();
            freqHeap.pop();
            keyPosition++;
        }
        
        return totalPresses;
    }
};
```
```Go []
func minimumPushes(word string) int {
    charCount := make(map[rune]int)
    for _, c := range word {
        charCount[c]++
    }
    
    freqHeap := &IntHeap{}
    heap.Init(freqHeap)
    for _, count := range charCount {
        heap.Push(freqHeap, count)
    }
    
    totalPresses := 0
    keyPosition := 0
    
    for freqHeap.Len() > 0 {
        freq := heap.Pop(freqHeap).(int)
        totalPresses += (keyPosition / 8 + 1) * freq
        keyPosition++
    }
    
    return totalPresses
}

// IntHeap is a min-heap of ints
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}
```
```Rust []
use std::collections::{BinaryHeap, HashMap};

impl Solution {
    pub fn minimum_pushes(word: String) -> i32 {
        let mut char_count = HashMap::new();
        for c in word.chars() {
            *char_count.entry(c).or_insert(0) += 1;
        }
        
        let mut freq_heap = BinaryHeap::new();
        for &count in char_count.values() {
            freq_heap.push(count);
        }
        
        let mut total_presses = 0;
        let mut key_position = 0;
        
        while let Some(freq) = freq_heap.pop() {
            total_presses += (key_position / 8 + 1) * freq;
            key_position += 1;
        }
        
        total_presses
    }
}
```
```JavaScript []
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const charCount = new Map();
    for (let c of word) {
        charCount.set(c, (charCount.get(c) || 0) + 1);
    }
    
    const freqHeap = Array.from(charCount.values());
    freqHeap.sort((a, b) => b - a);
    
    let totalPresses = 0;
    let keyPosition = 0;
    
    while (freqHeap.length > 0) {
        totalPresses += Math.floor(keyPosition / 8 + 1) * freqHeap.shift();
        keyPosition++;
    }
    
    return totalPresses;
};
```
---

