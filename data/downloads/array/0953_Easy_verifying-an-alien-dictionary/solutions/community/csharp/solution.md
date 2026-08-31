# Short and easy: Three lines of LINQ with explanation

**Author:** anikit
**Votes:** 7
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3130961/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3130961/)

---

```csharp
public class Solution
{
    public bool IsAlienSorted(string[] words, string order)
    {
        var alphabet = Enumerable.Range(0, 26).ToDictionary(i => order[i], i => (char)('a' + i));
        var translated = words.Select(w => string.Concat(w.Select(c => alphabet[c])));
        return translated.OrderBy(x => x).SequenceEqual(translated);
    }
}
```

# Explanation

**Line 1: Create the alphabet**

Let's juxtapose the alien alphabet and ours. The first line creates a map of this kind:
```
Alien char -> Human char
'h'           'a'
'l'           'b'
'k'           'c'
'o'           'd'
'w'           'e'
...
```

**Line 2: Translate the words**

Using the alphabet map, we then translate the alien words into our language. So, for each alien word:
1. Map each character of the word onto our alphabet with `Select(c => alphabet[c])`
2. Concatenate the characters back to a string with `string.Concat`

> Please note that it would be better to enumerate the sequence by using `ToArray()`, otherwise it will be enumerated twice in the last step. I have omitted `ToArray()` to shorten the code.

**Line 3: Compare**

Sort the translated words lexicographically and compare their order with the original one.

# If you don't like LINQ...
Just in case, here is a version with almost no LINQ:

```csharp
public class Solution
{
    public bool IsAlienSorted(string[] words, string order)
    {
        // Line 1
        Dictionary<char, char> alphabet = new();
        for (int i = 0; i < 26; i++)
        {
            alphabet.Add(order[i], (char)('a' + i));
        }

        // Line 2
        var translated = new string[words.Length];
        for (int i = 0; i < words.Length; i++)
        {
            StringBuilder translation = new();
            foreach (char c in words[i])
            {
                translation.Append(alphabet[c]);
            }
            translated[i] = translation.ToString();
        }

        // Line 3
        return translated.OrderBy(x => x).SequenceEqual(translated);
    }
}
```