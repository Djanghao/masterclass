# Unlocking Number Mapping: A LeetCode Solution Like Never Before! 🧠

**Author:** i210844
**Votes:** 8
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5525650/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5525650/)

---

**"Programming is like sex. One mistake and you have to support it for the rest of your life." \u2014 Michael Sinz**

![55nb8c.jpg](./images/0.jpeg)


# Intuition
We need to sort an array of numbers based on their "mapped" values, which are derived from a custom mapping of digits. Each digit of a number is replaced by its mapped digit, and then the resulting number is used for sorting.

# Approach
Mapping Digits \uD83D\uDD22:

- Replace each digit of a number with its corresponding value from the mapping array.
Example: If mapping[9] = 6, digit '9' becomes '6'.

Compute Mapped Values \uD83E\uDDEE:

- For each number in the nums array, compute its mapped value.
- Maintain the original index to preserve relative order for numbers with the same mapped value (stable sorting).

Sort Based on Mapped Values \uD83D\uDCCA:

- Use the mapped values to sort the original numbers.
- Keep track of original indices to maintain stability.

Return Sorted Array \uD83C\uDFC1:

After sorting, construct the result array using the original indices from the sorted mapped values.
# Code
```C++ []
class Solution {
public:
    // Function to get the mapped value of a number based on the given mapping
    int getMappedValue(vector<int>& mapping, int num) {
        int mappedValue = 0;
        int place = 1;
        if (num == 0) {
            return mapping[0];
        }
        while (num > 0) {
            int digit = num % 10;
            mappedValue += (place * mapping[digit]);
            num /= 10;
            place *= 10;
        }
        return mappedValue;
    }

    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {
        vector<int> result;
        vector<pair<int, int>> mappedValuesWithIndex;

        // Create a vector of pairs containing mapped values and their original indices
        for (int i = 0; i < nums.size(); i++) {
            int mappedValue = getMappedValue(mapping, nums[i]);
            mappedValuesWithIndex.push_back({mappedValue, i});
        }

        sort(mappedValuesWithIndex.begin(), mappedValuesWithIndex.end());

        // Construct the result vector based on the sorted mapped values and their original indices
        for (const auto& pair : mappedValuesWithIndex) {
            result.push_back(nums[pair.second]);
        }

        return result;
    }
};
```
```C []
int getMappedValue(int mapping[], int num) {
    int mappedValue = 0;
    int place = 1;
    if (num == 0) {
        return mapping[0];
    }
    while (num > 0) {
        int digit = num % 10;
        mappedValue += (place * mapping[digit]);
        num /= 10;
        place *= 10;
    }
    return mappedValue;
}

int compare(const void *a, const void *b, void *mapping) {
    int num1 = *(const int *)a;
    int num2 = *(const int *)b;
    int mappedValue1 = getMappedValue((int *)mapping, num1);
    int mappedValue2 = getMappedValue((int *)mapping, num2);
    return mappedValue1 - mappedValue2;
}

void sortJumbled(int mapping[], int nums[], int size) {
    qsort_r(nums, size, sizeof(int), compare, mapping);
}
```
```python []
def get_mapped_value(mapping, num):
    mapped_value = 0
    place = 1
    if num == 0:
        return mapping[0]
    while num > 0:
        digit = num % 10
        mapped_value += place * mapping[digit]
        num //= 10
        place *= 10
    return mapped_value

def sort_jumbled(mapping, nums):
    mapped_values_with_index = [(get_mapped_value(mapping, num), index) for index, num in enumerate(nums)]
    mapped_values_with_index.sort()
    result = [nums[index] for _, index in mapped_values_with_index]
    return result
```
```Java []
public class Solution {
    public int getMappedValue(int[] mapping, int num) {
        int mappedValue = 0;
        int place = 1;
        if (num == 0) {
            return mapping[0];
        }
        while (num > 0) {
            int digit = num % 10;
            mappedValue += place * mapping[digit];
            num /= 10;
            place *= 10;
        }
        return mappedValue;
    }

    public int[] sortJumbled(int[] mapping, int[] nums) {
        List<int[]> mappedValuesWithIndex = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            int mappedValue = getMappedValue(mapping, nums[i]);
            mappedValuesWithIndex.add(new int[]{mappedValue, i});
        }

        Collections.sort(mappedValuesWithIndex, Comparator.comparingInt(a -> a[0]));

        int[] result = new int[nums.length];
        for (int i = 0; i < mappedValuesWithIndex.size(); i++) {
            result[i] = nums[mappedValuesWithIndex.get(i)[1]];
        }
        return result;
    }
}

```
```Javascript []
function getMappedValue(mapping, num) {
    let mappedValue = 0;
    let place = 1;
    if (num === 0) {
        return mapping[0];
    }
    while (num > 0) {
        let digit = num % 10;
        mappedValue += place * mapping[digit];
        num = Math.floor(num / 10);
        place *= 10;
    }
    return mappedValue;
}

function sortJumbled(mapping, nums) {
    let mappedValuesWithIndex = nums.map((num, index) => [getMappedValue(mapping, num), index]);
    mappedValuesWithIndex.sort((a, b) => a[0] - b[0]);
    return mappedValuesWithIndex.map(pair => nums[pair[1]]);
}
```
```C# []
public class Solution {
    public int GetMappedValue(int[] mapping, int num) {
        int mappedValue = 0;
        int place = 1;
        if (num == 0) {
            return mapping[0];
        }
        while (num > 0) {
            int digit = num % 10;
            mappedValue += place * mapping[digit];
            num /= 10;
            place *= 10;
        }
        return mappedValue;
    }

    public int[] SortJumbled(int[] mapping, int[] nums) {
        List<(int, int)> mappedValuesWithIndex = new List<(int, int)>();
        for (int i = 0; i < nums.Length; i++) {
            int mappedValue = GetMappedValue(mapping, nums[i]);
            mappedValuesWithIndex.Add((mappedValue, i));
        }

        mappedValuesWithIndex.Sort((a, b) => a.Item1.CompareTo(b.Item1));

        int[] result = new int[nums.Length];
        for (int i = 0; i < mappedValuesWithIndex.Count; i++) {
            result[i] = nums[mappedValuesWithIndex[i].Item2];
        }

        return result;
    }
}

```


