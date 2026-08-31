# C# - Sliding Bitmask Window - Beats 95% for time & space

**Author:** tbaby
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/3798832/](https://leetcode.com/problems/repeated-dna-sequences/solutions/3798832/)

---

# Intuition
Since there are 4 character possibilities (A, C, G, T), we can represent a character with 2 bits. The character sequence is 10 chars long, which means we can uniquely represent a sequence with 20 bits. So a single 32 bit int is more than enough to uniquely represent a sequence. So rather than creating and comparing substrings of s to determine how many times a sequence has appeared, we can create and compare a representative int.

A big timesaver from this stems from the fact that a sequence ending at index (i + 1) can be derived from the sequence ending at index i. This is done by shifting all the characters left by 1, dropping the first character, and adding the (i + 1)'th character to the end. for strings, this requires creating whole new strings, but for ints, bitwise operations can avoid that.

# Approach
1. get the int mask for the first sequence and record seeing it once
2. slide accross the string 1 index at a time and at each step:
    1. update the int mask
    2. if we've seen the int mask at least twice, just ignore
    3. if we've seen the int mask once
        1. record that we've seen it twice
        2. store the actual string sequence in the output list
    3. if we've never seen the int mask, record seeing it once
3. return the output list

# Complexity
- Time complexity:
$$O(n)$$
We loop through the $$n$$ characters of s. for each iteration, we:
    1. perform 3 bitwise operations: $$O(1)$$ time.
    2. get and set a dictionary value by key: $$O(1)$$ time.
    3. possibly create a 10 character string and add to list: $$O(1)$$ time.
it's worth mentining the initialization of the output list with a capacity of $$n$$: $$O(n)$$ time

$$(O(n) * O(1)) + O(n) = O(n)$$ time

- Space complexity:
$$O(n)$$
the output list never grows beyond $$n$$ elements: $$O(n)$$ space
the masks dictionary never has more than $$n$$ entries, each utilizing $$O(1)$$ space: $$O(n)$$ space
$$O(n) + O(n) = O(n)$$ space
a



# Code
```
public class Solution {
    const int WORD_SIZE = 10; //num chars in sequence
    const int MASK_BITS = 32; //num bits in int

    // 4 possible characters, 2 bits needed per character.
    // A -> 00, C -> 01, G -> 10, T -> 11
    const int BITS_PER_CHAR = 2; 

    // in binary, this is 12 zeros followed by 20 ones, used for covering the 12 unused bits of the int masks
    const uint COVER = UInt32.MaxValue >> (MASK_BITS - (WORD_SIZE * BITS_PER_CHAR));

    //just for handling invalid inputs, ignore it
    const int BAD_CHAR_VALUE = 1234; 

    public IList<string> FindRepeatedDnaSequences(string s) {
        int n = s.Length;

        if(n <= WORD_SIZE) return new List<string>(1);

        List<string> output = new List<string>(n - WORD_SIZE + 1);

        Dictionary<uint, int> masks = new Dictionary<uint, int>();
        uint mask = this.GetFirstMask(s);
        masks[mask] = 1;

        for(int i = WORD_SIZE; i < n; i++){
            char c = s[i];

            //slide and append
            mask = mask << BITS_PER_CHAR; //slide 2 bits to the left, to make space for the new character
            mask = (mask | ValueOf(c)); //append c to end of mask
            mask = mask & COVER; // zero the unused leading bits

            //check how many times we have seen this mask before and act accordingly
            int appearances = masks.GetValueOrDefault(mask, 0);
            if(appearances == 1){
                masks[mask] = 2;
                output.Add(s.Substring(i - WORD_SIZE + 1, WORD_SIZE));
            }
            else if(appearances == 0){
                masks[mask] = 1;
            }
        }

        return output;
    }

    public uint GetFirstMask(string s){
        //this just utilizes the slide and append technique in main function
        uint output = 0;
        for(int i = 0; i < WORD_SIZE; i++){
            output = output << BITS_PER_CHAR;
            output = output | ValueOf(s[i]);
        }
        return output;
    }

    uint ValueOf(char c){
        switch(c){
            case 'A': return 0;
            case 'C': return 1;
            case 'G': return 2;
            case 'T': return 3;
            default: return BAD_CHAR_VALUE;
        }
    }
}


```