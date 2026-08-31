# 💪Excellent performance after an insight

**Author:** wagzap
**Votes:** 1
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3497359/](https://leetcode.com/problems/frequency-tracker/solutions/3497359/)

---

# Intuition
\uD83D\uDD96 We want 3 things to be fast:
- a way to update the frequency of any value (its number of appearances),
- a way to update the number of values with a certain frequency,
- a way to find if there is at least one number with a certain number of appearances.

\uD83D\uDECE Hash maps are ideal for this.
Let's use them for counting the things above!
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Maintain a couple of mappings:
- from each unique value to its frequency
- from each unique frequency to the number of unique values appearing that number of times

Carefully implement the required operations, taking care of specific situations:
- for adding one appearance of a number:
    - remove its previous frequency altogether if it was the only value with that frequency

    - just decrease the number of values having the previous frequency otherwise
- for removing one appearance of a number:
    - do nothing if the number doesn't appear at all
    - remove the number altogether if it only had one appearance
    - just decrease the frequency AND increase the number of values that have $previousFrequency-1$ appearances, otherwise

    - remove its previous frequency altogether if the number was the only value with that frequency
    - just decrease the number of values having the previous frequency otherwise

# Complexity
- Time complexity:
$$\u0398(1)$$ for every operation: ``Add``, ``DeleteOne``, and ``HasFrequency``

- Space complexity:
$$\u0398(1)$$ for every operation: ``Add``, ``DeleteOne``, and ``HasFrequency``
The overall space that's used is $$\u0398(d)+\u0398(k)$$ for d distinct values, having k different frequencies.
Example: Adding these 9 values: [3, 3, 5, 6, 8, 8, 8, 9, 9] leads to:
    - d = 5 distinct values: 3, 5, 6, 8, and 9
    - k = 3 distinct frequencies: 1 (for 5 and 6), 2 (for 3 and 9), and 3 (for 8)

So these take up space proportional to $$d + k = 8 $$

## \uD83D\uDC40 Notes
1. The update of the previous frequency of a value is identical when it is added / removed, so it can be extracted and reused.
1. When the range of values is relatively small, we can use slices instead of maps, but that reduces the generality. So this is better.

# Code
```Go []
type FrequencyTracker struct {
    valuesToFrequencies map[int]int
    frequenciesToValues map[int]int
}

func Constructor() FrequencyTracker {
    return FrequencyTracker {
        valuesToFrequencies: make(map[int]int),
        frequenciesToValues: make(map[int]int),
    }    
}

func (f *FrequencyTracker) Add(number int) {
    appearances := f.valuesToFrequencies[number]
    f.valuesToFrequencies[number] = appearances + 1
    f.frequenciesToValues[appearances + 1]++

    frequencyAppearances := f.frequenciesToValues[appearances]
    if frequencyAppearances == 1  {
        delete(f.frequenciesToValues, appearances)
    } else {
        f.frequenciesToValues[appearances]--
    }
}

func (f *FrequencyTracker) DeleteOne(number int) {
    appearances := f.valuesToFrequencies[number]
    if appearances == 0 {
        return
    }

    if appearances == 1 {
        delete(f.valuesToFrequencies, number)
    } else {
        f.valuesToFrequencies[number] = appearances - 1
        f.frequenciesToValues[appearances - 1]++
    }

    frequencyAppearances := f.frequenciesToValues[appearances]
    if frequencyAppearances == 1 {
        delete(f.frequenciesToValues, appearances)
    } else {
        f.frequenciesToValues[appearances]--
    }
}

func (f *FrequencyTracker) HasFrequency(frequency int) bool {
    return f.frequenciesToValues[frequency] != 0
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(number);
 * obj.DeleteOne(number);
 * param_3 := obj.HasFrequency(frequency);
 */
```