# Java | JavaScript | C++ Solution.

**Author:** LachezarTsK
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/2724028/](https://leetcode.com/problems/first-unique-number/solutions/2724028/)

---

**Java**
```
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class FirstUnique {

    private static final int NO_UNIQUE_INTEGERS = -1;
    private final Set<Integer> seenValues;
    private final LinkedHashSet<Integer> uniqueValues;

    public FirstUnique(int[] inputIntegers) {
        seenValues = new HashSet<>();
        uniqueValues = new LinkedHashSet<>();

        for (int value : inputIntegers) {
            if (seenValues.add(value)) {
                uniqueValues.add(value);
            } else {
                uniqueValues.remove(value);
            }
        }
    }

    public int showFirstUnique() {
        return !uniqueValues.isEmpty() ? uniqueValues.iterator().next() : NO_UNIQUE_INTEGERS;
    }

    public void add(int value) {
        if (seenValues.add(value)) {
            uniqueValues.add(value);
        } else {
            uniqueValues.remove(value);
        }
    }
}
```
**JavaScript**
```
/*
 JS Set: insertion order is preserved when only unique values are added. 
 developer.mozilla.org
 */
class FirstUnique {

    /**
     * @param {number[]} inputIntegers
     */
    constructor(inputIntegers) {
        this.NO_UNIQUE_INTEGERS = -1;
        this.seenValues = new Set();// Set<number>
        this.uniqueValues = new Set();//Set<number>

        for (let value of inputIntegers) {
            if (!this.seenValues.has(value)) {
                this.seenValues.add(value);
                this.uniqueValues.add(value);
            } else {
                this.uniqueValues.delete(value);
            }
        }
    }

    /**
     * @return {number}
     */
    showFirstUnique() {
        let [firstUnique] = this.uniqueValues;
        return firstUnique !== undefined ? firstUnique : this.NO_UNIQUE_INTEGERS;
    }

    /** 
     * @param {number} value
     * @return {void}
     */
    add(value) {
        if (!this.seenValues.has(value)) {
            this.seenValues.add(value);
            this.uniqueValues.add(value);
        } else {
            this.uniqueValues.delete(value);
        }
    }
}
```
**C++**
```
#include <deque>
#include <vector>
#include <unordered_map>
using namespace std;

class FirstUnique {
    
    inline static const int NO_UNIQUE_INTEGERS = -1;
    unordered_map<int, int> valuesToFrequency;
    deque<int> uniqueValues;//lazy update at calling showFirstUnique()

public:
    explicit FirstUnique(const vector<int>& inputIntegers) {
        for (const auto& value : inputIntegers) {
            ++valuesToFrequency[value];
            if (valuesToFrequency[value] == 1) {
                uniqueValues.push_back(value);
            }
        }
    }

    int showFirstUnique() {
        while (!uniqueValues.empty() && valuesToFrequency[uniqueValues.front()] > 1) {
            uniqueValues.pop_front();
        }
        return !uniqueValues.empty() ? uniqueValues.front() : NO_UNIQUE_INTEGERS;
    }

    void add(int value) {
        ++valuesToFrequency[value];
        if (valuesToFrequency[value] == 1) {
            uniqueValues.push_back(value);
        }
    }
};
```