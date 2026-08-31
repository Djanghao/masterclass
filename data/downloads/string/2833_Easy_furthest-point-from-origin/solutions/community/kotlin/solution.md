# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/5137013/](https://leetcode.com/problems/furthest-point-from-origin/solutions/5137013/)

---

```Java []
public class Solution {

    private static final char LEFT_MOVE = 'L';
    private static final char RIGHT_MOVE = 'R';
    private static final char OPTIONAL_LEFT_OR_RIGHT_MOVE = '_';

    public int furthestDistanceFromOrigin(String moves) {
        int leftMoves = 0;
        int rightMoves = 0;

        for (char move : moves.toCharArray()) {
            if (move == LEFT_MOVE) {
                ++leftMoves;
            }
            if (move == RIGHT_MOVE) {
                ++rightMoves;
            }
        }

        int optionalMoves = moves.length() - leftMoves - rightMoves;
        int directionOptionalMoves = (leftMoves > rightMoves) ? -1 : 1;
        int furthestPointFromOrigin = Math.abs(rightMoves - leftMoves + (directionOptionalMoves * optionalMoves));

        return furthestPointFromOrigin;
    }
}
```
```JavaScript []
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
    const LEFT_MOVE = 'L';
    const RIGHT_MOVE = 'R';
    const OPTIONAL_LEFT_OR_RIGHT_MOVE = '_';

    let leftMoves = 0;
    let rightMoves = 0;

    for (let move of moves) {
        if (move === LEFT_MOVE) {
            ++leftMoves;
        }
        if (move === RIGHT_MOVE) {
            ++rightMoves;
        }
    }

    let optionalMoves = moves.length - leftMoves - rightMoves;
    let directionOptionalMoves = (leftMoves > rightMoves) ? -1 : 1;
    let furthestPointFromOrigin = Math.abs(rightMoves - leftMoves + (directionOptionalMoves * optionalMoves));

    return furthestPointFromOrigin;
};
```
```TypeScript []
function furthestDistanceFromOrigin(moves: string): number {
    const LEFT_MOVE = 'L';
    const RIGHT_MOVE = 'R';
    const OPTIONAL_LEFT_OR_RIGHT_MOVE = '_';

    let leftMoves = 0;
    let rightMoves = 0;

    for (let move of moves) {
        if (move === LEFT_MOVE) {
            ++leftMoves;
        }
        if (move === RIGHT_MOVE) {
            ++rightMoves;
        }
    }

    let optionalMoves = moves.length - leftMoves - rightMoves;
    let directionOptionalMoves = (leftMoves > rightMoves) ? -1 : 1;
    let furthestPointFromOrigin = Math.abs(rightMoves - leftMoves + (directionOptionalMoves * optionalMoves));

    return furthestPointFromOrigin;
};
```
```C++ []
#include <cmath>
#include <string>
using namespace std;

class Solution {

    static const char LEFT_MOVE = 'L';
    static const char RIGHT_MOVE = 'R';
    static const char OPTIONAL_LEFT_OR_RIGHT_MOVE = '_';

public:
    int furthestDistanceFromOrigin(const string& moves) const {
        int leftMoves = 0;
        int rightMoves = 0;

        for (const auto& move : moves) {
            if (move == LEFT_MOVE) {
                ++leftMoves;
            }
            if (move == RIGHT_MOVE) {
                ++rightMoves;
            }
        }

        int optionalMoves = moves.length() - leftMoves - rightMoves;
        int directionOptionalMoves = (leftMoves > rightMoves) ? -1 : 1;
        int furthestPointFromOrigin = abs(rightMoves - leftMoves + (directionOptionalMoves * optionalMoves));

        return furthestPointFromOrigin;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly char LEFT_MOVE = 'L';
    private static readonly char RIGHT_MOVE = 'R';
    private static readonly char OPTIONAL_LEFT_OR_RIGHT_MOVE = '_';
    public int FurthestDistanceFromOrigin(string moves)
    {
        int leftMoves = 0;
        int rightMoves = 0;

        foreach (char move in moves)
        {
            if (move == LEFT_MOVE)
            {
                ++leftMoves;
            }
            if (move == RIGHT_MOVE)
            {
                ++rightMoves;
            }
        }

        int optionalMoves = moves.Length - leftMoves - rightMoves;
        int directionOptionalMoves = (leftMoves > rightMoves) ? -1 : 1;
        int furthestPointFromOrigin = Math.Abs(rightMoves - leftMoves + (directionOptionalMoves * optionalMoves));

        return furthestPointFromOrigin;
    }
}
```
```Kotlin []
import kotlin.math.abs

class Solution {

    private companion object {
        const val LEFT_MOVE = 'L'
        const val RIGHT_MOVE = 'R'
        const val OPTIONAL_LEFT_OR_RIGHT_MOVE = '_'
    }

    fun furthestDistanceFromOrigin(moves: String): Int {
        var leftMoves = 0
        var rightMoves = 0

        for (move in moves) {
            if (move == LEFT_MOVE) {
                ++leftMoves
            }
            if (move == RIGHT_MOVE) {
                ++rightMoves
            }
        }

        val optionalMoves = moves.length - leftMoves - rightMoves
        val directionOptionalMoves = if (leftMoves > rightMoves) -1 else 1
        val furthestPointFromOrigin = abs(rightMoves - leftMoves + (directionOptionalMoves * optionalMoves))

        return furthestPointFromOrigin
    }
}
```
```Go []
package main

import (
	"math"
)

const LEFT_MOVE = 'L'
const RIGHT_MOVE = 'R'
const OPTIONAL_LEFT_OR_RIGHT_MOVE = '_'

func furthestDistanceFromOrigin(moves string) int {
	var leftMoves = 0
	var rightMoves = 0

	for _, move := range moves {
		if move == LEFT_MOVE {
			leftMoves++
		}
		if move == RIGHT_MOVE {
			rightMoves++
		}
	}

	optionalMoves := len(moves) - leftMoves - rightMoves
	var directionOptionalMoves int
	if leftMoves > rightMoves {
		directionOptionalMoves = -1
	} else {
		directionOptionalMoves = 1
	}
	furthestPointFromOrigin := int(math.Abs(float64(rightMoves - leftMoves + (directionOptionalMoves * optionalMoves))))

	return furthestPointFromOrigin
}
```