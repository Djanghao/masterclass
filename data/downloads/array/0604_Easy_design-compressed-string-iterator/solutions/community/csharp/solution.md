# C# solution using list of (char, int) 100% better in time

**Author:** dotawsnet
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/3248743/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/3248743/)

---

# Intuition
Parse the compressed string and store the letter and their count in some sort of collection. 

Maintain the index of the collection, retrieve character from the current collection item if the count is greater than zero. If count is zero increment the index to next item in the collection.

# Approach
Create a List of `Tuple<char, int>` and call it `map`. Parse the input string and store pair of each character and count of it in the list. 

Create class level variable `index` and set initial value to `0`.

Inside next method return empty space if `index >= map.Count`.

Else, check `map[index].Item2`. If that is greater than zero, decrement it by one and return `map[index].Item1`. Else increment `index` by one.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
    - Time complexity for creating map at the start will be `O(n)` where n is the length of `compressedString`.
    - After that `next` and `hasNext` operations will take `O(1)` time because lookup in the map will take constant time.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
    - Space is required to store the `map`. That will be `O(n)` where n is the number of characters (not their counts) in `compressedString`. The map will have number of elements equal to the number of characters in the input.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class StringIterator {
    int index = 0;
    List<(char, int)> map = new List<(char, int)>();
    public StringIterator(string compressedString) {
        createList(compressedString);
        index = 0;
    }
    
    public char Next() {
        char retValue = " "[0];
        if(index < map.Count)
        {
            if(map[index].Item2 > 0)
            {
                map[index] = (map[index].Item1, map[index].Item2 - 1);
                retValue = map[index].Item1;
                if(map[index].Item2 == 0)
                {
                    index++;
                }
            }
        }

        return retValue;
    }
    
    public bool HasNext() {
        return index < map.Count && map[index].Item2 > 0;
    }

    private void createList(string input)
    {
        var i = 0;
        char currChar = '\\0';
        while(i < input.Length)
        {
            if(char.IsLetter(input[i]))
            {
                currChar = input[i];
                i++;
            }
            else
            {
                int total = input[i] - '0';
                while(++i < input.Length)
                {
                    if(!char.IsDigit(input[i]))
                    {
                        break;
                    }
                    
                    total = (total * 10) + (input[i] - '0');
                }

                map.Add((currChar, total));
            }
        }
    }
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * StringIterator obj = new StringIterator(compressedString);
 * char param_1 = obj.Next();
 * bool param_2 = obj.HasNext();
 */
```