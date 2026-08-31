# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/5435171/](https://leetcode.com/problems/frequency-tracker/solutions/5435171/)

---

```Java []
public class FrequencyTracker {

    private static final int[] VALUES_RANGE = {1, (int) Math.pow(10, 5)};
    private static final int[] FREQUENCY_RANGE = {1, (int) Math.pow(10, 5)};

    private final int[] frequencyOfValues;
    private final int[] frequencyOfFrequencies;

    public FrequencyTracker() {
        frequencyOfValues = new int[VALUES_RANGE[1] + 1];
        frequencyOfFrequencies = new int[FREQUENCY_RANGE[1] + 1];
    }

    public void add(int value) {
        if (frequencyOfValues[value] > 0) {
            --frequencyOfFrequencies[frequencyOfValues[value]];
        }
        ++frequencyOfValues[value];
        ++frequencyOfFrequencies[frequencyOfValues[value]];
    }

    public void deleteOne(int value) {
        if (frequencyOfValues[value] > 0) {
            --frequencyOfFrequencies[frequencyOfValues[value]];
            --frequencyOfValues[value];
        }
        if (frequencyOfValues[value] > 0) {
            ++frequencyOfFrequencies[frequencyOfValues[value]];
        }
    }

    public boolean hasFrequency(int frequency) {
        return frequencyOfFrequencies[frequency] > 0;
    }
}
```
```JavaScript []
class FrequencyTracker {

    constructor() {
        this.VALUES_RANGE = [1, Math.pow(10, 5)];
        this.FREQUENCY_RANGE = [1, Math.pow(10, 5)];

        this.frequencyOfValues = new Array(this.VALUES_RANGE[1] + 1).fill(0);
        this.frequencyOfFrequencies = new Array(this.FREQUENCY_RANGE[1] + 1).fill(0);
    }

    /** 
     * @param {number} value
     * @return {void}
     */
    add(value) {
        if (this.frequencyOfValues[value] > 0) {
            --this.frequencyOfFrequencies[this.frequencyOfValues[value]];
        }
        ++this.frequencyOfValues[value];
        ++this.frequencyOfFrequencies[this.frequencyOfValues[value]];
    }

    /** 
     * @param {number} value
     * @return {void}
     */
    deleteOne(value) {
        if (this.frequencyOfValues[value] > 0) {
            --this.frequencyOfFrequencies[this.frequencyOfValues[value]];
            --this.frequencyOfValues[value];
        }
        if (this.frequencyOfValues[value] > 0) {
            ++this.frequencyOfFrequencies[this.frequencyOfValues[value]];
        }
    }

    /** 
     * @param {number} frequency
     * @return {boolean}
     */
    hasFrequency(frequency) {
        return this.frequencyOfFrequencies[frequency] > 0;
    }
}
```
```TypeScript []
class FrequencyTracker {

    VALUES_RANGE: number[];
    FREQUENCY_RANGE: number[];

    frequencyOfValues: number[];
    frequencyOfFrequencies: number[];

    constructor() {
        this.VALUES_RANGE = [1, Math.pow(10, 5)];
        this.FREQUENCY_RANGE = [1, Math.pow(10, 5)];

        this.frequencyOfValues = new Array(this.VALUES_RANGE[1] + 1).fill(0);
        this.frequencyOfFrequencies = new Array(this.FREQUENCY_RANGE[1] + 1).fill(0);
    }

    add(value: number): void {
        if (this.frequencyOfValues[value] > 0) {
            --this.frequencyOfFrequencies[this.frequencyOfValues[value]];
        }
        ++this.frequencyOfValues[value];
        ++this.frequencyOfFrequencies[this.frequencyOfValues[value]];
    }

    deleteOne(value: number): void {
        if (this.frequencyOfValues[value] > 0) {
            --this.frequencyOfFrequencies[this.frequencyOfValues[value]];
            --this.frequencyOfValues[value];
        }
        if (this.frequencyOfValues[value] > 0) {
            ++this.frequencyOfFrequencies[this.frequencyOfValues[value]];
        }
    }

    hasFrequency(frequency: number): boolean {
        return this.frequencyOfFrequencies[frequency] > 0;
    }
}
```
```C++ []
#include <array>
using namespace std;

/*
since std::pow(base, exp) does not produce compile-time constant
defining utility::tenToPowersOfPositiveN(n) for this purpose
in order to use "constexpr" for the arrays for the ranges
and "template<class T, size_t N> struct array" for the arrays for the frequencies.
*/
namespace utility {
    consteval int tenToPowersOfPositiveN(int n) {
        int value = 10;
        while (n-- > 0) { value *= 10; }
        return value;
    }
}

class FrequencyTracker {

    static constexpr array<int, 2> VALUES_RANGE = { 1, utility::tenToPowersOfPositiveN(5) };
    static constexpr array<int, 2> FREQUENCY_RANGE = { 1, utility::tenToPowersOfPositiveN(5) };

    array<int, VALUES_RANGE[1] + 1> frequencyOfValues{};
    array<int, FREQUENCY_RANGE[1] + 1> frequencyOfFrequencies{};

public:
    FrequencyTracker() = default;

    void add(int value) {
        if (frequencyOfValues[value] > 0) {
            --frequencyOfFrequencies[frequencyOfValues[value]];
        }
        ++frequencyOfValues[value];
        ++frequencyOfFrequencies[frequencyOfValues[value]];
    }

    void deleteOne(int value) {
        if (frequencyOfValues[value] > 0) {
            --frequencyOfFrequencies[frequencyOfValues[value]];
            --frequencyOfValues[value];
        }
        if (frequencyOfValues[value] > 0) {
            ++frequencyOfFrequencies[frequencyOfValues[value]];
        }
    }

    bool hasFrequency(int frequency) const {
        return frequencyOfFrequencies[frequency] > 0;
    }
};
```
```C# []
using System;

public class FrequencyTracker
{
    private static readonly int[] VALUES_RANGE = { 1, (int)Math.Pow(10, 5) };
    private static readonly int[] FREQUENCY_RANGE = { 1, (int)Math.Pow(10, 5) };

    private readonly int[] frequencyOfValues;
    private readonly int[] frequencyOfFrequencies;

    public FrequencyTracker()
    {
        frequencyOfValues = new int[VALUES_RANGE[1] + 1];
        frequencyOfFrequencies = new int[FREQUENCY_RANGE[1] + 1];
    }

    public void Add(int value)
    {
        if (frequencyOfValues[value] > 0)
        {
            --frequencyOfFrequencies[frequencyOfValues[value]];
        }
        ++frequencyOfValues[value];
        ++frequencyOfFrequencies[frequencyOfValues[value]];
    }

    public void DeleteOne(int value)
    {
        if (frequencyOfValues[value] > 0)
        {
            --frequencyOfFrequencies[frequencyOfValues[value]];
            --frequencyOfValues[value];
        }
        if (frequencyOfValues[value] > 0)
        {
            ++frequencyOfFrequencies[frequencyOfValues[value]];
        }
    }

    public bool HasFrequency(int frequency)
    {
        return frequencyOfFrequencies[frequency] > 0;
    }
}
```
```Kotlin []
import kotlin.math.pow

class FrequencyTracker() {

    private companion object {
        val VALUES_RANGE = intArrayOf(1, (10.0).pow(5.0).toInt())
        val FREQUENCY_RANGE = intArrayOf(1, (10.0).pow(5.0).toInt())
    }

    private val frequencyOfValues = IntArray(VALUES_RANGE[1] + 1)
    private val frequencyOfFrequencies = IntArray(FREQUENCY_RANGE[1] + 1)

    fun add(value: Int) {
        if (frequencyOfValues[value] > 0) {
            --frequencyOfFrequencies[frequencyOfValues[value]]
        }
        ++frequencyOfValues[value]
        ++frequencyOfFrequencies[frequencyOfValues[value]]
    }

    fun deleteOne(value: Int) {
        if (frequencyOfValues[value] > 0) {
            --frequencyOfFrequencies[frequencyOfValues[value]]
            --frequencyOfValues[value]
        }
        if (frequencyOfValues[value] > 0) {
            ++frequencyOfFrequencies[frequencyOfValues[value]]
        }
    }

    fun hasFrequency(frequency: Int): Boolean {
        return frequencyOfFrequencies[frequency] > 0
    }
}
```
```Go []
package main

import (
    "fmt"
    "math"
)

var VALUES_RANGE = [2]int{1, int(math.Pow(10.0, 5.0))}
var FREQUENCY_RANGE = [2]int{1, int(math.Pow(10.0, 5.0))}

type FrequencyTracker struct {
    frequencyOfValues      []int
    frequencyOfFrequencies []int
}

func Constructor() FrequencyTracker {
    return FrequencyTracker{
        frequencyOfValues:      make([]int, VALUES_RANGE[1]+1),
        frequencyOfFrequencies: make([]int, FREQUENCY_RANGE[1]+1),
    }
}

func (this *FrequencyTracker) Add(value int) {
    if this.frequencyOfValues[value] > 0 {
        this.frequencyOfFrequencies[this.frequencyOfValues[value]]--
    }
    this.frequencyOfValues[value]++
    this.frequencyOfFrequencies[this.frequencyOfValues[value]]++
}

func (this *FrequencyTracker) DeleteOne(value int) {
    if this.frequencyOfValues[value] > 0 {
        this.frequencyOfFrequencies[this.frequencyOfValues[value]]--
        this.frequencyOfValues[value]--
    }
    if this.frequencyOfValues[value] > 0 {
        this.frequencyOfFrequencies[this.frequencyOfValues[value]]++
    }
}

func (this *FrequencyTracker) HasFrequency(frequency int) bool {
    return this.frequencyOfFrequencies[frequency] > 0
}
```