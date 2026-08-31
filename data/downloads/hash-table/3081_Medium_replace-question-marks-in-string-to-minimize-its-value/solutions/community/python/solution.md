# Full Detailed Explanation 🔥✅

**Author:** shivakumar1
**Votes:** 2
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4884332/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4884332/)

---


1. **Pair Class**:
    - The `Pair` class represents a pair of values: an integer `f` and a character `ch`. 
    - It has a constructor to initialize these values and a `toString()` method to print them.

2. **Solution Class**:
    - This class contains the method `minimizeStringValue(String s)` which takes a string `s` as input and returns the modified string as described in the problem.

3. **minimizeStringValue Method**:
    - First, a `HashMap` named `map` is initialized to store the count of characters encountered in the input string `s`, and `count` is initialized to zero.
    - The input string `s` is iterated character by character. If the character is not a question mark ('?'), its count is incremented in the map. If it is a question mark, `count` is incremented to track the number of question marks encountered.
    - After iterating through the string, the map is filled with entries for all lowercase English letters, ensuring that each letter has a count of zero if not encountered in the input string.
    - Next, a `PriorityQueue` named `pq` is initialized. This priority queue will contain pairs of characters and their frequencies. The priority queue is sorted based on frequency, and for equal frequencies, characters are sorted lexicographically.
    - Pairs of characters and their frequencies are added to the priority queue from the map.
    - The input string `s` is converted to a character array `arr`, and an empty list `list` is initialized to store characters to replace the question marks.
    - Then, for each question mark encountered in the array, a pair is removed from the priority queue, the character from the pair is added to the `list`, the frequency of the character is incremented, and `count` is decremented.
    - The characters in the `list` are sorted lexicographically.
    - Finally, for each question mark encountered in the array, a character from the sorted `list` is assigned to replace the question mark.
    - The modified character array is converted back to a string and returned.

This algorithm replaces each question mark with a character that minimizes the value of the string according to the defined function. If there are multiple characters that can minimize the value, it ensures to pick the lexicographically smallest one.

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Pair{
    int f; // Frequency of character
    char ch; // Character
    
    // Constructor to initialize pair values
    public Pair(int fr, char c){
        f = fr;
        ch = c;
    }
    
    // Override toString method to print pair values
    public String toString(){
        System.out.println("f: " + f + " ch: " + ch);
        return "";
    }
}

class Solution {
    
    // Method to minimize the value of the string
    public String minimizeStringValue(String s) {
        // HashMap to store character frequencies
        Map<Character,Integer> map = new HashMap();
        int count = 0; // Count of question marks
        
        // Iterate through the string to count character frequencies and question marks
        for(char ch: s.toCharArray()){
            if(ch != '?')
                map.put(ch, map.getOrDefault(ch, 0)+1); // Update character frequency
            else count++; // Increment count of question marks
        }
        
        // Fill the map with all lowercase English letters ensuring zero count for non-encountered characters
        for(char ch = 'a'; ch <= 'z'; ch++){
            if(!map.containsKey(ch)){
                map.put(ch, 0);
            }
        }
        
        // Priority queue to store pairs of character frequencies, sorted based on frequency and then lexicographically
        PriorityQueue<Pair> pq = new PriorityQueue<Pair>((a,b) -> {
            if(a.f == b.f){
                return a.ch - b.ch; // Sort lexicographically if frequencies are equal
            }
            return a.f - b.f; // Sort based on frequency
        });
        
        // Add pairs of characters and their frequencies to the priority queue
        for(char ch: map.keySet()){
            pq.add(new Pair(map.get(ch), ch));
        }
        
        char[] arr = s.toCharArray(); // Convert string to character array
        List<Character> list = new ArrayList(); // List to store characters to replace question marks
        
        // Iterate through the character array to replace question marks
        for(int i=0; i<arr.length; i++){
            if(arr[i] == '?'){
                Pair p = pq.remove(); // Remove pair with the lowest frequency
                list.add(p.ch); // Add character to list
                pq.add(new Pair(p.f+1, p.ch)); // Increment frequency and add pair back to priority queue
                count--; // Decrement count of question marks
            }
        }

        Collections.sort(list); // Sort the list lexicographically
        
        int j = 0;
        // Iterate through the character array again to replace question marks with characters from the list
        for(int i=0; i<arr.length; i++){
            if(arr[i] == '?'){
                arr[i] = list.get(j++); // Replace question mark with character from the sorted list
            }
        }
        
        return new String(arr); // Convert character array back to string and return
    }
}

```

![upvote.gif](./images/0.gif)
