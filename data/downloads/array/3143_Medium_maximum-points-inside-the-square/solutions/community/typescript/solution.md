# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5147869/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5147869/)

---

```Java []
public class Solution {

    private static final int ALPHABET_SIZE = 26;
    private static final int DUPLICATE_LETTERS_FOUND = -1;
    private static final int[] CENTER_COORDINATES_ALL_SQUARES = {0, 0};
    private static final int MAX_ABSOLUTE_DISTANCE_FROM_CENTER = (int) Math.pow(10, 9);

    private final class Point {

        int minDistanceFromCenter = Integer.MAX_VALUE;
        int secondMinDistanceFromCenter = Integer.MAX_VALUE;
    }

    public int maxPointsInsideSquare(int[][] originalPoints, String letters) {
        Point[] points = createArrayPoints(originalPoints, letters);
        return findMaxPointsWithUniqueLettersInsideSquare(points);
    }

    private Point[] createArrayPoints(int[][] originalPoints, String letters) {
        Point[] points = new Point[ALPHABET_SIZE];
        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            points[i] = new Point();
        }
        for (int i = 0; i < originalPoints.length; ++i) {
            updatePoint(points, originalPoints[i], letters.charAt(i));
        }
        return points;
    }

    private void updatePoint(Point[] points, int[] singleOriginalPoint, char letter) {
        int maxDistanceFromCenter = Math.max(Math.abs(singleOriginalPoint[0]), Math.abs(singleOriginalPoint[1]));

        if (points[letter - 'a'].minDistanceFromCenter > maxDistanceFromCenter) {
            points[letter - 'a'].secondMinDistanceFromCenter = points[letter - 'a'].minDistanceFromCenter;
            points[letter - 'a'].minDistanceFromCenter = maxDistanceFromCenter;
            return;
        }

        if (points[letter - 'a'].secondMinDistanceFromCenter > maxDistanceFromCenter) {
            points[letter - 'a'].secondMinDistanceFromCenter = maxDistanceFromCenter;
        }
    }

    private int findMaxPointsWithUniqueLettersInsideSquare(Point[] points) {
        int left = 0;
        int right = MAX_ABSOLUTE_DISTANCE_FROM_CENTER;
        int maxPointsInsideSquare = 0;

        while (left <= right) {
            int distanceFromCenter = left + (right - left) / 2;
            int countPoints = countPointsWithUniqueLetters(points, distanceFromCenter);

            if (countPoints == DUPLICATE_LETTERS_FOUND) {
                right = distanceFromCenter - 1;
            } else {
                left = distanceFromCenter + 1;
                maxPointsInsideSquare = Math.max(maxPointsInsideSquare, countPoints);
            }
        }

        return maxPointsInsideSquare;
    }

    private int countPointsWithUniqueLetters(Point[] points, int distanceFromCenter) {
        int countPointsWithUniqueLetters = 0;
        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            if (points[i].secondMinDistanceFromCenter <= distanceFromCenter) {
                return DUPLICATE_LETTERS_FOUND;
            }
            if (points[i].minDistanceFromCenter <= distanceFromCenter) {
                ++countPointsWithUniqueLetters;
            }
        }
        return countPointsWithUniqueLetters;
    }
}
```
```JavaScript []
/**
 * @param {number[][]} originalPoints
 * @param {string} letters
 * @return {number}
 */
var maxPointsInsideSquare = function (originalPoints, letters) {
    this.ALPHABET_SIZE = 26;
    this.DUPLICATE_LETTERS_FOUND = -1;
    this.CENTER_COORDINATES_ALL_SQUARES = [0, 0];
    this.MAX_ABSOLUTE_DISTANCE_FROM_CENTER = Math.pow(10, 9);

    const points = createArrayPoints(originalPoints, letters);
    return findMaxPointsWithUniqueLettersInsideSquare(points);

};

class Point {

    minDistanceFromCenter = Number.MAX_SAFE_INTEGER;
    secondMinDistanceFromCenter = Number.MAX_SAFE_INTEGER;
}

/**
 * @param {number[][]} originalPoints
 * @param {string} letters
 * @return {Point[]}
 */
function createArrayPoints(originalPoints, letters) {
    const points = new Array(this.ALPHABET_SIZE);
    for (let i = 0; i < this.ALPHABET_SIZE; ++i) {
        points[i] = new Point();
    }
    for (let i = 0; i < originalPoints.length; ++i) {
        updatePoint(points, originalPoints[i], letters.charAt(i));
    }
    return points;
}

/**
 * @param {Point[]} points
 * @param {number[]} singleOriginalPoint
 * @param {string} letter
 * @return {void}
 */
function updatePoint(points, singleOriginalPoint, letter) {
    let maxDistanceFromCenter = Math.max(Math.abs(singleOriginalPoint[0]), Math.abs(singleOriginalPoint[1]));

    if (points[getIndex(letter)].minDistanceFromCenter > maxDistanceFromCenter) {
        points[getIndex(letter)].secondMinDistanceFromCenter = points[getIndex(letter)].minDistanceFromCenter;
        points[getIndex(letter)].minDistanceFromCenter = maxDistanceFromCenter;
        return;
    }

    if (points[getIndex(letter)].secondMinDistanceFromCenter > maxDistanceFromCenter) {
        points[getIndex(letter)].secondMinDistanceFromCenter = maxDistanceFromCenter;
    }
}

/**
 * @param {Point[]} points
 * @return {number}
 */
function findMaxPointsWithUniqueLettersInsideSquare(points) {
    let left = 0;
    let right = this.MAX_ABSOLUTE_DISTANCE_FROM_CENTER;
    let maxPointsInsideSquare = 0;

    while (left <= right) {
        let distanceFromCenter = left + Math.floor((right - left) / 2);
        let countPoints = countPointsWithUniqueLetters(points, distanceFromCenter);

        if (countPoints === this.DUPLICATE_LETTERS_FOUND) {
            right = distanceFromCenter - 1;
        } else {
            left = distanceFromCenter + 1;
            maxPointsInsideSquare = Math.max(maxPointsInsideSquare, countPoints);
        }
    }

    return maxPointsInsideSquare;
}

/**
 * @param {Point[]} points
 * @param {number} distanceFromCenter
 * @return {number}
 */
function countPointsWithUniqueLetters(points, distanceFromCenter) {
    let countPointsWithUniqueLetters = 0;
    for (let i = 0; i < this.ALPHABET_SIZE; ++i) {
        if (points[i].secondMinDistanceFromCenter <= distanceFromCenter) {
            return this.DUPLICATE_LETTERS_FOUND;
        }
        if (points[i].minDistanceFromCenter <= distanceFromCenter) {
            ++countPointsWithUniqueLetters;
        }
    }
    return countPointsWithUniqueLetters;
}

/**
 * @param {string} letter
 * @return {number}
 */
function getIndex(letter) {
    return letter.codePointAt(0) - 'a'.codePointAt(0);
}
```
```TypeScript []
function maxPointsInsideSquare(originalPoints: number[][], letters: string): number {
    this.ALPHABET_SIZE = 26;
    this.DUPLICATE_LETTERS_FOUND = -1;
    this.CENTER_COORDINATES_ALL_SQUARES = [0, 0];
    this.MAX_ABSOLUTE_DISTANCE_FROM_CENTER = Math.pow(10, 9);

    const points = createArrayPoints(originalPoints, letters);
    return findMaxPointsWithUniqueLettersInsideSquare(points);

};

class Point {

    minDistanceFromCenter = Number.MAX_SAFE_INTEGER;
    secondMinDistanceFromCenter = Number.MAX_SAFE_INTEGER;
}


function createArrayPoints(originalPoints: number[][], letters: string): Point[] {
    const points: Point[] = new Array(this.ALPHABET_SIZE);
    for (let i = 0; i < this.ALPHABET_SIZE; ++i) {
        points[i] = new Point();
    }
    for (let i = 0; i < originalPoints.length; ++i) {
        updatePoint(points, originalPoints[i], letters.charAt(i));
    }
    return points;
}


function updatePoint(points: Point[], singleOriginalPoint: number[], letter: string): void {
    let maxDistanceFromCenter = Math.max(Math.abs(singleOriginalPoint[0]), Math.abs(singleOriginalPoint[1]));

    if (points[getIndex(letter)].minDistanceFromCenter > maxDistanceFromCenter) {
        points[getIndex(letter)].secondMinDistanceFromCenter = points[getIndex(letter)].minDistanceFromCenter;
        points[getIndex(letter)].minDistanceFromCenter = maxDistanceFromCenter;
        return;
    }

    if (points[getIndex(letter)].secondMinDistanceFromCenter > maxDistanceFromCenter) {
        points[getIndex(letter)].secondMinDistanceFromCenter = maxDistanceFromCenter;
    }
}


function findMaxPointsWithUniqueLettersInsideSquare(points: Point[]): number {
    let left = 0;
    let right = this.MAX_ABSOLUTE_DISTANCE_FROM_CENTER;
    let maxPointsInsideSquare = 0;

    while (left <= right) {
        let distanceFromCenter = left + Math.floor((right - left) / 2);
        let countPoints = countPointsWithUniqueLetters(points, distanceFromCenter);

        if (countPoints === this.DUPLICATE_LETTERS_FOUND) {
            right = distanceFromCenter - 1;
        } else {
            left = distanceFromCenter + 1;
            maxPointsInsideSquare = Math.max(maxPointsInsideSquare, countPoints);
        }
    }

    return maxPointsInsideSquare;
}


function countPointsWithUniqueLetters(points: Point[], distanceFromCenter: number): number {
    let countPointsWithUniqueLetters = 0;
    for (let i = 0; i < this.ALPHABET_SIZE; ++i) {
        if (points[i].secondMinDistanceFromCenter <= distanceFromCenter) {
            return this.DUPLICATE_LETTERS_FOUND;
        }
        if (points[i].minDistanceFromCenter <= distanceFromCenter) {
            ++countPointsWithUniqueLetters;
        }
    }
    return countPointsWithUniqueLetters;
}


function getIndex(letter: string): number {
    return letter.codePointAt(0) - 'a'.codePointAt(0);
}
```
```C++ []
#include <span>
#include <cmath>
#include <array>
#include <vector>
#include <limits>
#include <string>
#include <algorithm>
using namespace std;

class Solution {

    struct Point {
        // alternatively: INT_MAX
        int minDistanceFromCenter = numeric_limits<int>::max();
        int secondMinDistanceFromCenter = numeric_limits<int>::max();
    };

    static const int ALPHABET_SIZE = 26;
    static const int DUPLICATE_LETTERS_FOUND = -1;
    static constexpr array<int, 2> CENTER_COORDINATES_ALL_SQUARES = { 0, 0 };
    static constexpr int MAX_ABSOLUTE_DISTANCE_FROM_CENTER = 1000 * 1000 * 1000;

public:
    int maxPointsInsideSquare(const vector<vector<int>>& originalPoints, const string& letters)const {
        array<Point, ALPHABET_SIZE>  points = createArrayPoints(originalPoints, letters);
        return findMaxPointsWithUniqueLettersInsideSquare(points);
    }

private:
    array<Point, ALPHABET_SIZE>  createArrayPoints(span<const vector<int>> originalPoints, string_view letters) const {
        array<Point, ALPHABET_SIZE> points{};
        for (size_t i = 0; i < originalPoints.size(); ++i) {
            updatePoint(points, originalPoints[i], letters[i]);
        }
        return points;
    }

    void updatePoint(span<Point> points, span<const int> singleOriginalPoint, char letter) const {
        int maxDistanceFromCenter = max(abs(singleOriginalPoint[0]), abs(singleOriginalPoint[1]));

        if (points[letter - 'a'].minDistanceFromCenter > maxDistanceFromCenter) {
            points[letter - 'a'].secondMinDistanceFromCenter = points[letter - 'a'].minDistanceFromCenter;
            points[letter - 'a'].minDistanceFromCenter = maxDistanceFromCenter;
            return;
        }

        if (points[letter - 'a'].secondMinDistanceFromCenter > maxDistanceFromCenter) {
            points[letter - 'a'].secondMinDistanceFromCenter = maxDistanceFromCenter;
        }
    }

    int findMaxPointsWithUniqueLettersInsideSquare(span<const Point> points) const {
        int left = 0;
        int right = MAX_ABSOLUTE_DISTANCE_FROM_CENTER;
        int maxPointsInsideSquare = 0;

        while (left <= right) {
            int distanceFromCenter = left + (right - left) / 2;
            int countPoints = countPointsWithUniqueLetters(points, distanceFromCenter);

            if (countPoints == DUPLICATE_LETTERS_FOUND) {
                right = distanceFromCenter - 1;
            }
            else {
                left = distanceFromCenter + 1;
                maxPointsInsideSquare = max(maxPointsInsideSquare, countPoints);
            }
        }

        return maxPointsInsideSquare;
    }

    int countPointsWithUniqueLetters(span<const Point> points, int distanceFromCenter) const {
        int countPointsWithUniqueLetters = 0;
        for (size_t i = 0; i < ALPHABET_SIZE; ++i) {
            if (points[i].secondMinDistanceFromCenter <= distanceFromCenter) {
                return DUPLICATE_LETTERS_FOUND;
            }
            if (points[i].minDistanceFromCenter <= distanceFromCenter) {
                ++countPointsWithUniqueLetters;
            }
        }
        return countPointsWithUniqueLetters;
    }
};
```
```C# []
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;
    private static readonly int DUPLICATE_LETTERS_FOUND = -1;
    private static readonly int[] CENTER_COORDINATES_ALL_SQUARES = { 0, 0 };
    private static readonly int MAX_ABSOLUTE_DISTANCE_FROM_CENTER = (int)Math.Pow(10, 9);

    private sealed class Point
    {
        public int minDistanceFromCenter = int.MaxValue;
        public int secondMinDistanceFromCenter = int.MaxValue;
    }
    public int MaxPointsInsideSquare(int[][] originalPoints, string letters)
    {
        Point[] points = CreateArrayPoints(originalPoints, letters);
        return FindMaxPointsWithUniqueLettersInsideSquare(points);
    }

    private Point[] CreateArrayPoints(int[][] originalPoints, String letters)
    {
        Point[] points = new Point[ALPHABET_SIZE];
        for (int i = 0; i < ALPHABET_SIZE; ++i)
        {
            points[i] = new Point();
        }
        for (int i = 0; i < originalPoints.Length; ++i)
        {
            UpdatePoint(points, originalPoints[i], letters[i]);
        }
        return points;
    }

    private void UpdatePoint(Point[] points, int[] singleOriginalPoint, char letter)
    {
        int maxDistanceFromCenter = Math.Max(Math.Abs(singleOriginalPoint[0]), Math.Abs(singleOriginalPoint[1]));

        if (points[letter - 'a'].minDistanceFromCenter > maxDistanceFromCenter)
        {
            points[letter - 'a'].secondMinDistanceFromCenter = points[letter - 'a'].minDistanceFromCenter;
            points[letter - 'a'].minDistanceFromCenter = maxDistanceFromCenter;
            return;
        }

        if (points[letter - 'a'].secondMinDistanceFromCenter > maxDistanceFromCenter)
        {
            points[letter - 'a'].secondMinDistanceFromCenter = maxDistanceFromCenter;
        }
    }

    private int FindMaxPointsWithUniqueLettersInsideSquare(Point[] points)
    {
        int left = 0;
        int right = MAX_ABSOLUTE_DISTANCE_FROM_CENTER;
        int maxPointsInsideSquare = 0;

        while (left <= right)
        {
            int distanceFromCenter = left + (right - left) / 2;
            int countPoints = CountPointsWithUniqueLetters(points, distanceFromCenter);

            if (countPoints == DUPLICATE_LETTERS_FOUND)
            {
                right = distanceFromCenter - 1;
            }
            else
            {
                left = distanceFromCenter + 1;
                maxPointsInsideSquare = Math.Max(maxPointsInsideSquare, countPoints);
            }
        }

        return maxPointsInsideSquare;
    }

    private int CountPointsWithUniqueLetters(Point[] points, int distanceFromCenter)
    {
        int countPointsWithUniqueLetters = 0;
        for (int i = 0; i < ALPHABET_SIZE; ++i)
        {
            if (points[i].secondMinDistanceFromCenter <= distanceFromCenter)
            {
                return DUPLICATE_LETTERS_FOUND;
            }
            if (points[i].minDistanceFromCenter <= distanceFromCenter)
            {
                ++countPointsWithUniqueLetters;
            }
        }
        return countPointsWithUniqueLetters;
    }
}
```
```Kotlin []
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.pow

class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
        const val DUPLICATE_LETTERS_FOUND = -1
        val CENTER_COORDINATES_ALL_SQUARES = intArrayOf(0, 0)
        val MAX_ABSOLUTE_DISTANCE_FROM_CENTER = 10.0.pow(9).toInt()
    }

    private class Point {
        var minDistanceFromCenter = Int.MAX_VALUE
        var secondMinDistanceFromCenter = Int.MAX_VALUE
    }

    fun maxPointsInsideSquare(originalPoints: Array<IntArray>, letters: String): Int {
        val points = createArrayPoints(originalPoints, letters)
        return findMaxPointsWithUniqueLettersInsideSquare(points)
    }

    private fun createArrayPoints(originalPoints: Array<IntArray>, letters: String): ArrayList<Point> {
        val points = ArrayList<Point>(ALPHABET_SIZE)
        for (i in 0..<ALPHABET_SIZE) {
            points.add(Point())
        }
        for (i in originalPoints.indices) {
            updatePoint(points, originalPoints[i], letters[i])
        }
        return points
    }

    private fun updatePoint(points: ArrayList<Point>, singleOriginalPoint: IntArray, letter: Char) {
        val maxDistanceFromCenter = max(abs(singleOriginalPoint[0]), abs(singleOriginalPoint[1]))

        if (points[letter - 'a'].minDistanceFromCenter > maxDistanceFromCenter) {
            points[letter - 'a'].secondMinDistanceFromCenter = points[letter - 'a'].minDistanceFromCenter
            points[letter - 'a'].minDistanceFromCenter = maxDistanceFromCenter
            return
        }

        if (points[letter - 'a'].secondMinDistanceFromCenter > maxDistanceFromCenter) {
            points[letter - 'a'].secondMinDistanceFromCenter = maxDistanceFromCenter
        }
    }

    private fun findMaxPointsWithUniqueLettersInsideSquare(points: ArrayList<Point>): Int {
        var left = 0
        var right = MAX_ABSOLUTE_DISTANCE_FROM_CENTER
        var maxPointsInsideSquare = 0

        while (left <= right) {
            val distanceFromCenter = left + (right - left) / 2
            val countPoints = countPointsWithUniqueLetters(points, distanceFromCenter)

            if (countPoints == DUPLICATE_LETTERS_FOUND) {
                right = distanceFromCenter - 1
            } else {
                left = distanceFromCenter + 1
                maxPointsInsideSquare = max(maxPointsInsideSquare, countPoints)
            }
        }

        return maxPointsInsideSquare
    }

    private fun countPointsWithUniqueLetters(points: ArrayList<Point>, distanceFromCenter: Int): Int {
        var countPointsWithUniqueLetters = 0
        for (i in 0..<ALPHABET_SIZE) {
            if (points[i].secondMinDistanceFromCenter <= distanceFromCenter) {
                return DUPLICATE_LETTERS_FOUND
            }
            if (points[i].minDistanceFromCenter <= distanceFromCenter) {
                ++countPointsWithUniqueLetters
            }
        }
        return countPointsWithUniqueLetters
    }
}
```
```Go []
package main

import (
	"fmt"
	"math"
)

const ALPHABET_SIZE = 26
const DUPLICATE_LETTERS_FOUND = -1

var CENTER_COORDINATES_ALL_SQUARES = [2]int{0, 0}
var MAX_ABSOLUTE_DISTANCE_FROM_CENTER = int(math.Pow(10.0, 9.0))

type Point struct {
	MinDistanceFromCenter       int
	SecondMinDistanceFromCenter int
}

func NewPoint() *Point {
	point := Point{}
	point.MinDistanceFromCenter = math.MaxInt
	point.SecondMinDistanceFromCenter = math.MaxInt
	return &point
}

func maxPointsInsideSquare(originalPoints [][]int, letters string) int {
	var points = createArrayPoints(originalPoints, letters)
	return findMaxPointsWithUniqueLettersInsideSquare(&points)
}

func createArrayPoints(originalPoints [][]int, letters string) [ALPHABET_SIZE]Point {
	points := [ALPHABET_SIZE]Point{}

	for i := 0; i < ALPHABET_SIZE; i++ {
		points[i] = *(NewPoint())
	}
	for i := 0; i < len(originalPoints); i++ {
		updatePoint(&points, originalPoints[i], letters[i])
	}
	return points
}

func updatePoint(points *[ALPHABET_SIZE]Point, singleOriginalPoint []int, letter byte) {
	var maxDistanceFromCenter = int(math.Max(math.Abs(float64(singleOriginalPoint[0])), math.Abs(float64(singleOriginalPoint[1]))))

	if points[letter-'a'].MinDistanceFromCenter > maxDistanceFromCenter {
		points[letter-'a'].SecondMinDistanceFromCenter = points[letter-'a'].MinDistanceFromCenter
		points[letter-'a'].MinDistanceFromCenter = maxDistanceFromCenter
		return
	}

	if points[letter-'a'].SecondMinDistanceFromCenter > maxDistanceFromCenter {
		points[letter-'a'].SecondMinDistanceFromCenter = maxDistanceFromCenter
	}
}

func findMaxPointsWithUniqueLettersInsideSquare(points *[ALPHABET_SIZE]Point) int {
	var left = 0
	var right = MAX_ABSOLUTE_DISTANCE_FROM_CENTER
	var maxPointsInsideSquare = 0

	for left <= right {
		var distanceFromCenter = left + (right-left)/2
		var countPoints = countPointsWithUniqueLetters(points, distanceFromCenter)

		if countPoints == DUPLICATE_LETTERS_FOUND {
			right = distanceFromCenter - 1
		} else {
			left = distanceFromCenter + 1
			maxPointsInsideSquare = int(math.Max(float64(maxPointsInsideSquare), float64(countPoints)))
		}
	}

	return maxPointsInsideSquare
}

func countPointsWithUniqueLetters(points *[ALPHABET_SIZE]Point, distanceFromCenter int) int {
	var countPointsWithUniqueLetters = 0
	for i := 0; i < ALPHABET_SIZE; i++ {
		if points[i].SecondMinDistanceFromCenter <= distanceFromCenter {
			return DUPLICATE_LETTERS_FOUND
		}
		if points[i].MinDistanceFromCenter <= distanceFromCenter {
			countPointsWithUniqueLetters++
		}
	}
	return countPointsWithUniqueLetters
}
```