# Java | JavaScript | TypeScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/4869239/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/4869239/)

---

```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public int[] findBuildings(int[] heights) {
        int currentMaxHeight = 0;
        List<Integer> buildingsWithAnOceanView = new ArrayList<>();

        for (int i = heights.length - 1; i >= 0; --i) {
            if (heights[i] > currentMaxHeight) {
                buildingsWithAnOceanView.add(i);
                currentMaxHeight = heights[i];
            }
        }

        int[] arrayBuildingsWithAnOceanView = new int[buildingsWithAnOceanView.size()];
        for (int i = arrayBuildingsWithAnOceanView.length - 1; i >= 0; --i) {
            arrayBuildingsWithAnOceanView[buildingsWithAnOceanView.size() - i - 1] = buildingsWithAnOceanView.get(i);
        }

        return arrayBuildingsWithAnOceanView;
    }
}
```
```JavaScript []
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
    let currentMaxHeight = 0;
    const buildingsWithAnOceanView = new Array();

    for (let i = heights.length - 1; i >= 0; --i) {
        if (heights[i] > currentMaxHeight) {
            buildingsWithAnOceanView.push(i);
            currentMaxHeight = heights[i];
        }
    }

    return buildingsWithAnOceanView.reverse();
};
```
```TypeScript []
function findBuildings(heights: number[]): number[] {
    let currentMaxHeight: number = 0;
    const buildingsWithAnOceanView: number[] = new Array();

    for (let i = heights.length - 1; i >= 0; --i) {
        if (heights[i] > currentMaxHeight) {
            buildingsWithAnOceanView.push(i);
            currentMaxHeight = heights[i];
        }
    }

    return buildingsWithAnOceanView.reverse();
};
```
```C++ []
#include <vector>
#include <ranges>
#include <algorithm>
using namespace std;

class Solution {

public:
    vector<int> findBuildings(const vector<int>& heights) const {
        int currentMaxHeight = 0;
        vector<int> buildingsWithAnOceanView;

        for (int i = heights.size() - 1; i >= 0; --i) {
            if (heights[i] > currentMaxHeight) {
                buildingsWithAnOceanView.push_back(i);
                currentMaxHeight = heights[i];
            }
        }

        ranges::reverse(buildingsWithAnOceanView);
        return buildingsWithAnOceanView;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    public int[] FindBuildings(int[] heights)
    {
        int currentMaxHeight = 0;
        IList<int> buildingsWithAnOceanView = new List<int>();

        for (int i = heights.Length - 1; i >= 0; --i)
        {
            if (heights[i] > currentMaxHeight)
            {
                buildingsWithAnOceanView.Add(i);
                currentMaxHeight = heights[i];
            }
        }

        int[] arrayBuildingsWithAnOceanView = new int[buildingsWithAnOceanView.Count];
        for (int i = arrayBuildingsWithAnOceanView.Length - 1; i >= 0; --i)
        {
            arrayBuildingsWithAnOceanView[buildingsWithAnOceanView.Count - i - 1] = buildingsWithAnOceanView[i];
        }

        return arrayBuildingsWithAnOceanView;
    }
}
```