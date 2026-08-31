# 🐌 C# - straightforward solution

**Author:** user7166Uf
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/2143133/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/2143133/)

---

```
public class Solution
{
    public string ModifyString(string s)
    {
        char[] characters = s.ToCharArray();

        for (int index = 0; index < characters.Length; index++)
        {
            if (characters[index] is not '?') continue;

            char? previousCharacter = index > 0 ? characters[index - 1] : null;
            char? nextCharacter = index + 1 < characters.Length ? characters[index + 1] : null;

            if (previousCharacter is not 'a' && nextCharacter is not 'a')
            {
                characters[index] = 'a';
            }
            else if (previousCharacter is not 'b' && nextCharacter is not 'b')
            {
                characters[index] = 'b';
            }
            else
            {
                characters[index] = 'c';
            }
        }

        return new string(characters);
    }
}
```

With switch expression
```
public class Solution
{
    public string ModifyString(string s)
    {
        char[] characters = s.ToCharArray();

        for (int index = 0; index < characters.Length; index++)
        {
            if (characters[index] is not '?') continue;

            char? previousCharacter = index > 0 ? characters[index - 1] : null;
            char? nextCharacter = index + 1 < characters.Length ? characters[index + 1] : null;

            characters[index] = (previousCharacter, nextCharacter) switch
            {
                (not 'a', not 'a') => 'a',
                (not 'b', not 'b') => 'b',
                _ => 'c'
            };
        }

        return new string(characters);
    }
}
```