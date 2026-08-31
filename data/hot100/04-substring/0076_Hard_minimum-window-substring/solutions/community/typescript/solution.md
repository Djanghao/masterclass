# Sliding window with Map in TS. Video link available

**Author:** ravishankardubey
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/5139308/](https://leetcode.com/problems/minimum-window-substring/solutions/5139308/)

---

# Approach
This is a Sliding window approach, where whenever we have a solution such as `have >= need` that means our current window has sufficient items, then we calculate the `minSubstring`.

For logic building, took help from the below video.
https://youtu.be/jSto0O4AJbM?si=LNnIaERLxmfsfpig

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(m+n)

# Code
```
function minWindow(s: string, t: string): string {
    if(t.length > s.length) {
        return '';
    }

    let minSubstring = '';
    let minLength = s.length;

    const tFreqMap = new Map<string, number>();
    for (let i = 0; i < t.length; i++) {
        tFreqMap.set(t[i], (tFreqMap.get(t[i]) || 0) + 1);
    }

    const need = tFreqMap.size;
    const windowFreqMap = new Map<string, number>();
    let have = 0;

    let i = 0, j = 0;
    while(j <= s.length) {
        if(have >= need) {
            if(tFreqMap.has(s[i])) {
                have -= windowFreqMap.get(s[i]) === tFreqMap.get(s[i]) ? 1 : 0;
                const val = windowFreqMap.get(s[i]) > 1 ? windowFreqMap.get(s[i]) - 1 : 0;
                windowFreqMap.set(s[i], val);
            }
            

            minSubstring = minLength >= (j - i) ? s.substring(i, j) : minSubstring;
            minLength = minSubstring.length;
            i++;
        } else {
            if(tFreqMap.has(s[j])) {
                windowFreqMap.set(s[j], (windowFreqMap.get(s[j]) || 0) + 1);
                have += windowFreqMap.get(s[j]) === tFreqMap.get(s[j]) ? 1 : 0;
            }
            j++;
        }

    }

    return minSubstring;
};
```