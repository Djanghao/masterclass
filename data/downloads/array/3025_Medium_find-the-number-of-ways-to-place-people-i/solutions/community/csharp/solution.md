# Java | JavaScript | C++ | C# Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4672695/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4672695/)

---

```Java []
import java.util.Arrays;

public class Solution {

    int[][] points;

    public int numberOfPairs(int[][] points) {

        Arrays.sort(points, (first, second) -> comparator_decreasingOrder_yCoordinates(first, second));

        this.points = points;
        int countNumberOfPairs = 0;

        for (int first = 0; first < points.length; ++first) {
            for (int second = first + 1; second < points.length; ++second) {

                if (points[first][0] > points[second][0]) {
                    continue;
                }

                boolean firstAndSecondMakePair = true;

                for (int middle = first + 1; middle < second; ++middle) {
                    if (middlePoint_isOnTheFence_or_withinTheFencedArea(first, second, middle)) {
                        firstAndSecondMakePair = false;
                        break;
                    }
                }
                countNumberOfPairs += firstAndSecondMakePair ? 1 : 0;
            }
        }
        return countNumberOfPairs;
    }

    private boolean middlePoint_isOnTheFence_or_withinTheFencedArea(int firstIndex, int secondIndex, int middleIndex) {
        return points[middleIndex][0] >= points[firstIndex][0]
                && points[middleIndex][0] <= points[secondIndex][0]
                && points[middleIndex][1] >= points[secondIndex][1]
                && points[middleIndex][1] <= points[firstIndex][1];
    }

    private int comparator_decreasingOrder_yCoordinates(int[] firstPoint, int[] secondPoint) {
        return (secondPoint[1] == firstPoint[1])
                ? (firstPoint[0] - secondPoint[0])
                : (secondPoint[1] - firstPoint[1]);
    }
}
```
```JavaScript []
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {

    points.sort((first, second) => comparator_decreasingOrder_yCoordinates(first, second));

    this.points = points;
    let countNumberOfPairs = 0;

    for (let first = 0; first < points.length; ++first) {
        for (let second = first + 1; second < points.length; ++second) {

            if (points[first][0] > points[second][0]) {
                continue;
            }

            let firstAndSecondMakePair = true;

            for (let middle = first + 1; middle < second; ++middle) {
                if (middlePoint_isOnTheFence_or_withinTheFencedArea(first, second, middle)) {
                    firstAndSecondMakePair = false;
                    break;
                }
            }
            countNumberOfPairs += firstAndSecondMakePair ? 1 : 0;
        }
    }
    return countNumberOfPairs;
};

/**
 * @param {number} firstIndex
 * @param {number} secondIndex
 * @param {number} middleIndex
 * @return {boolean}
 */
function middlePoint_isOnTheFence_or_withinTheFencedArea(firstIndex, secondIndex, middleIndex) {
    return this.points[middleIndex][0] >= this.points[firstIndex][0]
            && this.points[middleIndex][0] <= this.points[secondIndex][0]
            && this.points[middleIndex][1] >= this.points[secondIndex][1]
            && this.points[middleIndex][1] <= this.points[firstIndex][1];
}

/**
 * @param {number[]} firstPoint
 * @param {number[]} secondPoint
 * @return {number}
 */
function comparator_decreasingOrder_yCoordinates(firstPoint, secondPoint) {
    return (secondPoint[1] === firstPoint[1])
            ? (firstPoint[0] - secondPoint[0])
            : (secondPoint[1] - firstPoint[1]);
}
```
```C++ []
#include <ranges>
#include <memory>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
    
    unique_ptr<vector<vector<int>>> points;

public:
    int numberOfPairs(vector<vector<int>>& points) {

        auto comparator_decreasingOrder_yCoordinates =
                [](const vector<int>& firstPoint, const vector<int>& secondPoint) {
                    return (secondPoint[1] == firstPoint[1])
                            ? (firstPoint[0] < secondPoint[0])
                            : (secondPoint[1] < firstPoint[1]);
                };

        // Prior to C++20: 
        // sort(points.begin(), points.end(), comparator_decreasingOrder_yCoordinates)
        ranges::sort(points, comparator_decreasingOrder_yCoordinates);

        this->points = make_unique<vector<vector<int>>>(points);
        int countNumberOfPairs = 0;

        for (int first = 0; first < points.size(); ++first) {
            for (int second = first + 1; second < points.size(); ++second) {

                if (points[first][0] > points[second][0]) {
                    continue;
                }

                bool firstAndSecondMakePair = true;

                for (int middle = first + 1; middle < second; ++middle) {
                    if (middlePoint_isOnTheFence_or_withinTheFencedArea(first, second, middle)) {
                        firstAndSecondMakePair = false;
                        break;
                    }
                }
                countNumberOfPairs += firstAndSecondMakePair ? 1 : 0;
            }
        }
        return countNumberOfPairs;
    }

private:
    bool middlePoint_isOnTheFence_or_withinTheFencedArea(int firstIndex, int secondIndex, int middleIndex) const {
        return (*points)[middleIndex][0] >= (*points)[firstIndex][0]
                && (*points)[middleIndex][0] <= (*points)[secondIndex][0]
                && (*points)[middleIndex][1] >= (*points)[secondIndex][1]
                && (*points)[middleIndex][1] <= (*points)[firstIndex][1];
    }
};
```
```C# []
using System;

public class Solution
{
    private int[][] points;
    public int NumberOfPairs(int[][] points)
    {
        Array.Sort(points, (first, second) => Comparator_decreasingOrder_yCoordinates(first, second));

        this.points = points;
        int countNumberOfPairs = 0;

        for (int first = 0; first < points.Length; ++first)
        {
            for (int second = first + 1; second < points.Length; ++second)
            {

                if (points[first][0] > points[second][0])
                {
                    continue;
                }

                bool firstAndSecondMakePair = true;

                for (int middle = first + 1; middle < second; ++middle)
                {
                    if (MiddlePoint_isOnTheFence_or_withinTheFencedArea(first, second, middle))
                    {
                        firstAndSecondMakePair = false;
                        break;
                    }
                }
                countNumberOfPairs += firstAndSecondMakePair ? 1 : 0;
            }
        }
        return countNumberOfPairs;
    }

    private bool MiddlePoint_isOnTheFence_or_withinTheFencedArea(int firstIndex, int secondIndex, int middleIndex)
    {
        return points[middleIndex][0] >= points[firstIndex][0]
                && points[middleIndex][0] <= points[secondIndex][0]
                && points[middleIndex][1] >= points[secondIndex][1]
                && points[middleIndex][1] <= points[firstIndex][1];
    }

    private int Comparator_decreasingOrder_yCoordinates(int[] firstPoint, int[] secondPoint)
    {
        return (secondPoint[1] == firstPoint[1])
                ? (firstPoint[0] - secondPoint[0])
                : (secondPoint[1] - firstPoint[1]);
    }
}
```
