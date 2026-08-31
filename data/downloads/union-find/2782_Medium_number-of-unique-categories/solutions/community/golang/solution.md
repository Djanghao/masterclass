# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/5117798/](https://leetcode.com/problems/number-of-unique-categories/solutions/5117798/)

---

```Java []
public class Solution {

    public int numberOfCategories(int numberOfElements, CategoryHandler categoryHandler) {

        int numberOfCategories = numberOfElements;

        for (int first = 0; first < numberOfElements; ++first) {
            for (int second = first + 1; second < numberOfElements; ++second) {
                if (categoryHandler.haveSameCategory(first, second)) {
                    --numberOfCategories;
                    break;
                }
            }
        }
        return numberOfCategories;
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfElements
 * @param {CategoryHandler} categoryHandler
 * @return {number}
 */
var numberOfCategories = function (numberOfElements, categoryHandler) {

    let numberOfCategories = numberOfElements;

    for (let first = 0; first < numberOfElements; ++first) {
        for (let second = first + 1; second < numberOfElements; ++second) {
            if (categoryHandler.haveSameCategory(first, second)) {
                --numberOfCategories;
                break;
            }
        }
    }
    return numberOfCategories;
};
```
```TypeScript []
function numberOfCategories(numberOfElements: number, categoryHandler: CategoryHandler): number {

    let numberOfCategories = numberOfElements;

    for (let first = 0; first < numberOfElements; ++first) {
        for (let second = first + 1; second < numberOfElements; ++second) {
            if (categoryHandler.haveSameCategory(first, second)) {
                --numberOfCategories;
                break;
            }
        }
    }
    return numberOfCategories;
};
```
```C++ []
using namespace std;

class Solution {

public:
    int numberOfCategories(int numberOfElements, CategoryHandler* categoryHandler) {

        int numberOfCategories = numberOfElements;

        for (int first = 0; first < numberOfElements; ++first) {
            for (int second = first + 1; second < numberOfElements; ++second) {
                if (categoryHandler->haveSameCategory(first, second)) {
                    --numberOfCategories;
                    break;
                }
            }
        }
        return numberOfCategories;
    }
};
```
```C# []
using System;

public class Solution
{
    public int NumberOfCategories(int numberOfElements, CategoryHandler categoryHandler)
    {
        int numberOfCategories = numberOfElements;

        for (int first = 0; first < numberOfElements; ++first)
        {
            for (int second = first + 1; second < numberOfElements; ++second)
            {
                if (categoryHandler.HaveSameCategory(first, second))
                {
                    --numberOfCategories;
                    break;
                }
            }
        }
        return numberOfCategories;
    }
}
```
```Kotlin []
class Solution {
    fun numberOfCategories(numberOfElements: Int, categoryHandler: CategoryHandler): Int {

        var numberOfCategories = numberOfElements;

        for (first in 0..<numberOfElements) {
            for (second in first + 1..<numberOfElements) {
                if (categoryHandler.haveSameCategory(first, second)) {
                    --numberOfCategories;
                    break;
                }
            }
        }
        return numberOfCategories;
    }
}
```
```Go []
package main

func numberOfCategories(numberOfElements int, categoryHandler CategoryHandler) int {

	var numberOfCategories = numberOfElements

	for first := 0; first < numberOfElements; first++ {
		for second := first + 1; second < numberOfElements; second++ {
			if categoryHandler.HaveSameCategory(first, second) {
				numberOfCategories--
				break
			}
		}
	}
	return numberOfCategories
}
```