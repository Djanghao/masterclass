# Java, array, no maps, beats 100%, clean code

**Author:** gthor10
**Votes:** 7
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/366421/](https://leetcode.com/problems/single-row-keyboard/solutions/366421/)

---

Solution is based on re-mapping keyboard characters to their indexes. For that we use an array where the index is the char and the value is the position of this character in our keyboard. 

After that we just iterating over the word's characters, find position of the current character, compare it tthe position saved on the previous iteration and write a diffrence to result

Complexity - O(len(word)) - O(1) to fill the keyboard map, it's always 26 characters, then iterating over the word string - O(len(word)).
Space - O(1) - we use constant 26 elements array to store characters mapping and several state variables.
```
    public int calculateTime(String keyboard, String word) {
        //fill mapping for the keyboard chars and indexes
        int[] map = new int[26];
        int j = 0;
        for (char ch : keyboard.toCharArray()) {
            map[ch - 'a'] = j++;
        }
        
        int res = 0;
        //reuse j as a placeholder for the previously typed char. Starting from 0
        j = 0;
        for (char ch : word.toCharArray()) {
            //find position of the current char as per keyboard mapping
            int idx = map[ch - 'a'];
            //add difference to the result
            res += Math.abs(j - idx);
            //save current as previous position for the next iteration
            j = idx;
        }
        return res;
    }
```