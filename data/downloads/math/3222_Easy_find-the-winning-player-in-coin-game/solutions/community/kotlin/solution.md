# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5507208/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5507208/)

---

```Java []
public class Solution {

    private static final int MIN_NEEDED_COINS_WITH_VALUE_10 = 4;
    private static final int MIN_NEEDED_COINS_WITH_VALUE_75 = 1;
    private static final String[] PLAYERS = {"Bob", "Alice"};

    public String losingPlayer(int numberOfCoinsWithValue_75, int numberOfCoinsWithValue_10) {
        int numberOfTurns = Math.min((numberOfCoinsWithValue_75 / MIN_NEEDED_COINS_WITH_VALUE_75),
                                     (numberOfCoinsWithValue_10 / MIN_NEEDED_COINS_WITH_VALUE_10));
        return PLAYERS[numberOfTurns % 2];
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfCoinsWithValue_75
 * @param {number} numberOfCoinsWithValue_10
 * @return {string}
 */
var losingPlayer = function (numberOfCoinsWithValue_75, numberOfCoinsWithValue_10) {
    const MIN_NEEDED_COINS_WITH_VALUE_10 = 4;
    const MIN_NEEDED_COINS_WITH_VALUE_75 = 1;
    const PLAYERS = ["Bob", "Alice"];

    const numberOfTurns = Math.min(Math.floor((numberOfCoinsWithValue_75 / MIN_NEEDED_COINS_WITH_VALUE_75)),
                                   Math.floor((numberOfCoinsWithValue_10 / MIN_NEEDED_COINS_WITH_VALUE_10)));
    return PLAYERS[numberOfTurns % 2];
};
```
```TypeScript []
function losingPlayer(numberOfCoinsWithValue_75: number, numberOfCoinsWithValue_10: number): string {
    const MIN_NEEDED_COINS_WITH_VALUE_10 = 4;
    const MIN_NEEDED_COINS_WITH_VALUE_75 = 1;
    const PLAYERS = ["Bob", "Alice"];

    const numberOfTurns = Math.min(Math.floor((numberOfCoinsWithValue_75 / MIN_NEEDED_COINS_WITH_VALUE_75)),
                                   Math.floor((numberOfCoinsWithValue_10 / MIN_NEEDED_COINS_WITH_VALUE_10)));
    return PLAYERS[numberOfTurns % 2];
};
```
```C++ []
#include <array>
#include <algorithm>
using namespace std;

class Solution {

    static const int MIN_NEEDED_COINS_WITH_VALUE_10 = 4;
    static const int MIN_NEEDED_COINS_WITH_VALUE_75 = 1;
    inline static const array<string, 2> PLAYERS = { "Bob", "Alice" };

public:
    string losingPlayer(int numberOfCoinsWithValue_75, int numberOfCoinsWithValue_10) const {
        int numberOfTurns = min((numberOfCoinsWithValue_75 / MIN_NEEDED_COINS_WITH_VALUE_75),
                                (numberOfCoinsWithValue_10 / MIN_NEEDED_COINS_WITH_VALUE_10));
        return PLAYERS[numberOfTurns % 2];
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int MIN_NEEDED_COINS_WITH_VALUE_10 = 4;
    private static readonly int MIN_NEEDED_COINS_WITH_VALUE_75 = 1;
    private static readonly string[] PLAYERS = { "Bob", "Alice" };

    public string LosingPlayer(int numberOfCoinsWithValue_75, int numberOfCoinsWithValue_10)
    {
        int numberOfTurns = Math.Min((numberOfCoinsWithValue_75 / MIN_NEEDED_COINS_WITH_VALUE_75),
                                     (numberOfCoinsWithValue_10 / MIN_NEEDED_COINS_WITH_VALUE_10));
        return PLAYERS[numberOfTurns % 2];
    }
}
```
```Kotlin []
import kotlin.math.min

class Solution {

    private companion object {
        const val MIN_NEEDED_COINS_WITH_VALUE_10 = 4
        const val MIN_NEEDED_COINS_WITH_VALUE_75 = 1
        val PLAYERS = arrayOf("Bob", "Alice")
    }

    fun losingPlayer(numberOfCoinsWithValue_75: Int, numberOfCoinsWithValue_10: Int): String {
        val numberOfTurns = min((numberOfCoinsWithValue_75 / MIN_NEEDED_COINS_WITH_VALUE_75),
                                 (numberOfCoinsWithValue_10 / MIN_NEEDED_COINS_WITH_VALUE_10))
        return PLAYERS[numberOfTurns % 2]
    }
}
```
```Go []
package main

import "fmt"

const MIN_NEEDED_COINS_WITH_VALUE_10 = 4
const MIN_NEEDED_COINS_WITH_VALUE_75 = 1

var PLAYERS = [2]string{"Bob", "Alice"}

func losingPlayer(numberOfCoinsWithValue_75 int, numberOfCoinsWithValue_10 int) string {
    numberOfTurns := min((numberOfCoinsWithValue_75 / MIN_NEEDED_COINS_WITH_VALUE_75),
                         (numberOfCoinsWithValue_10 / MIN_NEEDED_COINS_WITH_VALUE_10))
    return PLAYERS[numberOfTurns%2]
}
```