# Loopy Solution

**Author:** bmoel
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/4819470/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/4819470/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The thought behind this solution is to take advantage of the fact that the input is limited to a length 4 array of numbers. 

# Approach
<!-- Describe your approach to solving the problem. -->
My thoughts when solving this problem was to break up the responsibility into different functions, and focus on limiting what needs to be computed based on values found. For example, if an invalid hour is found (like 55 for example), then computation for calculting minutes can be skipped. This can be see with the continue statements in the getSolution function.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
At worst, the result will use three for loops. But the length use by these for loops will be 4, 3, and 2 respectively. This means that the maximum number of loops that could happen is 4 * 3 * 2, which is 24 times. This would still be linear time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity is not an issue, since at worst an array would be used with 4 values in it. O(1);

# Code
```
function isValidHour(hour: string): boolean {
    if (hour.length !== 2) {
        console.log('ERROR: invalid hour passed into isValidHour');
        return false;
    }
    const hourAsNum = Number(hour);
    return (hourAsNum >= 0) && (hourAsNum <= 23);
};

function isValidMin(minute: string): boolean {
    if (minute.length !== 2) {
        console.log('ERROR: invalid minute passed into isValidMinute');
        return false;
    }
    const minAsNum = Number(minute);
    return (minAsNum >= 0) && (minAsNum <= 59);
};

function isLater(current: string, newValue: string): boolean {
    if (current === newValue) {
        return false;
    }
    if (current === '' && newValue !== '') {
        return true;
    }
    const currentHour = Number(current.slice(0,2));
    const newHour = Number(newValue.slice(0,2));
    if (newHour > currentHour) {
        return true;
    }
    else if (currentHour > newHour) {
        return false;
    }
    const currentMin = Number(current.slice(3,5));
    const newMin = Number(newValue.slice(3,5));
    return (newMin > currentMin);
};

function getSolution(cur: number, others: number[], currentResult: string): string {
    const othersLen: number = others.length;
    for (let i = 0; i < othersLen; i++) {
        let temp = [...others];
        const hourStr = cur.toString() + others[i].toString();
        if (!isValidHour(hourStr)) {
            continue;
        }
        temp.splice(i,1);
        for (let j = 0; j < 2; j++) {
            let x = 0 + j;
            let y = 1 - j;
            const minStr = temp[x].toString() + temp[y].toString();
            if (!isValidMin(minStr)) {
                continue;
            }
            const localValue = hourStr + ':' + minStr;
            if (isLater(currentResult, localValue)) {
                currentResult = localValue;
            }
        }
    }
    return currentResult;
};

function largestTimeFromDigits(arr: number[]): string {
    const arrLen: number = arr.length;
    let result: string = '';
    for (let i = 0; i < arrLen; i++) {
        let temp = [...arr];
        temp.splice(i,1)
        result = getSolution(arr[i], temp, result);
    }
    return result;
};
```