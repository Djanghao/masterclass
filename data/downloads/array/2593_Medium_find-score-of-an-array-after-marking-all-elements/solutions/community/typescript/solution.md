# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/5581888/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/5581888/)

---

```Java []
import java.util.Arrays;

public class Solution {

    private record Element(int value, int index){}

    private int numberOfElements;

    public long findScore(int[] input) {
        numberOfElements = input.length;
        Element[] elementsSortedByAscendingValue = createElementsSortedByAscendingValue(input);
        return calculateTotalScore(elementsSortedByAscendingValue);
    }

    private Element[] createElementsSortedByAscendingValue(int[] input) {
        Element[] elements = new Element[numberOfElements];
        for (int i = 0; i < numberOfElements; ++i) {
            elements[i] = new Element(input[i], i);
        }
        Arrays.sort(elements, (x, y) -> compare_minValue_bySameValue_minIndex(x, y));
        return elements;
    }

    private int compare_minValue_bySameValue_minIndex(Element x, Element y) {
        return (x.value == y.value) ? (x.index - y.index) : (x.value - y.value);
    }

    private long calculateTotalScore(Element[] elementsSortedByAscendingValue) {
        boolean[] marked = new boolean[numberOfElements];
        long totalScore = 0;

        for (int i = 0; i < numberOfElements; ++i) {
            Element element = elementsSortedByAscendingValue[i];

            if (marked[element.index]) {
                continue;
            }

            totalScore += element.value;
            marked[element.index] = true;

            if (element.index - 1 >= 0) {
                marked[element.index - 1] = true;
            }
            if (element.index + 1 < numberOfElements) {
                marked[element.index + 1] = true;
            }
        }

        return totalScore;
    }
}
```
```JavaScript []
/**
 * @param {number[]} input
 * @return {number}
 */
var findScore = function (input) {
    this.numberOfElements = input.length;
    const elementsSortedByAscendingValue = createElementsSortedByAscendingValue(input);
    return calculateTotalScore(elementsSortedByAscendingValue);
};

/**
 * @param {number} value
 * @param {number} index
 */
function  Element(value, index) {
    this.value = value;
    this.index = index;
}

/**
 * @param {number[]} input
 * @return {Element[]}
 */
function  createElementsSortedByAscendingValue(input) {
    const elements = new Array(this.numberOfElements);
    for (let i = 0; i < this.numberOfElements; ++i) {
        elements[i] = new Element(input[i], i);
    }
    elements.sort((x, y) => compare_minValue_bySameValue_minIndex(x, y));
    return elements;
}

/**
 * @param {Element} x
 * @param {Element} y 
 * @return {number}
 */
function compare_minValue_bySameValue_minIndex(x, y) {
    return (x.value === y.value) ? (x.index - y.index) : (x.value - y.value);
}

/**
 * @param {Element[]} elementsSortedByAscendingValue
 * @return {number}
 */
function calculateTotalScore(elementsSortedByAscendingValue) {
    const marked = new Array(this.numberOfElements).fill(false);
    let totalScore = 0;

    for (let i = 0; i < this.numberOfElements; ++i) {
        const element = elementsSortedByAscendingValue[i];

        if (marked[element.index]) {
            continue;
        }

        totalScore += element.value;
        marked[element.index] = true;

        if (element.index - 1 >= 0) {
            marked[element.index - 1] = true;
        }
        if (element.index + 1 < this.numberOfElements) {
            marked[element.index + 1] = true;
        }
    }

    return totalScore;
}
```
```TypeScript []
function findScore(input: number[]): number {
    this.numberOfElements = input.length;
    const pointsSortedByAscendingValue = createPointsSortedByAscendingValue(input);
    return calculateTotalScore(pointsSortedByAscendingValue);
};

class Point {

    value: number;
    index: number;

    constructor(value: number, index: number) {
        this.value = value;
        this.index = index;
    }
}

function createPointsSortedByAscendingValue(input: number[]): Point[] {
    const points = new Array(this.numberOfElements);
    for (let i = 0; i < this.numberOfElements; ++i) {
        points[i] = new Point(input[i], i);
    }
    points.sort((x, y) => compare_minValue_bySameValue_minIndex(x, y));
    return points;
}

function compare_minValue_bySameValue_minIndex(x: Point, y: Point): number {
    return (x.value === y.value) ? (x.index - y.index) : (x.value - y.value);
}

function calculateTotalScore(pointsSortedByAscendingValue: Point[]): number {
    const marked: boolean[] = new Array(this.numberOfElements).fill(false);
    let totalScore = 0;

    for (let i = 0; i < this.numberOfElements; ++i) {
        const point = pointsSortedByAscendingValue[i];

        if (marked[point.index]) {
            continue;
        }

        totalScore += point.value;
        marked[point.index] = true;

        if (point.index - 1 >= 0) {
            marked[point.index - 1] = true;
        }
        if (point.index + 1 < this.numberOfElements) {
            marked[point.index + 1] = true;
        }
    }

    return totalScore;
}
```
```C++ []
#include <span>
#include <ranges>
#include <vector>
using namespace std;

class Solution {

    struct Element {
        int value{};
        size_t index{};

        Element() = default;
        ~Element() = default;

        Element(int value, size_t index) : value{ value }, index{ index } {}
    };

    size_t numberOfElements{};

public:
    long long findScore(const vector<int>& input) {
        numberOfElements = input.size();
        vector<Element> elementsSortedByAscendingValue = createElementsSortedByAscendingValue(input);
        return calculateTotalScore(elementsSortedByAscendingValue);
    }

private:
    vector<Element> createElementsSortedByAscendingValue(span<const int> input) const {
        vector<Element> elements;
        elements.reserve(numberOfElements);
        for (size_t i = 0; i < numberOfElements; ++i) {
            elements.emplace_back(input[i], i);
        }

        const auto compare_minValue_bySameValue_minIndex = [](const Element& x, const Element& y) {
                   return (x.value == y.value) ? (x.index < y.index) : (x.value < y.value);};

        ranges::sort(elements, compare_minValue_bySameValue_minIndex);
        return elements;
    }

    long long calculateTotalScore(span<const Element> elementsSortedByAscendingValue) const {
        vector<bool> marked(numberOfElements);
        long long totalScore = 0;

        for (size_t i = 0; i < numberOfElements; ++i) {
            Element element = elementsSortedByAscendingValue[i];

            if (marked[element.index]) {
                continue;
            }

            totalScore += element.value;
            marked[element.index] = true;

            if (element.index - 1 != variant_npos) {
                marked[element.index - 1] = true;
            }
            if (element.index + 1 < numberOfElements) {
                marked[element.index + 1] = true;
            }
        }

        return totalScore;
    }
};
```
```C# []
using System;

public class Solution
{
    private sealed record Element(int value, int index) { }

    private int numberOfElements;

    public long FindScore(int[] input)
    {
        numberOfElements = input.Length;
        Element[] elementsSortedByAscendingValue = CreateElementsSortedByAscendingValue(input);
        return CalculateTotalScore(elementsSortedByAscendingValue);
    }

    private Element[] CreateElementsSortedByAscendingValue(int[] input)
    {
        Element[] elements = new Element[numberOfElements];
        for (int i = 0; i < numberOfElements; ++i)
        {
            elements[i] = new Element(input[i], i);
        }
        Array.Sort(elements, (x, y) => Compare_minValue_bySameValue_minIndex(x, y));
        return elements;
    }

    private int Compare_minValue_bySameValue_minIndex(Element x, Element y)
    {
        return (x.value == y.value) ? (x.index - y.index) : (x.value - y.value);
    }

    private long CalculateTotalScore(Element[] elementsSortedByAscendingValue)
    {
        bool[] marked = new bool[numberOfElements];
        long totalScore = 0;

        for (int i = 0; i < numberOfElements; ++i)
        {
            Element element = elementsSortedByAscendingValue[i];

            if (marked[element.index])
            {
                continue;
            }

            totalScore += element.value;
            marked[element.index] = true;

            if (element.index - 1 >= 0)
            {
                marked[element.index - 1] = true;
            }
            if (element.index + 1 < numberOfElements)
            {
                marked[element.index + 1] = true;
            }
        }

        return totalScore;
    }
}
```
```Kotlin []
class Solution {

    private data class Element(val value: Int, val index: Int) {}

    private var numberOfElements: Int = 0

    fun findScore(input: IntArray): Long {
        numberOfElements = input.size
        val elementsSortedByAscendingValue: ArrayList<Element> = createElementsSortedByAscendingValue(input)
        return calculateTotalScore(elementsSortedByAscendingValue)
    }

    private fun createElementsSortedByAscendingValue(input: IntArray): ArrayList<Element> {
        val elements = ArrayList<Element>(numberOfElements)
        for (i in 0..<numberOfElements) {
            elements.add(Element(input[i], i))
        }
        elements.sortWith() { x, y -> compare_minValue_bySameValue_minIndex(x, y) }
        return elements
    }

    private fun compare_minValue_bySameValue_minIndex(x: Element, y: Element): Int {
        return if (x.value == y.value) (x.index - y.index) else (x.value - y.value)
    }

    private fun calculateTotalScore(elementsSortedByAscendingValue: ArrayList<Element>): Long {
        val marked = BooleanArray(numberOfElements)
        var totalScore: Long = 0

        for (i in 0..<numberOfElements) {
            val element = elementsSortedByAscendingValue[i]

            if (marked[element.index]) {
                continue
            }

            totalScore += element.value
            marked[element.index] = true

            if (element.index - 1 >= 0) {
                marked[element.index - 1] = true
            }
            if (element.index + 1 < numberOfElements) {
                marked[element.index + 1] = true
            }
        }

        return totalScore
    }
}
```
```Go []

/*
Sort Alternative One
*/

package main

import (
    "fmt"
    "sort"
)

type Element struct {
    value int
    index int
}

var numberOfElements int

func findScore(input []int) int64 {
    numberOfElements = len(input)
    var elementsSortedByAscendingValue []Element = createElementsSortedByAscendingValue(input)
    return calculateTotalScore(elementsSortedByAscendingValue)
}

func createElementsSortedByAscendingValue(input []int) []Element {
    elements := make([]Element, numberOfElements)
    for i := 0; i < numberOfElements; i++ {
        elements[i] = Element{value: input[i], index: i}
    }

    sort.Slice(elements, func(i, j int) bool {
        x := elements[i]
        y := elements[j]
        //  compare_minValue_bySameValue_minIndex
        return Ternary((x.value == y.value), (x.index < y.index), (x.value < y.value))
    })

    return elements
}

func calculateTotalScore(elementsSortedByAscendingValue []Element) int64 {
    marked := make([]bool, numberOfElements)
    var totalScore int64 = 0

    for i := 0; i < numberOfElements; i++ {
        element := elementsSortedByAscendingValue[i]
        if marked[element.index] {
            continue
        }

        totalScore += int64(element.value)
        marked[element.index] = true

        if element.index-1 >= 0 {
            marked[element.index-1] = true
        }
        if element.index+1 < numberOfElements {
            marked[element.index+1] = true
        }
    }

    return totalScore
}

func Ternary[T any](condition bool, first T, second T) T {
    if condition {
        return first
    }
    return second
}
```
```Go []

/*
Sort Alternative Two
*/

package main

import (
    "fmt"
    "sort"
)

type Element struct {
    value int
    index int
}

var numberOfElements int

func findScore(input []int) int64 {
    numberOfElements = len(input)
    var elementsSortedByAscendingValue []Element = createElementsSortedByAscendingValue(input)
    return calculateTotalScore(elementsSortedByAscendingValue)
}

func createElementsSortedByAscendingValue(input []int) []Element {
    elements := make([]Element, numberOfElements)
    for i := 0; i < numberOfElements; i++ {
        elements[i] = Element{value: input[i], index: i}
    }

    sort.Sort(compare_minValue_bySameValue_minIndex(elements))

    return elements
}

type compare_minValue_bySameValue_minIndex []Element

func (c compare_minValue_bySameValue_minIndex) Len() int {
    return len(c)
}
func (c compare_minValue_bySameValue_minIndex) Swap(i, j int) {
    c[i], c[j] = c[j], c[i]
}
func (c compare_minValue_bySameValue_minIndex) Less(i, j int) bool {
    x := c[i]
    y := c[j]
    return Ternary((x.value == y.value), (x.index < y.index), (x.value < y.value))
}

func calculateTotalScore(elementsSortedByAscendingValue []Element) int64 {
    marked := make([]bool, numberOfElements)
    var totalScore int64 = 0

    for i := 0; i < numberOfElements; i++ {
        element := elementsSortedByAscendingValue[i]
        if marked[element.index] {
            continue
        }

        totalScore += int64(element.value)
        marked[element.index] = true

        if element.index-1 >= 0 {
            marked[element.index-1] = true
        }
        if element.index+1 < numberOfElements {
            marked[element.index+1] = true
        }
    }

    return totalScore
}

func Ternary[T any](condition bool, first T, second T) T {
    if condition {
        return first
    }
    return second
}
```