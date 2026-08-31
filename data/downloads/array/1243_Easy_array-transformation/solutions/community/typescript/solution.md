# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-transformation/solutions/5637423/](https://leetcode.com/problems/array-transformation/solutions/5637423/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
public List<Integer> transformArray(int[] arr) {
    int n = arr.length;
    boolean changed = true;

    while (changed) {
        changed = false;
        int[] temp = Arrays.copyOf(arr, n);
        for (int i = 1; i < n - 1; i++) {
            if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
                temp[i]++;
                changed = true;
            } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                temp[i]--;
                changed = true;
            }
        }
        arr = temp;
    }

    List<Integer> result = new ArrayList<>();
    for (int num : arr) {
        result.add(num);
    }

    return result;
}
```
```Javascript []
var transformArray = function(arr) {
    let changed = true;
    
    while (changed) {
        changed = false;
        let temp = arr.slice(); // Create a copy of the array

        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
                temp[i]++;
                changed = true;
            } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                temp[i]--;
                changed = true;
            }
        }
        
        arr = temp; // Update the original array with the modified values
    }
    
    return arr;
};
```
```Typescript []
function transformArray(arr: number[]): number[] {
    let changed = true;

    while (changed) {
        changed = false;
        let temp = arr.slice(); // Create a copy of the array

        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
                temp[i]++;
                changed = true;
            } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                temp[i]--;
                changed = true;
            }
        }

        arr = temp; // Update the original array with the modified values
    }

    return arr;
};
```