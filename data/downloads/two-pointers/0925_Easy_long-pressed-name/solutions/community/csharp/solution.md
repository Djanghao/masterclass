# Bad solution but without cringe 2 pointers

**Author:** Valllentine
**Votes:** 1
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/4763813/](https://leetcode.com/problems/long-pressed-name/solutions/4763813/)

---



# Code
```
public class Solution {
public bool IsLongPressedName(string name, string typed)
{
    List<KeyValuePair<char, int>> lettersInRealName = CountLetters(name);
    List<KeyValuePair<char, int>> lettersInTypedName = CountLetters(typed);

    var a = AreListsEqual(lettersInRealName, lettersInTypedName);
    return a;
}

bool AreListsEqual(List<KeyValuePair<char, int>> realList, List<KeyValuePair<char, int>> typedList)
{
    if (realList.Count != typedList.Count)
    {
        return false;
    }

    for (int i = 0; i < realList.Count; i++)
    {
        if (realList[i].Value > typedList[i].Value || realList[i].Key != typedList[i].Key)
        {
            return false;
        }
    }

    return true;
}

static List<KeyValuePair<char, int>> CountLetters(string input)
{
    List<KeyValuePair<char, int>> result = new List<KeyValuePair<char, int>>();

    var currentLetter = '\\0';
    foreach (char letter in input)
    {
        if (currentLetter == '\\0')
        {
            result.Add(new KeyValuePair<char, int>(letter, 1));
            currentLetter = letter;
            continue;
        }

        int index = result.FindLastIndex(pair => pair.Key == letter);

        if (index != -1 && currentLetter == letter)
        {
            var pair = result[index];
            result[index] = new KeyValuePair<char, int>(pair.Key, pair.Value + 1);
        }
        else if (index != -1 && currentLetter != letter)
        {
            currentLetter = letter;
            result.Add(new KeyValuePair<char, int>(letter, 1));
        }
        else
        {
            currentLetter = letter;
            result.Add(new KeyValuePair<char, int>(letter, 1));
        }
    }

    return result;
}
}
```