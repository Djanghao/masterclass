# C# - Not a great solution but I did it on my own

**Author:** eduard92
**Votes:** 1
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/3457003/](https://leetcode.com/problems/bulls-and-cows/solutions/3457003/)

---

At first I thought I need a `Hashset` instead of a list, hence the name `hash`.

`bullsDictionary` is keeping count of the values that are bulls but they are present for cows too, once its below 0, we good, we count cows.

first for loop counts bulls and we add all possible cows and we keep count of bulls values or duplicate values that might be cows.

second loop we get the cows count, I know its some repetive code, I got annoyed by the testcases and I kept slapping code till it worked, I felt pretty close but kept failing testcase after testcase.

# Code
```
public class Solution {
    public string GetHint(string secret, string guess) {
        var cowsCount = 0;
        var bullsCount = 0;

        var hash = new List<char>();
        var bullsDictionary = new Dictionary<char, int>();

        for (var i = 0; i < secret.Length; i++)
        {
            if (secret[i] == guess[i])
            {
                bullsCount++;

                if (!bullsDictionary.ContainsKey(secret[i]))
                    bullsDictionary.Add(secret[i], 1);
                else bullsDictionary[secret[i]]++;

                continue;
            }

            hash.Add(secret[i]);
        }

        for (var i = 0; i < guess.Length; i++)
        {
            if (hash.Contains(guess[i]))
            {
                if (bullsDictionary.ContainsKey(guess[i]))
                {
                    if (bullsDictionary[guess[i]] > 0)
                        bullsDictionary[guess[i]]--;
                    else
                    {
                        cowsCount++;
                        hash.Remove(guess[i]);
                    }
                }
                else {
                    cowsCount++;
                    hash.Remove(guess[i]);
                }
            }
        }

        return bullsCount + "A" + cowsCount + "B";
    }
}
```